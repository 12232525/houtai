<?php

/**
 * 分类管理
 * Some rights reserved：it100.net
 * Contact email:admin@it100.net
 */
class CategoryAction extends AdminbaseAction {

    protected $categorys;
    //模板文件夹
    private $filepath;
    //频道模板路径
    protected $tp_category;
    //列表页模板路径
    protected $tp_list;
    //内容也模板路径
    protected $tp_show;
    //评论模板路径
    protected $tp_comment;

    function _initialize() {
        parent::_initialize();
        //取得当前内容模型模板存放目录
        $this->filepath = TEMPLATE_PATH . (empty(AppframeAction::$Cache["Config"]['theme']) ? "Default" : AppframeAction::$Cache["Config"]['theme']) . DIRECTORY_SEPARATOR . "Contents" . DIRECTORY_SEPARATOR; //
        //取得分类频道模板列表
        $this->tp_category = str_replace($this->filepath . "Category" . DIRECTORY_SEPARATOR, "", glob($this->filepath . "Category" . DIRECTORY_SEPARATOR . 'category*'));
        //取得分类列表模板列表
        $this->tp_list = str_replace($this->filepath . "List" . DIRECTORY_SEPARATOR, "", glob($this->filepath . "List" . DIRECTORY_SEPARATOR . 'list*'));
        //取得内容页模板列表
        $this->tp_show = str_replace($this->filepath . "Show" . DIRECTORY_SEPARATOR, "", glob($this->filepath . "Show" . DIRECTORY_SEPARATOR . 'show*'));
        //取得评论模板列表
        $this->tp_comment = str_replace($this->filepath . "Comment" . DIRECTORY_SEPARATOR, "", glob($this->filepath . "Comment" . DIRECTORY_SEPARATOR . 'comment*'));
        import('Url');
        $this->Url = get_instance_of('Url');
        load("@.iconvfunc");
    }

    //显示分类列表 
    public function index() {
        import('Tree');
        $tree = new Tree();
        $tree->icon = array('&nbsp;&nbsp;&nbsp;│ ', '&nbsp;&nbsp;&nbsp;├─ ', '&nbsp;&nbsp;&nbsp;└─ ');
        $tree->nbsp = '&nbsp;&nbsp;&nbsp;';
        $models = F("ModelType_0");
        $categorys = array();
        //分类数据，可以设置为缓存的方式
        $result = F('Category');
        $siteurl = parse_url(CONFIG_SITEURL);
        $types = array(0 => '内部分类', 1 => 'font color="blue">单网页</font>', 2 => '<font color="red">外部链接</font>');
        if (!empty($result)) {
            foreach ($result as $r) {
                $r['modelname'] = $models[$r['modelid']]['name'];
                $r['str_manage'] = '';

                $r['str_manage'] .= '<a href="' . U("Category/add", array("parentid" => $r['catid'])) . '">添加子分类</a> | ';

                $r['str_manage'] .= '<a href="' . U("Category/edit", array("catid" => $r['catid'])) . '">修改</a> | <a class="J_ajax_del" href="' . U("Category/delete", array("catid" => $r['catid'])) . '">删除</a> | <a href="' . U("Category/categoryshux", array("catid" => $r['catid'])) . '">终极属性转换</a>';
                $r['typename'] = $types[$r['type']];
                $r['display_icon'] = $r['ismenu'] ? '' : ' <img src ="' . AppframeAction::$Cache['Config']['siteurl'] . 'statics/images/icon/gear_disable.png" title="不在导航显示">';

                $r['help'] = '';
                $setting = unserialize($r['setting']);
                if ($r['url']) {
                    $parse_url = parse_url($r['url']);
                    if ($parse_url['host'] != $siteurl['host'] && strpos($r['url'], '/index.php?') === false) {
                        $catdir = $r['catdir'];
                        //如果生成静态，将设置一个指定的静态目录
                        $catdir = '/' . $r['parentdir'] . $catdir;
                        if ($r['type'] == 0 && $setting['ishtml'] && strpos($r['url'], '?') === false) {
                            $r['help'] = '<img src="' . AppframeAction::$Cache['Config']['siteurl'] . 'statics/images/icon/help.png" title="将域名：' . $r['url'] . '&#10;绑定到目录&#10;' . $catdir . '/">';
                        }
                    }
                    $r['url'] = "<a href='" . $r['url'] . "' target='_blank'>访问</a>";
                } else {
                    $r['url'] = "<a href='" . U("Admin/Category/public_cache") . "'><font color='red'>更新缓存</font></a>";
                }
                $categorys[$r['catid']] = $r;
            }
        }
        $str = "<tr>
	<td align='center'><input name='listorders[\$id]' type='text' size='3' value='\$listorder' class='input'></td>
	<td align='center'>\$id</td>
	<td >\$spacer\$catname\$display_icon</td>
	<td>\$typename</td>
	<td>\$modelname</td>
	<td align='center'>\$url</td>
	<td align='center'>\$help</td>
	<td align='center' >\$str_manage</td>
	</tr>";
        $tree->init($categorys);
        $categorydata = $tree->get_tree(0, $str);
        $this->assign("categorys", $categorydata);
        $this->display();
    }

