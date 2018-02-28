<?php if (!defined('APP_VERSION')) exit(); ?><div class="subnav">
  <div class="content-menu ib-a blue line-x"> 
  <if condition="$appinfo['action'] eq 'index' ">
  <a href='javascript:;' class="on"><em>管理分类</em></a><span>|</span>
  <else />
  <a href='{:U("Category/index")}'><em>管理分类</em></a><span>|</span>
  </if>
  <if condition="$appinfo['action'] eq 'add' ">
  <a href='javascript:;' class="on" ><em>添加分类</em></a><span>|</span>
  <else />
  <a href='{:U("Category/add")}' ><em>添加分类</em></a><span>|</span>
  </if>
  <if condition="$appinfo['action'] eq 'wadd' ">
  <a href='javascript:;' class="on" ><em>添加外部链接</em></a><span>|</span>
  <else />
  <a href='{:U("Category/wadd",array("type"=>2))}' ><em>添加外部链接</em></a><span>|</span>
  </if>
  <a href='{:U("Category/public_cache")}' ><em>更新分类缓存</em></a>
  </div>
</div>