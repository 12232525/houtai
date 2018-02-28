<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>系统后台 - {$Config.sitename} - by AppCMS</title>
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <link href="{$config_siteurl}statics/js/artDialog/skins/default.css" rel="stylesheet" />	
  <link rel="stylesheet" href="{$config_siteurl}statics/addons/bootstrap/v3/css/bootstrap.min.css">
  <link href="//cdn.bootcss.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
  <link rel="stylesheet" href="{$config_siteurl}statics/addons/aui/css/aui.css">
  <link rel="stylesheet" href="{$config_siteurl}statics/addons/aui/css/skins/_all-skins.min.css">
  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="/statics/js/html5shiv.js"></script>
  <script src="/statics/js/respond.min.js"></script>
  <![endif]-->
  <style type="text/css">
  body{overflow-y: hidden}
  .ml10{margin-left: 10px;}
  .sidebar-menu .treeview-menu > li{
  	margin-left: 20px;
  }
	.tabA{
		position:relative;
		height:26px;
	}
	.tabA ul {
		line-height: 26px;
		height: 26px;
		overflow: hidden;
		width:10000px;
		border-right: 1px solid #F9F9F9;
		list-style: outside none none;
		margin: 0 20px;
		padding:0;
	}
	.tabA li {
		float: left;
		font-size: 12px;
	}
	.tabA li span {
		display: block;
		line-height: 26px;
		height: 26px;
		padding: 0 5px 0 10px;
		float: left;
		white-space: nowrap;
		cursor: pointer;
		border-radius: 24px;
	}
	.tabA li span:hover {
	}
	.tabA li a {
		outline: none;
		float: left;
		font-style: normal;
		color: #666;
		padding-right: 8px;
	}
	.tabA li a:hover {
		color: #000;
	}
	.tabA li:focus{
	}
	.tabA li.current .del {
	}
	.tabA li.current .del:hover {
	}
	.tabA li.current{
		border-color:#11629A;
	}
	.tabA li.current span {
		background:#0f6099;
	}
	.tabA li.current a,
	.tabA li.current a:hover{
		font-weight: 100;
		color: #fff;
	}
	.tabA .fr {
		margin-top: 10px;
	}
	.tabA_pre,
	.tabA_next,
	.tabA_pre_old,
	.tabA_next_old {
		width: 20px;
		height: 20px;
		display: block;
		overflow: hidden;
		position:absolute;
	}
	.tabA_pre {
		left:0;
		top:3px;
	}
	.tabA_next {
		right:20px;
		top:3px;
	}
	.tabA_pre_old {
		left:0;
		top:3px;
	}
	.tabA_next_old {
		right:0;
		top:3px;
	}
	.content .loading{
		border: 1px solid #eee;
    border-radius: 5px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
    padding: 10px;
    position: fixed;
    z-index: 1000;
    background:#f9f9f9;
	}
  </style>
