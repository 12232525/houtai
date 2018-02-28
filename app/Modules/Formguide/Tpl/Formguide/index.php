<?php if (!defined('APP_VERSION')) exit(); ?>
<Admintemplate file="Common/Head"/>

<link href='{$config_siteurl}statics/addons/zui/dist/css/zui.min.css' rel='stylesheet' />

<body class="J_scroll_fixed">
<div class="wrap J_check_wrap">
  <Admintemplate file="Common/Nav"/>
  
  <div class="mb10">
		<ul id="navList" class="nav nav-primary nav-justified f14">
		  <li <if condition="$type eq 3">class="active"</if>><a href="{:U("formguide/formguide/index", array("type"=>3))}">一般模型<span class="label label-badge label-success">{$countList[3]}</span></a></li>
		  <li <if condition="$type eq 4">class="active"</if>><a href="{:U("formguide/formguide/index", array("type"=>4))}">评论回复模型<span class="label label-badge label-success">{$countList[4]}</span></a></li>
		  <li <if condition="$type eq 5">class="active"</if>><a href="{:U("formguide/formguide/index", array("type"=>5))}">审批工作流模型<span class="label label-badge label-success">{$countList[5]}</span></a></li>
		  <li <if condition="$type eq 0">class="active"</if>><a href="{:U("formguide/formguide/index", array("type"=>0))}">文章模型<span class="label label-badge label-success">{$countList[0]}</span></a></li>
		</ul>
	</div>
  
  <form name="myform" action="{:U('Formguide/index')}" method="post" class="J_ajaxForm">
  <div class="table_list">
  <table width="100%" border="0" cellpadding="5" cellspacing="1" class="tableClass">
      <thead>
        <tr>
          <td width="3%" align="center"><input type="checkbox" class="J_check_all" data-direction="y" data-checklist="J_check_y"></td>
          <td width="15%" align="left">名称(信息数)</td>
          <td width="20%" align="center">表名</td>
          <td  align="center">简介</td>
          <td width="12%" align="center">创建时间</td>
          <td width="130" align="center">调用</td>
          <td width="130" align="center">字段管理</td>
        	<td width="160" align="center">管理操作</td>
        </tr>
      </thead>
      <tbody>
        <volist name="data" id="vo">
        <tr>
          <td align="center"><input type="checkbox" class="J_check" data-yid="J_check_y" data-xid="J_check_x" name="formid[]" value="{$vo.modelid}"></td>
          <td>{$vo.name}<a href=" {:U('Formguide/Index/index',array("formid"=>$vo['modelid'],))}"  target="_blank">[访问前台]</a> ({$vo.items})</td>
          <td align="left">{$vo['tablename']}</td>
          <td align="left">{$vo['description']}</td>
          <td align="center">{$vo['addtime']|date="Y-m-d H:i:s",###}</td>
          <td align='center'>
          	<div class="btn-toolbar">
						  <div class="btn-group fno">
          			<a class="btn pl5" href="javascript:call({$vo.modelid})"><i class="fa fa-clipboard" aria-hidden="true"></i></a>
          		</div>
					  </div>
          </td>	
          <td align='center'>
	        	<div class="btn-toolbar">
						  <div class="btn-group fno">
			        	<a class="btn pl5" href="{:U('Info/index',array('menuid'=>$_GET['menuid'],'formid'=>$vo['modelid']))}" title="信息列表"> <i class="fa fa-list-ol" aria-hidden="true"></i></a> 
			        	<a class="btn pl5 pr5" href="{:U('Field/index',array('menuid'=>$_GET['menuid'],'formid'=>$vo['modelid']))}" title="表单字段管理"><i class="fa fa-wpforms" aria-hidden="true"></i></a>
	        		</div>
					  </div>
	        </td>	
	        <td align='center'>
	        	<div class="btn-toolbar">
						  <div class="btn-group fno">
						        <a class="btn pl5 pr5" href="{:U('Formguide/edit',array('menuid'=>$_GET['menuid'],'formid'=>$vo['modelid']))}"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>
						        <if condition=" $vo['disabled'] eq 0 ">
						        <a class="btn pl5 pr5" href="{:U('Formguide/status',array('disabled'=>0,'menuid'=>$_GET['menuid'],'formid'=>$vo['modelid']))}"><i class="fa fa-toggle-on" aria-hidden="true"></i></a>
						        <else />
						        <a class="btn pl5 pr5" href="{:U('Formguide/status',array('disabled'=>1,'menuid'=>$_GET['menuid'],'formid'=>$vo['modelid']))}"><i class="fa fa-toggle-off" aria-hidden="true"></i></a>
						        </if>
						        <a class="btn pl5" href="javascript:confirmurl('{:U('Formguide/delete',array('menuid'=>$_GET['menuid'],'formid'=>$vo['modelid']))}','确认要删除 『 {$vo.name} 』 吗？')"><i class="fa fa-trash-o" aria-hidden="true"></i></a> 
						  </div>
					  </div>
	        </td>
          
        </tr>
       </volist>
      </tbody>
    </table>
    <div class="p10">
        <div class="pages"> {$Page} </div>
      </div>
  </div>
  <div class="">
      <div class="btn_wrap_pd">             
        <button class="btn btn_submit mr10 J_ajax_submit_btn" type="submit">删除</button>
      </div>
    </div>
  </form>
</div>
<script src="{$config_siteurl}statics/js/common.js?v"></script>
<script src="{$config_siteurl}statics/js/content_addtop.js"></script>
<script type="text/javascript">
//调用
function call(id) {
	omnipotent("call", GV.DIMAUB+'index.php?a=public_call&m=Formguide&g=Formguide&formid=' + id, "调用方式", 1);
}
</script>
</body>
</html>