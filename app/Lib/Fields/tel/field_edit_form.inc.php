<table cellpadding="2" cellspacing="1" width="98%">
    <tr> 
        <td width="100">电话长度</td>
        <td><input type="text" name="setting[size]" value="<?php echo $setting['size']; ?>" size="10" class="input-text"></td>
    </tr>
    <tr> 
        <td>默认值</td>
        <td><input type="text" name="setting[defaultvalue]" value="<?php echo $setting['defaultvalue']; ?>" size="40" class="input-text"></td>
    </tr>
    <tr> 
        <td>是否为手机号码</td>
        <td><input type="radio" name="setting[ismobile]" value="1" <?php if ($setting['ismobile']) echo 'checked'; ?>> 是 <input type="radio" name="setting[ismobile]" value="0" <?php if (!$setting['ismobile']) echo 'checked'; ?>> 否</td>
    </tr>
    <tr> 
        <td>多元化效果</td>
        <td>
        	<div class="bor2 pt10 pl10 pb10">
        		
        		<div class="mt10 clearfix bd-bottom pb10">
        			<div class="pull-left line26">最终效果：</div>
	        		<div class="pull-left input-group">
					  <span class="pull-left input-group-addon">
				  		<font id="preicon" class="">
				  			<?php if($setting['ficon']){?>
			  		   			<i class="fa <?php echo $setting['ficon']; ?>"></i>	
				  			<?php }else{ ?>
				  				首位图标
				  			<?php } ?>
				  		</font>
				  		<font id="pretext">
				  			<?php if($setting['ftext']){ echo $setting['ftext']; }else{ ?>
				  				+文字
				  			<?php } ?>
			  			</font>
					  </span>
					  <input type="text" size="50" class="form-control" aria-label="" value="">
					  <span class="pull-left input-group-addon">
					  	<font id="suficon" class="">
				  			<?php if($setting['ficon2']){?>
			  		   			<i class="fa <?php echo $setting['ficon2']; ?>"></i>	
				  			<?php }else{ ?>
				  				末位图标
				  			<?php } ?>
				  		</font>
				  		<font id="suftext">
				  			<?php if($setting['ftext2']){ echo $setting['ftext2']; }else{ ?>
				  				+文字
				  			<?php } ?>
			  			</font>
					  </span>
					</div>
				</div>
        		
        		<div class="mt10 clearfix">
        			<div class="pull-left line26">首位图标：</div>
        			<div class="pull-left input-group" style="width: 300px;">
						<input value="<?php echo $setting['ficon']; ?>" name="setting[ficon]" id="icon" class="form-control" autocomplete="off" type="text">
						<span class="input-group-addon pull-left"><i class="fa fa-external-link"></i></span>
						<span class="input-group-btn pull-left">
							<button class="btn btn-default" style="padding:3px 12px" type="button"  onclick="omnipotent('iconID', '/index.php?g=Admin&m=Utils&a=icon', '选择图标');">选择图标</button>
						</span>
					</div>
				</div>
        		<div class="mt10 line26">首位文字：<input type="text" id="ftext" name="setting[ftext]" value="<?php echo $setting['ftext']; ?>" size="40" class="input-text"></div>
        		
        		<div class="mt10 clearfix">
        			<div class="pull-left line26">末位图标：</div>
        			<div class="pull-left input-group" style="width: 300px;">
						<input value="<?php echo $setting['ficon2']; ?>" name="setting[ficon2]" id="icon2" class="form-control" autocomplete="off" type="text">
						<span class="input-group-addon pull-left"><i class="fa fa-external-link"></i></span>
						<span class="input-group-btn pull-left">
							<button class="btn btn-default" style="padding:3px 12px" type="button" onclick="omnipotent('iconID', '/index.php?g=Admin&m=Utils&a=icon&t=icon2', '选择图标');">选择图标</button>
						</span>
					</div>
				</div>
        		<div class="mt10 line26">末位文字：<input type="text" id="ftext2" name="setting[ftext2]" value="<?php echo $setting['ftext2']; ?>" size="40" class="input-text"></div>
        		
        		<div class="mt10 line26">
        			<button class="btn btn-success" onclick="previewInput()" type="button"  style="margin-left: 60px;"><i class="fa fa-eye" aria-hidden="true"></i> 预览</button>
    			</div>
        		
        	</div>
        </td>
    </tr>
</table>