</head>
<body class="hold-transition skin-blue sidebar-mini">
<!-- Site wrapper -->
<div class="wrapper">

  <header class="main-header">
    <!-- Logo -->
    <a href="javascript:;" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>花骨朵</b>平台</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>花骨朵</b>平台</span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <button type="button" class="navbar-toggle pull-left" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="true">
        <i class="fa fa-bars"></i>
      </button>
      
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>
      
      <div class="collapse navbar-collapse pull-left" id="navbar-collapse">
          <ul class="nav navbar-nav" id="J_B_main_block">
          </ul>
      </div>

      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- Messages: style can be found in dropdown.less-->
          <li class="">
            <a href="javascript:;" class="refresh mr10 " id="J_refresh" title="刷新"><i class="fa fa-refresh" aria-hidden="true"></i></a> 
      		</li>
          <li class="dropdown messages-menu"  style="display: none">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-envelope-o"></i>
              <span class="label label-success">4</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have 4 messages</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li><!-- start message -->
                    <a href="#">
                      <div class="pull-left">
                        <img src="{$config_siteurl}statics/images/admin/portrait.jpg" class="img-circle">
                      </div>
                      <h4>
                        Support Team
                        <small><i class="fa fa-clock-o"></i> 5 mins</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <!-- end message -->
                </ul>
              </li>
              <li class="footer"><a href="#">See All Messages</a></li>
            </ul>
          </li>
          <!-- Notifications: style can be found in dropdown.less -->
          <li class="dropdown notifications-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-bell-o"></i>
              <span class="label label-warning">10</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have 10 notifications</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li>
                    <a href="#">
                      <i class="fa fa-users text-aqua"></i> 5 new members joined today
                    </a>
                  </li>
                </ul>
              </li>
              <li class="footer"><a href="#">View all</a></li>
            </ul>
          </li>
          <!-- Tasks: style can be found in dropdown.less -->
          <li class="dropdown tasks-menu" style="display: none">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-flag-o"></i>
              <span class="label label-danger">9</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have 9 tasks</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li><!-- Task item -->
                    <a href="#">
                      <h3>
                        Design some buttons
                        <small class="pull-right">20%</small>
                      </h3>
                      <div class="progress xs">
                        <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">20% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <!-- end task item -->
                </ul>
              </li>
              <li class="footer">
                <a href="#">View all tasks</a>
              </li>
            </ul>
          </li>
          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="{$config_siteurl}statics/images/admin/portrait.jpg" class="user-image" alt="User Image">
              <span class="hidden-xs">{$User.username}</span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img src="{$config_siteurl}statics/images/admin/portrait.jpg" class="img-circle">
                <p>
                  {$User.username}
                  <small>{$User.role_name}</small>
                </p>
              </li>
              <!-- Menu Body -->
              <li class="user-body">
                <div class="row">
                  <div class="col-xs-6 text-left">
                    <a title="个人信息" href="javascript:;" id="myinfo" data-id="37Admin"><i class="fa fa-user mr10" aria-hidden="true"></i> 个人信息</a>
                  </div>
                  <div class="col-xs-6 text-right">
  	                 <a title="修改密码" href="javascript:;" id="editpassword" data-id="38Admin"><i class="fa fa-lock mr10" aria-hidden="true"></i> 修改密码</a>
                  </div>
                </div>
                <!-- /.row -->
              </li>
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
                	<a class="btn btn-default btn-flat" href="javascript:;" id="deletecache" title="缓存更新"><i class="fa fa-refresh mr10" aria-hidden="true"></i> 缓存更新</a>
                </div>
                <div class="pull-right">
							    <a class="btn btn-default btn-flat" href="{:U('Public/logout')}" title="退出系统"><i class="fa fa-power-off mr10" aria-hidden="true"></i> 退出系统</a>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <!-- Left side column. contains the sidebar -->
  <aside class="main-sidebar" id="B_menunav">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" id="J_search_keyword" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" id="J_search" data-url="{:U('Index/public_find')}" name="search" class="btn btn-flat"><i class="fa fa-search"></i></button>
              </span>
        </div>
      </form>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" id="B_menubar">
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>

  <!-- =============================================== -->
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header" style="background: #fff;padding: 5px 10px;border-bottom:solid 1px #F4F4F4;">
      <div id="B_tabA" class="tabA"> <a href="" tabindex="-1" class="tabA_pre" id="J_prev" title="上一页"><i class="fa fa-chevron-circle-left" aria-hidden="true"></i></a> <a href="" tabindex="-1" class="tabA_next" id="J_next" title="下一页"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i></a>
          <div style="margin: 0 40px 0 10px;">
            <div style="position:relative;height:26px;width:100%;overflow:hidden;">
              <ul id="B_history" style="white-space:nowrap;position:absolute;left:0;top:0;">
                <li class="current" data-id="default" tabindex="0"><span><a>仪表盘</a></span></li>
              </ul>
            </div>
          </div>
	    </div>
    </section>

    <!-- Main content -->
    <section class="content" id="B_frame" style="padding:0px;">

      <!-- Default box -->
      <div class="loading" id="loading"><img src="{$config_siteurl}statics/images/admin/layout/loading.gif" style="vertical-align: middle;width:24px;height:24px;margin-right:5px;"/>正在加载中...</div>
      <iframe id="iframe_default" src="{:U('Main/index')}" style="height: 100%; width: 100%;display:none;" data-id="default" frameborder="0" scrolling="auto"></iframe>
      <!-- /.box -->

    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  <footer class="main-footer" style="display: block;">
    <div class="pull-right hidden-xs">
      <b>Version</b> 2.1
    </div>
    <strong>&copy; 2014-2017 <a href="{$Config.siteurl}">{$Config.sitename}</a>.</strong> 版权所有.
  </footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Create the tabs -->
    <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
      <li><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>

      <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
    </ul>
    <!-- Tab panes -->
    <div class="tab-content">
      <!-- Home tab content -->
      <div class="tab-pane" id="control-sidebar-home-tab">
        <h3 class="control-sidebar-heading">Recent Activity</h3>
        <ul class="control-sidebar-menu">
          <li>
            <a href="javascript:void(0)">
              <i class="menu-icon fa fa-birthday-cake bg-red"></i>

              <div class="menu-info">
                <h4 class="control-sidebar-subheading">Langdon's Birthday</h4>

                <p>Will be 23 on April 24th</p>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i class="menu-icon fa fa-user bg-yellow"></i>

              <div class="menu-info">
                <h4 class="control-sidebar-subheading">Frodo Updated His Profile</h4>

                <p>New phone +1(800)555-1234</p>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i class="menu-icon fa fa-envelope-o bg-light-blue"></i>

              <div class="menu-info">
                <h4 class="control-sidebar-subheading">Nora Joined Mailing List</h4>

                <p>nora@example.com</p>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i class="menu-icon fa fa-file-code-o bg-green"></i>

              <div class="menu-info">
                <h4 class="control-sidebar-subheading">Cron Job 254 Executed</h4>

                <p>Execution time 5 seconds</p>
              </div>
            </a>
          </li>
        </ul>
        <!-- /.control-sidebar-menu -->

        <h3 class="control-sidebar-heading">Tasks Progress</h3>
        <ul class="control-sidebar-menu">
          <li>
            <a href="javascript:void(0)">
              <h4 class="control-sidebar-subheading">
                Custom Template Design
                <span class="label label-danger pull-right">70%</span>
              </h4>

              <div class="progress progress-xxs">
                <div class="progress-bar progress-bar-danger" style="width: 70%"></div>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <h4 class="control-sidebar-subheading">
                Update Resume
                <span class="label label-success pull-right">95%</span>
              </h4>

              <div class="progress progress-xxs">
                <div class="progress-bar progress-bar-success" style="width: 95%"></div>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <h4 class="control-sidebar-subheading">
                Laravel Integration
                <span class="label label-warning pull-right">50%</span>
              </h4>

              <div class="progress progress-xxs">
                <div class="progress-bar progress-bar-warning" style="width: 50%"></div>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <h4 class="control-sidebar-subheading">
                Back End Framework
                <span class="label label-primary pull-right">68%</span>
              </h4>

              <div class="progress progress-xxs">
                <div class="progress-bar progress-bar-primary" style="width: 68%"></div>
              </div>
            </a>
          </li>
        </ul>
        <!-- /.control-sidebar-menu -->

      </div>
      <!-- /.tab-pane -->
      <!-- Stats tab content -->
      <div class="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
      <!-- /.tab-pane -->
      <!-- Settings tab content -->
      <div class="tab-pane" id="control-sidebar-settings-tab">
        <form method="post">
          <h3 class="control-sidebar-heading">General Settings</h3>

          <div class="form-group">
            <label class="control-sidebar-subheading">
              Report panel usage
              <input type="checkbox" class="pull-right" checked>
            </label>

            <p>
              Some information about this general settings option
            </p>
          </div>
          <!-- /.form-group -->

          <div class="form-group">
            <label class="control-sidebar-subheading">
              Allow mail redirect
              <input type="checkbox" class="pull-right" checked>
            </label>

            <p>
              Other sets of options are available
            </p>
          </div>
          <!-- /.form-group -->

          <div class="form-group">
            <label class="control-sidebar-subheading">
              Expose author name in posts
              <input type="checkbox" class="pull-right" checked>
            </label>

            <p>
              Allow the user to show his name in blog posts
            </p>
          </div>
          <!-- /.form-group -->

          <h3 class="control-sidebar-heading">Chat Settings</h3>

          <div class="form-group">
            <label class="control-sidebar-subheading">
              Show me as online
              <input type="checkbox" class="pull-right" checked>
            </label>
          </div>
          <!-- /.form-group -->

          <div class="form-group">
            <label class="control-sidebar-subheading">
              Turn off notifications
              <input type="checkbox" class="pull-right">
            </label>
          </div>
          <!-- /.form-group -->

          <div class="form-group">
            <label class="control-sidebar-subheading">
              Delete chat history
              <a href="javascript:void(0)" class="text-red pull-right"><i class="fa fa-trash-o"></i></a>
            </label>
          </div>
          <!-- /.form-group -->
        </form>
      </div>
      <!-- /.tab-pane -->
    </div>
  </aside>
  <!-- /.control-sidebar -->
  <!-- Add the sidebar's background. This div must be placed
       immediately after the control sidebar -->
  <div class="control-sidebar-bg"></div>
