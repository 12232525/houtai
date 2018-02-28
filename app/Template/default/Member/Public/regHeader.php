<?php if (!defined('APP_VERSION')) exit(); ?>
<div class="header">
  <div class="header_con">
  	<div class="fl logocal">
    	<div class="logo"> </div>
    	<if condition="!$isReg">
    		<div class="wellogin"> </div>
    	<else/>
    		<div class="logo-title">欢 迎 注 册</div>
    	</if>
    </div>
    <div class="right"> <a class="home" href="{$Config.siteurl}">网站首页</a>
      <p>|</p>
      <a class="help"href="http://www.abc3210.com" target="_blank">帮助中心</a> </div>
  </div>
</div>