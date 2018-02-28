<?php if (!defined('APP_VERSION')) exit(); ?>
<?php
//读取全部表名
$list_tables = D("Common")->list_tables();
?>
<Admintemplate file="Common/Head"/>
<link href='{$config_siteurl}statics/addons/jquery/switch/switch.css' rel='stylesheet' />
<script src='{$config_siteurl}statics/addons/jquery/switch/switch.js'></script>

<body class="J_scroll_fixed">
<div class="wrap J_check_wrap">
<Admintemplate file="Common/Nav"/>

<div class="table_list">

<div class="pb10">
	<input type="button" name="btnAdd" value="增加一行" id="btnAdd" class="btn btn-danger" />
    <span class="ml10 p5 ">带*号列中的项为必填项</span>
    <span class="ml10 p5 btn fr"><i class="fa fa-th" aria-hidden="true"></i> <a href="http://fontawesome.io/icons/" target="_blank">浏览ICON图标</a></span>
	<span class="ml10 p5 btn fr"><i class="fa fa-list-ul" aria-hidden="true"></i> <a href="http://v2.bootcss.com/base-css.html#buttons" target="_blank">浏览按钮样式</a></span>
</div>	
<form action="{:U('Models/Field/listshow')}" method="post">	
<table id="tbin" border="0" cellpadding="1" style="border-collapse: collapse" width="100%" class="tableRow">
    <!--表头开始-->
    <thead>
    <tr id="trHead" class="HeadStyle">
        <td align="center">排序<span class="red pl5">*</span></td>
        <td align="center">显示名称<span class="red pl5">*</span></td>
        <td align="center">显示位置<span class="red pl5">*</span></td>
        <td align="center">打开方式<span class="red pl5">*</span></td>
        <td align="center">展现形式<span class="red pl5">*</span></td>
        <td align="center">CSS样式<span class="red pl5">*</span></td>
        <td align="center">ICON<span class="red pl5">*</span></td>
        <td align="center">连接URL</td>
        <td style="width:60px;" align="center">统计</td>
        <td align="center">统计关联的表和字段</td>
        <td align="center">操作</td>
    </tr>
    </thead>
    <tbody>
    <!--表头结束-->
    <!--第一行数据-->
     <volist name="setting" id="vo" key="k">
     	<tr id="" class="MyRow">
	        <td id="tc1" align="center">
	           <input name="sort[{$k}]" type="text" value="{$k}" id="txtID" style="width:20px;" class="inputText" />
	        </td>
	        <td id="tc2" align="center">
	           <input name="name[{$k}]" type="text" id="txtDate" value="{$vo.name}" style="width:80px;" class="inputText" />
	        </td>
	        <td id="tc3" align="center">
	            <select name="pos[{$k}]" id="pos" class="tablesSel">
                	<option value="1" <if condition="$vo.pos eq 1">selected="selected"</if>>列表中显示</option>
	           		<option value="2" <if condition="$vo.pos eq 2">selected="selected"</if>>列表头部左</option>
	           		<option value="3" <if condition="$vo.pos eq 3">selected="selected"</if>>列表头部右</option>
	           		<option value="4" <if condition="$vo.pos eq 4">selected="selected"</if>>列表底部左</option>
	           		<option value="5" <if condition="$vo.pos eq 5">selected="selected"</if>>列表底部右</option>
	           		<option value="6" <if condition="$vo.pos eq 6">selected="selected"</if>>搜索框显示</option>
	            </select>
	        </td>
	        <td id="tc4" align="center">
	            <select name="open[{$k}]" id="open" class="tablesSel">
                	<option value="1" <if condition="$vo.open eq 1">selected="selected"</if>>弹出窗口</option>
	           		<option value="2" <if condition="$vo.open eq 2">selected="selected"</if>>打开新页面</option>
	           		<option value="5" <if condition="$vo.open eq 5">selected="selected"</if>>不需要窗口</option>
	            </select>
	        </td>
	        <td id="tc5" align="center">
	            <select name="show[{$k}]" id="show" class="tablesSel">
                	<option value="1" <if condition="$vo.show eq 1">selected="selected"</if>>按钮组</option>
	           		<option value="2" <if condition="$vo.show eq 2">selected="selected"</if>>单按钮</option>
	           		<option value="3" <if condition="$vo.show eq 3">selected="selected"</if>>文字链接</option>
	            </select>
	        </td>
	        <td id="tc6" align="center">
	            <select name="color[{$k}]" id="color" class="tablesSel">
                	<option value="btn" <if condition="$vo.color eq 'btn'">selected="selected"</if>>btn</option>
	           		<option value="btn-primary" <if condition="$vo.color eq 'btn-primary'">selected="selected"</if>>btn-primary</option>
	           		<option value="btn-info" <if condition="$vo.color eq 'btn-info'">selected="selected"</if>>btn-info</option>
	           		<option value="btn-success" <if condition="$vo.color eq 'btn-success'">selected="selected"</if>>btn-success</option>
	           		<option value="btn-warning" <if condition="$vo.color eq 'btn-warning'">selected="selected"</if>>btn-warning</option>
	           		<option value="btn-danger" <if condition="$vo.color eq 'btn-danger'">selected="selected"</if>>btn-danger</option>
	           		<option value="btn-inverse" <if condition="$vo.color eq 'btn-inverse'">selected="selected"</if>>btn-inverse</option>
	           		<option value="btn-link" <if condition="$vo.color eq 'btn-link'">selected="selected"</if>>btn-link</option>
	            </select>
	        </td>
	        <td id="tc7" align="center">
	            <input name="icon[{$k}]" type="text" id="txtNumber" value="{$vo.icon}" style="width:80px;" class="inputLeft" />
	            <div id="divMessage" class="red"></div>
	        </td>
	        <td id="tc8" align="center">
	            <input name="url[{$k}]" type="text" id="txtCount" value="{$vo.url}" style="width:360px;" class="inputText" />
	        </td>
	        <td id="tc9" align="center">
	            <input name="tongji[{$k}]" type="checkbox" value="1" id="txtMoneyWeight" class="switch inputText" <if condition="$vo.tongji eq 1">checked="checked"</if>/>
	        </td>
	        <td id="tc10" align="left">
	            <?php if (is_array($list_tables)) { ?>   
	                <select name="table[{$k}]" id="st_name" class="tablesSel">
	                	<option value="">请选择表名</option>
	                    <?php
	                    foreach ($list_tables as $names) {
	                        if ($names == $vo['table'])
	                            $select = 'selected';
	                        else
	                            $select = '';
	                        ?>
	                        <option value='<?php echo $names ?>' <?php echo $select ?>><?php echo $names ?></option>
	                    <?php } ?>
	                </select>
	            <?php } ?>
				<select name="column[{$k}]" id="set_title" class="columnsSel">
					<if condition="$vo.column">
						<option value="{$vo.column}" selected="selected">{$vo.column}</option>
					<else/>
						<option value="">请选择表名</option>
					</if>	
				</select>
	        </td>
	        <td id="tcDel" align="center">
	            <button name="btnDel" value="删除" id="btnDel" class="btn btn-dellrow btn-warning"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
	        </td>
	    </tr>
     </volist>
      
    <tr id="trDataRow1" class="MyRow">
        <td id="tc1" align="center">
            <input name="sort[0]" type="text" value="{$index}" id="txtID" style="width:20px;" class="inputText" />
        </td>
        <td id="tc2" align="center">
            <input name="name[0]" type="text" id="txtDate" style="width:80px;" class="inputText" />
        </td>
        <td id="tc3" align="center">
            <select name="pos[0]" id="pos" class="tablesSel">
            	<option value="1">列表中显示</option>
           		<option value="2">列表头部左</option>
           		<option value="3">列表头部右</option>
           		<option value="4">列表底部左</option>
           		<option value="5">列表底部右</option>
           		<option value="6">搜索框显示</option>
            </select>
        </td>
        <td id="tc4" align="center">
            <select name="open[0]" id="open" class="tablesSel">
            	<option value="1">弹出窗口</option>
           		<option value="2">打开新页面</option>
           		<option value="5">不需要窗口</option>
            </select>
        </td>
        <td id="tc5" align="center">
            <select name="show[0]" id="show" class="tablesSel">
            	<option value="1">按钮组</option>
           		<option value="2">单按钮</option>
           		<option value="3">文字链接</option>
            </select>
        </td>
        <td id="tc6" align="center">
            <select name="color[0]" id="color" class="tablesSel">
            	<option value="btn">btn</option>
           		<option value="btn-primary">btn-primary</option>
           		<option value="btn-info">btn-info</option>
           		<option value="btn-success">btn-success</option>
           		<option value="btn-warning">btn-warning</option>
           		<option value="btn-danger">btn-danger</option>
           		<option value="btn-inverse">btn-inverse</option>
           		<option value="btn-link">btn-link</option>
            </select>
        </td>
        <td id="tc7" align="center">
            <input name="icon[0]" type="text" id="txtNumber" style="width:80px;" class="inputLeft" />
            <div id="divMessage" class="red"></div>
        </td>
        <td id="tc8" align="center">
            <input name="url[0]" type="text" id="txtCount" style="width:360px;" class="inputText" />
        </td>
        <td id="tc9" align="center">
            <input name="tongji[0]" type="checkbox" value="1" id="txtMoneyWeight" class="switch tongji inputText" />
        </td>
        <td id="tc10" align="left">
            <?php if (is_array($list_tables)) { ?>   
                <select name="table[0]" id="st_name" class="tablesSel">
                	<option value="">请选择表名</option>
                    <?php
                    foreach ($list_tables as $names) {
                    ?>		
                        <option value='<?php echo $names ?>'><?php echo $names ?></option>
                    <?php } ?>
                </select>
            <?php } ?>
			<select name="column[0]" id="set_title" class="columnsSel"><option value="">请选择表名</option></select>
        </td>
        <td id="tcDel" align="center">
            <button name="btnDel" value="删除" id="btnDel" class="btn btn-dellrow btn-warning"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
        </td>
    </tr>
    </tbody>
    <!--第一行数据结束-->
