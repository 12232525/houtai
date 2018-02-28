<script type="text/javascript">/**验证表单复选框是否有选择*/
/**添加新行*/
function addNew() {
	var objMyTable = document.getElementById("tbl");
	var index = objMyTable.rows.length;
	var nextRow = objMyTable.insertRow(index); // 插入新行
	var objCel_0 = nextRow.insertCell(0); // 添加单元格
	objCel_0.innerHTML = "<input type='checkbox' name='chked' value='' />";
	var objCel_1 = nextRow.insertCell(1);
	// nextRow.rowIndex -- 行索引
	objCel_1.innerHTML = "<input type='text' class='input' style='width:80%' name='newRow" + nextRow.rowIndex + "' /><a href='#' onclick='delRow(this)' style='margin-left:10px;'>删除</a>";
}
/**删除行对象*/
function delRow(obj) {
	//obj.parentNode.parentNode.removeNode(true); // Firefox不兼容
	var new_tr = obj.parentNode.parentNode;
	var tmp = new_tr.parentNode;
	tmp.removeChild(new_tr); // 删除子节点
}
/**将文本框值赋给同一行对应的复选框*/
function setValue(obj, obj_chk) {
	obj_chk.value = obj.value;
}</script>
<table id="tbl" border="0" cellpadding="1" style="border-collapse: collapse" width="100%">
	<tr>
		<td width="30">
			&nbsp;
		</td>
		<td>
			<button type="button" onclick="addNew()" class="btn btn_error">
				添加一个选项
			</button>
			<span style="margin-left: 10px;">注：设置正确的答案，直接选中即可</span>
		</td>
	</tr>
	
	<if condition="$questCount gt 0">
		<volist name="questionInfo.options" id='quest'>
		<tr>
			<td>
				<input type="checkbox" <if condition="$quest.ch eq 1">checked="checked"</if> value="" name="chked">
			</td>
			<td>
				<input type="text" value="{$quest.as}" name="newRow1" style="width:80%" class="input">
				<a style="margin-left:10px;" onclick="delRow(this)" href="#">
					删除
				</a>
			</td>
		</tr>
		</volist>
	<else/>
	<tr>
		<td>
			<input type="checkbox" value="" name="chked">
		</td>
		<td>
			<input type="text" name="newRow1" style="width:80%" class="input">
			<a style="margin-left:10px;" onclick="delRow(this)" href="#">
				删除
			</a>
		</td>
	</tr>
	<tr>
		<td>
			<input type="checkbox" value="" name="chked">
		</td>
		<td>
			<input type="text" name="newRow2" style="width:80%" class="input">
			<a style="margin-left:10px;" onclick="delRow(this)" href="#">
				删除
			</a>
		</td>
	</tr>
	<tr>
		<td>
			<input type="checkbox" value="" name="chked">
		</td>
		<td>
			<input type="text" name="newRow3" style="width:80%" class="input">
			<a style="margin-left:10px;" onclick="delRow(this)" href="#">
				删除
			</a>
		</td>
	</tr>
	<tr>
		<td>
			<input type="checkbox" value="" name="chked">
		</td>
		<td>
			<input type="text" name="newRow4" style="width:80%" class="input">
			<a style="margin-left:10px;" onclick="delRow(this)" href="#">
				删除
			</a>
		</td>
	</tr>
	</if>	
</table>

<script type="text/javascript">
	$('button.J_ajax_submit_btn').on('click', function (e) {
		var tArr = new Array();
		var jsonStr = '';
		$("#tbl input[type='text']").each(function(i, e){
			if(e.value){
				var isChecked = $(e).parent().prev().children('input:checked');
				isChecked = isChecked.length > 0 ? 1 : 0;
				jsonStr = {'as':e.value, 'ch':isChecked};
				tArr.push(jsonStr); 
			}
		});
		
		if(tArr.length < 1){
			var btn = $(this);
			art.dialog({
                id: 'warning',
                icon: 'warning',
                content: '请填写多选内容！',
                cancelVal: '关闭',
                cancel: function () {
                    btn.data('subcheck', false);
                    btn.click();
                }
            });
		}else{
			$('#options').val(JSON.stringify(tArr));
		}
	});
</script>