    //添加分类 
    public function add() {
        if (IS_POST) {
            $Category = D("Category");
            //分类类型，空为正常分类，2为外部分类，1为单页(废除)
            $_POST['info']['type'] = intval($_POST['type']);
            //表单令牌
            $_POST['info'][C("TOKEN_NAME")] = $_POST[C("TOKEN_NAME")];
            $setting = $_POST['setting'];

            //设置所属内容模块
            $_POST['info']['module'] = 'content';
            //终极分类设置
            if ($_POST['info']['child'] == "" || $_POST['info']['child'] == "1") {
                //没有该值时，默认为非终极分类
                $_POST['info']['child'] = 1;
            }

            if ((int) $_POST['type'] != 2) {
                //绑定域名
                $_POST['info']['domain'] = $_POST['info']['url'];
            }
            //分类生成静态配置
            if ($setting['ishtml']) {
                $setting['category_ruleid'] = $_POST['category_html_ruleid'];
            } else {
                $setting['category_ruleid'] = $_POST['category_php_ruleid'];
            }

            $_POST['info']['sethtml'] = $setting['ishtml'] ? 1 : 0;

            //内容生成静态配置
            if ($setting['content_ishtml']) {
                $setting['show_ruleid'] = $_POST['show_html_ruleid'];
            } else {
                $setting['show_ruleid'] = $_POST['show_php_ruleid'];
            }

            //判断URL规则是否有设置
            if ((!$setting['category_ruleid'] || !$setting['category_ruleid']) && (int) $_POST['type'] != 2) {
                $this->error("URL规则不能为空！");
            }

            //分类拼音
            $catname = iconv('utf-8', 'gbk', $_POST['info']['catname']);
            $letters = gbk_to_pinyin($catname);
            $_POST['info']['letter'] = strtolower(implode('', $letters));

            $_POST['info']['setting'] = serialize($setting);

            $data = $Category->create($_POST['info']);
            if ($data) {
                $catid = $Category->add($data);
                if ($catid) {
                    $this->assign("jumpUrl", U("Category/index"));
                    $this->cache();
                    //更新附件状态
                    if ($_POST['info']['image']) {
                        //更新附件状态，把相关附件和内容进行管理
                        service("Attachment")->api_update('', 'catid-' . $catid, 1);
                    }
                    //更新角色分类权限
                    $this->update_priv($catid, $_POST['priv_roleid']);
                    //更新会员组权限
                    $this->update_priv($catid, $_POST['priv_groupid'], 0);
                    $this->success("添加成功！");
                } else {
                    $this->error("添加失败！");
                }
            } else {
                $this->error($Category->getError());
            }
        } else {
            $parentid = $this->_get("parentid");
            if (!empty($parentid)) {
                $Category = F("Category");
                $Ca = $Category[$parentid];
                unset($Category);
                if (empty($Ca)) {
                    $this->error("父分类不存在！");
                }
                if ($Ca['child'] == '0') {
                    $this->error("终极分类不能添加子分类！");
                }
                unset($Ca);
            }

            //输出可用模型
            $modelsdata = F("ModelType_0");
            $models = array();
            foreach ($modelsdata as $v) {
                if ($v['disabled'] == 0) {
                    $models[] = $v;
                }
            }
            //分类列表 可以用缓存的方式
            $array = F("Category");
            foreach ($array as $k => $v) {
                if ($v['child'] == '0') {
                    $array[$k]['disabled'] = "disabled";
                } else {
                    $array[$k]['disabled'] = "";
                }
            }

            import('Tree');
            $tree = new Tree();
            $tree->icon = array('&nbsp;&nbsp;&nbsp;│ ', '&nbsp;&nbsp;&nbsp;├─ ', '&nbsp;&nbsp;&nbsp;└─ ');
            $tree->nbsp = '&nbsp;&nbsp;&nbsp;';
            $str = "<option value='\$catid' \$selected \$disabled>\$spacer \$catname</option>";
            $tree->init($array);
            $categorydata = $tree->get_tree(0, $str, $parentid);
            $this->assign("tp_category", $this->tp_category);
            $this->assign("tp_list", $this->tp_list);
            $this->assign("tp_show", $this->tp_show);
            $this->assign("tp_comment", $this->tp_comment);
            $this->assign("category", $categorydata);
            $this->assign("models", $models);

            $type = (int) $this->_get("type");
            import('Form');
            $this->assign("category_php_ruleid", Form::urlrule('content', 'category', 0, "", 'name="category_php_ruleid"'));
            $this->assign("category_html_ruleid", Form::urlrule('content', 'category', 1, "", 'name="category_html_ruleid"'));

            $this->assign("show_php_ruleid", Form::urlrule('content', 'show', 0, "", 'name="show_php_ruleid"'));
            $this->assign("show_html_ruleid", Form::urlrule('content', 'show', 1, "", 'name="show_html_ruleid"'));
            //会员组
            $this->assign("Member_group", F("Member_group"));
            //角色组
            $this->assign("Role_group", M("Role")->order(array("id" => "ASC"))->select());
            if ($type == 2) {
                $this->display("wadd");
            } else {
                $this->display();
            }
        }
    }

