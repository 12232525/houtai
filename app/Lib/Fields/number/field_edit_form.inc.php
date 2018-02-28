
<table cellpadding="2" cellspacing="1" width="98%">
    <tr> 
        <td width="100">取值范围</td>
        <td><input type="text" name="setting[minnumber]" value="<?php echo $setting['minnumber']; ?>" size="5" class="input-text"> - <input type="text" name="setting[maxnumber]" value="<?php echo $setting['maxnumber']; ?>" size="5" class="input-text"></td>
    </tr>
    <tr> 
        <td>小数位数：</td>
        <td>
            <select name="setting[decimaldigits]">
                <option value="-1" <?php if ($setting['decimaldigits'] == -1) echo 'selected'; ?>)>自动</option>
                <option value="0" <?php if ($setting['decimaldigits'] == 0) echo 'selected'; ?>>0</option>
                <option value="1" <?php if ($setting['decimaldigits'] == 1) echo 'selected'; ?>>1</option>
                <option value="2" <?php if ($setting['decimaldigits'] == 2) echo 'selected'; ?>>2</option>
                <option value="3" <?php if ($setting['decimaldigits'] == 3) echo 'selected'; ?>>3</option>
                <option value="4" <?php if ($setting['decimaldigits'] == 4) echo 'selected'; ?>>4</option>
                <option value="5" <?php if ($setting['decimaldigits'] == 5) echo 'selected'; ?>>5</option>
            </select>
        </td>
    </tr>
    <tr> 
        <td>输入框长度</td>
        <td><input type="text" name="setting[size]" value="<?php echo $setting['size']; ?>" size="3" class="input-text"> px</td>
    </tr>
    <tr> 
        <td>默认值</td>
        <td><input type="text" name="setting[defaultvalue]" value="<?php echo $setting['defaultvalue']; ?>" size="40" class="input-text"></td>
    </tr>
    <tr> 
        <td>是否作为区间字段</td>
        <td>
            <input type="radio" name="setting[rangetype]" value="1" <?php if ($setting['rangetype']) echo 'checked'; ?> /> 是 
            <input type="radio" name="setting[rangetype]" value="0" <?php if (!$setting['rangetype']) echo 'checked'; ?> /> 否 　　注：区间字段可以通过filters('字段名称','模型id','自定义数组')调用
        </td>
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