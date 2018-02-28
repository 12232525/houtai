<?php if (!defined('APP_VERSION')) exit(); ?>
<Admintemplate file="Common/Head"/>
<link href='{$config_siteurl}statics/addons/zui/dist/css/zui.min.css' rel='stylesheet' />
<style>
  .pcolorDef{
  	background: #03B8CF;text-align: center;
  }
	.pcolor0{
		background: #0099CC;text-align: center;
	}
	.pcolor1{
		background: #3399CC;text-align: center;
	}
	.pcolor2{
		background: #336699;text-align: center;
	}
	.pcolor3{
		background: #99CC33;text-align: center;
	}
	.pcolor4{
		background: #003366;text-align: center;
	}
	.pcolor5{
		background: #666699;text-align: center;
	}
</style>
<body>
<div class="wrap J_check_wrap">
  <Admintemplate file="Common/Nav"/>
  
  <section>
   <article>
    <div contenteditable="false" spellcheck="false" class="example">
    <div class="list">
      <header>
        <h3><i class="icon-list-ul icon-border-circle"></i> 插件模块 &nbsp;<small>{$count} 个</small></h3>
      </header>
      <section class="cards">
        
<?php 
	if (is_array($data)){
		foreach ($data as $key => $d){
				$realLogoPath = APP_PATH . C("APP_GROUP_PATH"). '/'.$d.'/'.'images/logo.png';
				$logoPath =  '/app/' . C("APP_GROUP_PATH"). '/'.$d.'/'.'images/logo.png';
				$rd = $key%6;
			if (array_key_exists($d, $modules)) {
	?>   
	
	<div class="col-md-4 col-sm-6 col-lg-3">
          <div class="card">
          	<?php if(file_exists($realLogoPath)){ ?>
          		<div class="pcolor<?php echo $rd; ?>"><img src="<?php echo $logoPath; ?>"></div>
          	<?php }else{?>
          		<div class="pcolorDef"><img src="<?php echo $config_siteurl ?>statics/images/plugin/plugin.png"></div>
          	<?php } ?>
            <span class="caption">模块目录：<?php echo $d?></span>
            <div class="card-heading">
	            <a href="javascript:void(0);" class="fl"><strong><?php echo $modules[$d]['name']?></strong></a>
	            <span class="fr">版本号：<?php echo $modules[$d]['version']?></span>
	            <div class="clear"></div>
            </div>
            <div class="card-content text-muted">
            	<span class="fl">安装：<?php echo $modules[$d]['installdate']?></span>
            	<span class="fr">更新：<?php echo $modules[$d]['updatedate']?></span>
            	<div class="clear"></div>
            </div>
            <div class="card-actions">
            	
            	 <?php if ($modules[$d]['iscore']) {?>
					    			<a disabled href="javascript:;" class="btn disabled"><i class="icon-cogs pr5"></i>禁止</a>
					    <?php } else {?>
					    			<a class="J_ajax_uninstall btn btn-danger" href="<?php echo U('Module/uninstall', array('module'=>$d)  );?>">
					    					<i class="icon-minus-sign"></i><font class="pl5">卸载</font>
					    			</a>
					    <?php }?>	
            	
            </div>
          </div>
        </div>
	
		<?php 
			} else {  
				$moduel = $isinstall = $modulename = '';
				if (file_exists(APP_PATH . C("APP_GROUP_PATH"). DIRECTORY_SEPARATOR.$d.DIRECTORY_SEPARATOR.'Install'.DIRECTORY_SEPARATOR.'Config.inc.php')) {
					require APP_PATH . C("APP_GROUP_PATH"). DIRECTORY_SEPARATOR.$d.DIRECTORY_SEPARATOR.'Install'.DIRECTORY_SEPARATOR.'Config.inc.php';
					$isinstall = "安装";
				} else {
					$module = "未知";
					$isinstall = "无法安装";
				}
			?>
	
        <div class="col-md-4 col-sm-6 col-lg-3">
          <div class="card">
            <?php if(file_exists($realLogoPath)){ ?>
          		<div class="pcolor<?php echo $rd; ?>"><img src="<?php echo $logoPath; ?>"></div>
          	<?php }else{?>
          		<div class="pcolorDef"><img src="<?php echo $config_siteurl ?>statics/images/plugin/plugin.png"></div>
          	<?php } ?>
            <span class="caption">模块目录：<?php echo $d?></span>
            <div class="card-heading">
	            <a href="javascript:void(0);" class="fl"><strong><?php echo $modulename?></strong></a>
	            <span class="fr">版本号：未知</span>
	            <div class="clear"></div>
            </div>
            <div class="card-content text-muted">
            	<span class="fl">安装日期：未知</span>
            	<span class="fr">更新日期：未安装</span>
            	<div class="clear"></div>
            </div>
            
            <div class="card-actions">
            	
            <?php if ($isinstall!="无法安装") {?> 
            		<a class="btn btn-primary" href="<?php echo U('Module/install', array('module'=>$d)  );?>">
            				<i class="icon-plus-sign"></i><font class="pl5" color=""><?php echo $isinstall?></font>
            		</a>		
           	<?php } else {?>
           					<font color="#009933"><?php echo $isinstall?></font>
           	<?php }?>
              
            </div>
          </div>
        </div>
        
      <?php 
		}
	}
}
?>  
        
      </section>
      <div class="p10"><div class="pages"> {$Page} </div> </div>
    </div>
  </div>
  </article>
</section>
  
</div>
<script src="{$config_siteurl}statics/js/common.js?v"></script>
<script>
if ($('a.J_ajax_uninstall').length) {
    Wind.use('artDialog', function () {
        $('.J_ajax_uninstall').on('click', function (e) {
            e.preventDefault();
            var $_this = this,
                $this = $($_this),
                href = $this.prop('href'),
                msg = $this.data('msg');
            art.dialog({
                title: false,
                icon: 'question',
                content: '确定要卸载吗？',
                follow: $_this,
                close: function () {
                    $_this.focus();; //关闭时让触发弹窗的元素获取焦点
                    return true;
                },
                ok: function () {
                    $.getJSON(href).done(function (data) {
                        if (data.state === 'success') {
                            if (data.referer) {
                                location.href = data.referer;
                            } else {
                                reloadPage(window);
                            }
                        } else if (data.state === 'fail') {
                            art.dialog.alert(data.info);
                        }
                    });
                },
                cancelVal: '关闭',
                cancel: true
            });
        });

    });
}
</script>
</body>
</html>