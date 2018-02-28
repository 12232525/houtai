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
<link rel="stylesheet" href="{$Config.siteurl}statics/js/ueditor/third-party/SyntaxHighlighter/shCoreDefault.css">
<meta name="description" content="{$SEO['description']}" />
<meta name="keywords" content="{$SEO['keyword']}" />
<!--[if lt IE 9]><script src="{$Config.siteurl}statics/themes/default/js/html5.js"></script><![endif]-->
<script type="text/javascript">
//全局变量
var GV = {
    DIMAUB: "{$Config.siteurl}",
    JS_ROOT: "statics/js/"
};
</script>
<style type="text/css">
	.syntaxhighlighter td.code .container .index0{
		margin-top: 10px !important;
	}
</style>
</head>
<body class="single single-post postid-5067 single-format-standard">
<template file="Contents/header.php"/>
<section class="container">
  <div class="content-wrap">
    <div class="content">
     <div class="bor1">
      <header class="article-header">
        <h1 class="article-title"><a href="{$url}">{$title}</a></h1>
        <div class="meta"> <span class="muted"><a href="{$Categorys[$catid]['url']}"><i class="icon-list-alt icon12"></i> {$Categorys[$catid]['catname']}</a></span>
          <time class="muted"><i class="ico icon-time icon12"></i> {$updatetime}</time>
          <span class="muted"><i class="ico icon-eye-open icon12"></i> <span id="hits">0</span>浏览</span> <span class="muted"><i class="icon-comment icon12"></i> <a href="#comments"><comment action="get_comment" catid="$catid" id="$id">{$data.total}评论</comment></a></span> </div>
      </header>
      <article id="articleContent" class="article-content">
        {$content}
        <if condition=" !empty($pages) ">
		<div class="pagination">{$pages}</div>
        </if>
        <p>转载请注明：<a href="{$Config.siteurl}">{$Config.sitename}</a> &raquo; <a href="{$url}">{$title}</a></p>
      </article>
      <if condition=" !empty($download) ">
       <div class="">	
         <nav class="article-nav download-nav"> 
 	 		<img class="pull-left" width="60" height="60" src="{$Config.siteurl}statics/images/download.jpg"/>
 	 		<span class="pull-left article-nav-prev ml10" style=" line-height: 60px;color:#428bca;">
 	 			<font class="f18">效果下载列表：</font>
     	 		<volist name="download" id="vo">
     	 		 	<a href="{$vo.fileurl}" target="_blank" style="border-radius:20px; padding: 10px 15px;margin: 0px 5px;font-size:14px;color: #eee;background-color: #428bca;" title="下载所需积分{$vo.point}">{$vo.filename}</a>
     	    	</volist>
     	    </span> 
         </nav>
        </div>
      </if>
      <footer class="article-footer">
        <div class="article-tags">继续浏览有关 
        <?php
		  $_key=array();
		  foreach($tags as $k){
			   $_key[]='<a href="'.$k['url'].'" target="_blank">'.$k['tag'].'</a>';
		  }
		  echo join(",",$_key);
           ?>
         的文章</div>
        <div class="share">
          <div id="ckepop" class="bdshare_t bds_tools get-codes-bdshare">
        <div class="bdsharebuttonbox"><a href="#" class="bds_more" data-cmd="more"></a><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a><a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a><a href="#" class="bds_evernotecn" data-cmd="evernotecn" title="分享到印象笔记"></a><a href="#" class="bds_youdao" data-cmd="youdao" title="分享到有道云笔记"></a></div>
<script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"32"},"share":{},"image":{"viewList":["qzone","tsina","tqq","weixin","sqq","evernotecn","youdao"],"viewText":"分享到：","viewSize":"16"},"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["qzone","tsina","tqq","weixin","sqq","evernotecn","youdao"]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</script>
          </div>
          
        </div>
      </footer>
      <nav class="article-nav"> <span class="article-nav-prev">上一篇：<pre target="1" msg="已经没有了" /></span> <span class="article-nav-next">下一篇：<next target="1" msg="已经没有了" /></span> </nav>
      <content action="relation" relation="$relation" catid="$catid"  order="id DESC" num="4" keywords="$keywords" nid="$id">
      <if condition=" $data ">
      <div class="relates">
        <h3><img src="{$Config.siteurl}statics/images/rel.jpg" width="30" height="30" class="mr5"><font class="f16">推荐相关的文章</font></h3>
        <ul>
          <volist name="data" id="vo">
          <li><a href="{$vo.url}" target="_blank"><img style="height:110px;" src="<if condition=" $vo['thumb'] ">{$vo.thumb}<else />{$Config.siteurl}statics/themes/default/images/thumbnail.png</if>" width="150" height="110" alt="{$vo.title}" /><br>
            {$vo.title}</a></li>
         </volist>
        </ul>
      </div>
      </if>
      </content>
      <div id="ds-reset" class="commentlist">
      </div>
     </div>
    </div>
  </div>
  <aside class="sidebar">
    <template file="Contents/it100.php"/>
    <div class="widget d_banner">
    </div>
    <template file="Contents/news.php"/>
    <template file="Contents/tags.php"/>
    <template file="Contents/reader.php"/>
  </aside>
</section>
<template file="Contents/footer.php"/>
<script type='text/javascript' src='{$Config.siteurl}statics/js/jquery.js'></script> 
<script type='text/javascript' src="{$Config.siteurl}statics/js/wind.js"></script>
<script type='text/javascript' src='{$Config.siteurl}statics/themes/default/js/theme.js'></script>
<script type="text/javascript" src="{$Config.siteurl}statics/js/ajaxForm.js"></script>
<script>
//评论
var commentsQuery = {
    'catid': '{$catid}',
    'id': '{$id}',
    'size': 10
};
(function () {
    var ds = document.createElement('script');
    ds.type = 'text/javascript';
    ds.async = true;
    ds.src = GV.DIMAUB+'statics/js/comment/embed.js';
    ds.charset = 'UTF-8';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
})();
jQuery(document).ready(function($) {
	//点击
	$.get("{$Config.siteurl}api.php?m=Hits&catid={$catid}&id={$id}", function (data) {
	    $("#hits").html(data.views);
	}, "json");
	//代码高亮
	/*if($("div.article-entry pre").length){
		Wind.css('{$Config.siteurl}statics/js/ueditor/third-party/SyntaxHighlighter/shCoreDefault.css');
		Wind.use('{$Config.siteurl}statics/js/ueditor/third-party/SyntaxHighlighter/shCore.js', function () {
			SyntaxHighlighter.highlight();
		});
	}*/
});
</script> 
<script type="text/javascript" src="{$Config.siteurl}statics/js/ueditor/third-party/SyntaxHighlighter/shCore.js"></script>
<script type="text/javascript">
    SyntaxHighlighter.all();
</script>

</body>
</html>