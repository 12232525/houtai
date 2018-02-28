<!DOCTYPE html>
<html class="screen-desktop-wide device-desktop">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>系统后台 - {$Config.sitename} - by EduERP</title>
		<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
		<link rel="stylesheet" href="{$config_siteurl}statics/addons/normalize/normalize.css">
		<link rel="stylesheet" href="{$config_siteurl}statics/admin/theme/default/css/style.css" type="text/css" media="screen">
		<link rel="stylesheet" href="{$config_siteurl}statics/admin/theme/default/css/index.css" type="text/css" media="screen">
		<link rel="stylesheet" href="{$config_siteurl}statics/addons/bootstrap/v3/css/bootstrap.min.css">
		<link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet">
  		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
        <script src="/statics/js/html5shiv.js"></script>
        <script src="/statics/js/respond.min.js"></script>
        <![endif]-->
        <style type="text/css">
            .tooltip .tooltip-inner{
                min-width: 70px !important;
            }
        </style>
	</head>

	<body class="m-index-index" style="zoom: 1; background-color: #2b83f9;background-image: linear-gradient(143deg, #2945cb 20%, #2b83f9 81%, #3a9dff)">
		<!-- Desktop -->
		<div id="desktop" class="">
			<div id="leftBar" class="dock-left unselectable">
				<button id="mystart" class="dock-bottom mb5 mr10" type="button" title="">
					<div class="avatar avatar-md "><i class="fa fa-user-circle f28" aria-hidden="true"></i></div>
				</button>
				<ul id="startMenu" class="dropdown-menu fade">
					<li class="with-avatar">
						<a title="个人信息" href="javascript:;" id="myinfo" data-id="37Admin">
							<div class="avatar avatar-md"><img src="{$config_siteurl}statics/images/admin/portrait.jpg" style="width: 24px;height: 24px;" class="img-circle"></div><strong>{$User.username}</strong>
						</a>
					</li>
					<li class="divider"></li>
					<li class="dropdown-submenu">
						<a href="javascript:;" data-toggle="dropdown" class="dropdown-toggle">
							<i class="fa fa-globe"></i> 简体
						</a>
					</li>
					<li class="dropdown-submenu">
						<a href="/index.php?g=admin" class="dropdown-toggle">
							<i class="fa fa-adjust"></i> 主题
						</a>
						<ul class="dropdown-menu">
							<li class="theme-option">
								<a href='javascript:selectTheme("default");' data-value="default">
									默认
								</a>
							</li>
							<li class="theme-option active">
								<a href='javascript:selectTheme("clear");' data-value="clear">
									清晰
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="javascript:;" data-id="about" data-toggle="modal" data-width="500">
							<i class="fa fa-info-circle"></i> 关于
						</a>
					</li>
					<li class="divider"></li>
					<li>
						<a href="javascript:;" data-id="superadmin" class="app-btn">
							<i class="fa fa-plus"></i> 添加应用
						</a>
					</li>
					<li>
						<a href="javascript:;" class="fullscreen-btn" data-id="allapps">
							<i class="fa fa-th-large"></i> 所有应用
						</a>
					</li>
					<li>
						<a href="javascript:;" id="deletecache" title="缓存更新" class="fullscreen-btn">
							<i class="fa fa-refresh"></i> 缓存更新
						</a>
					</li>
					<li class="divider"></li>
					<li>
						<a href="{:U('Public/logout')}" title="退出系统">
							<i class="fa fa-power-off"></i> 退出
						</a>
					</li>
				</ul>
				<div id="apps-menu" class="more-option">
					<ul class="bar-menu" id="J_B_main_block">
					</ul>
				</div>
			</div>
			<div id="bottomBar" class="dock-bottom unselectable" >
				 <section class="content-header" style="color: #fff;padding: 5px 10px;border-bottom:solid 1px #F4F4F4;">
			      <div id="B_tabA" class="tabA"> 
			      	  <a href="" tabindex="-1" class="tabA_pre" id="J_prev" title="上一页"><i class="fa fa-chevron-circle-left" aria-hidden="true"></i></a> 
			      	  <a href="" tabindex="-1" class="tabA_next" id="J_next" title="下一页"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i></a>
			          <div style="margin: 0 40px 0 10px;">
			            <div style="position:relative;height:26px;width:80%;overflow:hidden;">
			              <ul id="B_history" style="white-space:nowrap;position:absolute;left:0;top:0;">
			                <li class="current" data-id="default" tabindex="0"><span><a>仪表盘</a></span></li>
			              </ul>
			            </div>
			          </div>
				    </div>
			    </section>
				<div id="bottomRightBar" class="dock-right">
					<ul class="bar-menu">
						<li>
							<div class="input-group">
								<form action="#" method="get" class="sidebar-form">
							        <div class="input-group">
							          <input type="text" name="q" id="J_search_keyword" class="form-control" placeholder="Search...">
							              <span class="input-group-btn">
							                <button type="submit" id="J_search" data-url="{:U('Index/public_find')}" name="search" class="btn btn-flat"><i class="fa fa-search"></i>搜索</button>
							              </span>
							        </div>
						        </form>
							</div>
						</li>
						<li>
							<a href="{:U('Public/logout')}" title="退出系统" class="sign signout">
								签退
							</a>
						</li>
						<li>
						   <button id="showDesk" type="button" id="desktop"  class="fullscreen-btn fa fa-desktop f18" data-id="home" data-toggle="tooltip" title="桌面"></button>
						</li>
					</ul>
					<div class="copyright">
						<a href="/" target="_blank">
							EduERP3.2
						</a>
					</div>
				</div>
			</div>
			<div id="deskContainer">
				<div id="win-9" class="window window-iframe window-fixed window-control-simple window-max window-active" style=" left: 40px; top: 0px; z-index: 100; right: 0px;" data-id="9" data-url="/index.php?g=admin&m=main">
					<div class="window-head">
						<img src="{$config_siteurl}statics/admin/theme/default/images/app/app-doc.png" alt="">
						<strong title="文档">文档</strong>
						<ul class="">
							<li>
								<button class="reload-win" id="J_refresh" title="刷新">
								  <i class="fa fa-refresh" aria-hidden="true"></i> 刷新
								</button>
							</li>
						</ul>
					</div>
					<div class="window-cover"></div>
					<div class="window-content" style="overflow-x: hidden;">
						<nav id="B_menunav" class="navbar navbar-main navbar-fixed-top" style="margin-left: 40px;" role="navigation" id="mainNavbar">
						  <div class="navbar-header">
						    <a href="javascript:void(0)" class="navbar-brand" id="moduleRemark">我的</a>
						  </div>
						  <ul class="nav navbar-nav dropdown" id="B_menubar"></ul>
						</nav>
						<div id="B_frame" class="row page-content" style="position:relative">
							 <div class="loading" id="loading"><img src="{$config_siteurl}statics/images/admin/layout/loading.gif" style="vertical-align: middle;width:24px;height:24px;margin-right:5px;"/>正在加载中...</div>
     						 <iframe id="iframe_default" src="{:U('Main/index')}" style="" data-id="default" frameborder="0" scrolling="auto"></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="noticeBox"></div>
	</body>

