<?php

/**
 * Some rights reserved：it100.net
 * Contact email:admin@it100.net
 */
class IndexAction extends BaseAction {

    private $url;

    function _initialize() {
        parent::_initialize();
        import('Url');
        $this->url = new Url();
    }

    //首页
    public function index() {
        $page = isset($_GET[C("VAR_PAGE")]) ? $_GET[C("VAR_PAGE")] : 1;
        $page = max($page, 1);
        //模板处理
        $tp = explode(".", CONFIG_INDEXTP);
        $template = parseTemplateFile("Index:" . $tp[0]);
        $SEO = seo("", "", AppframeAction::$Cache['Config']['siteinfo'], AppframeAction::$Cache['Config']['sitekeywords']);

        //生成路径
        $urls = $this->url->index($page);
        $GLOBALS['URLRULE'] = $urls['page'];

        //seo分配到模板
        $this->assign("SEO", $SEO);
        
        //把分页分配到模板
        $this->assign(C("VAR_PAGE"), $page);
        $this->display("Index:" . $tp[0]);
    }

    //栏目列表 
    public function lists() {
        //栏目ID
        $catid = I('get.catid', 0, 'intval');
        //分页
        $page = isset($_GET[C("VAR_PAGE")]) ? $_GET[C("VAR_PAGE")] : 1;
        if (!$catid) {
            $this->error("您没有访问该信息的权限！");
        }
        $this->categorys = F("Category");
        //获取栏目数据
        $category = $this->categorys[$catid];
        if (empty($category)) {
            $this->error("该栏目不存在！");
        }
        //栏目扩展配置信息反序列化
        $setting = unserialize($category['setting']);
        //生成静态分页数
        $repagenum = (int) $setting['repagenum'];
        if ($repagenum && !$GLOBALS['dynamicRules']) {
            //设置动态访问规则给page分页使用
            $GLOBALS['Rule_Static_Size'] = $repagenum;
            $GLOBALS['dynamicRules'] = CONFIG_SITEURL_MODEL . "index.php?a=lists&catid={$catid}&page=*";
        }
        //父目录
        $parentdir = $category['parentdir'];
        //目录
        $catdir = $category['catdir'];
        //生成路径
        $category_url = $this->url->category_url($catid, $page);
        //取得URL规则
        $urls = $category_url['page'];

        //生成类型为0的栏目
        if ($type == 0) {
            //栏目首页模板
            $template = $setting['category_template'] ? $setting['category_template'] : 'category';
            //栏目列表页模板
            $template_list = $setting['list_template'] ? $setting['list_template'] : 'list';
            //判断使用模板类型，如果有子栏目使用频道页模板，终极栏目使用的是列表模板
            $template = $category['child'] ? "Category:" . $template : "List:" . $template_list;
            //去除后缀开始
            $tpar = explode(".", $template, 2);
            //去除完后缀的模板
            $template = $tpar[0];
            unset($tpar);
            $GLOBALS['URLRULE'] = $urls;
        }
        //把分页分配到模板
        $this->assign(C("VAR_PAGE"), $page);
        //分配变量到模板 
        $this->assign($category);
        //seo分配到模板
        $seo = seo($catid, $setting['meta_title'], $setting['meta_description'], $setting['meta_keywords']);
        $this->assign("SEO", $seo);
        $this->display($template);
    }

    /**
     * 内容页 
     */
    public function shows() {
        $catid = I('get.catid', 0, 'intval');
        $id = I('get.id', 0, 'intval');
        $page = intval($_GET[C("VAR_PAGE")]);
        $page = max($page, 1);
        if (!$id || !$catid) {
            $this->error("缺少参数！");
        }
        $this->categorys = F("Category");
        //获取当前栏目数据
        $category = $this->categorys[$catid];
        //反序列化栏目配置
        $category['setting'] = unserialize($category['setting']);
        //模型ID
        $this->modelid = $category['modelid'];
        $this->db = ContentModel::getInstance($this->modelid);
        $data = $this->db->relation(true)->where(array("id" => $id, 'status' => 99))->find();
        if (empty($data)) {
            $this->error("该信息不存在！");
        }
        $this->db->dataMerger($data);
        //分页方式
        if (isset($data['paginationtype'])) {
            //分页方式 
            $paginationtype = $data['paginationtype'];
            //自动分页字符数
            $maxcharperpage = (int) $data['maxcharperpage'];
        } else {
            //默认不分页
            $paginationtype = 0;
        }
        //载入字段数据处理类
        if (!file_exists(RUNTIME_PATH . 'content_output.class.php')) {
            $this->error("请更新缓存后再操作！");
        }
        require_cache(RUNTIME_PATH . 'content_output.class.php');
        $content_output = new content_output($this->modelid);
        //获取字段类型处理以后的数据
        $output_data = $content_output->get($data);
        $output_data['id'] = $id;
        $output_data['title'] = strip_tags($output_data['title']);
		$output_data['content'] = $this->formartContent($output_data['content']);

        //SEO
        $seo_keywords = '';
        if (!empty($output_data['keywords'])) {
            $seo_keywords = implode(',', $output_data['keywords']);
        }
        $seo = seo($catid, $output_data['title'], $output_data['description'], $seo_keywords);

        //内容页模板
        $template = $output_data['template'] ? $output_data['template'] : $category['setting']['show_template'];
        //去除模板文件后缀
        $newstempid = explode(".", $template);
        $template = $newstempid[0];
        unset($newstempid);

        //分页处理
        $pages = $titles = '';
        //分页方式 0不分页 1自动分页 2手动分页
        if ($data['paginationtype'] == 1) {
            //自动分页
            if ($maxcharperpage < 10) {
                $maxcharperpage = 500;
            }
            //按字数分割成几页处理开始
            import('Contentpage', APP_PATH . C("APP_GROUP_PATH") . '/Contents/ORG');
            $contentpage = new Contentpage();
            $contentfy = $contentpage->get_data($output_data['content'], $maxcharperpage);
            //自动分页有时会造成返回空，如果返回空，就不分页了
            if (!empty($contentfy)) {
                $output_data['content'] = $contentfy;
            }
        }

        //分配解析后的文章数据到模板 
        $this->assign($output_data);
        //seo分配到模板
        $this->assign("SEO", $seo);
        //栏目ID
        $this->assign("catid", $catid);

        //分页生成处理
        //分页方式 0不分页 1自动分页 2手动分页
        if ($data['paginationtype'] > 0) {
            $urlrules = $this->url->show($data, $page);
            //手动分页
            $CONTENT_POS = strpos($output_data['content'], '[page]');
            if ($CONTENT_POS !== false) {
                $contents = array_filter(explode('[page]', $output_data['content']));
                $pagenumber = count($contents);
                $pages = page($pagenumber, 1, $page, 6, C("VAR_PAGE"), $urlrules['page'], true)->show("default");
                //判断[page]出现的位置是否在第一位 
                if ($CONTENT_POS < 7) {
                    $content = $contents[$page];
                } else {
                    $content = $contents[$page - 1];
                }
                //分页
                $this->assign("pages", $pages);
                $this->assign("content", $content);
            }
        } else {
            $this->assign("content", $this->formartContent($output_data['content']));
        }
        $this->display("Show:" . $template);
    }