</div>
<!-- ./wrapper -->

<Admintemplate file="Admin/Common/Js"/>
<script src="{$config_siteurl}statics/addons/bootstrap/v3/js/bootstrap.min.js"></script>
<script src="{$config_siteurl}statics/addons/jquery/slimscroll/jquery.slimscroll.min.js"></script>
<script src="{$config_siteurl}statics/addons/jquery/fastclick/fastclick.js"></script>
<script src="{$config_siteurl}statics/addons/aui/js/app.min.js"></script>
<script src="{$config_siteurl}statics/addons/aui/js/demo.js"></script>
<script src="{$config_siteurl}statics/js/common.js"></script>

<literal>
<script>
$("#deletecache").on('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    iframeJudge({
        elem: $(this),
        href: "<?php echo U('Index/public_cache');?>",
        id: "deletecache"
    });
});
$("#myinfo").on('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    iframeJudge({
        elem: $(this),
        href: "<?php echo U('Admin/Adminmanage/myinfo');?>",
        id: "37Admin"
    });
});
$("#editpassword").on('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    iframeJudge({
        elem: $(this),
        href: "<?php echo U('Admin/Adminmanage/chanpass');?>",
        id: "38Admin"
    });
});
//iframe 加载事件
var iframe_default = document.getElementById('iframe_default');
var def_iframe_height = 0;
$(iframe_default.contentWindow.document).ready(function () {
	setTimeout(function(){
		$('#loading').css('top', $(window).height()/2);
		$('#loading').css('left', $(window).width()/2);
		$('#loading').hide();
	},500);
    $(iframe_default).show();
});

