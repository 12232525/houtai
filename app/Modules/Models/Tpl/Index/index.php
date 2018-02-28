<?php if (!defined('APP_VERSION')) exit(); ?>
<Admintemplate file="Common/Head"/>
<Admintemplate file="Common/Zui"/>
<body class="J_scroll_fixed">
<div class="wrap J_check_wrap">
  <Admintemplate file="Common/Nav"/>
  
  <div class="mb10">
		<ul id="navList" class="nav nav-primary nav-justified f14">
		  <li <if condition="$type eq 3">class="active"</if>><a href="{:U("Models/Index/index", array("type"=>3))}">一般模型<span class="label label-badge label-success">{$countList[3]}</span></a></li>
		  <li <if condition="$type eq 4">class="active"</if>><a href="{:U("Models/Index/index", array("type"=>4))}">评论回复模型<span class="label label-badge label-success">{$countList[4]}</span></a></li>
		  <li <if condition="$type eq 5">class="active"</if>><a href="{:U("Models/Index/index", array("type"=>5))}">审批工作流模型<span class="label label-badge label-success">{$countList[5]}</span></a></li>
		  <li <if condition="$type eq 0">class="active"</if>><a href="{:U("Models/Index/index", array("type"=>0))}">文章模型<span class="label label-badge label-success">{$countList[0]}</span></a></li>
		</ul>
	</div>
	
 <form class="J_ajaxForm" action="" method="post"> 
  <div class="table_list">
  <table width="100%" cellspacing="0" >
    <thead>
      <tr>
        <td width="100" align="center">ModelID</td>
        <td width="100">排序</td>
        <td width="200" align="center">模型名称</td>
        <td width="200" align="center">数据表</td>
        <td  align="center">描述</td>
        <td width="100" align="center">状态</td>
        <td width="130" align="center">字段管理</td>
        <td width="160" align="center">管理操作</td>
      </tr>
    </thead>
    <tbody>
    <volist name="data" id="vo">
      <tr>
        <td align='center'>{$vo.modelid}</td>
        <td align="center"><input name='listorders[{$vo.modelid}]' class="input mr5"  type='text' size='3' value='{$vo.sort}'></td>
        <td align='left'>{$vo.name}</td>
        <td align='left'>{$vo.tablename}</td>
        <td align='left'>{$vo.description}</td>
        <td align='center'><font color="red"><if condition="$vo['disabled'] eq '1' "><i class="fa fa-times-circle" aria-hidden="true"></i><else /><i class="fa fa-check-circle" aria-hidden="true"></i></if></font></td>
        <td align='center'>
        	
        	<div class="btn-toolbar ">
					  <div class="btn-group fno">
		        	<a class="btn pl5 pr5" href="{:U('Models/Field/index',array('modelid'=>$vo['modelid']))}" title="表单字段管理"><i class="fa fa-wpforms" aria-hidden="true"></i></a>
		        	<a class="btn pl5" href="{:U('Models/Field/listshow',array('modelid'=>$vo['modelid']))}" title="列表字段管理"> <i class="fa fa-list-ol" aria-hidden="true"></i></a> 
        		</div>
				  </div>
        </td>	
        <td align='center'>
        	<div class="btn-toolbar ">
					  <div class="btn-group fno">
					        <a class="btn pl5 pr5" href="{:U("Index/edit",array("modelid"=>$vo['modelid']))}"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>
					        <if condition=" $vo['disabled'] eq 0 ">
					        <a class="btn pl5 pr5" href="{:U("Index/disabled",array("modelid"=>$vo['modelid'],"disabled"=>0))}"><i class="fa fa-toggle-on" aria-hidden="true"></i></a>
					        <else />
					        <a class="btn pl5 pr5" href="{:U("Index/disabled",array("modelid"=>$vo['modelid'],"disabled"=>1))}"><i class="fa fa-toggle-off" aria-hidden="true"></i></a>
					        </if>
					        <a class="btn pl5 J_ajax_del" href="{:U('Index/delete',array('modelid'=>$vo['modelid']) ) }"><i class="fa fa-trash-o" aria-hidden="true"></i></a> 
					  </div>
				  </div>
        </td>
      </tr>
    </volist>
    </tbody>
  </table>
  </div>
  
  	<div class="btn_wrap">
      <div class="btn_wrap_pd">
        <label class="mr20"><input type="checkbox" class="J_check_all" data-direction="y" data-checklist="J_check_y">全选</label>                
        <button class="btn J_ajax_submit_btn btn-primary" type="submit" data-action="{:U('Models/Index/listorder', array('type'=>$type))}">排序</button>
      </div>
    </div>
  </form>
  
</div>
<script src="{$config_siteurl}statics/js/common.js?v"></script>
<script type="text/javascript">

</script>
</body>
</html>