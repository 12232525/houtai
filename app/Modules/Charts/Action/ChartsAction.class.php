<?php
/**
 * 图表
 */
class ChartsAction extends AdminbaseAction {
	
	//模型缓存
    protected $model = array();

	public function _initialize() {
		parent :: _initialize();
		$this->model = new Model();
	}
	
	public function show(){
		$year = date('Y', time());
		
		$year = '2016';
		//$csql = 'select count(*) as count,month(start_time) as month from ' . C('DB_PREFIX') . 'edu_class where status = 99 AND year(start_time)='.$year.' group by month';
		//$classResult = $this->model->query($csql);
		
		$month = array(1=>"'1月'",2=>"'2月'",3=>"'3月'",4=>"'4月'",5=>"'5月'",6=>"'6月'",7=>"'7月'",8=>"'8月'",9=>"'9月'",10=>"'10月'",11=>"'11月'",12=>"'12月'");
		$this->assign('month', implode(',', $month));
		
		$chartClass = $this->getClassCharts($month, $year);
		$this->assign('class', implode(',', $chartClass));
		
		$chartStudent = $this->getStudentCharts($month, $year);
		$this->assign('student', implode(',', $chartStudent));
		
		$chartIssue = $this->getIssueCharts($month, $year);
		$this->assign('issue', implode(',', $chartIssue));
		
		$chartLeave = $this->getLeaveCharts($month, $year);
		$this->assign('leave', implode(',', $chartLeave));
		
		$this->display();
	}
	
	//学历+专业
	public function educat(){
		//学历
		$educat = array(7=>"'硕士'", 6=>"'研究生'", 1=>"'本科'", 2=>"'大专'", 3=>"'中专'", 4=>"'高中'", 5=>"'小学'");
		$eduValues = $this->getCommonChartsForStudent('educational', $educat);
		sort($eduValues);
		
		$this->assign('eduVal', json_encode($eduValues));
		$this->assign('educat', implode(',', $educat));
		
		//专业
		$majorList = $this->getMajorChartsForStudent();
		$this->assign('majorVal', json_encode($majorList['values']));
		$this->assign('majorCat', json_encode($majorList['cat']));
		
		$this->display();
	}
	
	//性别+年龄
	public function age(){
		//年龄
		$ageList = $this->getAgeChartsForStudent();
		$this->assign('ageVal', json_encode($ageList['values']));
		$this->assign('ageCat', json_encode($ageList['cat']));
		
		//性别
		$sexcat = array(1=>'男', 2=>'女', 3=>'未知');
		$sexValues = $this->getCommonChartsForStudent('sex', $sexcat);
		sort($sexValues);
		
		$this->assign('sexVal', json_encode($sexValues));
		
		$this->display();
	}
	
	//专业
	private function getMajorChartsForStudent(){
		$sql = 'select count(*) as count,major as major from app_edu_student where status = 99 group by major';
		$result = $this->model->query($sql);
		
		$cat = $values = array();
		foreach($result as $k => $val){
			if(strpos($val['major'], '计算机') !== FALSE) {
				$i = array_search('计算机科学与技术', $cat);
				$i = $i === FALSE ? $k : $i;
				$values[$i]['value'] += $val['count'];
				$values[$i]['name'] = '计算机科学与技术';
				$cat[$i] = '计算机科学与技术';
			}else{
				$values[$k]['value'] = $val['count'];
				$values[$k]['name'] = $val['major'];
				$cat[] = $val['major'];
			}
		}
		
		sort($values);
		
		return array('cat'=>$cat, 'values'=>$values);
	}
	
	private function getAgeChartsForStudent(){
		$sql = 'select count(*) as count,year(birthday) as year  from app_edu_student where status = 99 group by year(birthday)';
		$result = $this->model->query($sql);
		
		$cat = $values = array();
		foreach($result as $k => $val){
			$values[$k]['value'] = $val['count'];
			$values[$k]['name'] = $val['year'];
			$cat[] = $val['year'];
		}
		
		return array('cat'=>$cat, 'values'=>$values);
	}
	
	private function getCommonChartsForStudent($column, $cat){
		$sql = 'select count(*) as count,'.$column.' as gb from ' . C('DB_PREFIX') . 'edu_student where status = 99 group by ' . $column;
		$result = $this->model->query($sql);
		
		$value = array();
		foreach($cat as $k => $v){
			$value[$k]['value'] = 0;
			$value[$k]['name'] = $v;
			if($k == 1) $value[$k]['selected'] = true;
		}
		
		if($result){
			foreach($result as $val){
				$value[$val['gb']]['value'] = $val['count'];
			}
		}
		
		return $value;
	}
	
	private function getClassCharts($month, $year){
		$sql = 'select count(*) as count,month(start_time) as month from ' . C('DB_PREFIX') . 'edu_class where status = 99 AND year(start_time)='.$year.' group by month';
		$result = $this->model->query($sql);
		
		$chart = $List = array();
		if($result){
			foreach($result as $cval){
				$List[$cval['month']] = $cval['count']; 
			}
			
			foreach($month as $key => $v){
				$chart[] = isset($List[$key]) ? $List[$key] : 0;
			}
		}
		
		return $chart;
	}
	
	
	private function getStudentCharts($month, $year){
		$savetime = "FROM_UNIXTIME(savetime)";
		$sql = 'select count(*) as count,month('.$savetime.') as month from ' . C('DB_PREFIX') . 'edu_student where status = 99 AND year('.$savetime.')='.$year.' group by month';
		
		$result = $this->model->query($sql);
		
		$chart = $List = array();
		if($result){
			foreach($result as $cval){
				$List[$cval['month']] = $cval['count']; 
			}
			
			foreach($month as $key => $v){
				$chart[] = isset($List[$key]) ? $List[$key] : 0;
			}
		}
		
		return $chart;
	}

	private function getIssueCharts($month, $year){
		$sql = 'select count(*) as count,month(start_time) as month from ' . C('DB_PREFIX') . 'edu_tea_issue where status = 99 AND year(start_time)='.$year.' group by month';
		$result = $this->model->query($sql);
		
		$chart = $List = array();
		if($result){
			foreach($result as $cval){
				$List[$cval['month']] = $cval['count']; 
			}
			
			foreach($month as $key => $v){
				$chart[] = isset($List[$key]) ? $List[$key] : 0;
			}
		}
		
		return $chart;
	}
	
	private function getLeaveCharts($month, $year){
		$sql = 'select count(*) as count,month(start_time) as month from ' . C('DB_PREFIX') . 'edu_stu_leave where status = 99 AND year(start_time)='.$year.' group by month';
		$result = $this->model->query($sql);
		
		$chart = $List = array();
		if($result){
			foreach($result as $cval){
				$List[$cval['month']] = $cval['count']; 
			}
			
			foreach($month as $key => $v){
				$chart[] = isset($List[$key]) ? $List[$key] : 0;
			}
		}
		
		return $chart;
	}
	
	
}
	
?>