function iframe_height(){
	 if($.browser.mobile || $.browser.ios || $.browser.android ||   
    $.browser.iPhone || $.browser.iPad){        
       //手机版访问
  }else{
		def_iframe_height = $(window).height() - $(".content-header").height() - $(".main-header").height();
		$("#B_frame").height(def_iframe_height);
		$("#B_frame").parent().css('min-height', def_iframe_height);
  	
  }
}

var USUALL = [],
    /*常用的功能模块*/
    TEMP = [],
    SUALL = USUALL.concat('-', [{
        name: '最近操作',
        disabled: true
    }], TEMP),
    SUBMENU_CONFIG = <?php echo $SUBMENU_CONFIG; ?>, /*主菜单区*/
    imgpath = '',
    times = 0,
    getdescurl = '',
    searchurl = '',
    token = ""; 
//一级菜单展示
$(function () {
    var html = [];
		iframe_height();
    //console.log(SUBMENU_CONFIG);
    $.each(SUBMENU_CONFIG, function (i, o) {
    	var htmlContent = '<li><a id="' + o.id + '" href="javascript:void(0)" url="'+o.url+'" data="r'+o.redirect+'" title="' + o.name + '" data-id="' + o.id + '">';
    	htmlContent += '<div><i class="fa '+ o.icon + '"></i>';
    	htmlContent += '<font class="ml10">' + o.name + '</font></div>';
    	htmlContent += '</a></li>';
    	
        html.push(htmlContent);
    });
    $('#J_B_main_block').html(html.join(''));
    //后台位在第一个导航
    $('#J_B_main_block li:first > a').click();
    
    //检查订单
 	//startCheckOrder();
});

