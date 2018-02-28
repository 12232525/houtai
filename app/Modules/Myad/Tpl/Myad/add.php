<?php if (!defined('APP_VERSION')) exit(); ?>
<Admintemplate file="Common/Head"/>
<style type="text/css">
        .typetab {text-align: left;}
        .typetab ul {list-style: none;}
        .typetab ul li {float: left;margin: 5px 5px 0px;height: 23px;width: 64px;line-height: 23px;text-align: center;cursor: pointer;}
        .i_table {border: 1px solid #CCC;}
</style>

<body class="J_scroll_fixed">
        <div class="wrap J_check_wrap">
                <Admintemplate file="Common/Nav"/>
                <div class="h_a">链接详情</div>
                <form name="myform" action="{:U('Myad/add')}" method="post" class="J_ajaxForm">
                        <input name="normbody[style]" type="hidden" value="code" id="adstyle"/>

                        <div class="table_full">
                                <table width="100%">
                                        <tbody>
                                                <tr>
                                                        <th width="200">广告位标识</th>
                                                        <td><input type="text" name="tagname" value="" class="input length_6" id="name" size="30"></td>
                                                </tr>

                                                <tr>
                                                        <th>所属分类</th>
                                                        <td>
                                                                <select name="clsid">
                                                                        <option value="">==请选择分类==</option>

                                                                        <foreach name="type" item="vo">
                                                                                <option value="{$key}">{$vo}</option>
                                                                        </foreach>
                                                                </select> <span class="home_info">创建新分类</span> <input type="text" name="newType" value="" class="input" size="26"></td>
                                                </tr>
                                                <tr>
                                                        <th>广告投放范围</th>
                                                        <td>  
                                                                <?php echo Form::select_category(0, "name='typeid'", "==请选择分类=="); ?>
                                                                <span class="home_info"> 如不选择,则全站显示!~(如果调用)</span>
                                                        </td>
                                                </tr>
                                                <tr>
                                                        <th>广告位名称</th>
                                                        <td>
                                                                <input type="text" name="adname" value="" class="input length_6" id="name" size="30"></td>
                                                </tr>
                                                <tr>
                                                        <th>时间限制</th>
                                                        <td>
                                                                <label for="notimelimit"> <input name="timeset" type="radio" value="0" checked='1' id="notimelimit" />
                                                                        永不过期</label>
                                                                <label for="timelimitdis"><input type="radio" name="timeset" value="1" id="timelimitdis"/>
                                                                        在设内时间内有效</label>
                                                        </td>
                                                </tr>
                                                <tr id="timelimit" style="display: none">
                                                        <th>投放时间</th>
                                                        <td>
                                                                <input type="text" name="starttime" class="input length_3 J_datetime" value="" /> 
                                                                <input type="text" name="endtime" class="input length_3 J_datetime" value="" /> 
                                                        </td>
                                                </tr>
                                                <tr>
                                                        <th>广告内容</th>
                                                        <td>
                                                                <div class="typetab">
                                                                        <ul id="changeTab">
                                                                                <li id="t_code" class="act">代码</li>
                                                                                <li id="t_txt">文字</li>
                                                                                <li id="t_img">图片</li>
                                                                                <li id="t_flash">Flash</li>
                                                                        </ul>
                                                                        <div style="clear:both"></div>
                                                                </div>
                                                                <div id='advert'>

                                                                </div>
                                                        </td>
                                                </tr>
                                                <tr>
                                                        <th>过期显示内容</th>
                                                        <td><textarea name="expbody" rows="2" cols="20" id="description" class="inputtext" style="height:120px;width:100%;"></textarea></td>
                                                </tr>

                                        </tbody>
                                </table>
                        </div>
                        <div class="btn_wrap">
                                <div class="btn_wrap_pd">             
                                        <button class="btn btn_submit mr10 J_ajax_submit_btnS" type="submit">提交</button>
                                </div>
                        </div>
                </form>
        </div>
        <div style="display:none" id="formtxt">
                <div class="content" id="code" style="display:none;">
                        <table width="100%" cellpadding="3" cellspacing="1" class="i_table">
                                <tr>
                                        <td width="100">广告代码:</td>
                                        <td><textarea name="normbody[htmlcode]" rows="5" cols="50" style="width:99%"></textarea></td>
                                </tr>
                        </table>
                </div>
                <div class="content" id="txt" style="display:none;">
                        <table width="100%" cellpadding=3 cellspacing=1 class='i_table'>
                                <tr>
                                        <td  width="100">文字内容*</td>
                                        <td><input type="text" size="70" name="normbody[title]" value="" class='input'/></td>
                                </tr>
                                <tr>
                                        <td>文字链接*</td>
                                        <td><input type="text" size="70" name="normbody[link]" value="" class='input'/></td>
                                </tr>
                                <tr>
                                        <td>文字颜色</td>
                                        <td><input type="text" size="10" name="normbody[color]" value="" class='input'/> <span class="home_info">例如:red,#EF8684</span></td>
                                </tr>
                                <tr>
                                        <td>文字大小</td>
                                        <td><input type="text" size="10" name="normbody[size]" value="" class='input'/> <span class="home_info">例如:4px,12px</span></td>
                                </tr>
                        </table>
                </div>
                <div class="content" id="img" style="display:none;">
                        <table width="100%" cellpadding=3 cellspacing=1 class='i_table'>
                                <tr>
                                        <td width="100">图片地址*</td>
                                        <td><Form function="images" parameter="normbody[url],subimages,'',Myad"/></td>
                                </tr>
                                <tr>
                                        <td>图片链接*</td>
                                        <td><input type="text" size="50" name="normbody[link]" value="" class='input'/></td>
                                </tr>
                                <tr>
                                        <td>宽度/高度</td>
                                        <td><input type="text" size="10" name="normbody[width]" value="" class='input'/>
                                                <input type="text" size="10" name="normbody[height]" value="" class='input'/></td>
                                </tr>

                                <tr>
                                        <td>图片描述</td>
                                        <td><input type="text" size="50" name="normbody[descrip]" value="" class='input'/></td>
                                </tr>
                        </table>
                </div>
                <div class="content" id="flash" style="display:none;">
                        <table width="100%" cellpadding=3 cellspacing=1 class='i_table'>
                                <tr>
                                        <td width="100">flash链接</td>
                                        <td><Form function="images" parameter="normbody[link],subfalshs,请选择swf文件,Myad,,50,input,swf|fla"/></td>
                                </tr>
                                <tr>
                                        <td>flash宽度</td>
                                        <td><input type="text" size="50" name="normbody[width]" value="" class='input'/></td>
                                </tr>
                                <tr>
                                        <td>flash高度</td>
                                        <td><input type="text" size="50" name="normbody[height]" value="" class='input'/></td>
                                </tr>
                        </table>
                </div>

        </div>

        <script src="{$config_siteurl}statics/js/common.js?v"></script>
        <script type="text/javascript" src="{$config_siteurl}statics/js/content_addtop.js"></script>
        <script language="JavaScript">
                (function($) {
                        function showcode(idName) {
                                $("#advert").html("").html($("#formtxt>#" + idName).html());
                                $("#adstyle").val(idName);
                        }
                        showcode('code');
                        $("#changeTab>li").click(function()
                        {
                                var tabLi = $(this);
                                var thistab = tabLi[0].id;
                                $(".content").each(function()
                                {
                                        if ("t_" + $(this)[0].id == thistab)
                                        {
                                                $("#changeTab>li").removeClass("act");
                                                $("#t_" + $(this)[0].id).addClass("act");
                                                showcode($(this)[0].id);
                                        }
                                })
                        })
                        $("#timelimitdis").click(function() {
                                $("#timelimit").show();
                        })
                        $("#notimelimit").click(function() {
                                $("#timelimit").hide();
                        })
                })(jQuery);
        </script>

</body>
</html>