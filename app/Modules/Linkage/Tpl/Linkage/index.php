<?php if (!defined('APP_VERSION')) exit(); ?>
<Admintemplate file="Common/Head"/>
<body class="J_scroll_fixed">
<div class="wrap J_check_wrap">
  <Admintemplate file="Common/Nav"/>
  <div class="mb10">
		<a href="{:U('add',array("keyid"=>'0','isadmin'=>1))}" class="btn" title="添加联动菜单"><span class="add"></span>添加联动菜单</a>      
  </div>
  <form name="myform"  class="J_ajaxForm" action="{:U('delete','isadmin=1')}" method="post" >
    <div class="table_list">
      <table width="100%" cellspacing="0">
        <thead>
          <tr>
            <td width="20" align="center"><input type="checkbox" class="J_check_all" data-direction="x" data-checklist="J_check_x"></td>
            <td width="50" align="center">ID</td>
            <td width="100" align="center">菜单名</td>
            <td >菜单描述</td>
            <td width="280" align="center">调用代码</td>
            <td width="230" align="center">操作</td>
          </tr>
        </thead>
        <tbody>
          <volist name="data" id="vo" empty="$emptyTable">
            <tr>
              <td align="center"><input class="checkbox J_check "  data-yid="J_check_y" data-xid="J_check_x"  name="ids[]" value="{$vo.linkageid}" type="checkbox"></td>
              <td align="center">{$vo.linkageid}</td>
              <td align="center">{$vo.name}</td>
              <td >{$vo.description}</td>
              <td align="center"><input style="text-align:center;width:280px;" type="text" value="<literal>{:menu_linkage('</literal><?php echo $vo['linkageid'];?>','L_{$vo.linkageid}','默认值')}" /></td>
              <td align="center"><a class="" href="{:U("public_manage_submenu",array("keyid"=>$vo['linkageid'],'isadmin'=>1))}">管理子菜单</a> | 
			  <a href="{:U("edit",array("id"=>$vo['linkageid'],"keyid"=>$vo['keyid'],'isadmin'=>1))}">修改</a> | 
			  <a class="J_ajax_del" href="{:U("delete",array("id"=>$vo['linkageid'],'isadmin'=>1))}">删除</a> | 
			  <a href="{:U("public_cache",array("linkageid"=>$vo['linkageid'],"keyid"=>$vo['keyid'],'isadmin'=>1))}">更新缓存</a></td>
            </tr>
          </volist>
        </tbody>
      </table>
      <div class="p10">
        <div class="pages"> {$Page} </div>
      </div>
    </div>
    <div class="btn_wrap">
      <div class="btn_wrap_pd">
      	<label class="mr20"><input type="checkbox" class="J_check_all" data-direction="y" data-checklist="J_check_y">全选</label>
        <button class="btn  mr10 J_ajax_submit_btn" type="submit">删除</button>
      </div>
    </div>
  </form>
<script src="{$config_siteurl}statics/js/common.js?v"></script>
</body>
</html>