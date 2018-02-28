<?php if (!defined('APP_VERSION')) exit(); ?>
<div class="widget d_reader">
      <h3 class="widget_tit"><a class="btn btn-primary" href="javascript:;;">读者墙</a>活跃读者</h3>
      <get sql="SELECT `id`,`comment_id`,`author`,`author_url`,`author_email`,`user_id`,count(*) as tongj FROM `it100_comments` group by `author_email` order by tongj desc" num="16">
      <ul>
      <volist name="data" id="vo">
        <li><a title="[{$vo.author}] 近期点评{$vo.tongj}次" target="_blank"><img alt='' src='{$Config.siteurl}api.php?m=avatar&a=gravatar&email={$vo.author_email}' class='avatar avatar-36 photo' height='36' width='36' /></a></li>
      </volist>
      </ul>
      </get>
    </div>