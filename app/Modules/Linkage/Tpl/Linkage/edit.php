<?php if (!defined('APP_VERSION')) exit(); ?>
<Admintemplate file="Common/Head"/>
<body class="J_scroll_fixed">
<div class="wrap J_check_wrap">
  <Admintemplate file="Common/Nav"/>
  <div class="h_a">添加联动菜单</div>
  <form name="myform" action="{:U("edit","isadmin=1")}" method="post" class="J_ajaxForm">
    <input type="hidden" name="linkageid" value="{$vo.linkageid}">
    <div class="table_full"> 
    <table width="100%" class="table_form contentWrap">
        <tbody>
        <tr>
          <th width="100">上级菜单</th>
          <td><select name="parentid">{$string}</select></td>
        </tr>
        <tr>
          <th>菜单名称</th>
          <td><textarea name="name" style="width:500px; height:150px;">{$vo.name}</textarea>请输入菜单名称批量添加以换行分隔</td>
        </tr>
        <tr>
          <th>菜单描述</th>
          <td><textarea name="description" style="width:300px; height:80px;">{$vo.description}</textarea></td>
        </tr>
		<eq name="Think.get.keyid" value='0'>
        <tr>
			<th>菜单风格</th>
			<td>
			<input name="style" value="0" type="radio" <eq name="vo.style" value="0"> checked="checked"</eq>>&nbsp;下拉风格&nbsp;&nbsp;
			<input name="style" value="1" type="radio" <eq name="vo.style" value="1"> checked="checked"</eq>>&nbsp;弹出风格&nbsp;&nbsp;
			<input name="style" value="2" type="radio" <eq name="vo.style" value="2"> checked="checked"</eq>>&nbsp;SELECT联动,显示<input type="text" name="level" value="{$vo.setting}" class="input-text" id="level" size="5">级</td>
		</tr>
		</eq>
      </tbody></table>
    </div>
     <div class="btn_wrap" style="z-index:999;">
      <div class="btn_wrap_pd">             
        <button class="btn btn_submit mr10 J_ajax_submit_btn" type="submit">修改</button>
      </div>
    </div>
  </form>
</div>
</body>
</html>