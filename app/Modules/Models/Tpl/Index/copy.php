<?php if (!defined('APP_VERSION')) exit(); ?>
<Admintemplate file="Common/Head"/>
<Admintemplate file="Common/Zui"/>
<?php
//读取全部表名
$list_tables = D("Common")->list_tables();
?>
<body class="J_scroll_fixed">
<div class="wrap J_check_wrap">
  <Admintemplate file="Common/Nav"/>

    <div class="mb10">
        <ul id="navList" class="nav nav-primary nav-justified f14">
            <li><a href="{:U("Models/Index/add")}">全新建立模型</a></li>
            <li class="active"><a href="{:U("Models/Index/copy")}">复制已有模型</a></li>
        </ul>
    </div>

  <div class="h_a">模型属性</div>
  <form action="{:U("Index/copy")}" method="post" class="J_ajaxForm" >
    <div class="table_full">
      <table width="100%"  class="table_form">
        <tr>
          <th width="120">模型名称</th>
          <td class="y-bg"><input type="text" class="input" name="name" id="name" size="30" value="" /></td>
        </tr>
        <tr>
          <th>模型表表名</th>
          <td class="y-bg"><input type="text" class="input" name="tablename" id="tablename" size="30" value="" /></td>
        </tr>
        <tr>
          <th>模型分类</th>
          <td class="y-bg">
          	<select id="type" name="type" onchange="showRelTable()">
          		<option value="3">一般类型</option>
          		<option value="4">评论回复类型</option>
          		<option value="5">审批工作流类型</option>
          		<option value="0">文章类型</option>
          	</select>
          	<div class="gray"> 
          			<p>1、一般类型：保存后将会自动创建表，并包括一般常用字段</p>
          			<p>2、评论回复类型：保存后将会自动创建表，并包括多个评论回复字段</p>
          			<p>3、工作流类型：保存后将会自动创建表，并包括多个审批字段</p>
          			<p>4、文章类型：保存后将会自动创建表，并包括多个文章字段</p>
          	</div>
          </td>
        </tr>
        <tr id="retab">
	        <th>复制参照表名</th>
	        <td>
	            <select name="copy_table_name" id="copy_table_name">
	            	<option value=''>请选择参照表名</option>
	            	<?php if (is_array($list_tables)) { ?>   
	                    <?php
	                    foreach ($list_tables as $names) {
	                        ?>
	                        <option value='<?php echo $names ?>' ><?php echo $names ?></option>
	                    <?php } ?>
	            	<?php } ?>
	            </select>
                <div class="gray">
                    <p>注：将复制参照表中所有的字段和设置，应用于新的表中</p>
                </div>
	        </td>
        </tr>
        <tr>
          <th>描述</th>
          <td class="y-bg"><input type="text" class="input" name="description" id="description" value=""  size="30"/></td>
        </tr>
      </table>
    </div>
    <div class="">
      <div class="btn_wrap_pd">
        <button class="btn btn_submit mr10 J_ajax_submit_btn" type="submit">添加</button>
      </div>
    </div>
  </form>
</div>
<script src="{$config_siteurl}statics/js/common.js?v"></script>

</body>
</html>