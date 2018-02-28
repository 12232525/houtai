<?php
/**
 * 业务权限判断模型逻辑块
 */	
class RbacModule{
	
	public $modelPrivList;  //业务权限集合
	
	/**
	 * 判断是不是超级管理员
	 */
	public function isSuperAdmin(){
		if(session("roleid") == 1) return true;
		return false;
	} 
	
	/**
	 * 得到业务模型数据权限集合
	 */
	public function getModelPrivList(){
		$this->modelPrivList = M('Model_priv')->where('roleid = ' . session("roleid"))->select();
	}
	
	/**
	 * 如果是业务模型的菜单，将会进行权限验证与过滤
	 * @param array $actionList 所有操作权限的集合
	 */
	public function getModuleMenu($actionList){
		if ($this->isSuperAdmin()) return $actionList;
		
		$finalList = array();
		$modelPrivRes = M('Model_priv')->where('roleid = ' . session("roleid"))->select();
		if(!$modelPrivRes) return $finalList;
		
		$modelIdList = array();
		foreach($modelPrivRes as $v){
			$modelIdList[$v['modelid']][$v['action']] = true;
		}
		
		$modelIds = array_keys($modelIdList);
		
		$param = $modelArr = $modelid = '';
		foreach($actionList as $k => $a){
			//判断是不是业务模型菜单项
			if(strtolower($a['app']) == 'contents' && 
				strtolower($a['model']) == 'contentsmodel' && strtolower($a['action']) == 'classlist'){
				
				if(!$a['data']){
					$finalList[] = $a;
					continue;
				}
				
				$param = explode('&', $a['data']);
				
				for($i = 0; $i < count($param); $i++){
					$modelArr = explode('=', $param[$i]);	
					if(strtolower($modelArr[0]) == 'modid'){
						$modelid = $modelArr[1];
						break;						
					} 
				}				
				
				if(in_array($modelid, $modelIds)){
					//模型存在查看权限，移除菜单项
					if($modelIdList[$modelid]['init']){
						$finalList[] = $a;
					}
				}
			}else{
				$finalList[] = $a;
			}
			
		}

		return $finalList;
	} 
	
	
	
	
}
	