<?php if (!defined('APP_VERSION')) exit(); ?>
<Admintemplate file="Common/Head"/>
<body class="J_scroll_fixed">
<div class="wrap J_check_wrap">
  <Admintemplate file="Common/Nav"/>
  <form action="{:U("Rbac/setting_model_priv")}" method="post" class="J_ajaxForm">
    <div class="h_a">业务模型权限</div>
    <div class="table_full"> 
    <table width="100%">
        <tr>
          <th width="25" align="center">全选</th>
          <th width="60" align="center">模型ID</th>
          <th align="left">模型名称</th>
          <th width="35" align="center">查看</th>
          <th width="35" align="center">添加</th>
          <th width="35" align="center">修改</th>
          <th width="35" align="center">删除</th>
          <th width="35" align="center">排序</th>
          <th width="35" align="center">日志</th>
          <th width="35" align="center">审批</th>
        </tr>
      {$categorys}
    </table>
    </div>
    <div class="">
      <div class="btn_wrap_pd">
        <input type="hidden" name="roleid" value="{$roleid}" />
        <button class="btn btn_submit mr10 J_ajax_submit_btn" type="submit">提交</button>
      </div>
    </div>
  </form>
</div>
<script src="{$config_siteurl}statics/js/common.js?v"></script>
<script type="text/javascript">
function select_all(name, obj) {
	if (obj.checked) {
		$("input[type='checkbox'][name='priv["+name+"][]']").attr('checked', 'checked');
	} else {
		$("input[type='checkbox'][name='priv["+name+"][]']").attr('checked', null);
	}
}
</script>
</body>
</html>