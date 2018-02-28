<?php
/**
 * 处理和user相关的业务逻辑块
 */
class UserModule{
	
	public function getUserList(){
		$userList = array();	
			
		$field = 'id,username,nickname,role_id,status,department_id,position_id';	
		$result = M('user')->field($field)->select();
		if(!$result) return $userList;
		
		foreach($result as $val){
			if($val['username'] == 'admin') $val['nickname'] = '管理员';
			$userList[$val['username']] = $val;
		}
		
		return $userList;		
	}
	
	
}