    //添加外部链接分类 
    public function wadd() {
        $this->add();
    }

    //编辑分类 
    public function edit() {
        if (IS_POST) {
            $_POST['info'][C("TOKEN_NAME")] = $_POST[C("TOKEN_NAME")];
            $catid = I("post.catid", "", "intval");
            $setting = $_POST['setting'];
            //分类生成静态配置，外部分类无需
            if ($_POST['type'] != 2) {
                if ($setting['ishtml']) {
                    $setting['category_ruleid'] = $_POST['category_html_ruleid'];
                } else {
                    $setting['category_ruleid'] = $_POST['category_php_ruleid'];
                    $_POST['info']['url'] = '';
                }
            }

            //分类生成静态配置
            if ($setting['ishtml']) {
                $setting['category_ruleid'] = $_POST['category_html_ruleid'];
            } else {
                $setting['category_ruleid'] = $_POST['category_php_ruleid'];
            }

            //内容生成静态配置
            if ($setting['content_ishtml']) {
                $setting['show_ruleid'] = $_POST['show_html_ruleid'];
            } else {
                $setting['show_ruleid'] = $_POST['show_php_ruleid'];
            }

            $_POST['info']['sethtml'] = $setting['ishtml'] ? 1 : 0;

            if ((int) $_POST['type'] != 2) {
                //绑定域名
                $_POST['info']['domain'] = $_POST['info']['url'];
            }

            $_POST['info']['setting'] = serialize($setting);
            //设置模块
            $_POST['info']['module'] = 'content';

            // //分类拼音
            $catname = iconv('utf-8', 'gbk', $_POST['info']['catname']);
            $letters = gbk_to_pinyin($catname);
            $_POST['info']['letter'] = strtolower(implode('', $letters));

            $Category = D("Category");
            //去除child属性，防止意外发生，如需改变分类属性，使用属性转换功能
            unset($_POST['info']['child']);

            //判断URL规则是否有设置
            if ((!$setting['category_ruleid'] || !$setting['category_ruleid']) && (int) $_POST['type'] != 2) {
                $this->error("URL规则不能为空！");
            }

            $data = $Category->create($_POST['info']);
            if ($data) {
                if ($Category->where(array("catid" => $catid))->save($data) !== false) {
                    $this->assign("jumpUrl", U("Category/index"));
                    //更新附件状态
                    if ($_POST['info']['image']) {
                        //更新附件状态，把相关附件和内容进行管理
                        service("Attachment")->api_update('', 'catid-' . $catid, 1);
                    }
                    //子分类
                    $arrchildid = $Category->where(array('catid' => $catid))->getField('arrchildid');
                    //当前分类目录路径
                    $catdir = $this->get_parentdir($catid) . $data['catdir'] . "/";
                    //应用权限设置到子分类
                    if ($_POST['priv_child']) {
                        $arrchildid_arr = explode(',', $arrchildid);
                        foreach ($arrchildid_arr as $arr_v) {
                            $this->update_priv($arr_v, $_POST['priv_roleid']);
                            $this->update_priv($arr_v, $_POST['priv_groupid'], 0);
                        }
                    } else {
                        //更新角色分类权限
                        $this->update_priv($catid, $_POST['priv_roleid']);
                        //更新会有组权限
                        $this->update_priv($catid, $_POST['priv_groupid'], 0);
                    }
                    //更新缓存
                    $this->cache();
                    $this->success("更新成功！");
                } else {
                    $this->assign("jumpUrl", U("Category/edit", array("catid" => $catid)));
                    $this->error("更新失败！");
                }
            } else {
                $this->error($Category->getError());
            }
        } else {
            $catid = (int) $this->_get("catid");
            import('Tree');
            $tree = new Tree();
            $tree->icon = array('&nbsp;&nbsp;&nbsp;│ ', '&nbsp;&nbsp;&nbsp;├─ ', '&nbsp;&nbsp;&nbsp;└─ ');
            $tree->nbsp = '&nbsp;&nbsp;&nbsp;';
            $str = "<option value='\$catid' \$selected \$disabled>\$spacer \$catname</option>";
            $array = F("Category");
            foreach ($array as $k => $v) {
                if ($v['child'] == "0") {
                    $array[$k]['disabled'] = "disabled";
                } else {
                    $array[$k]['disabled'] = "";
                }
            }
            $data = $array[$catid];
            $setting = $data['setting'] = unserialize($data['setting']);
            $models = F("ModelType_0");
            $tree->init($array);
            $categorydata = $tree->get_tree(0, $str, $data['parentid']);

            import('Form');
            $this->assign("category_php_ruleid", Form::urlrule('content', 'category', 0, $setting['category_ruleid'], 'name="category_php_ruleid"'));
            $this->assign("category_html_ruleid", Form::urlrule('content', 'category', 1, $setting['category_ruleid'], 'name="category_html_ruleid"'));

            $this->assign("show_php_ruleid", Form::urlrule('content', 'show', 0, $setting['show_ruleid'], 'name="show_php_ruleid"'));
            $this->assign("show_html_ruleid", Form::urlrule('content', 'show', 1, $setting['show_ruleid'], 'name="show_html_ruleid"'));

            $this->assign("tp_category", $this->tp_category);
            $this->assign("tp_list", $this->tp_list);
            $this->assign("tp_show", $this->tp_show);
            $this->assign("tp_comment", $this->tp_comment);
            $this->assign("category", $categorydata);
            $this->assign("models", $models);
            $this->assign("data", $data);
            $this->assign("setting", $setting);
            //会员组
            $this->assign("Member_group", F("Member_group"));
            //角色组
            $this->assign("Role_group", M("Role")->order(array("id" => "ASC"))->select());
            $this->assign("big_menu", array(U("Category/index"), "分类管理"));
            //权限数据
            $this->assign("privs", M("CategoryPriv")->where(array('catid' => $catid))->select());
            if ($data['type'] == 2) {
                $this->display("wedit");
            } else {
                $this->display();
            }
        }
    }

