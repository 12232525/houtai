<?php if (!defined('APP_VERSION')) exit(); ?>
<Admintemplate file="Common/Head"/>
<?php
//读取全部表名
$list_tables = D("Common")->list_tables();
?>
<body class="J_scroll_fixed">
<div class="wrap J_check_wrap">
  <Admintemplate file="Common/Nav"/>
  <div class="h_a">模型属性</div>
  <form action="{:U("Index/edit")}" method="post" class="J_ajaxForm" >
    <div class="table_full">
      <table width="100%"  class="table_form">
        <tr>
          <th width="120">模型名称</th>
          <td class="y-bg"><input type="text" class="input" name="name" id="name" size="30" value="{$data.name}" /></td>
        </tr>
        <tr>
          <th>模型表键名</th>
          <td class="y-bg"><input type="text" class="input" name="tablename" id="tablename" size="30" value="{$data.tablename}" /></td>
        </tr>
        
        <tr>
          <th>模型分类</th>
          <td class="y-bg">
          	<select id="type" name="type" disabled="disabled">
          		<option value="3" <if condition="$data['type'] eq 3">selected=""</if>>一般类型</option>
          		<option value="4" <if condition="$data['type'] eq 4">selected=""</if>>评论回复类型</option>
          		<option value="5" <if condition="$data['type'] eq 5">selected=""</if>>审批工作流类型</option>
          		<option value="0" <if condition="$data['type'] eq 0">selected=""</if>>文章类型</option>
          	</select>
          	<div class="gray"> 
          			<p>1、一般类型：保存后将会自动创建表，并包括一般常用字段</p>
          			<p>2、评论回复类型：保存后将会自动创建表，并包括多个评论回复字段</p>
          			<p>3、工作流类型：保存后将会自动创建表，并包括多个审批字段</p>
          			<p>4、文章类型：保存后将会自动创建表，并包括多个文章字段</p>
          	</div>
          </td>
        </tr>
	      <tr id="retab"  <if condition="$data['type'] eq 0 || $data['type'] eq 3">class="hide"</if>> 
	        <th>关联表名</th>
	        <td>
	                <select name="rel_table_id" id="st_name" onchange="showRelTable()">
	                	<option value=''>请选择关联表名</option>
		                <?php if (is_array($list_tables)) { ?>   
		                    <?php
		                    foreach ($list_tables as $names) {
		                        if ($names == $data['rel_table_id'])
		                            $select = 'selected';
		                        else
		                            $select = '';
		                        ?>
		                        <option value='<?php echo $names ?>' <?php echo $select ?>><?php echo $names ?></option>
						    <?php } ?>
						<?php } ?>
	                </select>
	        </td>
	     </tr>
        <tr>
          <th>描述</th>
          <td class="y-bg"><input type="text" class="input" name="description" id="description" value="{$data.description}"  size="30"/></td>
        </tr>
      </table>
    </div>
    <div class="">
      <div class="btn_wrap_pd">
         <input type="hidden" value="{$data.modelid}" name="modelid" />
        <button class="btn btn_submit mr10 J_ajax_submit_btn" type="submit">修改</button>
      </div>
    </div>
  </form>
</div>
<script src="{$config_siteurl}statics/js/common.js?v"></script>
<script>
	function showRelTable(){
		 var v = $('#type').val();
		 if(v == 4 || v == 5){
		 	  $('#retab').removeClass('hide');
		 }else{
		 		$('#retab').addClass('hide');
		 }
	}
</script>
</body>
</html>