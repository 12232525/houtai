<?php if (!defined('APP_VERSION')) exit(); ?>
<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=10,IE=9,IE=8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<title><if condition=" isset($SEO['title']) && !empty($SEO['title']) ">{$SEO['title']}</if>{$SEO['site_title']}</title>
<link rel='stylesheet' id='style-css'  href='{$Config.siteurl}statics/themes/default/css/style.css?ver=30830' type='text/css' media='all' />
<link rel='canonical' href='{$url}/' />
<meta name="description" content="{$SEO['description']}" />
<meta name="keywords" content="{$SEO['keyword']}" />
<!--[if lt IE 9]><script src="{$Config.siteurl}statics/themes/default/js/html5.js"></script><![endif]-->
</head>
<body class="page page-id-451 page-template page-template-pagespage-php">
<template file="Contents/header.php"/>
<section class="container">
  <div class="pagewrapper clearfix">
    <aside class="pagesidebar">
      <ul class="pagesider-menu">
        <li id="menu-item-4537" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="{:U('Member/Share/index')}">投稿</a></li>
        <li id="menu-item-4828" class="menu-item menu-item-type-post_type menu-item-object-page current_page_item"><a href="{:U('Tags/Index/index')}">标签</a></li>
        <li id="menu-item-4543" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="#">友情链接</a></li>
        <li id="menu-item-4151" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="#">广告合作</a></li>
        <li id="menu-item-3690" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="#">关于我们</a></li>
        <li id="menu-item-4545" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="#">免责声明</a></li>
        <li id="menu-item-3691" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="http://www.abc3210.com/2012/work_05/1.shtml">留言联系</a></li>
      </ul>
    </aside>
    <div class="pagecontent">
      <header class="pageheader clearfix">
        <h1 class="pull-left"> <a href="{:U('Tags/Index/index')}">标签</a> </h1>
        <div class="pull-right">
          <div class="share">
            <div id="ckepop" class="bdshare_t bds_tools get-codes-bdshare"><span class="share-tit">分享到：</span><a class="jiathis_button_qzone"></a> <a class="jiathis_button_tsina"></a> <a class="jiathis_button_tqq"></a> <a class="jiathis_button_renren"></a> <a class="jiathis_button_kaixin001"></a> <a href="http://www.jiathis.com/share" class="jiathis jiathis_txt jtico jtico_jiathis" target="_blank"></a></div>
          </div>
        </div>
      </header>
      <ul class="tag-clouds">
      <volist name="list" id="vo">
        <li><a class="btn btn-mini" href="{$vo.url}">{$vo.tag}</a><strong>x {$vo.usetimes}</strong><br>
          <a href="{$vo.info.url}">{$vo.info.title}</a><br>
          <span class="muted">{$vo.lastusetime|date="Y-m-d",###}</span class="muted"></li>
      </volist>
      </ul>
    </div>
  </div>
</section>
<template file="Contents/footer.php"/>
<script type='text/javascript' src='{$Config.siteurl}statics/js/jquery.js'></script>
<script type='text/javascript' src='{$Config.siteurl}statics/themes/default/js/theme.js'></script>
<script type="text/javascript" src="http://v2.jiathis.com/code/jia.js" charset="utf-8"></script>
</body>
</html>