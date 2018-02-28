<?php if (!defined('APP_VERSION')) exit(); ?>
<div class="widget d_tag">
  <h3 class="widget_tit">文章分类</h3>
  <div class="d_tags"> 
  <tags action="top"  num="50"  order="usetimes DESC">
  
  <div class="leftDiv">
  <volist name="data" id="vo" key="key">
  	<if condition="$key%2 eq 1">
  		<a href="{$vo.url}">{$vo.tag} <span class="badge2 pull-right">{$vo.usetimes}</span></a>
  	</if>	
  </volist>
  </div>
  
  <div class="rightDiv">
  <volist name="data" id="vo" key="k">
  	<if condition="$k%2 eq 0">
  		<a href="{$vo.url}">{$vo.tag} <span class="badge2 pull-right">{$vo.usetimes}</span></a>
  	</if>	
  </volist>
  </div>
  
  </tags>
  </div>
</div>