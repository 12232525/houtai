<?php
class LinkageAction extends AdminbaseAction {

    //留言模型
    private $db = NULL;
	//配置
    private $configs = array();
	
    protected function _initialize() {
        parent::_initialize();		
        $this->db = D('Linkage');
    }

    //后台首页
    public function index() {
		$where = array('keyid'=>0,'parentid'=>'0');
        $count = $this->db->where($where)->count();
        $page = $this->page($count, 20);
        $data = $this->db->where($where)->limit($page->firstRow . ',' . $page->listRows)->order(array("linkageid" => "DESC"))->select();		
        $this->assign('data', $data);
        $this->assign("Page", $page->show('Admin'));
        $this->display();
    }
	public function public_cache() {
		$linkageid = I('get.linkageid',0,'intval');
		$this->db->_cache($linkageid);
		$this->success('操作成功');
	}

	/**
	 * 菜单排序
	 */
	public function public_listorder() {
		if(!is_array($_POST['listorders'])) return FALSE;
		foreach($_POST['listorders'] as $linkageid=>$value)
		{
			$value = intval($value);
			$this->db->update(array('listorder'=>$value),array('linkageid'=>$linkageid));
		}
		$id = intval($_POST['keyid']);
		showmessage(L('operation_success'),'?m=admin&c=linkage&a=init');
	}
	
	
	/**
	 * 管理联动菜单子菜单cache
	 */
	public function public_manage_submenu() {		
		$keyid  = I('get.keyid',0,'intval');	
		$parentid  = I('get.parentid',0,'intval');
		$parentid = $parentid?$parentid:0;
		if(!$keyid){
			$this->index();exit;
		}
		$where = array('keyid'=>$keyid,'parentid'=>$parentid);		
        $count = $this->db->where($where)->count();
        $page = $this->page($count, 20);
        $data = $this->db->where($where)->limit($page->firstRow . ',' . $page->listRows)->order(array("linkageid" => "DESC"))->select();
		$this->assign('keyid',$keyid);
        $this->assign('parentid',$parentid);
        $this->assign('data', $data);
        $this->assign("Page", $page->show('Admin'));
        $this->display();
	}
	/*字段联动菜单调用*/
	public function public_get_list(){
		$where = array('keyid'=>0);
        $count = $this->db->where($where)->count();
        $page = $this->page($count, 20);
        $data = $this->db->where($where)->limit($page->firstRow . ',' . $page->listRows)->order(array("linkageid" => "DESC"))->select();
		
        $this->assign('data', $data);
        $this->assign("Page", $page->show('Admin'));
        $this->display();
	}
	public function get_all_l($keyid=0){
		$where = array('keyid'=>$keyid);	
		$datas = $this->db->where($where)->field('linkageid as id,parentid,name')->order(array("linkageid" => "DESC"))->select();
		//echo $this->db->getLastsql();
		foreach($datas as $v){
			$_datas[$v['id']]=$v;
		}
		return $_datas;
	}
	//添加
	public function add(){			
		$keyid  = I('get.keyid',0,'intval');
		$parentid  = I('get.parentid',0,'intval');
		$parentid = $parentid?$parentid:0;
		//print_r($arr);
		if($keyid != '0'){			
			$arr = $this->get_all_l($keyid);
			import("Tree");
			$tree = new Tree();
            $tree->icon = array('&nbsp;&nbsp;&nbsp;│ ', '&nbsp;&nbsp;&nbsp;├─ ', '&nbsp;&nbsp;&nbsp;└─ ');
            $tree->nbsp = '&nbsp;&nbsp;&nbsp;';
            $str = "<option value='\$id' \$selected>\$spacer \$name</option>";
            $tree->init($arr);
            $string .= $tree->get_tree(0, $str,$parentid);
		}			
        $this->assign("string", "<option value='0' selected>无（作为一级栏目）</option>".$string);
		if (IS_POST) {
            $post = I('post.'); 
			$post['setting'] = I('post.level');
			$post['siteid'] = '1';
            // 循环添加子菜单
            $nameList=explode("\n", $post['name']);
            foreach ($nameList as $name) {
                $post['name']=$name;
                if (!$this->db->add($post)) {
                    $error = $this->db->getError();
                    $this->error($error ? $error : '添加失败！');
                }
            }
            $this->success('添加成功！', U('index', 'isadmin=1'));            
        }else{
			$this->display();
		}
	}

    //删除
    public function delete() {
        if (IS_POST) {
            $ids = I('post.ids');
        } else {
            $ids = I('get.id', 0, 'intval');
        }
        if (empty($ids)) {
            $this->error('请指定需要联动菜单！');
        }
        if ($this->db->delete($ids)) {
            $this->success('联动菜单删除成功！');
        } else {
            $error = $this->db->getError();
            $this->error($error ? $error : '删除失败！');
        }
    }
	//排序
    public function sort() {
        if (IS_POST) {
            $sort = I('post.sort');
            if (is_array($sort)) {
                foreach ($sort as $gid => $pxid) {
                    $this->db->where(array("linkageid" => $gid))->save(array("listorder" => $pxid));
                }
            }
            $this->success("排序更新成功！");
        } else {
            $this->error("请求方式错误！");
        }
    }
    //修改
    public function edit() {
		$keyid  = I('get.keyid',0,'intval');
		$id  = I('get.id',0,'intval');
		
        $db = $this->db;
        $data = $db->where(array('linkageid'=>$id))->find();
		if($keyid != '0'){			
			$arr = $this->get_all_l($keyid);
			import("Tree");
			$tree = new Tree();
            $tree->icon = array('&nbsp;&nbsp;&nbsp;│ ', '&nbsp;&nbsp;&nbsp;├─ ', '&nbsp;&nbsp;&nbsp;└─ ');
            $tree->nbsp = '&nbsp;&nbsp;&nbsp;';
            $str = "<option value='\$id' \$selected>\$spacer \$name</option>";
            $tree->init($arr);
            $string .= $tree->get_tree(0, $str, $data['parentid']);
		}	
        $this->assign("string", "<option value='0'>无（作为一级栏目）</option>".$string);
	
        if (IS_POST) {
            $linkageid = I('post.linkageid');
            $name = I('post.name');
            $description = I('post.description');
            $style = I('post.style');
			$setting = I('post.level');
            $db->where(array('linkageid' => $linkageid))->save(array('name' => $name,'description'=>$description,'style'=>$style,'setting'=>$setting));
            $this->success('更新成功！');
        } else {
            $this->assign('vo', $data);
            $this->display();
        }
    }


}
