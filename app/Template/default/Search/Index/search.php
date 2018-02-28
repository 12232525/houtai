<?php if (!defined('APP_VERSION')) exit(); ?>
<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=10,IE=9,IE=8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<title><if condition=" isset($SEO['title']) && !empty($SEO['title']) ">{$SEO['title']}</if>{$SEO['site_title']}</title>
<link rel='stylesheet' id='style-css'  href='{$Config.siteurl}statics/themes/default/css/style.css?ver=30830' type='text/css' media='all' />
<meta name="description" content="{$SEO['description']}" />
<meta name="keywords" content="{$SEO['keyword']}" />
<!--[if lt IE 9]><script src="{$Config.siteurl}statics/themes/default/js/html5.js"></script><![endif]-->

</head>
<body class="archive category category-htmlcss category-61">
<template file="Contents/header.php"/>
<section class="container">
  <div class="content-wrap">
    <div class="content">
      <header class="archive-header">
        <h1><a href="{$Categorys[$catid]['url']}">{$Categorys[$catid]['catname']}</a></h1>
        <div class="archive-header-info">
          <p>{$Categorys[$catid]['description']}</p>
        </div>
      </header>
      <php>
	  $empty = '<article class="excerpt">该栏目没有内容 o(︶︿︶)o </article>';
	  </php> 
      <volist name="result" id="vo" empty="$empty">
      <article class="excerpt">
        <div class="focus"><a href="{$vo.url}" class="thumbnail"><img src="<if condition=" $vo['thumb'] ">{$vo.thumb}<else />{$Config.siteurl}statics/themes/default/images/thumbnail.png</if>" alt="{$vo.title}" /></a></div>
        <header> <a class="label label-important" href="{$Categorys[$vo['catid']]['url']}">{$Categorys[$vo['catid']]['catname']}<i class="label-arrow"></i></a>
          <h2><a href="{$vo.url}" title="{$vo.title}">{$vo.title}</a></h2>
        </header>
        <p> <span class="muted"><i class="icon-user icon12"></i> 万能的君宝</span> <span class="muted"><i class="icon-time icon12"></i> {$vo.updatetime|date="Y-m-d H:i:s",###}</span> <span class="muted"><i class="icon-eye-open icon12"></i> {$vo.views}浏览</span> <span class="muted"><i class="icon-comment icon12"></i> <comment action="get_comment" catid="$vo['catid']" id="$vo['id']"><a href="{$vo.url}#comments">{$data.total}评论</a></comment></span></p>
        <p class="note">{$vo.description|strip_tags|str_cut=###,200}</p>
      </article>
      </volist>
      <div class="pagination"> 
        {$pages}
      </div>
    </div>
  </div>
  <aside class="sidebar">
    <template file="Contents/it100.php"/>
    <template file="Contents/reader.php"/>
    <template file="Contents/tags.php"/>
    <template file="Contents/news.php"/>
  </aside>
</section>
<template file="Contents/footer.php"/>
<script type='text/javascript' src='{$Config.siteurl}statics/js/jquery.js'></script> 
<script type='text/javascript' src='{$Config.siteurl}statics/themes/default/js/theme.js'></script>
</body>
</html>