<?php if (!defined('APP_VERSION')) exit(); ?>
<footer class="footer">
  <div class="footer-inner">
    <div class="copyright"> 版权所有，保留一切权利！ &copy; {:date('Y')} <a href="http://www.it100.net">本系统由 it100 驱动</a>&nbsp;&nbsp;&nbsp;<a href="http://www.miitbeian.gov.cn/">沪ICP备17021730号</a> </div>
    <div class="trackcode pull-right"> </div>
  </div>
</footer>
<script type="text/javascript">
window._deel = {
    name: "{$Config.sitename}",
    rss: '{$Config.siteurl}index.php?m=Rss&rssid={$catid}',
    maillist: 'on',
    maillistCode: '2c71a16adfbf60765cfd166c9ca523620d2bd7cee528ab48',
    roll: [0,0]
}
function loginStatus(){
	/*$.getJSON("{:U('Api/User/getuser','callback=?')}", function (data) {
		if (data['status']) {
			$('.speedbar .pull-right').html('<i class="icon-user icon12"></i> ' + data['username'] + ' &nbsp; <a href="{:U("Member/Index/index")}">会员中心</a> &nbsp; &nbsp; <i class="icon-off icon12"></i> <a href="{:U("Member/Index/logout")}">登出</a>');
		}
	});*/
};
</script>