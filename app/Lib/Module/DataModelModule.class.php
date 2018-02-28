<?php
/**
 * 数据模型业务逻辑
 */
class DataModelModule{
	
	//当前模型ID
	protected $modelid = null;
	
	public function getModelInfo($p_modelid){
		$this->modelid = $p_modelid;
		
		$modInfo = M('model')->where(array('modelid'=>$this->modelid))->find();
		
		return $modInfo;
	}
	
	
}