    //删除分类 
    public function delete() {
        $catid = I("get.catid", "", "intval");
        if (!$catid) {
            $this->error("请指定需要删除的分类！");
        }
        if (false == D("Category")->deleteCatid($catid)) {
            $this->error("分类删除失败，错误原因可能是分类下存在信息，无法删除！");
        }
        $this->success("分类删除成功！", U("Category/public_cache"));
    }

    //更新分类缓存并修复
    public function public_cache() {
        $this->repair();
        $this->cache();
        $this->success("缓存更新成功！", U("Category/index"));
    }

    //更新分类缓存
    protected function cache() {
        D("Category")->category_cache();
    }

    //修复分类数据
    protected function repair() {
        $this->categorys = $categorys = array();
        //分类数据
        $categorysdata = M("Category")->select();
        foreach ($categorysdata as $v) {
            $categorys[$v['catid']] = $v;
        }
        unset($categorysdata);
        $this->categorys = $categorys;
        if (is_array($this->categorys)) {
            foreach ($this->categorys as $catid => $cat) {
                //外部分类无需修复
                if ($cat['type'] == 2) {
                    continue;
                }
                //获取父分类ID列表
                $arrparentid = D("Category")->get_arrparentid($catid);
                //分类配置信息反序列化
                $setting = unserialize($cat['setting']);
                //获取子分类ID列表
                $arrchildid = D("Category")->get_arrchildid($catid);
                //检查所有父id 子分类id 等相关数据是否正确，不正确更新
                if ($categorys[$catid]['arrparentid'] != $arrparentid || $categorys[$catid]['arrchildid'] != $arrchildid) {
                    D("Category")->where(array('catid' => $catid))->save(array('arrparentid' => $arrparentid, 'arrchildid' => $arrchildid));
                }
                //获取父分类路径
                $parentdir = $this->get_parentdir($catid);
                //获取分类名称
                $catname = iconv('utf-8', 'gbk', $cat['catname']);
                //返回拼音
                $letters = gbk_to_pinyin($catname);
                $letter = strtolower(implode('', $letters));
                //取得分类相关地址和分页规则
                $category_url = $this->Url->category_url($catid);
                if (false == $category_url) {
                    $this->error("出现错误，请更新缓存后再试！");
                }
                $url = $category_url['url'];
                //更新数据
                $save = array();
                //更新URL
                if ($cat['url'] != $url) {
                    $save['url'] = $url;
                }
                if ($categorys[$catid]['parentdir'] != $parentdir || $categorys[$catid]['letter'] != $letter) {
                    $save['parentdir'] = $parentdir;
                    $save['letter'] = $letter;
                }
                if (count($save) > 0) {
                    D("Category")->where(array('catid' => $catid))->save($save);
                }
            }
        }
        //删除在非正常显示的分类
        foreach ($this->categorys as $catid => $cat) {
            if ($cat['parentid'] != 0 && !isset($this->categorys[$cat['parentid']])) {
                M("Category")->where(array('catid' => $catid))->delete();
            }
        }
        return true;
    }

