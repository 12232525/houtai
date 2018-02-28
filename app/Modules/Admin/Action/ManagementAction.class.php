<?php

/**
 * 管理员配置管理
 * Some rights reserved：it100.net
 * Contact email:admin@it100.net
 */
class ManagementAction extends AdminbaseAction {

    protected $UserMod;

    function _initialize() {
        parent::_initialize();

        $this->UserMod = D("User");
    }

    /**
     * 管理员列表
     */
    public function manager() {
        $role_id = $this->_get("role_id");
        $UserView = D("UserView");
        if (empty($role_id)) {
            $count = $UserView->count();
            $page = $this->page($count, 20);
            $User = $UserView->limit($page->firstRow . ',' . $page->listRows)->select();
        } else {
            $count = $UserView->where(array("role_id" => $role_id))->count();
            $page = $this->page($count, 20);
            $User = $UserView->limit($page->firstRow . ',' . $page->listRows)->where(array("role_id" => $role_id))->select();
        }
        $this->assign("Userlist", $User);
        $this->assign("Page", $page->show('Admin'));
        $this->display();
    }

    /**
     * 编辑信息
     */
    public function edit() {
        $id = (int) $this->_get("id") == 0 ? (int) $this->_post("id") : (int) $this->_get("id");
        if ($id < 1) {
            $this->error("信息有误！");
        }
        if ($id == 1) {
            $this->error("该帐号不支持非本人修改！");
        }
        //判断是否修改本人，在此方法，不能修改本人相关信息
        if (AppframeAction::$Cache['uid'] == $id) {
            $this->error("操作非法！");
        }
        if (IS_POST) {
            $role_id = (int) $this->_post("role_id");
            $data = $this->UserMod->create();
            if ($data) {
                $r = $this->UserMod->where(array("id" => $data['id']))->getField('id,verify');
                $password = $this->_post("password");
                if (!empty($password)) {
                    $pass = $this->UserMod->encryption($id, $this->_post("password"), $r[$data['id']]);
                    $data = array_merge($data, array("password" => $pass));
                } else {
                    unset($data['password']);
                }
                if ($this->UserMod->save($data) !== false) {
                    M("Role_user")->where(array("user_id" => $id))->save(array("role_id" => $role_id, "user_id" => $id));
                    $jumpUrl = U("Management/manager");
                    $this->success("更新成功！",$jumpUrl);
                } else {
                    $this->error("更新失败！");
                }
            } else {
                $this->error($this->UserMod->getError());
            }
        } else {
            $data = $this->UserMod->where(array("id" => $id))->find();
			
			$departmentTree = $this->getDepartment($data['department_id']);
			$this->assign("departmentTree", $departmentTree);
			
			$positionTree = $this->getPosition($data['position_id']);
			$this->assign("positionTree", $positionTree);
			
            $role = M("Role")->select();
            $this->assign("role", $role);
            $this->assign("data", $data);
            $this->display();
        }
    }

    /**
     * 添加管理员
     */
    public function adminadd() {
        if (IS_POST) {
            $data = $this->UserMod->create();
            if ($data) {
                //生成随机认证码
                $data['verify'] = genRandomString(6);
                //利用认证码和明文密码加密得到加密后的
                $data['password'] = $this->UserMod->encryption(0, $data['password'], $data['verify']);
                $id = $this->UserMod->add($data);
                if ($id) {
                    $this->success("添加管理员成功！",U('Management/manager'));
                } else {
                    $this->error("添加管理员失败！");
                }
            } else {
                $this->error($this->UserMod->getError());
            }
        } else {
			
			$departmentTree = $this->getDepartment();
			$this->assign("departmentTree", $departmentTree);
			
			$positionTree = $this->getPosition();
			$this->assign("positionTree", $positionTree);
			
            $data = M("Role")->select();
            $this->assign("role", $data);
            $this->display();
        }
    }
		
	private function getDepartment($value = ''){
		$dataArr = M('oa_department')->field('id,name,parent_id')->where('status=99')->order('id desc,listorder')->select();
		if(!$dataArr) return '';
		
		foreach ($dataArr as $v) {
            //存入数据方式
			$v['selected'] = $v['id'] == $value ? 'selected' : '';
			$v['parentid'] = $v['parent_id'];
        	$array[] = $v;
        }
		
		//若为树形结构
		import("Tree");
		$tree = new Tree();
		
		$str = "<option value='\$id' \$selected>\$spacer \$name</option>";
        $tree->init($array);
        $select_categorys = $tree->get_tree(0, $str);
        $data .= $select_categorys;
		
		return $data;
	}	
	
	private function getPosition($value = ''){
		$dataArr = M('oa_position')->field('id,name,parent_id')->where('status=99')->order('id desc,listorder')->select();
		if(!$dataArr) return '';
		
		foreach ($dataArr as $v) {
            //存入数据方式
			$v['selected'] = $v['id'] == $value ? 'selected' : '';
			$v['parentid'] = $v['parent_id'];
        	$array[] = $v;
        }
		
		//若为树形结构
		import("Tree");
		$tree = new Tree();
		
		$str = "<option value='\$id' \$selected>\$spacer \$name</option>";
        $tree->init($array);
        $select_categorys = $tree->get_tree(0, $str);
        $data .= $select_categorys;
		
		return $data;
	}		
		
    /**
     * 管理员删除
     */
    public function delete() {
        $id = $this->_get("id");
        if (empty($id)) {
            $this->error("没有指定删除对象！");
        }
        if ((int) $id == 1) {
            $this->error("该管理员不能被删除！");
        }
        if ((int) $id == AppframeAction::$Cache["uid"]) {
            $this->error("你不能删除你自己！");
        }
        if ($this->UserMod->delete($id)) {
            $this->success("删除成功！");
            exit;
        } else {
            $this->error("删除失败！");
        }
    }

}

?>
