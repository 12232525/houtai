<?php
/**
 * 业务统计模块
 */
class StatisticsModule{
	
	public $model; //表模型对象
	public $total; //返回结果
	
	//统计：日，前一日，周, 1:日，2：前一日，3:周，4：日+前一日，5：日+前一日+周
	public function getTotalStatistics($modelid, $type = 1, $title = '', $contentModel = ''){
		
		if($contentModel){
			$this->model = $contentModel;
		}else{
			$this->model = ContentModel::getInstance($modelid);
		} 
		
		switch ($type) {
			case 1:
				$this->getTotalToday($title);
				break;
			case 2:
				$this->getTotalYesterday($title);
				break;
			case 3:
				$this->getTotalWeek($title);
				break;
			case 4:
				$this->getTotalToday($title);
				$this->getTotalYesterday($title);
				break;
			case 5:
				$this->getTotalToday($title);
				$this->getTotalYesterday($title);
				$this->getTotalWeek($title);
				break;
			case 6:
				$this->getTotalToday($title);
				$this->getTotalYesterday($title);
				$this->getTotalWeek($title);
				$this->getTotalYesWeek($title);
				break;	
			default:
				$this->getTotalToday();
				break;
		}
			
		return $this->total;		
	}
	
	//今天 
	public function getTotalToday($title){
		$start = strtotime(date('Y-m-d', time()) . '00:00:00');
		$end   = strtotime(date('Y-m-d', time()) . '23:59:59');
		
		$data = array();
		
		$where = ' savetime >= ' . $start . ' AND savetime <= ' . $end;
		$count = $this->model->where($where)->count();
		
		$data['title'] = '今日：';
		$data['count'] = $count; 
		$data['class'] = 'btn-danger';
 		
		$this->total[] = $data;
	}
	
	//昨天 
	public function getTotalYesterday($title){
		$start = strtotime(date('Y-m-d', strtotime("1 days ago")) . '00:00:00');
		$end   = strtotime(date('Y-m-d', strtotime("1 days ago")) . '23:59:59');
		
		$data = array();
		
		$where = ' savetime >= ' . $start . ' AND savetime <= ' . $end;
		$count = $this->model->where($where)->count();
		
		$data['title'] = '昨日：';
		$data['count'] = $count; 
		$data['class'] = 'btn-warning';
		
		$this->total[] = $data;
	}
	
	
	//一周内 
	public function getTotalWeek($title){
		//当前日期 
		$sdefaultDate = date("Y-m-d"); 
		//$first =1 表示每周星期一为开始日期 0表示每周日为开始日期 
		$first = 1; 
		//获取当前周的第几天 周日是 0 周一到周六是 1 - 6 
		$w = date('w', strtotime($sdefaultDate)); 
		//获取本周开始日期，如果$w是0，则表示周日，减去 6 天 
		$week_start = date('Y-m-d', strtotime("$sdefaultDate -".($w ? $w - $first : 6).' days')); 
		//本周结束日期 
		$week_end = date('Y-m-d', strtotime("$week_start +6 days"));
			
		$start = strtotime(date('Y-m-d', strtotime($week_start)) . '00:00:00');
		$end   = strtotime(date('Y-m-d', strtotime($week_end)) . '23:59:59');
		
		$data = array();
		
		$where = ' savetime >= ' . $start . ' AND savetime <= ' . $end;
		$count = $this->model->where($where)->count();
		
		$data['title'] = '本周：';
		$data['count'] = $count; 
		$data['class'] = 'btn-success';
		
		$this->total[] = $data;
	}
	
	//上周内 
	public function getTotalYesWeek($title){
		$date=date('Y-m-d');  //当前日期

		$first =1 ; //$first =1 表示每周星期一为开始日期 0表示每周日为开始日期
		
		$w = date('w', strtotime($date));  //获取当前周的第几天 周日是 0 周一到周六是 1 - 6 
		
		$now_start = date('Y-m-d', strtotime("$date -".($w ? $w - $first : 6).' days')); //获取本周开始日期，如果$w是0，则表示周日，减去 6 天
		$now_end = date('Y-m-d', strtotime("$now_start +6 days"));  //本周结束日期
		
		$last_start = date('Y-m-d', strtotime("$now_start - 7 days"));  //上周开始日期
		$last_end = date('Y-m-d', strtotime("$now_start - 1 days"));  //上周结束日期
			
		$start = strtotime(date('Y-m-d', strtotime($last_start)) . '00:00:00');
		$end   = strtotime(date('Y-m-d', strtotime($last_end)) . '23:59:59');
		
		$data = array();
		
		$where = ' savetime >= ' . $start . ' AND savetime <= ' . $end;
		$count = $this->model->where($where)->count();
		
		$data['title'] = '上周：';
		$data['count'] = $count; 
		$data['class'] = 'btn-info';
		
		$this->total[] = $data;
	}
	
	
}	
	