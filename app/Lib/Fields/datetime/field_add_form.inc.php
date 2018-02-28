<table cellpadding="2" cellspacing="1" bgcolor="#ffffff" width="80%">
    <tr> 
        <td width="80"><strong>时间显示：</strong></td>
        <td>
        	<input type="radio" name="setting[datetype]" value="text" checked/>年月日时分秒<br />
            <input type="radio" name="setting[datetype]" value="datetime-local"/>年月日时分<br />
            <input type="radio" name="setting[datetype]" value="date" />年月日<br />
            <input type="radio" name="setting[datetype]" value="month"/>月<br />
            <input type="radio" name="setting[datetype]" value="week" />周<br />
            <input type="radio" name="setting[datetype]" value="time" />时分
        </td>
    </tr>
    <tr> 
        <td><strong>时间格式：</strong></td>
        <td>
            <input type="radio" name="setting[fieldtype]" value="date" checked>日期（<?php echo date('Y-m-d'); ?>）<br />
            <input type="radio" name="setting[fieldtype]" value="datetime_a">日期+12小时制时间（<?php echo date('Y-m-d h:i:s'); ?>）<br />
            <input type="radio" name="setting[fieldtype]" value="datetime">日期+24小时制时间（<?php echo date('Y-m-d H:i:s'); ?>）<br />
            <input type="radio" name="setting[fieldtype]" value="int">整数 显示格式：
            <select name="setting[format]">
                <option value="Y-m-d H:i:s">24小时制:<?php echo date('Y-m-d H:i:s'); ?></option>
                <option value="Y-m-d Ah:i:s">12小时制:<?php echo date('Y-m-d h:i:s'); ?></option>
                <option value="Y-m-d H:i"><?php echo date('Y-m-d H:i'); ?></option>
                <option value="Y-m-d"><?php echo date('Y-m-d'); ?></option>
                <option value="m-d"><?php echo date('m-d'); ?></option>
            </select>
        </td>
    </tr>
    <tr> 
        <td><strong>默认值：</strong></td>
        <td>
            <input type="radio" name="setting[defaulttype]" value="0" checked/>无<br />
            <input type="radio" name="setting[defaulttype]" value="1" />当前时间
        </td>
    </tr>
    <tr> 
        <td>多元化效果</td>
        <td>
        	<div class="bor2 pt10 pl10 pb10">
        		
        		<div class="mt10 clearfix bd-bottom pb10">
        			<div class="pull-left line26">最终效果：</div>
	        		<div class="pull-left input-group">
					  <span class="pull-left input-group-addon"><font id="preicon" class="">首位图标</font><font id="pretext">+文字</font></span>
					  <input type="text" size="50" class="form-control" aria-label="" value="">
					  <span class="pull-left input-group-addon"><font id="suficon" class="">末位图标</font><font id="suftext">+文字</font></span>
					</div>
				</div>
        		
        		<div class="mt10 clearfix">
        			<div class="pull-left line26">首位图标：</div>
        			<div class="pull-left input-group" style="width: 300px;">
						<input value="" name="setting[ficon]" id="icon" class="form-control" autocomplete="off" type="text">
						<span class="input-group-addon pull-left"><i class="fa fa-external-link"></i></span>
						<span class="input-group-btn pull-left">
							<button class="btn btn-default" style="padding:3px 12px" type="button"  onclick="omnipotent('iconID', '/index.php?g=Admin&m=Utils&a=icon', '选择图标');">选择图标</button>
						</span>
					</div>
				</div>
        		<div class="mt10 line26">首位文字：<input type="text" id="ftext" name="setting[ftext]" value="" size="40" class="input-text"></div>
        		
        		<div class="mt10 clearfix">
        			<div class="pull-left line26">末位图标：</div>
        			<div class="pull-left input-group" style="width: 300px;">
						<input value="" name="setting[ficon2]" id="icon2" class="form-control" autocomplete="off" type="text">
						<span class="input-group-addon pull-left"><i class="fa fa-external-link"></i></span>
						<span class="input-group-btn pull-left">
							<button class="btn btn-default" style="padding:3px 12px" type="button" onclick="omnipotent('iconID', '/index.php?g=Admin&m=Utils&a=icon&t=icon2', '选择图标');">选择图标</button>
						</span>
					</div>
				</div>
        		<div class="mt10 line26">末位文字：<input type="text" id="ftext2" name="setting[ftext2]" value="" size="40" class="input-text"></div>
        		
        		<div class="mt10 line26">
        			<button class="btn btn-success" onclick="previewInput()" type="button"  style="margin-left: 60px;"><i class="fa fa-eye" aria-hidden="true"></i> 预览</button>
    			</div>
        		
        	</div>
        </td>
    </tr>
</table>