	private function formartContent($content){
		//统一字体
        $content = str_replace(array('<br>', '<br/>', 'font-size', 'font-family', 'line-height', 'color: rgb(51, 51, 51); '), array('', '', '', '', '', ''), $content);
        
        import('phpQuery', LIB_PATH . 'PHPQuery', '.php');
        $doc = phpQuery::newDocument($content);

        //统一标题
        /*
        $htemp0 = '<h1 style="border-radius: 5px;white-space: normal; margin: 10px 0px !important; padding: 10px 8px !important; color: rgb(111, 168, 51); border-left: 10px solid rgb(111, 168, 51); background-color: rgb(245, 245, 245); font-family: 微软雅黑, 宋体, 黑体, Arial;"><span style="font-size: 20px;font-weight:bold;">%s</span></h1>';
        $h0List = pq('strong');
        foreach($h0List as $h0) {
            $h0html = pq($h0)->html();
            if($h0html) pq($h0)->replaceWith(sprintf($htemp0, $h0html));
        }*/

        $htemp1 = '<h1 style="border-radius: 5px;white-space: normal; margin: 10px 0px !important; padding: 5px 8px !important; color: rgb(111, 168, 51); border-left: 10px solid rgb(111, 168, 51); background-color: rgb(245, 245, 245); font-family: 微软雅黑, 宋体, 黑体, Arial;"><span style="font-size: 20px;font-weight:bold;">%s</span></h1>';
        $h1List = pq('h1');
        foreach($h1List as $h1) {
            $h1html = pq($h1)->html();
            if($h1html) pq($h1)->replaceWith(sprintf($htemp1, $h1html));
        }

        $htemp2 = '<h2 style="border-radius: 5px;white-space: normal; margin: 10px 0px !important; padding: 10px 8px !important; color: rgb(111, 168, 51); border-left: 20px solid rgb(111, 168, 51); background-color: rgb(245, 245, 245); font-family: 微软雅黑, 宋体, 黑体, Arial;"><span style="font-size: 18px;font-weight:bold;">%s</span></h2>';
        $h2List = pq('h2');
        foreach($h2List as $h2) {
            $h2html = pq($h2)->html();
            if($h2html) pq($h2)->replaceWith(sprintf($htemp2, $h2html));
        }

        $htemp3 = '<h3 style="border-radius: 5px;white-space: normal; margin: 10px 0px !important; padding: 2px 8px !important; color: rgb(111, 168, 51); border-left: 30px solid rgb(111, 168, 51); background-color: rgb(245, 245, 245); font-family: 微软雅黑, 宋体, 黑体, Arial;"><span style="font-size: 16px;font-weight:bold;">%s</span></h3>';
        $h3List = pq('h3');
        foreach($h3List as $h3) {
            $h3html = pq($h3)->html();
            if($h3html) pq($h3)->replaceWith(sprintf($htemp3, $h3html));
        }
        
        $htemp4 = '<h4 style="border-radius: 5px;white-space: normal; margin: 10px 0px !important; padding: 4px 8px !important; color: rgb(111, 168, 51); border-left: 40px solid rgb(111, 168, 51); background-color: rgb(245, 245, 245); font-family: 微软雅黑, 宋体, 黑体, Arial;"><span style="font-size: 15px;font-weight:bold;">%s</span></h4>';
        $h4List = pq('h4');
        foreach($h4List as $h4) {
            $h4html = pq($h4)->html();
            if($h4html) pq($h4)->replaceWith(sprintf($htemp4, $h4html));
        }
        
        //p元素
        $numList = array('一、','二、','三、','四、','五、','六、','七、','八、','九、','十、');
        $pList = pq('p');
        foreach($pList as $p) {
            $phtml = pq($p)->html();
            foreach($numList as $num){
                if(stripos($phtml, $num) !== FALSE) pq($p)->replaceWith(sprintf($htemp1, $phtml));
            }
        }

        $html = $doc->htmlOuter();
        return substr($html, 1);
    }

}