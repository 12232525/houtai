<?php if (!defined('APP_VERSION')) exit(); ?>
<!doctype html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="edge" />
<meta charset="utf-8" />
<title>系统后台 - {$Config.sitename} - by AppCMS</title>
<script language="javascript" type="text/javascript" src="{$config_siteurl}statics/js/jquery.js"></script>
<style type="text/css">
html{font-size:62.5%;font-family:microsoft yahei;arial;}
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,button,textarea,p,blockquote,th,td,hr{margin:0;padding:0}
body{line-height:1.333;font-size:12px;font-size:1.2rem;background:#f6f7f9 url("/statics/images/bg_body.jpg") repeat-x fixed center 0;}
h1,h2,h3,h4,h5,h6{font-size:100%}
input,textarea,select,button{font-size:12px;font-weight:normal}
input[type="button"],input[type="submit"],select,button{cursor:pointer}
table{border-collapse:collapse;border-spacing:0}
address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:normal}
li{list-style:none}
caption,th{text-align:left}
q:before,q:after{content:''}
abbr,acronym{border:0;font-variant:normal}
sup{vertical-align:text-top}
sub{vertical-align:text-bottom}
fieldset,img,a img,iframe{border-width:0;border-style:none}
iframe{overflow:hidden}
img{ -ms-interpolation-mode:bicubic;}
textarea{overflow-y:auto}
legend{color:#000}
a:link,a:visited{text-decoration:none}
hr{height:0}
label{cursor:pointer}
.os_winXp{font-family:Tahoma}
.os_mac{font-family:"Helvetica Neue",Helvetica,"Hiragino Sans GB",Arial}
.os_vista,.os_win7{font-family:"Microsoft Yahei",Tahoma}
.clearfix:before,.clearfix:after{content:".";display:block;height:0;visibility:hidden}
.clearfix:after{clear:both}
.clearfix{zoom:1}
.pull-left{float:left}
.pull-right{float:right}
.header,nav,.footer{display:block}
.wrap .inner{width:1000px;margin:0 auto}
iframe{background-color:transparent}
.topfix{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	/*z-index: 10000;*/
	z-index: 5000;
	height: 60px;
	background-color: #3C3F43;
}
.topfix.affix{ position: fixed; }
}
.header{padding:0 0 0 10px}
.header .logo{margin-top:8px;background-image:url(/statics/images/logo.png);background-repeat:no-repeat;background-size:cover;width:44px;height:44px;}
.header h1{color:#fff;margin-left:10px;overflow:hidden;font-size:30px;line-height: 60px;}
.header .isign{background-image: url(/statics/images/login.png);background-repeat: no-repeat;width: 200px;height: 60px;background-position: 0 -25px;}
.qzone_login{margin-top:240px}
.qzone_login .qzone_cont{float:left;margin-left:112px;position:relative;width:429px;_display:inline;overflow:hidden;height:321px}
.qzone_cont .img_list{width:429px;height:321px}
.qzone_cont .img_list li{width:429px;height:321px;vertical-align:middle;display:table-cell}
.qzone_cont .img_list .img_link{display:block;width:429px;text-align:center;height:321px;outline:none;overflow:hidden}
.qzone_cont .scroll_img_box{margin:40px auto 0;height:16px;float:left}
.qzone_cont .scroll_img{text-align:center;width:429px}
.qzone_cont .scroll_img li{ width:10px;height:10px;background-image:url({$config_siteurl}statics/images/qzone_login.png);background-position:-663px 0;background-repeat:no-repeat;display:inline-block;margin-right:15px;cursor:pointer;*display:inline;*zoom:1;overflow:hidden}
.qzone_cont .scroll_img .current_img{ background-image:url({$config_siteurl}statics/images/admin_img/qzone_login.png);background-position:-663px -17px}
.qzone_login .login_main{margin:10px 0 0 68px;float:left;_display:inline;width:370px;overflow:hidden}
.qzone_login .login_main a{color:#3da5dc}
.login_main .login_list .input_txt{border:1px solid #d9d9d9;border-radius:3px;font-size:16px;font-family:"Microsoft Yahei",Tahoma;height:23px;width:259px;color:#666;padding:14px 0 14px 9px;margin-bottom:20px}
.login_main .login_list .input_txt:focus,.first{outline:0;box-shadow: 0 1px 10px rgba(0, 0, 0, .1);-webkit-box-shadow:0 1px 10px rgba(0, 0, 0, .1);-moz-box-shadow: 0 1px 10px rgba(0, 0, 0, .1);}
.login_main .login_list .current_input{border-color:#56bdf3;box-shadow:inset 0 1px 3px rgba(0,0,0,.2);-webkit-box-shadow:inset 0 1px 3px rgba(0,0,0,.2);-moz-box-shadow:inset 0 1px 3px rgba(0,0,0,.2)}
.login_main .login_list .login_input{position:relative;width:270px;height:73px}
.login_main .login_list .txt_default{position:absolute;font-size:16px;font-family:"Microsoft Yahei",Tahoma;color:#666;top:17px;left:10px;cursor:text}
.login_main .login_list .txt_click{color:#ccc}
.login_main .login_list .yanzhengma{position:relative;color:#666}
.login_main .login_list .yanzhengma .yanzheng_txt{margin-left:2px}
.login_main .login_list .yanzhengma .input_txt{width:139px;margin-bottom:40px}
.login_main .login_list .yanzhengma .yanzhengma_box{position:absolute;left:160px;top:0}
.login_main .login_list .yanzhengma .yanzheng_img{display:block;margin-bottom:10px}
.login_main .login_btn{ width:270px;height:48px;line-height:150px;overflow:hidden;font-size:0;*background:none;background-image:url({$config_siteurl}statics/images/loginbg.png);background-position:-486px 0;border:none;cursor:pointer}
.qzone_login .login_main nav{color:#d0d3d7;margin:20px 0 0 3px}
.qzone_login .login_main nav .sep{margin:0 12px}
.login_main .quick_login{color:#5a5b5b}
.login_main .wrong_notice{color:red;margin:0 0 10px 1px}
.login_main .login_change{margin:6px 0 0 3px}
.platform_box{margin:94px 0 0 0;width:1000px;padding-bottom:16px}
.platform_box nav{ background-image:url({$config_siteurl}statics/images/qzone_login.png);background-position:0 0;background-repeat:no-repeat;width:370px;height:52px;margin:0 auto}
.platform_box nav .platform_link{width:86px;margin:0 1px;height:52px;line-height:160px;overflow:hidden;display:inline-block;font-size:0;*margin-top:-64px}
.footer{
	position: fixed;
	bottom: 0;
	z-index: 10;
	margin: 0;
	width: 100%;
	background-color: rgba(0, 0, 0, .4);
	border: 0 none;
	background-color: #000\9;
	filter: Alpha(opacity=50);
	color:#fff;
}
.copyright,
.footer .inner{width:1000px;margin:0 auto;text-align:center; line-height: 40px;padding: 0 15px;}
.footer .links .sep{margin:0 12px;color:#d0d3d7}
.footer .copyright{width:580px;margin:0 auto}
.footer .copyright_en{margin-right:15px}
.footer .copyright_ch{float:left}
.footer .copyright_ch .copyright_link{margin-left:5px}
.wrapcal{
	overflow:hidden;
	-webkit-animation: bounceIn 600ms linear;
	-moz-animation: bounceIn 600ms linear;
	-o-animation: bounceIn 600ms linear;
	animation: bounceIn 600ms linear;
}
.wrap {
	overflow:hidden;
}
/*登录框动画*/
@-webkit-keyframes bounceIn {
	0% {
		opacity: 0;
		-webkit-transform: scale(.3);
	}

	50% {
		opacity: 1;
		-webkit-transform: scale(1.05);
	}

	70% {
		-webkit-transform: scale(.9);
	}

	100% {
		-webkit-transform: scale(1);
	}
}
@-moz-keyframes bounceIn {
	0% {
		opacity: 0;
		-moz-transform: scale(.3);
	}

	50% {
		opacity: 1;
		-moz-transform: scale(1.05);
	}

	70% {
		-moz-transform: scale(.9);
	}

	100% {
		-moz-transform: scale(1);
	}
}
@-o-keyframes bounceIn {
	0% {
		opacity: 0;
		-o-transform: scale(.3);
	}

	50% {
		opacity: 1;
		-o-transform: scale(1.05);
	}

	70% {
		-o-transform: scale(.9);
	}

	100% {
		-o-transform: scale(1);
	}
}
@keyframes bounceIn {
	0% {
		opacity: 0;
		transform: scale(.3);
	}

	50% {
		opacity: 1;
		transform: scale(1.05);
	}

	70% {
		transform: scale(.9);
	}

	100% {
		transform: scale(1);
	}
}
</style>
<script type="text/javascript">
if (window.parent !== window.self) {
	document.write = '';
	window.parent.location.href = window.self.location.href;
	setTimeout(function () {
		document.body.innerHTML = '';
	}, 0);
}
</script>
</head>
<body>
<div class="wrapcal">
<div class="wrap topfix">
   <div class="inner">
	<div class="header clearfix">
	  <div class="logo pull-left"></div>
      <h1 class="pull-left">IT100</h1>
      <div class="isign pull-right"></div>
    </div>
   </div>
</div>    
    
<div class="wrap">
  <div class="inner">
    <div class="qzone_login clearfix">
      <div class="qzone_cont" id="_pt" style="text-align:left;margin:40px 0 0 0;">
         <img src="{$config_siteurl}statics/images/login_bg.png" alt="{$Config.sitename}">
      </div>
      <!-- end qzone_cont -->
      <div class="login_main">
        <div style="width: 270px;text-align:center;margin:0 0 20px 0;font-size:26px;font-weight:bold;color:#666;">ERP系统管理后台</div>
        <p class="wrong_notice" id="err_m" style="display:none;"></p>
        <form id="loginform" method="post" name="loginform" action="{:U('Public/tologin')}"   >
          <ul class="login_list"  id="web_login">
            <li class="login_input">
              <input  value=""  id="u" name="username"  class="first input_txt" tabindex="1"   type="text" value="" placeholder="帐号" title="帐号"  />
            </li>
            <li class="login_input">
              <input maxlength=16 type="password"  id="p" name="password" tabindex="2"   class="input_txt" type="text" value=""  placeholder="密码" title="密码"/>
            </li>
            <li class="yanzhengma clearfix" id="verifytip">
                <span id="verifyinput">
              <input  id="verifycode" name="code" maxlength=5 tabindex="3" class="input_txt" type="text" value="" onfocus="$('#verifycodehint').hide();" onblur="if($('#verifycode').val()=='')$('#verifycodehint').show();" placeholder="请输入验证码" />
              </span>
              <div class="yanzhengma_box" id="verifyshow"> <img class="yanzheng_img" id="code_img" alt="" src="{:U('Api/Checkcode/index','code_len=4&font_size=20&width=130&height=50&font_color=&background=')}"><a href="javascript:document.getElementById('code_img').src='{:U('Api/Checkcode/index','code_len=4&font_size=20&width=130&height=50&font_color=&background=')}&time='+Math.random();void(0);" class="change_img">看不清，换一张</a> </div>
            </li>
            <li>
              <button type="submit" class="login_btn" tabindex="4" id="subbtn">登录</button>
            </li>
          </ul>
        </form>
        <div class="quick_login" id="qlogin"> </div>
      </div>
    </div>
    <div class="platform_box"> </div>
  </div>
</div>
<div class="footer">
  <div class="inner">
    <div class="copyright clearfix">
      <p class="copyright_en">Copyright &copy; 2013 - {$year} it100.net All Rights Reserved.</p>
    </div>
  </div>
</div>
</div>
<Admintemplate file="Admin/Common/Js"/>
<script src="{$config_siteurl}statics/js/common.js"></script>
</body>
</html>