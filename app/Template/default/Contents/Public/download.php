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
<!--[if IE 5]>
<style type="text/css">
body,html{text-align:center}
*{ text-align:left}
.header .search .text{height:26px;}
</style>
<![endif]-->
<link href="{$Config.siteurl}statics/css/reset.css" rel="stylesheet" type="text/css" />
<link href="{$Config.siteurl}statics/css/default_blue.css" rel="stylesheet" type="text/css" />
<link href="{$Config.siteurl}statics/css/download.css" rel="stylesheet" type="text/css" />
</head>
<body>
	<style type="text/css">
    	 body, html{ background:#FFF!important;}
    </style>
    	<a href="{$fileurl}" class="xzs_btn"></a>
	</body>
</html>