<?php if (!defined('APP_VERSION')) exit(); ?>
<Admintemplate file="Common/Head"/>
<link href='{$config_siteurl}statics/addons/zui/dist/css/zui.min.css' rel='stylesheet' />
<body class="J_scroll_fixed">
<div class="wrap J_check_wrap">
<Admintemplate file="Common/Nav"/>
<link rel="stylesheet" href="{$config_siteurl}statics/addons/formbuilder/dist/formbuilder.css" />
<script src="http://cdn.bootcss.com/jquery/2.1.4/jquery.js"></script>
<style>
* {
    box-sizing: border-box;
}
.fb-main {
    background-color: #fff;
    border-radius: 5px;
    min-height: 600px;
}
input[type=text] {
    height: 26px;
    margin-bottom: 3px;
    width: 30% !important;
}
select {
    margin-bottom: 5px;
    font-size: 40px;
}
</style>
<div class="fa-tab-nav">
    <div class="fa-tab-navdiv">
        <ul class="nav nav-secondary ">
            <li class="active"><a href="#" class="fontwht f14">表单</a></li>
            <li><a href="#" class="fontwht f14">表格</a></li>
        </ul>
    </div>
</div>
<div class='fb-main'></div>
<script src="{$config_siteurl}statics/addons/formbuilder/vendor/js/vendor.js"></script>
<script src="{$config_siteurl}statics/addons/formbuilder/dist/formbuilder.js"></script>
<script type="text/javascript">
$(function(){
  fb = new Formbuilder({
    selector: '.fb-main',
    bootstrapData: []
  });
  fb.on('save', function(payload){
    console.log(payload);
  });
  var wh = $(window).height();
  $('.component-list').css('min-height', wh - 150);
  $('.content-list').css('min-height', wh - 150);
  $('.attr-list').css('min-height', wh - 150);
});
</script>
<span id="show"></span>
</body>
</html>