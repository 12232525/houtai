<?php if (!defined('APP_VERSION')) exit(); ?>
<Admintemplate file="Common/Head"/>
<body class="J_scroll_fixed">
<div class="wrap J_check_wrap">
  <Admintemplate file="Common/Nav"/>
  <div class="h_a">表单配置</div>
  <form action="{:U('Formguide/edit')}" method="post" name="myform" class="J_ajaxForm">
  <div class="table_full">
  <table class="table_form" width="100%" cellspacing="0">
<tbody>
	<tr>
		<th width="150">名称</th>
		<td>
        <input type="hidden" name="_name" value="{$name}">
        <input name="info[name]" id="name" value="{$name}" class="input" type="text" size="30">
        </td>
	</tr>
	<tr>
		<th>表名</th>
		<td>form_{$tablename}</td>
	</tr>
	<tr>
		<th>简介</th>
		<td><textarea name="info[description]" id="description" rows="6" cols="50">{$description}</textarea></td>
	</tr>
	<tr>
		<th>时间限制</th>
		<td><input type="radio" name="setting[enabletime]" value="1" <if condition=" $setting['enabletime'] eq '1' ">checked</if>> 启用 <input type="radio" name="setting[enabletime]" value="0" <if condition=" $setting['enabletime'] eq '0' ">checked</if>> 不启用</td>
	</tr>
	<tr id="time_start" <if condition=" $setting['enabletime'] eq '0' ">style="display:none;"</if>>
  		<th>开始时间</th>
        <td><input type="text" name="setting[starttime]" id="starttime" <if condition=" $setting['starttime']">value="{$setting.starttime|date='Y-m-d',###}"</if> size="30" class="date input" readonly=""></td>
	</tr>
	<tr id="time_end" <if condition=" $setting['enabletime'] eq '0' ">style="display:none;"</if>>
		<th>结束时间</th>
		<td><input type="text" name="setting[endtime]" id="endtime" <if condition=" $setting['endtime']">value="{$setting.endtime|date='Y-m-d',###}"</if> size="30" class="date input" readonly=""></td>
	</tr>
	<tr>
		<th>允许发送邮件</th>
		<td><input name="setting[sendmail]" type="radio" value="1" <if condition=" $setting['sendmail'] eq '1' ">checked</if>>&nbsp;是&nbsp;&nbsp;<input name="setting[sendmail]" type="radio" value="0" <if condition=" $setting['sendmail'] eq '0' ">checked</if>>&nbsp;否</td>
	</tr>
	<tr id="mailaddress" <if condition=" $setting['sendmail'] eq '0' ">style="display:none;"</if>>
		<th>接受邮件的地址</th>
		<td><input type="text" name="setting[mails]" value="{$setting.mails}" id="mails" class="input" size="50"> 多个地址请用逗号隔开</td>
	</tr>
	<tr>
		<th>允许同一IP多次提交</th>
		<td><input type="radio" name="setting[allowmultisubmit]" value="1" <if condition=" $setting['allowmultisubmit'] eq '1' ">checked</if>> 是&nbsp;&nbsp;&nbsp;&nbsp;
	  <input type="radio" name="setting[allowmultisubmit]" value="0" <if condition=" $setting['allowmultisubmit'] eq '0' ">checked</if>> 否</td>
	</tr>
	<tr>
		<th>允许游客提交表单</th>
		<td><input type="radio" name="setting[allowunreg]" value="1" <if condition=" $setting['allowunreg'] eq '1' ">checked</if>> 是&nbsp;&nbsp;&nbsp;&nbsp;
	  <input type="radio" name="setting[allowunreg]" value="0" <if condition=" $setting['allowunreg'] eq '0' ">checked</if>> 否</td>
	</tr>
	<tr>
		<th>模板选择</th>
		<td id="show_template"><?php echo Form::select($template,$show_template,'name="info[show_template]" id="show_template"'); ?></td>
	</tr>
	<tr>
		<th>js调用使用的模板</th>
		<td id="show_js_template"><?php echo Form::select($template,$js_template,'name="info[show_js_template]" id="show_js_template"'); ?></td>
	</tr>
	</tbody>
</table>
  </div>
  <div class="">
      <div class="btn_wrap_pd">             
        <button class="btn btn_submit mr10 J_ajax_submit_btn" type="submit">提交</button>
        <input type="hidden"name="modelid" value="{$modelid}">
      </div>
    </div>
  </form>
</div>
<script src="{$config_siteurl}statics/js/common.js?v"></script>
</body>
</html>