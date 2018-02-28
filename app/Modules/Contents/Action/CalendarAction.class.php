<?php
/**
 * 日历管理
 * Some rights reserved：it100.net
 * Contact email:admin@it100.net
 */
class CalendarAction extends AdminbaseAction {

    //模型缓存
    protected $model = array();
	//当前模型ID
	private $modelid = null;

    function _initialize() {
    	//模型ID
		$this->modelid = I('request.modid', 0, 'intval');
        parent::_initialize();
	}
	
	public function view(){
		$id = I('get.class_id', 0);
		if(!$id) $this->error('参数错误！');
		$this->assign('id', $id);
		$this->display('Calendar:view');
	}
	
	public function public_ajaxGetData(){
		$class_id = I('get.id', 0);
		if (empty($class_id)) $this->error("项目组不存在！");
		
		//$month = I('get.m', date('m'));
		//$time = date('Y') . $month . '01';			
			
		//$startTime = $this->getCurMonthFirstDay($time);
		//$endTime = $this->getCurMonthLastDay($time);
		
		//显示用户真实姓名
		import('UserModule', LIB_PATH . 'Module');
		$userModule = new UserModule();
		$adminList = $userModule->getUserList();
		
		//进度
		$scheduleList = $this->getTeaScheduleList($class_id, $adminList);
		//问题
		$issueList = $this->getTeaIssueList($class_id, $adminList);
		//请假
		$stuleaveList = $this->getStuleaveList($class_id, $adminList);
		
		$list = array_merge($scheduleList, $issueList, $stuleaveList);
		
		echo json_encode($list);
		exit;
	}

	
	//进度
	private function getTeaScheduleList($class_id, &$adminList){
		$where = "class_id = " . $class_id;
		$scheduleResult = M('edu_tea_schedule')->where($where)->select();
		
		$list = array();		
		if($scheduleResult){
			foreach($scheduleResult as $key => $val){
				$list[$key]['color'] = '#3A87AD';
				$list[$key]['title'] = $adminList[$val['username']]['nickname'] . '：' . $val['name'];
				$list[$key]['desc'] = isset($val['detail']) ? $val['detail'] : $val['description'];
				$list[$key]['start'] = $val['start_time'];
				$list[$key]['end'] = $val['end_time'];
			}
		}
		
		return $list;
	}

	//问题
	private function getTeaIssueList($class_id, &$adminList){
		$where = "class_id = " . $class_id;
		$issueResult = M('edu_tea_issue')->where($where)->select();
		
		$list = array();	
		if($issueResult){
			foreach($issueResult as $k => $v){
				$list[$k]['color'] = '#FF3300';
				$list[$k]['title'] = $adminList[$v['username']]['nickname'] . '：' . $v['name'];
				$list[$k]['desc'] = isset($v['detail']) ? $v['detail'] : $v['description'];
				$list[$k]['start'] = $v['start_time'];
				$list[$k]['end'] = $v['start_time'];
			}
		}
		
		return $list;
	}
	
	//请假
	private function getStuleaveList($class_id, &$adminList){
		$where = "class_id = " . $class_id;
		$result = M('edu_stu_leave')->where($where)->select();
		
		$list = array();		
		if(!$result) return $list;
		
		foreach($result as $k => $v){
			$list[$k]['color'] = '#F1A325';
			$list[$k]['title'] = $adminList[$v['username']]['nickname'] . '：' . $v['name'];
			$list[$k]['desc'] = isset($v['detail']) ? $v['detail'] : $v['description'];
			$list[$k]['start'] = $v['start_time'];
			$list[$k]['end'] = $v['end_time'];
		}
		
		return $list;
	}
	
	function getCurMonthFirstDay($date) {
   	 	return date('Y-m-01', strtotime($date)) . ' 00:00:00';
	}

	function getCurMonthLastDay($date) {
	    return date('Y-m-d', strtotime(date('Y-m-01', strtotime($date)) . ' +1 month -1 day')) . ' 23:59:59';
	}
	
}		
?>