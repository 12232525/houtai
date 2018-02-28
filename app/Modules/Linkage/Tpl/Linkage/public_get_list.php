<?php if (!defined('APP_VERSION')) exit(); ?>
<Admintemplate file="Common/Head"/>
<body class="J_scroll_fixed">
<div class="wrap J_check_wrap">
  <form name="myform"  class="J_ajaxForm" action="{:U('delete','isadmin=1')}" method="post" >
    <div class="table_list">
      <table width="100%" cellspacing="0">
        <thead>
          <tr>
            <td width="20" align="center"><input type="checkbox" class="J_check_all" data-direction="x" data-checklist="J_check_x"></td>
            <td width="50" align="center">排序</td>
            <td width="50" align="center">ID</td>
            <td width="100" align="center">菜单名</td>
            <td >菜单描述</td>
          </tr>
        </thead>
        <tbody>
          <volist name="data" id="vo">
            <tr onclick="return_id('{$vo.linkageid}')">
              <td align="center"><input class="checkbox J_check "  data-yid="J_check_y" data-xid="J_check_x"  name="ids[]" value="{$vo.linkageid}" type="checkbox"></td>
              <td align="center"><if condition=" $vo['issystem'] eq '1' "><input type="text" name="sort[{$vo.linkageid}]" class="input" size="1" value="{$vo.listorder}"></if></td>              
			  <td align="center">{$vo.linkageid}</td>
              <td align="center">{$vo.name}</td>
              <td >{$vo.description}</td>
            </tr>
          </volist>
        </tbody>
      </table>
      <div class="p10">
        <div class="pages"> {$Page} </div>
      </div>
    </div>
  </form>
<SCRIPT LANGUAGE="JavaScript">
<!--
	function return_id(linkageid) {
	window.top.$('#linkageid').val(linkageid);window.top.art.dialog({id:'selectid'}).close();
}
//-->
</SCRIPT>

</body>
</html>