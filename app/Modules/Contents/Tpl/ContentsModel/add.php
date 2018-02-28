<?php if (!defined('APP_VERSION')) exit(); ?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<title>添加{$category.catname} - 系统后台 - {$Config.sitename} - by AppCMS</title>
<Admintemplate file="Admin/Common/Cssjs"/>
<script type="text/javascript">
    var modid = "{$modid}";
</script>
<style type="text/css">
.btn_wrap {bottom:0;}
.col-auto {
	width: 80%;
	_zoom: 1;
	_float: left;
}
.col-right {
	float: right;
	width: 19%;
	overflow: hidden;
	margin-left: 6px;
}

body fieldset {
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
	
  <div class="navpar">
	  <div class="nav">
	    <ul class="cc">
	      <li class="current"><a href="{:U('Contents/ContentsModel/classlist', array('modid'=>$modid)  )}">{$category.catname}列表</a></li>
	    </ul>
	  </div>
  </div>
   
  <form name="myform" id="myform" action="{:U("Contents/ContentsModel/add")}" method="post" class="J_ajaxForms" enctype="multipart/form-data">
  <div class="col-right">
    <div class="table_full">
      <table width="100%">
<?php
if(is_array($forminfos['senior'])) {
  $isShow = true; //判断是否显示
  foreach($forminfos['senior'] as $field=>$info) {
    $isShow = true;
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
	}elseif($info['formtype']=='hidden') {
        $isShow = false; //判断是否显示
    }
 ?>
         <tr <?php if ($isShow){ ?>style=""<?php }else{?>style="display: none;"<?php }?>>
          <td><b><?php echo $info['name']?></b><?php if($info['star']){ ?><font color="red">*</font><?php } ?></td>
        </tr>
        <tr <?php if ($isShow){ ?>style=""<?php }else{?>style="display: none;"<?php }?>>
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
          	<input type="hidden" name="info[modid]" id="info[modid]" value="{$modid}" />
			<label><input type="radio" name="info[status]" value="99" checked><span>审核通过</span></label>
			<label><input type="radio" name="info[status]" value="1"  ><span>待审核</span></label>
		 </span></td>
        </tr>
      </table>
    </div>
  </div>
  <div class="col-auto" style="margin-bottom: 30px;">
    <div class="h_a">{$category.catname}内容</div>
    <div class="table_full">
      <table width="100%">
            <?php
if(is_array($forminfos['base'])) {
 $isShow = true; //判断是否显示
 foreach($forminfos['base'] as $field=>$info) {
     $isShow = true;
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
     }elseif($info['formtype']=='hidden') {
         $isShow = false; //判断是否显示
     }
 ?>
            <tr>
              <th width="130">
                <?php echo $info['name'];?> 
               </th>
              <td>
              	<?php if($info['star']){ ?><span class="must_red">*</span><?php } ?>
              	<?php echo $info['form'];?>
              	<?php if($info['tips']){ ?>		 
              		<span class="line28 ml5"><?php echo $info['tips'];?></span>	
              	<?php } ?>
              </td>
            </tr>
        <?php
         }
        }
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
      <input type="hidden" name="ajax" value="1" />
      <button class="btn btn_submit J_ajax_submit_btn" type="submit"><i class="fa fa-floppy-o" aria-hidden="true"></i> 提交</button>
      <button class="btn J_ajax_close_btn" type="button"><i class="fa fa-times" aria-hidden="true"></i> 关闭</button>
    </div>
  </div>
  <input type="hidden" name="modid" value="{$modid}"/>
  </form>
</div>
<script type="text/javascript" src="{$config_siteurl}statics/js/common.js?v"></script>
<script type="text/javascript" src="{$config_siteurl}statics/js/content_addtop.js"></script>

<link href="{$config_siteurl}statics/addons/css/iCheck/skins/square/blue.css" rel="stylesheet">
<script src="{$config_siteurl}statics/addons/jquery/iCheck/icheck.min.js"></script>
<link href='{$config_siteurl}statics/addons/css/chosen/chosen.css' rel='stylesheet' />
<script src='{$config_siteurl}statics/addons/jquery/chosen/chosen.jquery.js'></script> 

<script type="text/javascript"> 
$(function () {
	$('.table_full select').chosen({
   	 	no_results_text: '没有找到',    // 当检索时没有找到匹配项时显示的提示文本
    	disable_search_threshold: 10, // 10 个以下的选择项则不显示检索框
    	search_contains: true,         // 从任意位置开始检索
    	width:"30%"
	});
	
	$('input').iCheck({
	    checkboxClass: 'icheckbox_square-blue',
	    radioClass: 'iradio_square-blue',
	    increaseArea: '-10%' // optional
	});
	
	$(".J_ajax_close_btn").on('click', function (e) {
	    layer.confirm('您确定关闭当前页面吗？', {
		  btn: ['确定','取消'], //按钮
		  icon: 3,
		}, function(){
		  setCookie("refersh_time",1);
		  var index = parent.layer.getFrameIndex(window.name);
    	  parent.layer.close(index);
		}, function(){
		  
		});
	});
    Wind.use('validate', 'ajaxForm', 'artDialog', function () {
		//javascript
        {$formJavascript}
        var form = $('form.J_ajaxForms');
        //ie处理placeholder提交问题
        if ($.browser.msie) {
            form.find('[placeholder]').each(function () {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                }
            });
        }
        //表单验证开始
        form.validate({
			//是否在获取焦点时验证
			onfocusout:false,
			//是否在敲击键盘时验证
			onkeyup:false,
			//当鼠标掉级时验证
			onclick: false,
            //验证错误
            showErrors: function (errorMap, errorArr) {
				//errorMap {'name':'错误信息'}
				//errorArr [{'message':'错误信息',element:({})}]
				try{
					$(errorArr[0].element).focus();
					art.dialog({
						id:'error',
						icon: 'error',
						lock: true,
						fixed: true,
						background:"#CCCCCC",
						opacity:0,
						content: errorArr[0].message,
						cancelVal: '确定',
						cancel: function(){
							$(errorArr[0].element).focus();
						}
					});
				}catch(err){
				}
            },
            //验证规则
            rules: {$formValidateRules},
            //验证未通过提示消息
            messages: {$formValidateMessages},
            //给未通过验证的元素加效果,闪烁等
            highlight: true,
            //是否在获取焦点时验证
            onfocusout: false,
            //验证通过，提交表单
            submitHandler: function (forms) {
				var dialog = art.dialog({id: 'loading',fixed: true,lock: true,background: "#CCCCCC",opacity: 0,esc:false,title: false});
                $(forms).ajaxSubmit({
                    url: form.attr('action'), //按钮上是否自定义提交地址(多按钮情况)
                    dataType: 'json',
                    beforeSubmit: function (arr, $form, options) {
                        
                    },
                    success: function (data, statusText, xhr, $form) {
						dialog.close();
                        if(data.status){
							layer.confirm(data.info, {
							  	btn: ['继续操作','关闭当前窗口'],//按钮，
							  	icon: 1,
							}, function(index){
							    layer.close(index);
							}, function(){
							  	setCookie("refersh_time",1);
							  	var index = parent.layer.getFrameIndex(window.name);
					    	  	parent.layer.close(index);
							});
							
							/**
							//添加成功
							Wind.use("artDialog", function () {
							    art.dialog({
							        id: "succeed",
							        icon: "succeed",
							        fixed: true,
							        lock: true,
							        background: "#CCCCCC",
							        opacity: 0,
							        content: data.info,
									button:[
										{
											name: '继续添加？',
											callback:function(){
												reloadPage(window);
												return true;
											},
											focus: true
										},{
											name: '关闭当前页面',
											callback:function(){
												window.close();
												return true;
											}
										}
									]
							    });
							});*/
						}else{
							isalert(data.info);
						}
                    }
                });
            }
        });
    });
});
</script>
</body>
</html>