<?php if (!defined('APP_VERSION')) exit(); ?>
<?php 
$getMenu = AdminbaseAction::getMenu(); 
if($getMenu) {
 ?>
<div class="navpar">
<div class="nav">
  <ul class="cc">
    <?php
	foreach($getMenu as $r){
		$app = $r['app'];
		$model = $r['model'];
		$action = $r['action'];
	?>
    <li <?php echo $action==ACTION_NAME?'class="current"':""; ?>><a href="<?php echo U("".$app."/".$model."/".$action."",$r['data']);?>"><?php echo $r['name'];?></a></li>
    <?php
	}
	?>
  </ul>
  <ul class="rr">
	<li><a class="pl10" href="javascript:history.go(-1)"><i class="fa fa-reply-all"></i> 返回</a></li>
	<li><a href="javascript:location.reload(true);" class=" refresh mr10 " id="" title="刷新"><i class="fa fa-refresh" aria-hidden="true"></i> 刷新</a></li>
  </ul>
</div>
</div> 
<?php } ?>