<?php if (!defined('APP_VERSION')) exit(); ?>
<Admintemplate file="Common/Head"/>

<script src="//cdn.bootcss.com/echarts/3.2.3/echarts.min.js"></script>

<body class="J_scroll_fixed">
<div class="wrap J_check_wrap">
	
<Admintemplate file="Common/Nav"/>
<!--   -->	
	
<!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
<div id="main" style="float:left;width: 48%;min-height:600px;"></div>
<div id="main2" style="float:left;width: 48%;min-height:600px;"></div>

 <script type="text/javascript">
 	
 	$('#main').height($(window).height() - 150);
 	$('#main2').height($(window).height() - 150);
 
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
	var myChart2 = echarts.init(document.getElementById('main2'));

	option = {
	    title : {
	        text: '学历分布',
	        subtext: '精确数据',
	        x:'center'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'left',
	        data: [{$educat}]
	    },
	    series : [
	        {
	            name: '学历分布',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:{$eduVal},
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	};


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    
    option2 = {
	    title : {
	        text: '专业分布',
	        subtext: '精确数据',
	        x:'center'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'left',
	        data: [{$majorcat}]
	    },
	    series : [
	        {
	            name: '专业分布',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:{$majorVal},
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	};
	myChart2.setOption(option2);
</script>

</div>

<Admintemplate file="Common/Footer"/>
