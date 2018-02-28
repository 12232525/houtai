<?php
class ModelExportAction extends AdminbaseAction {

	private $db;
	//当前模型ID
	private $modelid = null;

	public function _initialize() {
		parent :: _initialize();
	}

	public function export(){
		//模型ID
		$this->modelid = I('get.modid', 0, 'intval');
		$class_id = I('get.class_id', 0, 'intval');
		
		if($class_id){
			
			import('RenderModelModule', LIB_PATH . 'Module');
			$renderModelModule = new RenderModelModule($this->modelid);
			
			$where['class_id'] = $class_id;
			$where['status'] = 99;
			$data = M('edu_student')->where($where)->select();
			
			$where2['id'] = $class_id;
			$classInfo = M('edu_class')->where($where2)->find();
			
			//$fields = F("Model_field_" . $this->modelid);
			//格式化数据字段中的数据
			$renderModelModule->getRelationColumnData($data);
			$renderModelModule->renderModelStatusTips($data);
			
			//导出excel表格
			$this->exportClassModel($data, $classInfo);
		}
		$this->error('参数错误！');
	}
    
	//导出订单
    private function exportClassModel(&$list, $classInfo){
		$data = $columnList = array();
		
		import('DataModelModule', LIB_PATH . 'Module');
		$dataModelModule = new DataModelModule();
		
		$modInfo = $dataModelModule->getModelInfo($this->modelid);
		$classInfo['start_time'] = date('Y-m-d', strtotime($classInfo['start_time']));
		$prefix = $title = 'PHP' . $classInfo['name'] . '('  . $classInfo['start_time'] . ')' .  $modInfo['description'] . '明细表';
		
		$data['prefix'] = $prefix;
		$data['title']  = $title;
		$data['description'] = $modInfo['description'];
		
		//列名数组		
		$columnList['serial_num'] 	= '序号';
		$columnList['name'] 		= '姓名';
		$columnList['status_tips']  = '状态';
		$columnList['mobile'] 		= '常用手机';
		$columnList['qq'] 			= 'QQ';
		$columnList['sex'] 			= '性别';
		$columnList['birthday'] 	= '出生年月';
		$columnList['school'] 		= '毕业院校';
		$columnList['educational']  = '学历';
		$columnList['major'] 		= '专业';
		$columnList['jobdesc'] 		= '工作经验';
		$columnList['description']  = '情况说明';
		
		$data['column'] = $columnList;
		$data['start']  = 3;  //数据开始显示的行数，3：表示从第3行开始显示数据
		
		import('ExportModule', LIB_PATH . 'Module');
		$exportModule = new ExportModule();
		$exportModule->exportExcel($list, $data);
    }
    
   
	
}