    /**
     * 获取父分类路径
     * @param  $catid
     */
    private function get_parentdir($catid) {
        return $this->Url->get_categorydir($catid);
    }

    /**
     * 检查目录是否存在 
     * @param type $return_method 显示方式，1 ajax返回
     * @param type $catdir 分类目录
     * @param type $catid 分类id
     * @return boolean
     */
    public function public_check_catdir($return_method = 1, $catdir = '', $catid = 0) {
        $catid = $catid ? $catid : I('get.catid',0,'intval');
        //需要添加的目录
        $catdir = $catdir ? $catdir : I('get.catdir');
        //父ID
        $parentid = I('get.parentid',0,'intval');
        //旧目录
        $old_catdir = I('get.old_catdir');
        $status = D("Category")->checkCatdir($catdir, $catid, $parentid, $old_catdir);
        if ($status == false) {
            //当有信息且时表示目录存在
            if ($return_method) {
                $this->ajaxReturn("", "目录存在！", false);
            } else {
                return false;
            }
        } else {
            if ($return_method) {
                $this->ajaxReturn("", "目录不存在！", true);
            } else {
                return true;
            }
        }
    }

    //分类属性转换  child 字段的转换
    public function categoryshux() {
        $catid = I('get.catid',0,'intval');
        $r = M("Category")->where(array("catid" => $catid))->find();
        if ($r) {
            //分类类型非0，不允许使用属性转换
            if($r['type']){
                $this->error("该分类类型不允许进行属性转换！",U('Category/index'));
            }
            $count = M("Category")->where(array("parentid" => $catid))->count();
            if ($count > 0) {
                $this->error("该分类下已经存在分类，无法转换！");
            } else {
                $Model = F("ModelType_0");
                $Category = F("Category");
                $count = M(ucwords($Model[$Category[$catid]['modelid']]['tablename']))->where(array("catid" => $catid))->count();
                if ($count > 0) {
                    $this->error("该分类下已经存在数据，无法转换！");
                }
                $child = $r['child'] ? 0 : 1;
                $status = D("Category")->where(array("catid" => $catid))->save(array("child" => $child));
                if ($status !== false) {
                    $this->repair();
                    $this->cache();
                    $this->success("分类属性转换成功！");
                } else {
                    $this->error("分类属性转换失败！");
                }
            }
        } else {
            $this->error("分类不存在！");
        }
    }

    //分类排序 
    public function listorder() {
        if (IS_POST) {
            $Category = M("Category");
            foreach ($_POST['listorders'] as $id => $listorder) {
                $Category->where(array('catid' => $id))->save(array('listorder' => $listorder));
            }
            $this->cache();
            $this->success("排序更新成功！");
        } else {
            $this->error("信息提交有误！");
        }
    }

    /**
     * 更新权限
     * @param  $catid 分类ID
     * @param  $priv_datas
     * @param  $is_admin 1为管理员
     */
    private function update_priv($catid, $priv_datas, $is_admin = 1) {
        D("Category_priv")->update_priv($catid, $priv_datas, $is_admin);
    }

    /**
     * 检查分类权限
     * @param $privs 权限数据
     * @param $action 动作
     * @param $roleid 角色
     * @param $is_admin 是否为管理组
     */
    public static function check_category_priv($privs, $action, $roleid, $is_admin = 1) {
        return D("Category_priv")->check_category_priv($privs, $action, $roleid, $is_admin);
    }

}