//检查是否出现上下页
function checkMenuNext() {
    var B_menunav = $('#B_menunav');
    var menu_next = $('#menu_next');
    if (B_menunav.offset().top + B_menunav.height() >= $(window).height() || B_menunav.offset().top < B_menunav.parent().offset().top) {
        menu_next.show();
    } else {
        menu_next.hide();
    }
}

//当文档窗口改变大小时触发
$(window).on('resize', function () {
    setTimeout(function () {
        checkMenuNext();
	    iframe_height();
    }, 100);
});

//上一页下一页的点击
(function () {
    var menu_next = $('#menu_next');
    var B_menunav = $('#B_menunav');
    menu_next.on('click', 'a', function (e) {
        e.preventDefault();
        if (e.target.className === 'pre') {
            if (B_menunav.offset().top < B_menunav.parent().offset().top) {
                B_menunav.animate({
                    'marginTop': '+=28px'
                }, 100);
            }
        } else if (e.target.className === 'next') {
            if (B_menunav.offset().top + B_menunav.height() >= $(window).height()) {
                B_menunav.animate({
                    'marginTop': '-=28px'
                }, 100);
            }
        }
    });
})();
//一级导航点击
$('#J_B_main_block').on('click', 'a', function (e) {
    //取消事件的默认动作
    e.preventDefault();
    //终止事件 不再派发事件
    e.stopPropagation();
    $(this).parent().addClass('current').siblings().removeClass('current');
    var data_id = $(this).attr('data-id'),
        data_list = SUBMENU_CONFIG[data_id],
        html = [],
        child_html = [],
        child_index = 0,
        B_menubar = $('#B_menubar');

    if (B_menubar.attr('data-id') == data_id) {
        return false;
    };
    //显示左侧菜单，如果是直接跳转，则不显示左边菜单;
    if($(this).attr('data') == 'r1'){
    	//$('#A_menu').css('display', 'none')
			//$('#B_frame').attr('colspan', '2');
		
			//如果已经显示了相应的页面，就不用在刷新请求了
			if(!$('#iframe_'+data_id).css('display')){
				var href = $(this).attr('url');
				iframeJudge({
		        	elem: $(this),
		        	href: href,
		        	id: data_id,
		   		});
			}else{
				$.each($('#B_frame iframe'), function(i, e){
						if(e.id == ('iframe_' + data_id)){
							//不做任何刷新
							e.style.display = 'inline';
						}else{
							e.style.display = 'none';
						}
				});
			}
		}else{
	    show_left_menu(data_list['items']);
	    B_menubar.html(html.join('')).attr('data-id', data_id);
			//左侧导航复位
			$("#B_menunav").css({"margin-top":"0px"});
			//$('#A_menu').css({'display':'block'});
			//$('#B_frame').attr('colspan', '');
			
			//过滤掉直接跳转
			var tartId = $('#B_history').children('li.current').attr('data-id');
			if($('#'+tartId).attr('data') == 'r1'){
					$('#iframe_default').show();
					$('#iframe_default').siblings('iframe').hide();
			}else{
					$('#iframe_'+tartId).show();
					$('#iframe_'+tartId).siblings('iframe').hide();
			}
		}
	
    //检查是否应该出现上一页、下一页
    checkMenuNext();

    //显示左侧菜单
    function show_left_menu(data) {
        for (var attr in data) {
            if (data[attr] && typeof (data[attr]) === 'object') {
                //循环子对象
                var k = 0;
                if (!data[attr].url && attr === 'items') {
                    //子菜单添加识别属性
                    $.each(data[attr], function (i, o) {
                        child_index++;
                        k++;
                        o.isChild = true;
                        o.child_index = child_index;
                        o.index = k;
                    });
                }
                show_left_menu(data[attr]); //继续执行循环(筛选子菜单)
            } else {
                if (attr === 'name') {
                    data.url = data.url ? data.url : '#';
                    data['hasChild'] = data['hasChild'] ? 1 : 0;
                    if (!(data['isChild'])) {
                        //一级菜单
                        if(!data.icon){
	                        data.icon = 'fa-tv';
                        	data.font = ' fontbold';
                        }
                        html.push('<li class="treeview" data="hs'+data['hasChild']+'"><a class="dropdown-toggle" title="'+data.name+'" href="'+data.url+'" data-id="' + data.id + '"><i class="fa '+data.icon+'"></i><span class="menu-text">' + data.name + '</span>');
                        if(data['hasChild']){
                        	html.push('<span class="pull-right-container"><i class="fa fa-angle-down pull-right"></i></span>');
                        }
                        html.push('</a>');
                    	if(!data['hasChild'] && !data.index){
                    		html.push('</li>');
                    	}
                    } else {
	                    //二级菜单
                    	if(data.index == 1){
	                    	html.push('<ul class="treeview-menu menu-open submenu" style="display: block;">');
                    	}
                    	if(!data.icon){
	                        data.icon = 'fa-file-o';
                      }
	                    child_html.push('<li class=""><a title="'+data.name+'" href="' + data.url + '" data-id="' + data.id + '"><i class="fa '+data.icon+'"></i>' + data.name + '</a></li>');
                        //二级菜单全部push完毕
                        if (data.child_index == child_index) {
                            html.push(child_html.join('') + '</ul>');
                            child_html = [];
			                html.push('</li>');
                        }
                    }
                    
                }
            }
        }
    };
});
//左边菜单点击
$('#B_menubar').on('click', 'a', function (e) {
    e.preventDefault();
    e.stopPropagation();
    
    //如果左边菜单一级下有子节点时，不可点击
    if($(this).parent().attr('data') == 'hs1'){
    	var sibEle = $(this).siblings();
    	if(sibEle.css('display') == 'none'){
	    	sibEle.show();
    	}else{
    		sibEle.hide();
    	}
    	return;
    }
    
	//iframe_height();
    var $this = $(this),
        _fli = $this.parent().parent().parent(),
        _pli = $this.parent(),
        _sibli = _fli.next('li');
    //当前菜单状态
    _pli.addClass('active').siblings('li.active').removeClass('active');
	_fli.addClass('active').siblings().removeClass('active');
	_fli.siblings().children('ul').children('li.active').removeClass('active');
	
	checkMenuNext();
	
    $('#loading').show().focus(); //显示loading
    $('#B_history li').removeClass('current');
    var data_id = $(this).attr('data-id'),
        li = $('#B_history li[data-id=' + data_id + ']');
    var href = this.href;
	
    iframeJudge({
        elem: $this,
        href: href,
        id: data_id
    });

});

