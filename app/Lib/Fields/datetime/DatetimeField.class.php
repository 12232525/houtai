<?php
class DatetimeField {
	
	public $fields;
	
	/**
	 * 返回下拉框的一维数组：id => value
	 */
	public function getInfo($field) {
		
	}

	/**
	 * 用于二维数组中的数据显示输出
	 * @param $fieldList key:字段名，value:字段对应的所有设置内容
	 */
	public function getInfoList(&$data, $fieldList) {
		if (!$data || !$fieldList) return;
		
		$this->fields = $fieldList; 
		
		//目标数组data中选项相对应的所有id值
		$tarColList = array_keys($fieldList);
		
		$columnIdList = array();
		foreach ($data as $dateKey => &$dateVal) {
			foreach ($tarColList as $tk => $tv) {
				if ($dateVal[$tv] == '0000-00-00 00:00:00') $dateVal[$tv] = '';
				else $dateVal[$tv] = $this->formatCurrentYear($dateVal[$tv], $fieldList[$tv]['setting']) . $this->time2Units(strtotime($dateVal[$tv]));
			}
		}
	}
	
	
	function formatCurrentYear($time, $setting){
		$t = date('Y', strtotime($time));
		$y = date('Y', time());
		
		$format = 'Y-m-d H:i';
		$sett_arr = $setting ? unserialize($setting) : '';
		if($sett_arr) $format = $sett_arr['format'];
		
		if($format == 'Y-m-d Ah:i:s') $format = 'Y-m-d H:i:s';
		
		if($t == $y){
			$format = str_replace('Y-', '', $format);
			return date($format, strtotime($time));
		} 
		
		return date($format, strtotime($time));
	}
	
	/**
	 * 时间差计算
	 *
	 * @param Timestamp $time
	 * @return String Time Elapsed
	 */
	function time2Units ($Ctime)
	{
	   $now = time();
	   if($now < $Ctime) return '';
	   	
   	   $time = $now - $Ctime;
	   
	   $year   = floor($time / 60 / 60 / 24 / 365);
	   $time  -= $year * 60 * 60 * 24 * 365;
	   $month  = floor($time / 60 / 60 / 24 / 30);
	   $time  -= $month * 60 * 60 * 24 * 30;
	   $week   = floor($time / 60 / 60 / 24 / 7);
	   $time  -= $week * 60 * 60 * 24 * 7;
	   $day    = floor($time / 60 / 60 / 24);
	   $time  -= $day * 60 * 60 * 24;
	   $hour   = floor($time / 60 / 60);
	   $time  -= $hour * 60 * 60;
	   $minute = floor($time / 60);
	   $time  -= $minute * 60;
	   $second = $time;
	   $elapse = '';
	
	   $unitArr = array('年'  =>'year', '个月'=>'month',  '周'=>'week', '天'=>'day',
	                    '小时'=>'hour', '分钟'=>'minute', '秒'=>'second'
	                    );
	
	   foreach ( $unitArr as $cn => $u )
	   {
			if ( $year > 0 ) {//大于一年显示年月日
				break;
			}
			else if ( $$u > 0 )
			{
				$elapse = $$u . $cn;
				break;
			}
	   }
		
	   if(!$elapse) return ''; 	
	   
	   $weekarray = array("日","一","二","三","四","五","六"); //先定义一个数组
	   
	   return '<br/><span class="labelbd"> '. $elapse . '前，星期' . $weekarray[date("w", $Ctime)] . '</span>';
	}
		
	
}
?>