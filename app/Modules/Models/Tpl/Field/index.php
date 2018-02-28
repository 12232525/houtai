<?php if (!defined('APP_VERSION')) exit(); ?>
<Admintemplate file="Common/Head"/>
<body class="J_scroll_fixed">
<div class="wrap J_check_wrap">
  <div class="navpar">
	  <div class="nav">
	    <ul class="cc">
	      <li class="current"><a href="{:U("Field/index",array("modelid"=>$modelid))}">管理模型字段</a></li>
	      <li ><a href="{:U("Field/add",array("modelid"=>$modelid))}">添加字段</a></li>
	      <li ><a href="{:U("Field/priview",array("modelid"=>$modelid))}"  target="_blank">预览模型</a></li>
	    </ul>
	  </div>
  </div>
  <form class="J_ajaxForm" action="{:U("Field/listorder")}" method="post">
  <div class="table_list">
  <table width="100%" cellspacing="0" >
        <thead>
          <tr>
            <td width="70" align='center'>排序</td>
            <td width="180" align='center'>字段名</td>
            <td align='center'>别名</td>
            <td width="100" align='center'>字段类型</td>
            <td width="100" align='center'>主表字段</td>
            <td width="50" align='center'>必填</td>
            <td width="50" align='center'>搜索</td>
            <td width="50" align='center'>排序</td>
            <td width="50" align='center'>投稿</td>
            <td width="120" align='center'>管理操作</td>
          </tr>
        </thead>
        <tbody class="td-line">
        <volist name="data" id="vo">
          <tr>
            <td align='center'><input name='listorders[{$vo.fieldid}]' type='text' size='3' value='{$vo.listorder}' class='input'></td>
            <td>{$vo.field}</td>
            <td>{$vo.name}</td>
            <td align='center'>{$vo.formtype}</td>
            <td align='center'>
            	 <if condition="$vo['issystem'] eq 1"><i class="fa fa-check-circle" aria-hidden="true"></i>
							 <else /> <i class="fa fa-times-circle" aria-hidden="true"></i></if>
					  </td>
            <td align='center'>
            	<if condition="$vo['minlength'] eq 1"><i class="fa fa-check-circle" aria-hidden="true"></i>
							<else /><i class="fa fa-times-circle" aria-hidden="true"></i>
							</if>
						</td>
            <td align='center'>
            	<if condition="$vo['issearch'] eq 1"><i class="fa fa-check-circle" aria-hidden="true"></i>
							<else /><i class="fa fa-times-circle" aria-hidden="true"></i>
							</if>
						</td>
            <td align='center'>
            	<if condition="$vo['isorder'] eq 1"><i class="fa fa-check-circle" aria-hidden="true"></i>
							<else /><i class="fa fa-times-circle" aria-hidden="true"></i>
							</if>
						</td>
            <td align='center'>
            	<if condition="$vo['isadd'] eq 1"><i class="fa fa-check-circle" aria-hidden="true"></i>
							<else /> <i class="fa fa-times-circle" aria-hidden="true"></i></if>
						</td>
            <td align='center'>
            	
            	<div class="btn-toolbar">
					  		<div class="btn-group">
            	
			            <a class="btn pl5 pr5" href="{:U("Field/edit",array("fieldid"=>$vo['fieldid'],"modelid"=>$vo['modelid']))}"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>
			            
			            <if condition=" in_array($vo['field'],$forbid_fields) || in_array($vo['field'], $forbid_delete) ">
			            		<a disabled class="btn pl5 pr5 disabled" href="javascript:;"><i class="fa fa-toggle-off" aria-hidden="true"></i></a>
			            <else />
			                 <if condition=" $vo['disabled'] eq 0 ">
			                 <a class="btn pl5 pr5" href="{:U("Field/disabled",array("fieldid"=>$vo['fieldid'],"modelid"=>$vo['modelid'],"disabled"=>0))}"><i class="fa fa-toggle-off" aria-hidden="true"></i></a>
			                 <else />
			                 <a class="btn pl5 pr5" href="{:U("Field/disabled",array("fieldid"=>$vo['fieldid'],"modelid"=>$vo['modelid'],"disabled"=>1))}"><i class="fa fa-toggle-on" aria-hidden="true"></i></a>
			                 </if>
			            </if>
			            <if condition=" in_array($vo['field'],$forbid_delete) ">
			            	<a disabled class="btn pl5 disabled" href="javascript:;"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
			            <else />
			            	<a class="btn pl5 J_ajax_del" href="{:U("Field/delete",array("fieldid"=>$vo['fieldid'],"modelid"=>$vo['modelid']))}"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
			            </if>
            
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
        <button class="btn btn_submit mr10 J_ajax_submit_btn" type="submit">排序</button>
      </div>
    </div>
  </form>
</div>
<script src="{$config_siteurl}statics/js/common.js?v"></script>
</body>
</html>