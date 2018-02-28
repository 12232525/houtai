<link rel="stylesheet" href="/statics/addons/jquery/spectrum/spectrum.css">
<script src="/statics/addons/jquery/spectrum/spectrum.js"></script>
<script src="/statics/addons/jquery/spectrum/i18n/jquery.spectrum-zh-cn.js"></script>
<link href='/statics/addons/bootstrap/v3/css/bootstrap.css' rel='stylesheet' />

<table cellpadding="2" cellspacing="1" width="98%">
    <tr> 
        <td width="100">选项列表</td>
        <td>
           <div style="border: dotted 2px #DDDCDC;width:750px;padding:10px;">
	           <table id="tbin" border="0" cellpadding="1" style="border-collapse: collapse" class="tableRow">
				    <!--表头开始-->
				    <thead>
					    <tr id="trHead" class="HeadStyle">
					        <th align="center" style="width:10px;text-align: center;">排序<span class="red pl5">*</span></th>
					        <th align="center" style="width:160px;text-align: center;">选项名称<span class="red pl5">*</span></th>
					        <th align="center" style="width:100px;text-align: center;">选项值<span class="red pl5">*</span></th>
					        <th align="center" style="text-align: center;">显示颜色<span class="red pl5">*</span></th>
					        <th align="center" style="width:80px;text-align: center;">操作</td>
					    </tr>
				    </thead>
				    <tbody>
				    <!--表头结束-->
				    <!--第一行数据-->
				    <tr id="trDataRow1" class="MyRow">
				        <td id="tc1" align="center">
				            <input name="setting[options][sort][]" type="text" value="1" id="txtID" style="width:30px;" class="inputText" />
				        </td>
				        <td id="tc2" align="center">
				            <input name="setting[options][name][]" type="text" id="txtDate" style="width:150px;" class="inputText" />
				        </td>
				        <td id="tc3" align="center">
				            <input name="setting[options][value][]" type="text" id="txtDate" style="width:80px;" class="inputText" />
				        </td>
				        <td id="tc4" align="center">
				            
				             <div class="input-group">
								<input class="form-control" name="setting[options][color][]" placeholder="请选择颜色" value="" type="text">
								<span class="input-group-addon" style="width: 35px; border-left: medium none; background-color: rgb(255, 255, 255);"></span>
								<span class="input-group-btn">
									<button class="btn btn-default colorpicker" id='colorpicker' type="button">选择颜色 <i class="fa fa-caret-down"></i></button>
									<button class="btn btn-default colorclean" type="button"><span><i class="fa fa-remove"></i></span></button>
								</span>
							</div>
				            
				        </td>
				        <td id="tcDel" align="center">
				            <button name="btnDel" value="删除" id="btnDel" class="btn btn-dellrow btn-warning"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
				        </td>
				    </tr>
				    </tbody>
				    <!--第一行数据结束-->
				</table>
		        <div class="pb10" style="padding-top: 10px;">
		        	<button name="btnAdd" type="button" value="" id="btnAdd" class="btn btn-success"><i class="fa fa-plus-circle" aria-hidden="true"></i> 增加一行</button>
		   			<span class="ml10 p5 label label-warning">带*号列中的项为必填项</span>
				</div>	
           </div>
        </td>
    </tr>
    <tr> 
        <td>选项类型</td>
        <td>
            <input type="radio" name="setting[boxtype]" value="radio" checked onclick="$('#setcols').show();$('#setsize').hide();"/> 单选按钮 
            <input type="radio" name="setting[boxtype]" value="checkbox" onclick="$('#setcols').show();$('setsize').hide();"/> 复选框 
            <input type="radio" name="setting[boxtype]" value="select" onclick="$('#setcols').hide();$('setsize').show();" /> 下拉框 
            <input type="radio" name="setting[boxtype]" value="multiple" onclick="$('#setcols').hide();$('setsize').show();" /> 多选列表框
        </td>
    </tr>
    <tr> 
        <td>字段类型</td>
        <td>
            <select name="setting[fieldtype]" onchange="javascript:fieldtype_setting(this.value);">
                <option value="varchar">字符 VARCHAR</option>
                <option value="tinyint">整数 TINYINT(3)</option>
                <option value="smallint">整数 SMALLINT(5)</option>
                <option value="mediumint">整数 MEDIUMINT(8)</option>
                <option value="int">整数 INT(10)</option>
            </select> <span id="minnumber" style="display:none"><input type="radio" name="setting[minnumber]" value="1" checked/> <font color='red'>正整数</font> <input type="radio" name="setting[minnumber]" value="-1" /> 整数</span>
        </td>
    </tr>
    <tbody id="setcols" style="display:">
        <tr> 
            <td>每列宽度</td>
            <td><input type="text" name="setting[width]" value="80" size="5" class="input-text"> px</td>
        </tr>
    </tbody>
    <tbody id="setsize" style="display:none">
        <tr> 
            <td>高度</td>
            <td><input type="text" name="setting[size]" value="1" size="5" class="input-text"> 行</td>
        </tr>
    </tbody>
    <tr> 
        <td>默认值</td>
        <td><input type="text" name="setting[defaultvalue]" size="40" class="input-text"></td>
    </tr>
    <tr> 
        <td>输出格式</td>
        <td>
            <input type="radio" name="setting[outputtype]" value="1" checked /> 输出选项值 
            <input type="radio" name="setting[outputtype]" value="0" /> 输出选项名称
        </td>
    </tr>
    <tr> 
        <td>是否作为筛选字段</td>
        <td>
            <input type="radio" name="setting[filtertype]" value="1"/> 是 
            <input type="radio" name="setting[filtertype]" value="0"/> 否
        </td>
    </tr>	