</html>

<Admintemplate file="Admin/Common/Js"/>
<script src="{$config_siteurl}statics/addons/bootstrap/v3/js/bootstrap.min.js"></script>
<script src="{$config_siteurl}statics/addons/jquery/slimscroll/jquery.slimscroll.min.js"></script>
<script src="{$config_siteurl}statics/addons/jquery/fastclick/fastclick.js"></script>
<script src="{$config_siteurl}statics/addons/aui/js/app.min.js"></script>
<script src="{$config_siteurl}statics/js/common.js"></script>
<literal>
<script type="text/javascript">
$("#changyong").on('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    iframeJudge({
        elem: $(this),
        href: "<?php echo U('Admin/main/index');?>",
        id: "default"
    });
});
$('#mystart').on('click', function(e){
	e.preventDefault();
    e.stopPropagation();
    if($('#startMenu').hasClass('show')) $('#startMenu').removeClass('show in');
    else $('#startMenu').addClass('show in');
});
	
$("#deletecache").on('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    iframeJudge({
        elem: $(this),
        href: "<?php echo U('Admin/Index/public_cache');?>",
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
$("#showDesk").on('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    iframeJudge({
        elem: $(this),
        href: "<?php echo U('Admin/main/index');?>",
        id: "default"
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
		def_iframe_height = $(window).height() - $(".content-header").height() - $("#B_menunav").height() + 30 ;
		$("#B_frame").height(def_iframe_height-60);
		$("#B_frame>iframe").height(def_iframe_height-60);
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
    	var htmlContent = '<li><a id="' + o.id + '" href="javascript:void(0)" url="'+o.url+'" data="r'+o.redirect+'" data-original-title="' + o.name + '" data-remark="' + o.remark + '" data-id="' + o.id + '" data-toggle="tooltip" data-placement="right" title="' + o.name + '">';
    	//if(o.icontype == 1){
    		//htmlContent += '<div><i class="'+o.font+' fa '+ o.icon + '"></i>';
    		//htmlContent += '<font class="ml10">' + o.name + '</font></div>';
    		//htmlContent += '</div>';
    	//}else if(o.icontype == 3 && o.logo != ''){
    		htmlContent += '<div><img src="'+o.logo+'" alt=""></div>';
    	//}
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
    
    var remarkstr = $(this).attr('data-remark');
    if(remarkstr) $('#moduleRemark').text(remarkstr);
    
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
                        html.push('<li class="tree_view" data="hs'+data['hasChild']+'"><a role="button" data-toggle="dropdown" class="dropdown-toggle" title="'+data.name+'" href="'+data.url+'" id="a' + data.id + '" data-id="' + data.id + '"><i class="fa '+data.icon+'"></i><span class="menu-text">' + data.name + '</span>');
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
	                    	html.push('<ul class="dropdown-menu" role="menu" style="display:none;">');
                    	}
                    	if(!data.icon){
	                        data.icon = 'fa-file-o';
                      }
	                    child_html.push('<li class=""><a class="menua" title="'+data.name+'" href="' + data.url + '" data-id="' + data.id + '"><i class="fa '+data.icon+'"></i>' + data.name + '</a></li>');
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

$('#B_menubar').on('click', 'a.dropdown-toggle', function(e){
	e.preventDefault();
    e.stopPropagation();
    var pli = $(this).closest('li');
    var plisib = pli.siblings();
    plisib.each(function(i, e){
    	$(this).find('ul').removeAttr('style');
    	$(this).find('ul').css("style", "display:none;");
    	$(this).find('a').removeClass('curractive');
    });
    var wid = pli.width();
    pli.find('ul').css("style", "display:block");
    $(this).addClass('curractive');
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
	 _pli.parent().removeAttr('style').css('style', 'display:none');
	 
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
    	//iframe的高度
    	var iframe_height_cal = $(window).height() - $(".content-header").height() - $("#B_menunav").height() - 30 ;
        //创建一个并加以标识
        var iframeAttr = {
            src: href,
            id: 'iframe_' + id,
            frameborder: '0',
            scrolling: 'auto',
            height: iframe_height_cal+'px',
            width: '96%',
            style: "height:"+iframe_height_cal+'px',
        };
        var iframe = $('<iframe/>').prop(iframeAttr).appendTo('#B_frame');
		
        $(iframe[0].contentWindow.document).ready(function () {
            $('#B_frame iframe').hide();
			setTimeout(function(){
				$('#loading').hide();
			},500);
			var eleHtml = elem.attr('title') ? elem.attr('title') : elem.html();
            var li = $('<li tabindex="0"><span><a>' + eleHtml + '</a><a class="pr5" title="关闭此页"><i class="fa fa-times" aria-hidden="true"></i></a></span></li>').attr('data-id', id).addClass('current');
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