/*
 * 搜索
 */
var search_keyword = $('#J_search_keyword'),
    search = $('#J_search');
    search.on('click', function (e) {
    e.preventDefault();
    var $this = $(this),
        search_val = $.trim(search_keyword.val());
    if (search_val) {
        iframeJudge({
            elem: $this,
            href: $this.data('url') + '&keyword=' + search_val,
            id: 'search'
        });
    }
});

//回车搜索
search_keyword.on('keydown', function (e) {
    if (e.keyCode == 13) {
        search.click();
    }
});

//判断显示或创建iframe
function iframeJudge(options) {
    var elem = options.elem,
        href = options.href,
        id = options.id,
        li = $('#B_history li[data-id=' + id + ']');

    if (li.length > 0) {
        //如果是已经存在的iframe，则显示并让选项卡高亮,并不显示loading
        var iframe = $('#iframe_' + id);
        setTimeout(function(){
		    $('#loading').hide();
	    },500);
        li.addClass('current');
        
        if (iframe[0].contentWindow && iframe[0].contentWindow.location.href !== href) {
            iframe[0].contentWindow.location.href = href;
        }
        $('#B_frame iframe').hide();
        $('#iframe_' + id).show();
        showTab(li); //计算此tab的位置，如果不在屏幕内，则移动导航位置
    } else {
        //创建一个并加以标识
        var iframeAttr = {
            src: href,
            id: 'iframe_' + id,
            frameborder: '0',
            scrolling: 'auto',
            height: '100%',
            width: '100%'
        };
        var iframe = $('<iframe/>').prop(iframeAttr).appendTo('#B_frame');

        $(iframe[0].contentWindow.document).ready(function () {
            $('#B_frame iframe').hide();
			setTimeout(function(){
				$('#loading').hide();
			},500);
			var eleHtml = elem.attr('title') ? elem.attr('title') : elem.html();
            var li = $('<li tabindex="0"><span><a>' + eleHtml + '</a><a class="" title="关闭此页"><i class="fa fa-times" aria-hidden="true"></i></a></span></li>').attr('data-id', id).addClass('current');
            li.siblings().removeClass('current');
            
            li.appendTo('#B_history');
            showTab(li); //计算此tab的位置，如果不在屏幕内，则移动导航位置
            //$(this).show().unbind('load');
        });
    }
}

