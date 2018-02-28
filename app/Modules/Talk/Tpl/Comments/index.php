<?php if (!defined('APP_VERSION')) exit(); ?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<title>查看{$category.catname} - 系统后台 - {$Config.sitename} - by AppCMS</title>
<link href='{$config_siteurl}statics/addons/zui/dist/css/zui.min.css' rel='stylesheet' />
<link href='{$config_siteurl}statics/addons/zui/dist/css/doc.min.css' rel='stylesheet' />
<Admintemplate file="Admin/Common/Cssjs"/>
<script src='{$config_siteurl}statics/addons/zui/dist/js/zui.min.js'></script>
<script type="text/javascript">
    var modid = "{$modid}";
</script>
<style type="text/css">
.btn_wrap {bottom:0;}
.col-auto {
	overflow: hidden;
	_zoom: 1;
	_float: left;
	border: 1px solid #c2d1d8;
}
.col-right {
	float: right;
	width: 210px;
	overflow: hidden;
	margin-left: 6px;
	border: 1px solid #c2d1d8;
}

body fieldset {
	border: 1px solid #D8D8D8;
	padding: 10px;
	background-color: #FFF;
}
body fieldset legend {
    background-color: #F9F9F9;
    border: 1px solid #D8D8D8;
    font-weight: 700;
    padding: 3px 8px;
}
.list-dot{ padding-bottom:10px}
.list-dot li,.list-dot-othors li{padding:5px 0; border-bottom:1px dotted #c6dde0; font-family:"宋体"; color:#bbb; position:relative;_height:22px}
.list-dot li span,.list-dot-othors li span{color:#004499}
.list-dot li a.close span,.list-dot-othors li a.close span{display:none}
.list-dot li a.close,.list-dot-othors li a.close{ background: url("{$config_siteurl}statics/images/cross.png") no-repeat left 3px; display:block; width:16px; height:16px;position: absolute;outline:none;right:5px; bottom:5px}
.list-dot li a.close:hover,.list-dot-othors li a.close:hover{background-position: left -46px}
.list-dot-othors li{float:left;width:24%;overflow:hidden;}
</style>

</head>
<body class="J_scroll_fixed">
<div class="wrap J_check_wrap">
	
<div id="navShow"><div class="loading-tip"><i class="icon icon-spin icon-spinner f14"></i> 加载中...</div></div>
<div id="commentList" class=""><div class="loading-tip"><i class="icon icon-spin icon-spinner f14"></i> 加载中...</div></div>
  
<include file="{$config_siteurl}app/Modules/talk/Tpl/Page/commentForm"/>  

<div class="btn_wrap" style="z-index:999;text-align: center;">
    <div class="btn_wrap_pd">
      <input type="hidden" name="ajax" value="1" />
      <button class="btn btn-success J_ajax_close_btn" type="submit"><i class="icon icon-reply-all"></i> 关闭并返回列表</button>
    </div>
</div>
  
</div>

<script type="text/javascript" src="{$config_siteurl}statics/js/common.js"></script>
<script type="text/javascript" src="{$config_siteurl}statics/js/content_addtop.js"></script>

<script type="text/javascript"> 
$(function () {
   var modid = "{$modid}";
   var id = "{$id}";
   var param = "modid="+modid+"&id="+id;	
   $.get("{:U('talk/Comments/ajaxCommnetList')}", param, function(data){
	   	$('#commentList').html(data);
	 }, 'html');
   $.get("{:U('Admin/RbacModule/ajaxNavShow')}", param, function(data){
   		$('#navShow').html(data);
   		$('#navList li:eq(1)').addClass('active');
   }, 'html');
   
   $(".J_ajax_close_btn").on('click', function (e) {
	    e.preventDefault();
	    layer.confirm('您确定关闭当前页面吗？', {
		  btn: ['确定','取消'] //按钮
		}, function(){
		  setCookie("refersh_time",1);
		  var index = parent.layer.getFrameIndex(window.name);
    	  parent.layer.close(index);
		}, function(){
		  
		});
	});
	
   
});

</script>

</body>
</html>