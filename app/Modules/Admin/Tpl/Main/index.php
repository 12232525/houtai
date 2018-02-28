<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="utf-8">
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta name="renderer" content="webkit">
    <link rel="shortcut icon" href="/favicon.ico" />
    <!-- Loading Bootstrap -->
    <script src="https://cdn.bootcss.com/jquery/3.2.0/jquery.min.js"></script>
    <link href="{$config_siteurl}statics/addons/bootstrap/v3/css/bootstrap.css" rel="stylesheet">
    <link href="//cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="{$config_siteurl}statics/addons/aui/css/aui.css">
    <link rel="stylesheet" href="{$config_siteurl}statics/addons/aui/css/skins/_all-skins.min.css">
    <!-- HTML5 shim, for IE6-8 support of HTML5 elements. All other JS at the end of file. -->
    <!--[if lt IE 9]>
    <script src="/statics/js/html5shiv.js"></script>
    <script src="/statics/js/respond.min.js"></script>
    <![endif]-->
</head>
<body class="inside-header inside-aside ">
<style type="text/css">
    .colorfff{color:#fff !important;}
    .sm-st {
        background:#fff;
        padding:20px;
        -webkit-border-radius:3px;
        -moz-border-radius:3px;
        border-radius:3px;
        margin-bottom:20px;
        -webkit-box-shadow: 0 1px 0px rgba(0,0,0,0.05);
        box-shadow: 0 1px 0px rgba(0,0,0,0.05);
    }
    .sm-st-icon {
        width:60px;
        height:60px;
        display:inline-block;
        line-height:60px;
        text-align:center;
        font-size:30px;
        background:#eee;
        -webkit-border-radius:5px;
        -moz-border-radius:5px;
        border-radius:5px;
        float:left;
        margin-right:10px;
        color:#fff;
    }
    .sm-st-info {
        font-size:12px;
        padding-top:2px;
    }
    .sm-st-info span {
        display:block;
        font-size:24px;
        font-weight:600;
    }
    .orange {
        background:#fa8564 !important;
    }
    .tar {
        background:#45cf95 !important;
    }
    .sm-st .green {
        background:#86ba41 !important;
    }
    .pink {
        background:#AC75F0 !important;
    }
    .yellow-b {
        background: #fdd752 !important;
    }
    .stat-elem {
        background-color: #fff;
        padding: 18px;
        border-radius: 40px;

    }
    .stat-info {
        text-align: center;
        background-color:#fff;
        border-radius: 5px;
        margin-top: -5px;
        padding: 8px;
        -webkit-box-shadow: 0 1px 0px rgba(0,0,0,0.05);
        box-shadow: 0 1px 0px rgba(0,0,0,0.05);
        font-style: italic;
    }
    .stat-icon {
        text-align: center;
        margin-bottom: 5px;
    }
    .st-red {
        background-color: #F05050;
    }
    .st-green {
        background-color: #27C24C;
    }
    .st-violet {
        background-color: #7266ba;
    }
    .st-blue {
        background-color: #23b7e5;
    }
    .stats .stat-icon {
        color: #337ab7;
        display: inline-block;
        font-size: 26px;
        text-align: center;
        vertical-align: middle;
        width: 50px;
        float:left;
    }
    .stat {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline-block;
        margin-right: 10px; }
    .stat .value {
        font-size: 20px;
        line-height: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 500; }
    .stat .name {
        overflow: hidden;
        text-overflow: ellipsis; }
    .stat.lg .value {
        font-size: 26px;
        line-height: 28px; }
    .stat.lg .name {
        font-size: 16px; }
    .stat-col .progress {height:2px;}
    .stat-col .progress-bar {line-height:2px;height:2px;}

    .item {
        padding:30px 0;
    }
    .panel{border: none !important;box-shadow: none !important;-webkit-box-shadow: none !important;}
</style>
<div class="panel panel-default panel-intro">
    <div class="panel-heading" style="display: none;">
        <ul class="nav nav-tabs">
            <li class="active"><a href="#one" data-toggle="tab">控制台</a></li>
            <li><a href="#two" data-toggle="tab">自定义</a></li>
        </ul>
    </div>
    <div class="panel-body">
        <div id="myTabContent" class="tab-content">
            <div class="tab-pane fade active in" id="one">

                <div class="row">
                    <div class="col-sm-3 col-xs-6">
                        <div class="sm-st clearfix">
                            <span class="sm-st-icon st-red"><i class="fa fa-users"></i></span>
                            <div class="sm-st-info">
                                <span>176281</span>
                                总会员数
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 col-xs-6">
                        <div class="sm-st clearfix">
                            <span class="sm-st-icon st-violet"><i class="fa fa-book"></i></span>
                            <div class="sm-st-info">
                                <span>632814</span>
                                总访问数
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 col-xs-6">
                        <div class="sm-st clearfix">
                            <span class="sm-st-icon st-blue"><i class="fa fa-shopping-bag"></i></span>
                            <div class="sm-st-info">
                                <span>79641</span>
                                总订单数
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 col-xs-6">
                        <div class="sm-st clearfix">
                            <span class="sm-st-icon st-green"><i class="fa fa-cny"></i></span>
                            <div class="sm-st-info">
                                <span>174800</span>
                                总金额
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-8">
                        <div id="echart" style="height:220px;width:100%;"></div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card sameheight-item stats">
                            <div class="card-block">
                                <div class="row row-sm stats-container">
                                    <div class="col-xs-6 stat-col">
                                        <div class="stat-icon"> <i class="fa fa-rocket"></i> </div>
                                        <div class="stat">
                                            <div class="value"> 455 </div>
                                            <div class="name"> 今日注册 </div>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: 30%"></div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 stat-col">
                                        <div class="stat-icon"> <i class="fa fa-shopping-cart"></i> </div>
                                        <div class="stat">
                                            <div class="value"> 352 </div>
                                            <div class="name"> 今日登录 </div>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: 25%"></div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6  stat-col">
                                        <div class="stat-icon"> <i class="fa fa-line-chart"></i> </div>
                                        <div class="stat">
                                            <div class="value"> 3221 </div>
                                            <div class="name"> 今日订单 </div>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: 25%"></div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6  stat-col">
                                        <div class="stat-icon"> <i class="fa fa-users"></i> </div>
                                        <div class="stat">
                                            <div class="value"> 421 </div>
                                            <div class="name"> 未处理订单 </div>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: 25%"></div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6  stat-col">
                                        <div class="stat-icon"> <i class="fa fa-list-alt"></i> </div>
                                        <div class="stat">
                                            <div class="value"> 80% </div>
                                            <div class="name"> 七日新增 </div>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: 25%"></div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 stat-col">
                                        <div class="stat-icon"> <i class="fa fa-dollar"></i> </div>
                                        <div class="stat">
                                            <div class="value"> 32% </div>
                                            <div class="name"> 七日活跃 </div>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: 25%"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row" style="margin-top:15px;">
                    <div class="col-lg-12">
                    </div>
                    <div class="col-xs-6 col-md-3">
                        <div class="panel bg-blue">
                            <div class="panel-body" style="padding:20px;">
                                <div class="panel-title">
                                    <span class="label label-success pull-right">实时</span>
                                    <h5>分类统计</h5>
                                </div>
                                <div class="panel-content">
                                    <h1 class="no-margins">5617</h1>
                                    <div class="stat-percent font-bold text-gray"><i class="fa fa-commenting colorfff"></i> 234</div>
                                    <small>当前分类总记录数</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-md-3">
                        <div class="panel bg-aqua-gradient">
                            <div class="panel-body" style="padding:20px;">
                                <div class="panel-title">
                                    <span class="label label-info pull-right">实时</span>
                                    <h5>附件统计</h5>
                                </div>
                                <div class="panel-content">
                                    <h1 class="no-margins">3416</h1>
                                    <div class="stat-percent font-bold text-gray"><i class="fa fa-modx colorfff"></i> 2592</div>
                                    <small>当前上传的附件数量</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <div class="panel bg-purple-gradient">
                            <div class="panel-body">
                                <div class="panel-title">
                                    <span class="label label-primary pull-right">实时</span>
                                    <h5>文章统计</h5>
                                </div>
                                <div class="panel-content">
                                    <div class="pull-left">
                                        <h1 class="no-margins">3134</h1>
                                        <div class="font-bold text-navy"><i class="fa fa-commenting colorfff"></i> <small class="colorfff">评论次数</small></div>
                                    </div>
                                    <div class="pull-right">
                                        <h1 class="no-margins">4271</h1>
                                        <div class="font-bold text-navy"><i class="fa fa-heart colorfff"></i> <small class="colorfff">点赞次数</small></div>
                                    </div>
                                    <div class="clearfix"></div>
                                    <small>当前文章评论和点赞总记录数</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <div class="panel bg-green-gradient">
                            <div class="panel-body">
                                <div class="panel-title">
                                    <span class="label label-primary pull-right">实时</span>
                                    <h5>新闻统计</h5>
                                </div>
                                <div class="panel-content">
                                    <div class="pull-left">
                                        <h1 class="no-margins">1972</h1>
                                        <div class="font-bold text-navy"><i class="fa fa-commenting colorfff"></i> <small class="colorfff">评论次数</small></div>
                                    </div>
                                    <div class="pull-right">
                                        <h1 class="no-margins">5324</h1>
                                        <div class="font-bold text-navy"><i class="fa fa-heart colorfff"></i> <small class="colorfff">点赞次数</small></div>
                                    </div>
                                    <div class="clearfix"></div>
                                    <small>当前新闻评论和点赞总记录数</small>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col-lg-4">
                        <div class="box box-danger">
                            <div class="box-header">
                                <h3 class="box-title">最新新闻</h3>
                                <div class="box-tools pull-right">
                                    <a href="javascript:void(0)" target="_blank" class="btn btn-box-tool">更多</a>
                                </div>
                            </div>
                            <div class="box-body" id="news-list">

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="box box-success">
                            <div class="box-header">
                                <h3 class="box-title">最新发贴</h3>
                                <div class="box-tools pull-right">
                                    <a href="javascript:void(0)" class="btn btn-box-tool">更多</a>
                                </div>
                            </div>
                            <div class="box-body" id="discussion-list">

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="box box-info">
                            <div class="box-header"><h3 class="box-title">服务器信息</h3></div>
                            <div class="box-body">
                                <table class="table table-striped">
                                    <tbody>
                                        <volist name="server_info" id="vo">
                                        <tr>
                                            <td width="200px">{$key}</td>
                                            <td>{$vo}</td>
                                        </tr>
                                        </volist>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="two">
                <div class="row">
                    <div class="col-xs-12">
                        UTC
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script id="newstpl" type="text/html">
    <ul class="nav nav-stacked">
        <%for(var i=0;i < news.length;i++){%>
        <%var item=news[i];%>
        <li>
            <a href="<%=item.url%>" target="_blank">
                <span class="text"><%=item.title%></span>
                <span class="pull-right"><%=item.updatetime_format%></span>
            </a>
        </li>
        <%}%>
    </ul>
</script>
<script id="discussiontpl" type="text/html">
    <ul class="products-list product-list-in-box">
        <%for(var i=0;i < news.length;i++){%>
        <%var item=news[i];%>
        <li class="item">
            <div class="">
                <a href="<%=item.url%>" target="_blank" class="product-title"><%=item.title%>
                    <span class="label label-warning pull-right"><%=item.views%></span>
                </a>
            </div>
        </li>
        <%}%>
    </ul>
</script>
<script src="/statics/addons/templatejs/template.js"></script>
<script type="text/javascript">
    $.ajax({
        url: "{:U('Contents/Contents/ajaxClassList', array('modid'=>1))}",
        type: 'get',
        dataType: 'json',
        success: function (ret) {
            var tpl = document.getElementById('newstpl').innerHTML;
            $("#news-list").html(template(tpl, {news: ret.list}));
        }
    });
    $.ajax({
        url: "{:U('Contents/Contents/ajaxClassList', array('modid'=>1))}",
        type: 'get',
        dataType: 'json',
        success: function (ret) {
            var tpl = document.getElementById('discussiontpl').innerHTML;
            $("#discussion-list").html(template(tpl, {news: ret.list}));
        }
    });
</script>
<script src="/statics/addons/echarts/echarts.min.js"></script>
<script src="/statics/addons/echarts/theme/walden.js"></script>
<script>
    var Orderdata = {
        column: ["2017-09-29","2017-09-30","2017-10-01","2017-10-02","2017-10-03","2017-10-04","2017-10-05"],
        paydata: [52,2,59,23,73,12,26],
        createdata: [57,76,78,42,196,199,74],
    };

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart'), 'walden');

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '',
            subtext: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Sales', 'Orders']
        },
        toolbox: {
            show: false,
            feature: {
                magicType: {show: true, type: ['stack', 'tiled']},
                saveAsImage: {show: true}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: Orderdata.column
        },
        yAxis: {

        },
        grid: [{
            left: 'left',
            top: 'top',
            right: '10',
            bottom: 30
        }],
        series: [{
            name: 'Sales',
            type: 'line',
            smooth: true,
            areaStyle: {
                normal: {
                }
            },
            lineStyle: {
                normal: {
                    width: 1.5
                }
            },
            data: Orderdata.paydata
        },
        {
            name: 'Orders',
            type: 'line',
            smooth: true,
            areaStyle: {
                normal: {
                }
            },
            lineStyle: {
                normal: {
                    width: 1.5
                }
            },
            data: Orderdata.createdata
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    //动态添加数据，可以通过Ajax获取数据然后填充
    setInterval(function () {
        Orderdata.column.push((new Date()).toLocaleTimeString().replace(/^\D*/, ''));
        var amount = Math.floor(Math.random() * 200) + 20;
        Orderdata.createdata.push(amount);
        Orderdata.paydata.push(Math.floor(Math.random() * amount) + 1);

        //按自己需求可以取消这个限制
        if (Orderdata.column.length >= 20) {
            //移除最开始的一条数据
            Orderdata.column.shift();
            Orderdata.paydata.shift();
            Orderdata.createdata.shift();
        }
        myChart.setOption({
            xAxis: {
                data: Orderdata.column
            },
            series: [{
                name: 'Sales',
                data: Orderdata.paydata
            },
            {
                name: 'Orders',
                data: Orderdata.createdata
            }]
        });
    }, 2000);
    $(window).resize(function () {
        myChart.resize();
    });
</script>
</body>
</html>