//顶部点击一个tab页
$('#B_history').on('click focus', 'li', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var data_id = $(this).data('id');
    if(data_id){
        //选择顶部菜单
        var curid = data_id;
        if(curid == "default") curid = "changyong";
        var topmenu = getTopMenuByID(curid);
        var objtopmenu = $('#J_B_main_block').find("a[data-id=" + topmenu.id +"]");
        if(objtopmenu.parent().attr("class") != "active"){
            //选中当前顶部菜单
            objtopmenu.parent().addClass('active').siblings().removeClass('active');
            //触发事件
            objtopmenu.click();
        }
        //选择左边菜单
        $("#B_menubar").find(".active").removeClass('active');
        $("#B_menubar").find("a[data-id=" + data_id +"]").parent().addClass('active');
    }
    
    $(this).addClass('current').siblings('li').removeClass('current');
	try{
            var menuid = parseInt(data_id);
	    if(menuid){
		setCookie("menuid",menuid);
            }
	}catch(err){}
    $('#iframe_' + data_id).show().siblings('iframe').hide(); //隐藏其它iframe
});

//顶部关闭一个tab页
$('#B_history').on('click', 'a.del', function (e) {
    e.stopPropagation();
    e.preventDefault();
    var li = $(this).parent().parent(),
        prev_li = li.prev('li'),
        data_id = li.attr('data-id');
    li.hide(60, function () {
        $(this).remove(); //移除选项卡
        $('#iframe_' + data_id).remove(); //移除iframe页面
        var current_li = $('#B_history li.current');
        //找到关闭后当前应该显示的选项卡
        current_li = current_li.length ? current_li : prev_li;
        current_li.addClass('current');
        cur_data_id = current_li.attr('data-id');
        $('#iframe_' + cur_data_id).show();
    });
});

//通过菜单id查找菜单配置对象
function getMenuByID(mid,menugroup){
    var ret = {};
    mid = parseInt(mid);
    if(!menugroup) menugroup = SUBMENU_CONFIG;
    if(isNaN(mid)){
        ret = menugroup['changyong'];
    }else{
        $.each(menugroup, function (i, o) {
            if( o.id &&  parseInt(o.id) == mid ){
                ret = o;
                return false
            }else if(o.items){
                var tmp = getMenuByID(mid,o.items);
                if( tmp.id && parseInt(tmp.id) == mid ){
                    ret = tmp;
                    return false
                }
            }
        });
    }
    return ret;
}

function getTopMenuByID(mid){
    var ret = {};
    var menu = getMenuByID(mid);
    if(menu){
        if(menu.parent){
            var tmp = getTopMenuByID(menu.parent);
            if(tmp && tmp.id){
                ret = tmp;
            }
        }else{
            ret = menu;
        }
    }
    return ret;
}

//刷新
$('#J_refresh').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var id = $('#B_history .current').attr('data-id'),
        iframe = $('#iframe_' + id);
    if (iframe[0].contentWindow) {
        //common.js
        reloadPage(iframe[0].contentWindow);
    }
});

//全屏/非全屏
/*
$('#J_fullScreen').toggle(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(document.body).addClass('fullScreen');
	def_iframe_height = $("body").height();
	$("#B_frame").height(def_iframe_height);
}, function () {
    $(document.body).removeClass('fullScreen');
	iframe_height();
});
*/

//下一个选项卡
$('#J_next').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var ul = $('#B_history'),
        current = ul.find('.current'),
        li = current.next('li');
    showTab(li);
});

//上一个选项卡
$('#J_prev').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var ul = $('#B_history'),
        current = ul.find('.current'),
        li = current.prev('li');
    showTab(li);
});

