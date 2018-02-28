<?php
class Date{
	
	/**
	 * 时间差计算
	 *
	 * @param Timestamp $time
	 * @return String Time Elapsed
	 */
	public function time2Units ($Ctime)
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
	
	
	