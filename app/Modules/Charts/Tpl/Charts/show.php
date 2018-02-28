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
	        trigger: 'axis'
	    },
	    toolbox: {
	        feature: {
	            dataView: {show: true, readOnly: false},
	            magicType: {show: true, type: ['line', 'bar']},
	            restore: {show: true},
	            saveAsImage: {show: true}
	        }
	    },
	    legend: {
	        data:['总人数','项目组数','问题数','请假数']
	    },
	    xAxis: [
	        {
	            type: 'category',
	            data: [{$month}]
	        }
	    ],
	    yAxis: [
	        {
	            type: 'value',
	            name: '数字',
	            min: 0,
	            max: 100,
	            interval: 10,
	            axisLabel: {
	                formatter: '{value}'
	            }
	        },
	        {
	            type: 'value',
	            name: '',
	            min: 0,
	            max: 100,
	            interval: 10,
	            axisLabel: {
	                formatter: '{value}'
	            }
	        }
	    ],
	    series: [
	        {
	            name:'总人数',
	            type:'bar',
	            data:[{$student}]
	        },
	        {
	            name:'项目组数',
	            type:'bar',
	            data:[{$class}]
	        },
	        {
	            name:'问题数',
	            type:'bar',
	            yAxisIndex: 1,
	            data:[{$issue}]
	        },
	        {
	            name:'请假数',
	            type:'bar',
	            yAxisIndex: 1,
	            data:[{$leave}]
	        }
	    ]
	};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
</script>

</div>

<Admintemplate file="Common/Footer"/>
