<?php if (!defined('APP_VERSION')) exit(); ?>
<Admintemplate file="Common/Head"/>
<body class="J_scroll_fixed">
<div class="wrap J_check_wrap">
  <Admintemplate file="Common/Nav"/>
  <div class="h_a">添加联动菜单</div>
  <form name="myform" action="{:U("add","isadmin=1")}" method="post" class="J_ajaxForm">
    <input type="hidden" name="keyid" value="{$Think.get.keyid}">
    <div class="table_full"> 
    <table width="100%" class="table_form contentWrap">
        <tbody>
        <tr>
          <th width="100">上级菜单</th>
          <td><select name="parentid">{$string}</select></td>
        </tr>
        <tr>
          <th>菜单名称</th>
          <td><textarea name="name" style="width:500px; height:150px;"></textarea>请输入菜单名称批量添加以换行分隔</td>
        </tr>
        <tr>
          <th>菜单描述</th>
          <td><textarea name="description" style="width:300px; height:80px;"></textarea></td>
        </tr>
		<empty name="Think.get.keyid">
        <tr>
			<th>菜单风格</th>
			<td>
			<input name="style" value="0" type="radio" checked="checked">&nbsp;下拉风格&nbsp;&nbsp;
			<input name="style" value="1" type="radio">&nbsp;弹出风格&nbsp;&nbsp;
			<input name="style" value="2" type="radio">&nbsp;SELECT联动,显示<input type="text" name="level" value="" class="input-text" id="level" size="5">级</td>
		</tr>
		</empty>
      </tbody></table>
    </div>
     <div class="btn_wrap" style="z-index:999;">
      <div class="btn_wrap_pd">             
        <button class="btn btn_submit mr10 J_ajax_submit_btn" type="submit">添加</button>
      </div>
    </div>
  </form>
</div>
</body>
</html>