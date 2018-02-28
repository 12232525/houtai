<?php if (!defined('APP_VERSION')) exit(); ?>
<div class="widget d_postlist">
  <h3 class="widget_tit">最新发布</h3>
  <ul>
    <content action="lists" catid="$catid" order="id DESC" num="10">
      <volist name="data" id="vo">
        <li>
        		<a href="{$vo.url}" target="_blank">
        				<div class="pull-left">
        					<span class="thumbnail">
	        					<img src="<if condition=" $vo['thumb'] ">{$vo.thumb}<else />{$Config.siteurl}statics/themes/default/images/thumbnail.png</if>" alt="{$vo.title}" />
	        				</span>
        				</div>
        				<div class="pull-left">
	        				<span class="text">{$vo.title}</span>
	        				<span class="muted">{$vo.updatetime|date="Y-m-d",###}</span>
	        				<span class="muted">
	        						<comment action="get_comment" catid="$vo['catid']" id="$vo['id']">{$data.total}条评论</comment>
	        				</span>
        				</div>
        		</a>
        </li>
      </volist>
     </content>
  </ul>
</div>