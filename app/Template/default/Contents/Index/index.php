<?php if (!defined('APP_VERSION')) exit(); ?>
<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=10,IE=9,IE=8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<title><if condition=" isset($SEO['title']) && !empty($SEO['title']) ">{$SEO['title']}</if>{$SEO['site_title']}</title>
<meta name="description" content="{$SEO['description']}" />
<meta name="keywords" content="{$SEO['keyword']}" />
<link rel='stylesheet' id='style-css'  href='{$Config.siteurl}statics/themes/default/css/style.css?ver=30830' type='text/css' media='all' />
<!--[if lt IE 9]><script src="{$Config.siteurl}statics/themes/default/js/html5.js"></script><![endif]-->

</head>
<body class="home blog">
<template file="Contents/header.php"/>
<section class="container">
  <div class="content-wrap">
    <div class="content">
      <div class="sticky">
        <h2 class="title">置顶推荐</h2>
        <ul>
         <position action="position" posid="1" cache="3600" num="6">
         <volist name="data" id="vo">
          <li class="item"><a href="{$vo.data.url}" target="_blank"><img src="<if condition=" $vo['data']['thumb'] ">{$vo.data.thumb}<else />{$Config.siteurl}statics/themes/default/images/thumbnail.png</if>" alt="{$vo.data.title}" />
            <h3>{$vo.data.title}</h3>
            <p class="muted">{$vo.data.description}</p>
            </a></li>
          </volist>
          </position>
        </ul>
      </div>
      <div class="articleCal">
      <h2 class="title">最新发布</h2>
      <content action="listsNew" catid="" order="id DESC" num="13" page="$page">
      <php>
	  $empty = '<article class="excerpt">该栏目没有内容 o(︶︿︶)o </article>';
	  </php> 
      <volist name="data" id="vo">
      <article class="excerpt">
        <div class="focus"><a href="{$vo.url}" class="thumbnail" target="_blank"><img src="<if condition=" $vo['thumb'] ">{$vo.thumb}<else />{$Config.siteurl}statics/themes/default/images/thumbnail.png</if>" alt="{$vo.title}" /></a></div>
        <header> <a class="label label-important" href="{$Categorys[$vo['catid']]['url']}">{$Categorys[$vo['catid']]['catname']}<i class="label-arrow"></i></a>
          <h2><a href="{$vo.url}" title="{$vo.title}" target="_blank">{$vo.title}</a></h2>
        </header>
        <p> <span class="muted"><i class="icon-user icon12"></i> 万能的君宝</span> <span class="muted"><i class="icon-time icon12"></i> {$vo.updatetime|date="Y-m-d H:i:s",###}</span> <span class="muted"><i class="icon-eye-open icon12"></i> {$vo.views}浏览</span> <span class="muted"><i class="icon-comment icon12"></i> <comment action="get_comment" catid="$vo['catid']" id="$vo['id']"><a href="{$vo.url}#comments">{$data.total}评论</a></comment></span></p>
        <p class="note">{$vo.description|strip_tags|str_cut=###,200}</p>
      </article>
      </volist>
      <div class="pagination"> 
        {$pages}
      </div>
     </content>
    </div>
    </div>
  </div>
  <aside class="sidebar">
    <template file="Contents/it100.php"/>
    <div class="widget d_textbanner"><a class="style03" href="#"><strong>投稿</strong>
      <h2>给我们投稿</h2>
      <p>本站接受和IT相关的文章，优质文章一定发布</p>
      </a></div>
    <div class="widget d_slidebanner">
    <position action="position" posid="2" cache="3600" num="5">
      <div class="slider-wrap" style="height:200px;">
        <ul class="slider-roll">
          <volist name="data" id="vo">
          <li class="item"><a href="{$vo.data.url}" target="_blank"><img src="<if condition=" $vo['data']['thumb'] ">{$vo.data.thumb}<else />{$Config.siteurl}statics/themes/default/images/thumbnail.png</if>" width="360" height="300"/></a></li>
          </volist>
        </ul>
      </div>
      <ol class="slider-ctrl">
        <?php
		if(!empty($data)){
			$i = 1;
			foreach($data as $k=>$r){
				
		?>
        <li>{$i}</li>
        <?php
		      $i++;
			}
		}
		?>
      </ol>
      <span class="slider-prev">&lt;</span><span class="slider-next">&gt;</span>
    </position>
    </div>
    <div class="widget d_comment">
    <comment action="lists" num="10" return="data" date="Y-m-d H:i:s">
      <h3 class="widget_tit">最新评论</h3>
      <ul>
        <volist name="data" id="vo">
        <li><a href="javascript:;;" title=""><img alt='' src='{$vo.avatar}' class='avatar avatar-36 photo' height='36' width='36' /><strong>{$vo.author}：</strong>{$vo.content|strip_tags|str_cut=###,200}</a></li>
        </volist>
      </ul>
    </comment>
    </div>
    <template file="Contents/tags.php"/>
    <div class="widget d_postlist">
      <h3 class="widget_tit"><a class="btn btn-primary" href="{$Categorys[2]['url']}">更多</a>最新发布</h3>
      <ul>
      <content action="lists" catid="50" order="id DESC" num="10">
      <volist name="data" id="vo">
        <li><a href="{$vo.url}" target="_blank"><span class="thumbnail"><img src="<if condition=" $vo['thumb'] ">{$vo.thumb}<else />{$Config.siteurl}statics/themes/default/images/thumbnail.png</if>" alt="{$vo.title}" /></span><span class="text">{$vo.title}</span><span class="muted">{$vo.updatetime|date="Y-m-d",###}</span><span class="muted"><comment action="get_comment" catid="$vo['catid']" id="$vo['id']">{$data.total}条评论</comment></span></a></li>
      </volist>
      </content>
      </ul>
    </div>
  </aside>
</section>
<template file="Contents/footer.php"/>
<script type='text/javascript' src='{$Config.siteurl}statics/js/jquery.js'></script> 
<script type='text/javascript' src='{$Config.siteurl}statics/themes/default/js/theme.js'></script>
</body>
</html>
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?7aaa2e2d0cca4c2f7e7e80797fbc1e83";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>