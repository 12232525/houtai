<?php if (!defined('APP_VERSION')) exit(); ?>
<Admintemplate file="Common/Head"/>

<link href='{$config_siteurl}statics/addons/fullcalendar/chlunar/fullcalendar.css' rel='stylesheet' />
<link href='{$config_siteurl}statics/addons/fullcalendar/chlunar/fullcalendar.print.css' rel='stylesheet' media='print' />
<link href='{$config_siteurl}statics/addons/bootstrap/v2/css/bootstrap.min.css' rel='stylesheet' />
<script src='{$config_siteurl}statics/addons/fullcalendar/chlunar/fullcalendar.js'></script>
<script src='{$config_siteurl}statics/addons/fullcalendar/lib/jquery-ui.custom.min.js'></script>

<script>
/** 当天信息初始化 **/
	$(function(){
		/**
		var dayDate = new Date();
		var d = $.fullCalendar.formatDate(dayDate,"dddd");
		var m = $.fullCalendar.formatDate(dayDate,"yyyy年MM月dd日");
		var lunarDate = lunar(dayDate);
		$(".alm_date").html(m + "&nbsp;" + d);
		$(".today_date").html(dayDate.getDate())
		$("#alm_cnD").html("农历"+ lunarDate.lMonth + "月" + lunarDate.lDate);
		$("#alm_cnY").html(lunarDate.gzYear+"年&nbsp;"+lunarDate.gzMonth+"月&nbsp;"+lunarDate.gzDate+"日");
		$("#alm_cnA").html("【"+lunarDate.animal+"年】");
		var fes = lunarDate.festival();
		if(fes.length>0){
			$(".alm_lunar_date").html($.trim(lunarDate.festival()[0].desc));
			$(".alm_lunar_date").show();
		}else{
			$(".alm_lunar_date").hide();
		}
		*/
	});
	
	$(document).ready(function() {
	
		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();
		
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,basicWeek,basicDay'
			},
			editable: true,
			events: {  
                    url: '/index.php?g=Contents&m=Calendar&a=public_ajaxGetData&id={$id}',  
                    type: 'post'  
            }, 
			dayClick : function(dayDate, allDay, jsEvent, view) { //点击单元格事件		
				/**	
				var d = $.fullCalendar.formatDate(dayDate,"dddd");
				var m = $.fullCalendar.formatDate(dayDate,"yyyy年MM月dd日");
				var lunarDate = lunar(dayDate);
				$(".alm_date").html(m + "&nbsp;" + d);
				$(".today_date").html(dayDate.getDate())
				$("#alm_cnD").html("农历"+ lunarDate.lMonth + "月" + lunarDate.lDate);
				$("#alm_cnY").html(lunarDate.gzYear+"年&nbsp;"+lunarDate.gzMonth+"月&nbsp;"+lunarDate.gzDate+"日");
				$("#alm_cnA").html("【"+lunarDate.animal+"年】");
				var fes = lunarDate.festival();
				if(fes.length>0){
					$(".alm_lunar_date").html($.trim(lunarDate.festival()[0].desc));
					$(".alm_lunar_date").show();
				}else{
					$(".alm_lunar_date").hide();
				}
				// 当天则显示“当天”标识
				var now = new Date();
				if (now.getDate() == dayDate.getDate() && now.getMonth() == dayDate.getMonth() && now.getFullYear() == dayDate.getFullYear()){
					$(".today_icon").show();
				}else{
					$(".today_icon").hide();
				}
				*/
			},
			loading : function(bool) {
				if (bool) $("#msgTopTipWrapper").show();
				else $("#msgTopTipWrapper").fadeOut();
			}
		});
		
	});
	/** 绑定事件到日期下拉框 **/
	$(function(){
		
		$("#fc-dateSelect").delegate("select","change",function(){
			var fcsYear = $("#fcs_date_year").val();
			var fcsMonth = $("#fcs_date_month").val();
			$("#calendar").fullCalendar('gotoDate', fcsYear, fcsMonth);
		});
		
		$('#calendar').on('click', '.fc-event-inner', function(event){
			event.preventDefault();
			event.stopPropagation();
	    	var title = $(this).attr('title');
	    	if(!title) title = $(this).children(':last-child').text();
			layer.alert(title, {
				  icon: 0,
			});
		});
		
	});
</script>
<style>
.dib{display: inline-block;}
.calendarContent .calendarWrapper,#calendar{
	width:99%;
	text-align: center;
}
.calendarWrapper{
	margin-top: 20px;
}
</style>
<body>
<div class="calendarContent">	
	<div class="calendarWrapper">
		<div id="msgTopTipWrapper" style="margin:20px;display:none">
			<div id="msgTopTip">
				<span><i class="fa fa-spinner" aria-hidden="true"></i> 正在载入日历数据...</span>
			</div>
		</div>
		<div id="calendar" class="dib"></div>
	</div>
</div>	

<Admintemplate file="Common/Footer"/>