</table>
<SCRIPT LANGUAGE="JavaScript">
    <!--
    function fieldtype_setting(obj) {
        if(obj!='varchar') {
            $('#minnumber').css('display','');
        } else {
            $('#minnumber').css('display','none');
        }
    }
    //-->
</SCRIPT>
<script type="text/javascript">
	$(function(){
		var palettes = { };
		palettes.default = [
		    ["#000000", "#434343", "#666666", "#999999", "#b7b7b7", "#cccccc", "#d9d9d9", "#efefef", "#f3f3f3", "#ffffff"],
		    ["#980000", "#ff0000", "#ff9900", "#ffff00", "#00ff00", "#00ffff", "#4a86e8", "#0000ff", "#9900ff", "#ff00ff"],
		    ["#e6b8af", "#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#8dea87", "#c9daf8", "#cfe2f3", "#d9d2e9", "#ead1dc"],
		    ["#dd7e6b", "#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#a4c2f4", "#9fc5e8", "#b4a7d6", "#d5a6bd"],
		    ["#cc4125", "#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6d9eeb", "#6fa8dc", "#8e7cc3", "#c27ba0"],
		    ["#a61c00", "#cc0000", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3c78d8", "#3d85c6", "#674ea7", "#a64d79"],
		    ["#85200c", "#990000", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#1155cc", "#0b5394", "#351c75", "#741b47"],
		    ["#5b0f00", "#660000", "#783f04", "#7f6000", "#274e13", "#0c343d", "#1c4587", "#073763", "#20124d", "#4c1130"]
		];
		
		$('#tbin').on('click', '.colorpicker', function(event){
			var ele = $(this);
			$(this).spectrum({
		        flat: false,
		        showInput: true,
		        showInitial: true,
		        showPalette: true,
		        showSelectionPalette: true,
		        maxPaletteSize: 10,
		        preferredFormat: "hex",
		        palette: palettes.default,
		        move: function (color) {
					ele.parent().prev().prev().val(color.toHexString());
					ele.parent().prev().css("background-color", color.toHexString());
        		},
			});
		});
		
		$('#tbin').on('click', '.colorclean', function(event){
			event.preventDefault();
			event.stopPropagation();
			$(this).parent().prev().prev().val("");
			$(this).parent().prev().css("background-color", "#FFF");
		});
		
		$("#btnAdd").bind("click", AddRow);//给添加按钮注册js脚本,添加一行    
	
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
	
	
	});
</script>