</table>
<input type="hidden" name="modelid" value="{$modelid}"/>
<button class="btn btn-primary" type="submit" name="btnAdd" id="btnAdd">确认保存</button>

<span class="ml10 p5">带*号列中的项为必填项</span>
</form>

</div>
<script type="text/javascript">
    <!--
    $(function() {
    	var mySwitch = {};
    	$('.switch').each(function(i, e){
    		mySwitch[i] = new Switch(e, {
    				size: 'small',
                    showText: false,
                    onText: '开',
                    offText: '关'
            });
    	});
    	
    	
        $(".tablesSel").change(function() {
            updatemenu($(this), $(this).val());
        });

        function updatemenu(ele, table_name) { 
            $.getJSON('api.php?m=Ajaxlinkfield&act=search_data&key=<?=urlencode(authcode("true","",C("AUTHCODE"),3600));?>&callback=?', {tables: table_name,random:Math.random()}, function(data){
                if (data != null) {
                    var str = '';
                    for(var i in data){
                        str += '<option>'+i+'</option>';
                    }
                    ele.siblings('select').html(str);
                } else {
                    alert('数据查询错误！');
                }
            });	
        }
    });
    //-->
</script>
<script type="text/javascript">
	$(function(){
		 $("#btnAdd").bind("click", AddRow);//给添加按钮注册js脚本,添加一行    
	});
	
	function AddRow() {
    	var v = $("#tbin"); //得到表格的jquery对象        
	    //所有的数据行有一个.MyRow的Class，得到数据行的大小;
	    var vcount = $("#tbin tr").filter(".MyRow").size() + 1; //表格有多少个数据行;  
	    var vTr = $("#tbin #trDataRow1");
	    var vTrClone = vTr.clone(true);
	    vTrClone.attr("id", vcount);
	    vTrClone.appendTo(v); //把vtr对象添加到表格 
	    vTxtId = vTrClone.find("#txtID"); //找到序号文本框对象
	    vTxtId.val(vcount); //设置文本框的序号; 
		
		txtDate=vTrClone.find("#txtDate");
        txtDate.val("");
		
		vNumber=vTrClone.find("#txtNumber"); 
        vNumber.val("");
        
        txtCount=vTrClone.find("#txtCount"); 
        txtCount.val("");
		
	    var domvNumber = txtDate[0]; //jquery对象转换为dom对象
	    domvNumber.focus();
	}
	
	//每行的删除操作注册脚本事件
	$(".btn-dellrow").on("click", function(event) {
		event.stopPropagation();
		event.preventDefault();
		var vbtnDel = $(this);
		layer.confirm('确认要删除吗？', {
				  btn: ['确定','取消'], //按钮
				  icon: 3,
		}, function(index){
			
			var vcount = $("#tbin tr").filter(".MyRow").size() + 1; //表格有多少个数据行;
	        if (vcount <= 2) {
				layer.alert('请至少保留一行!', {
					icon: 0,
				})
	        }
	        var vTr = vbtnDel.parent().parent(); //得到父tr对象;    
	        if (vTr.attr("id") == "trDataRow1") {
	            layer.alert('第一行不能删除!', {
					icon: 0,
				})
	        } else {
	            vTr.remove();
	            layer.close(index);	  
	        }
			
		}, function(index){
			layer.close(index);	  
		});
	
	}); //给删除按钮注册js脚本
</script>

</div>
</body>
</html>
