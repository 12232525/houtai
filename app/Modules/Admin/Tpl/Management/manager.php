<?php if (!defined('APP_VERSION')) exit(); ?>
<Admintemplate file="Common/Head"/>
<Admintemplate file="Common/Table"/>

<body class="J_scroll_fixed">
<div class="wrap J_check_wrap">
   <Admintemplate file="Common/Nav"/>
   <div class="table_list bra4">
   <table id="table"
      		data-toggle="table" 
      		data-sort-order="desc"  
      		data-show-columns="true"  
      		data-toolbar="#toolbar" 
      		data-reorderable-columns="true"  
            data-search="true"
            data-use-row-attr-func="true" 
            data-reorderable-rows="true" 
            data-show-pagination-switch="true" 
            data-show-refresh="true" 
            data-key-events="true"  
            data-fixed-columns="true" 
            data-fixed-number="6"  
            data-mobile-responsive="true"
            data-detail-view="true" 
            data-detail-formatter="detailFormatter">
        <thead>
          <tr>
            <th data-halign="center" data-align="center" data-field="id" data-sortable="true" data-cell-style="cellStyle" style="text-align:center;min-width:60px;"  >序号</th>
            <th data-halign="center" data-align="center" data-field="user_name" data-sortable="true" data-cell-style="cellStyle" style="text-align:center;min-width:120px;">用户名</th>
            <th data-halign="center" data-align="center" data-field="nickname"  data-sortable="true" data-cell-style="cellStyle" style="text-align:center;min-width:100px;" >姓名</th>
            <th data-halign="center" data-align="center" data-field="role_name" data-sortable="true" data-cell-style="cellStyle" style="text-align:center;min-width:120px;" >所属角色</th>
            <th data-halign="center" data-align="center" data-field="last_login_ip" data-sortable="true" data-cell-style="cellStyle" style="text-align:center;min-width:120px;" >最后登录IP</th>
            <th data-halign="center" data-align="center" data-field="last_login_time" data-sortable="true" data-cell-style="cellStyle" style="text-align:center;min-width:160px;" >最后登录时间</th>
            <th data-halign="center" data-align="center" data-field="email" data-sortable="true" data-cell-style="cellStyle" style="text-align:center;min-width:160px;" >E-mail</th>
            <th data-halign="center" data-align="center" data-field="status" data-sortable="true" data-cell-style="cellStyle" style="text-align:center;min-width:80px;" >状态</th>
            <th data-cell-style="cellStyle" style="text-align:center;" data-field="remark">备注</th>
            <th data-align="center" style="text-align:center;min-width:100px;" >管理操作</th>
          </tr>
        </thead>
        <tbody>
        <foreach name="Userlist" item="vo" key="k">
          <tr>
            <td id="td-id-{$k}" data-field="id" data-cell-style="cellStyle" style="text-align:center;min-width:60px;" align="center">{$vo.id}</td>
            <td id="td-user_name-{$k}" data-field="user_name" data-cell-style="cellStyle" style="text-align:center;min-width:120px;">{$vo.username}</td>
            <td id="td-nickname-{$k}" data-field="nickname" data-cell-style="cellStyle" style="text-align:center;min-width:100px;">{$vo.nickname}</td>
            <td id="td-role_name-{$k}" data-field="role_name" data-cell-style="cellStyle" style="text-align:center;min-width:120px;">{$vo.role_name}</td>
            <td id="td-last_login_ip-{$k}" id="td-last_login_ip-0" data-field="last_login_ip" data-cell-style="cellStyle" style="text-align:center;min-width:120px;">{$vo.last_login_ip}</td>
            <td id="td-last_login_time-{$k}" data-field="last_login_time" data-cell-style="cellStyle" style="text-align:center;min-width:160px;">
            <if condition="$vo['last_login_time'] eq 0">
            	该用户还没登陆过
            <else />
            {$vo.last_login_time|date="y-m-d H:i:s",###}
            </if>
            </td>
            <td id="td-email-{$k}" data-field="email" data-cell-style="cellStyle" style="text-align:center;min-width:160px;">{$vo.email}</td>
            <td id="td-status-{$k}"  data-field="status" data-cell-style="cellStyle" style="text-align:center;min-width:80px;" align="center">
            	<if condition="$vo['status'] eq '1' "><font color="red"><i class="fa fa-check-circle" aria-hidden="true"></i></font><else /><i class="fa fa-times-circle" aria-hidden="true"></i></if>
            </td>
            <td id="td-remark-{$k}" data-field="remark" data-cell-style="cellStyle" style="text-align:center;" align="center">{$vo.remark}</td>
            <td data-cell-style="cellStyle" style="text-align:center;min-width:100px;" align="center">
            <if condition="$User['username'] eq $vo['username']">
           	 	<font color="#cccccc">修改</font>&nbsp;|&nbsp; 
            	<font color="#cccccc">删除</font>
            <else />
            	<div class="btn-toolbar">
				  <div class="btn-group">
	            	  <a class="btn pl5 pr5" href="{:U("Management/edit",array("id"=>$vo[id]))}"><i class="iconfont f18">&#xe86c;</i></a> 
	            	  <a class="btn pl5 pr5 J_ajax_del" href="{:U('Management/delete',array('id'=>$vo['id']))}"><i class="iconfont f19">&#xe865;</i></a>
				  </div>
				</div>
            </if>
            </td>
          </tr>
         </foreach>
        </tbody>
      </table>
   </div>
</div>
<script src="{$config_siteurl}statics/js/common.js"></script>
</body>
</html>