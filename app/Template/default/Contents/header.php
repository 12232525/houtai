<?php if (!defined('APP_VERSION')) exit(); ?>
<header class="header">
  <div class="clearfix navbar">
    <h1 class="logo">
    	<a href="{$Config.siteurl}" title="{$Config.sitename} - &#8211;{$SEO['description']}">
    		<img src="{$Config.siteurl}statics/themes/default/images/logo.png" width="105" height="60">
    	</a>
    </h1>
    <ul class="nav">
      <li id="menu-item-0" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-0"><a href="{$Config.siteurl}">首页</a></li>
    <content action="category" catid="0"  order="listorder ASC" >
    <volist name="data" id="vo">
      <li id="menu-item-{$vo.catid}" class="menu-item menu-item-type-taxonomy menu-item-object-category <if condition="in_array($catid,explode(',',$vo['arrchildid'])) && $catid"> current-menu-item </if> menu-item-{$vo.catid}"><a href="{$vo.url}">{$vo.catname}</a>
        <if condition=" $vo['child'] ">
        <content action="category" catid="$vo['catid']"  order="listorder ASC" >
        <ul class="sub-menu">
          <volist name="data" id="r">
          <li id="menu-item-{$r.catid}" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-{$r.catid}"><a href="{$r.url}">{$r.catname}</a></li>
          </volist>
        </ul>
        </content>
        </if>
      </li>
    </volist>
    </content>
     	 <li class="menu-item menu-item-type-taxonomy menu-item-object-category" style="display:none">
     	 		<a target="_blank" href="http://www.wske.com.cn/">微商客</a>
     	 </li>
    </ul>
    
  </div>
</header>
<div class="speedbar">
  <div class="tipsdiv mb10 clearfix">
    <div class="toptip pull-left"><strong class="text-success f14">最新消息：</strong><template file="Contents/xiaoxi.php"/> </div>
    <div class="menu pull-right mr10">
      <form method="post" class="dropdown search-form" action="{:U('Search/Index/index')}" >
        <input class="search-input mt0" style="margin:0;" name="q" type="text" placeholder="输入关键字搜索" autofocus x-webkit-speech="">
        <input class="btn btn-success search-submit" type="submit" value="搜索">
        <ul class="dropdown-menu search-suggest">
        </ul>
      </form>
      <div class="btn-group pull-left">
        <button class="btn btn-primary" data-toggle="modal" data-target="#feed">订阅</button>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</div>

<div class="speedbar">
	<div class="widget d_tag">
  	<h3 class="widget_tit">精选推荐</h3>
	  <div class="d_tags"> 
		  <tags action="top"  num="10"  order="usetimes DESC">
		  <volist name="data" id="vo">
		  <a href="{$vo.url}">{$vo.tag} ({$vo.usetimes})</a> 
		  </volist>
		  </tags>
	  </div>
  </div>
</div>