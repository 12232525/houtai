<?php if (!defined('APP_VERSION')) exit(); ?>
<Admintemplate file="Common/Head"/>

<script src="//cdn.bootcss.com/echarts/3.2.3/echarts.min.js"></script>

<body class="J_scroll_fixed">
<div class="wrap J_check_wrap">
	
<Admintemplate file="Common/Nav"/>
<!--   -->	
	
<!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
<div id="main" style="width: 100%;min-height:600px;"></div>

 <script type="text/javascript">
 	
 	$('#main').height($(window).height() - 150);
 
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

	option = {
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        x: 'left',
	        data:[{$agecat}]
	    },
	    series: [
	        {
	            name:'性别分布',
	            type:'pie',
	            selectedMode: 'single',
	            radius: [0, '30%'],
	
	            label: {
	                normal: {
	                    position: 'inner'
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data: {$sexVal}
	        },
	        {
	            name:'年龄分布',
	            type:'pie',
	            radius: ['40%', '55%'],
	            data: {$ageVal}
	        }
	    ]
	};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
</script>

</div>

<Admintemplate file="Common/Footer"/>
