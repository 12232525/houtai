<?php if (!defined('APP_VERSION')) exit(); ?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<title>查看{$category.catname} - 系统后台 - {$Config.sitename} - by AppCMS</title>
<link href='{$config_siteurl}statics/addons/zui/dist/css/zui.css' rel='stylesheet' />
<Admintemplate file="Admin/Common/Cssjs"/>
<link href="{$config_siteurl}statics/addons/css/iCheck/skins/square/blue.css" rel="stylesheet">
<style type="text/css">
.btn_wrap {bottom:0;}
.col-auto {
	overflow: hidden;
	_zoom: 1;
	_float: left;
}
.col-right {
	float: right;
	width: 210px;
	overflow: hidden;
	margin-left: 6px;
}

body fieldset {
	border: 1px solid #D8D8D8;
	padding: 10px;
	background-color: #FFF;
}
body fieldset legend {
    background-color: #F9F9F9;
    border: 1px solid #D8D8D8;
    font-weight: 700;
    padding: 3px 8px;
}
.list-dot{ padding-bottom:10px}
.list-dot li,.list-dot-othors li{padding:5px 0; border-bottom:1px dotted #c6dde0; font-family:"宋体"; color:#bbb; position:relative;_height:22px}
.list-dot li span,.list-dot-othors li span{color:#004499}
.list-dot li a.close span,.list-dot-othors li a.close span{display:none}
.list-dot li a.close,.list-dot-othors li a.close{ background: url("{$config_siteurl}statics/images/cross.png") no-repeat left 3px; display:block; width:16px; height:16px;position: absolute;outline:none;right:5px; bottom:5px}
.list-dot li a.close:hover,.list-dot-othors li a.close:hover{background-position: left -46px}
.list-dot-othors li{float:left;width:24%;overflow:hidden;}
</style>

</head>
<body class="J_scroll_fixed">
<div class="wrap J_check_wrap">
	
<div id="navShow"></div>
<script type="text/javascript">
$(function () {
   var modid = "{$modid}";
   var id = "{$id}";
   var param = "modid="+modid+"&id="+id;
   $.get("{:U('Admin/RbacModule/ajaxNavShow')}", param, function(data){
   		$('#navShow').html(data);
   		$('#navList :first-child').addClass('active');
   }, 'html');
});
</script>
  
  <form name="myform" id="myform" action="{:U("Contents/ContentsModel/view")}" method="post" class="J_ajaxForms">
  <div class="col-right">
    <div class="table_full">
      <table width="100%">
		<?php
		if(is_array($forminfos['senior'])) {
		 foreach($forminfos['senior'] as $field=>$info) {
			if($info['isomnipotent']) continue;
			if($info['formtype']=='omnipotent') {
				foreach($forminfos['base'] as $_fm=>$_fm_value) {
					if($_fm_value['isomnipotent']) {
						$info['form'] = str_replace('{'.$_fm.'}',$_fm_value['form'],$info['form']);
					}
				}
				foreach($forminfos['senior'] as $_fm=>$_fm_value) {
					if($_fm_value['isomnipotent']) {
						$info['form'] = str_replace('{'.$_fm.'}',$_fm_value['form'],$info['form']);
					}
				}
			}
		 ?>
         <tr>
          <td><b><?php echo $info['name']?></b><?php if($info['star']){ ?><font color="red">*</font><?php } ?></td>
        </tr>
        <tr>
          <td><?php echo $info['form'];?><?php echo $info['tips'];?></td>
        </tr>
		<?php
		   }
		}
		?>
         <tr>
          <td><b>状态</b></td>
        </tr>
        <tr>
          <td>
          <span class="switch_list cc">
			<label><input type="radio" name="info[status]" value="99" <if condition=" $data['status']==99 "> checked</if>><span>审核通过</span></label>
			<label><input type="radio" name="info[status]" value="1"  <if condition=" $data['status']==1 "> checked</if>><span>待审核</span></label>
		 </span></td>
        </tr>
      </table>
    </div>
  </div>
  <div class="col-auto"  style="margin-bottom: 30px;">
    <div class="h_a">{$category.catname}内容</div>
    <div class="table_full">
      <table width="100%">
            <?php
			if(is_array($forminfos['base'])) {
			 foreach($forminfos['base'] as $field=>$info) {
				 if($info['isomnipotent']) continue;
				 if($info['formtype']=='omnipotent') {
					foreach($forminfos['base'] as $_fm=>$_fm_value) {
						if($_fm_value['isomnipotent']) {
							$info['form'] = str_replace('{'.$_fm.'}',$_fm_value['form'],$info['form']);
						}
					}
					foreach($forminfos['senior'] as $_fm=>$_fm_value) {
						if($_fm_value['isomnipotent']) {
							$info['form'] = str_replace('{'.$_fm.'}',$_fm_value['form'],$info['form']);
						}
					}
                 }

			 ?>
            <tr>
              <th width="130">
                <?php echo $info['name'];?> 
               </th>
              <td><?php if($info['star']){ ?><span class="must_red">*</span><?php } ?><?php echo $info['form'];?> <?php echo $info['tips'];?></td>
            </tr>
            <?php
			} }
			?>
        <!--<tr>
          <th>标题</th>
          <td><span class="must_red">*</span>
            <input name="subject" type="text" class="input length_6" placeholder="请输入标题">
            <span generated="true" class="tips_error">错误提示</span></td>
        </tr>-->
        </tbody>
      </table>
    </div>
  </div>
  <div class="btn_wrap" style="z-index:999;text-align: center;">
    <div class="btn_wrap_pd">
      <input value="{$id}" type="hidden" name="id">
      <input type="hidden" name="info[modid]" id="info[modid]" value="{$modid}" />
      <input type="hidden" name="modid" value="{$modid}" />
      <input type="hidden" name="ajax" value="1" />
      <button class="btn btn-success J_ajax_close_btn" type="submit"><i class="icon icon-reply-all"></i> 关闭并返回列表</button>
    </div>
  </div>
  </form>
</div>
<script type="text/javascript" src="{$config_siteurl}statics/js/common.js"></script>
<script type="text/javascript" src="{$config_siteurl}statics/js/content_addtop.js"></script>
<script src="{$config_siteurl}statics/addons/jquery/iCheck/icheck.min.js"></script>

<script type="text/javascript"> 
$(function () {
	$('input').iCheck({
	    checkboxClass: 'icheckbox_square-blue',
	    radioClass: 'iradio_square-blue',
	    increaseArea: '-10%' // optional
	});
	
	$('input,textarea').attr({'disabled':'disabled'});
	$(".J_ajax_close_btn").on('click', function (e) {
	    e.preventDefault();
	    
	    layer.confirm('您确定关闭当前页面吗？', {
		  btn: ['确定','取消'], //按钮
		  icon: 3,
		}, function(){
		  var index = parent.layer.getFrameIndex(window.name);
    	  parent.layer.close(index);
		}, function(){
		  
		});
	    
	});
    
});
</script>
</body>
</html>