//显示顶部导航时作位置判断，点击左边菜单、上一tab、下一tab时公用
function showTab(li) {
    if (li.length) {
        var ul = $('#B_history'),
            li_offset = li.offset(),
            li_width = li.outerWidth(true),
            next_left = $('#J_next').offset().left - 9, //右边按钮的界限位置
            prev_right = $('#J_prev').offset().left + $('#J_prev').outerWidth(true); //左边按钮的界限位置
        if (li_offset.left + li_width > next_left) { //如果将要移动的元素在不可见的右边，则需要移动
            var distance = li_offset.left + li_width - next_left; //计算当前父元素的右边距离，算出右移多少像素
            ul.animate({
                left: '-=' + distance
            }, 200, 'swing');
        } else if (li_offset.left < prev_right) { //如果将要移动的元素在不可见的左边，则需要移动
            var distance = prev_right - li_offset.left; //计算当前父元素的左边距离，算出左移多少像素
            ul.animate({
                left: '+=' + distance
            }, 200, 'swing');
        }
        li.trigger('click');
    }
}


/* 检查新订单的时间间隔 */
var NEW_ORDER_INTERVAL = 60000;
/* *
 * 开始检查新订单；
 */
function startCheckOrder()
{
  checkOrder();
  window.setInterval("checkOrder()", NEW_ORDER_INTERVAL);
}

/*
 * 检查订单
 */
function checkOrder()
{
  //var lastCheckOrder = new Date(document.getCookie('SYS_LastCheckOrder'));
	var lastCheckOrder = null;
  var today = new Date();
  if (lastCheckOrder == null || today-lastCheckOrder >= NEW_ORDER_INTERVAL)
  {
    //document.setCookie('SYS_LastCheckOrder', today.toGMTString());
    try
    {
      $.post("/index.php?g=admin&m=main&a=orderStatis", '', checkOrderResponse, 'JSON');
    }
    catch (e) { }
  }
}

/* *
 * 处理检查订单的反馈信息
 */
function checkOrderResponse(result)
{
  try
  {
    document.getElementById('spanNewOrder1').innerHTML = result.sub_noconfirm;
    document.getElementById('spanNewOrder2').innerHTML = result.rent_noconfirm;
    Message.show();
  }
  catch (e) { }
}
/*
 * 气泡式提示信息
 */
var Message = Object();
Message.bottom  = 0;
Message.count   = 0;
Message.elem    = "popMsg";
Message.mvTimer = null;

Message.show = function()
{
  try
  {
    Message.controlSound('msgBeep');
    document.getElementById(Message.elem).style.visibility = "visible"
    document.getElementById(Message.elem).style.display = "block"

    Message.bottom  = 0 - parseInt(document.getElementById(Message.elem).offsetHeight);
    Message.mvTimer = window.setInterval("Message.move()", 10);

    document.getElementById(Message.elem).style.bottom = Message.bottom + "px";
  }
  catch (e)
  {
    //alert(e);
  }
}

Message.move = function()
{
  try
  {
    if (Message.bottom == 0)
    {
      window.clearInterval(Message.mvTimer)
      Message.mvTimer = window.setInterval("Message.close()", 1000000)
    }

    Message.bottom ++ ;
    document.getElementById(Message.elem).style.bottom = Message.bottom + "px";
  }
  catch (e)
  {
    //alert(e);
  }
}

Message.close = function()
{
  document.getElementById(Message.elem).style.visibility = 'hidden';
  document.getElementById(Message.elem).style.display = 'none';
  if (Message.mvTimer) window.clearInterval(Message.mvTimer)
}

Message.controlSound = function(_sndObj)
{
  sndObj = document.getElementById(_sndObj);

  try
  {
    sndObj.Play();
  }
  catch (e) { }
}

//增强体验，如果支持全屏，则使用更完美的全屏方案
/*
Wind.use('requestFullScreen', function () {
    if (fullScreenApi.supportsFullScreen) {
        $('#J_fullScreen').unbind('click').one('click', function (e) {
            e.preventDefault();
            $('body').requestFullScreen();
        });
    }
})
*/
</script>
<!--[if lte IE 7]>
<script src="http://letskillie6.googlecode.com/svn/trunk/2/zh_CN.js"></script>
<![endif]--> 
</literal>

</body>
</html>
