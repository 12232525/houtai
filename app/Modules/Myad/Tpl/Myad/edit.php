<?php if (!defined('APP_VERSION')) exit(); ?>
<Admintemplate file="Common/Head"/>
<style type="text/css">
        .typetab {text-align: left;}
        .typetab ul {list-style: none;}
        .typetab ul li {float: left;margin: 5px 5px 0px;height: 23px;width: 64px;background: url({$config_siteurl}statics/images/admin/content/adtype_link.gif) no-repeat scroll 0px 0px;line-height: 23px;text-align: center;cursor: pointer;}
        .typetab ul .act {background: url({$config_siteurl}statics/images/admin/content/adtype_act.gif) no-repeat scroll 0px 0px;}
        .i_table {border: 1px solid #CCC;}
</style>

<body class="J_scroll_fixed">
        <div class="wrap J_check_wrap">
                <Admintemplate file="Common/Nav"/>
                <div class="h_a">编辑广告</div>
                <form name="myform" action="{:U('Myad/edit')}" method="post" class="J_ajaxForm">
                        <input name="aid" type="hidden" value="{$data.aid}" />

                        <div class="table_full">
                                <table width="100%">
                                        <tbody>
                                                <tr>
                                                        <th width="200">广告位标识</th>
                                                        <td><input type="text" name="tagname" value="{$data.tagname}" class="input length_6" id="name" size="30"></td>
                                                </tr>
                                                <tr>
                                                        <th>所属分类</th>
                                                        <td>
                                                                <select name="clsid">
                                                                        <option value="">==请选择分类==</option>

                                                                        <foreach name="type" item="vo">
                                                                                <option value="{$key}" <eq name="data.clsid" value="$key">selected="selected"</eq>>{$vo}</option>
                                                                        </foreach>
                                                                </select>
                                                        </td>
                                                </tr>
                                                <tr>
                                                        <th>广告投放范围</th>
                                                        <td>  
                                                                <?php echo Form::select_category($data['typeid'], "", "==请选择分类=="); ?>

                                                        </td>
                                                </tr>
                                                <tr>
                                                        <th>广告位名称</th>
                                                        <td>
                                                                <input type="text" name="adname" value="{$data.adname}" class="input length_6" id="name" size="30"></td>
                                                </tr>
                                                <tr>
                                                        <th>时间限制</th>
                                                        <td>
                                                                <label for="notimelimit"> <input name="timeset" type="radio" value="0" <empty name="data.timeset">checked='1'</empty> id="notimelimit" />
                                                                        永不过期</label>
                                                                <label for="timelimitdis"><input type="radio" name="timeset" value="1" <notempty name="data.timeset">checked='1'</notempty>  id="timelimitdis"/>
                                                                        在设内时间内有效</label>
                                                        </td>
                                                </tr>
                                                <tr id="timelimit" <empty name="data.timeset">style="display: none"</empty>>
                                        <th>投放时间</th>
                                        <td>
                                                <input type="text" name="starttime" class="input length_3 J_datetime" value="{$data.starttime|date='Y-m-d H:i:s',###}" /> 
                                                <input type="text" name="endtime" class="input length_3 J_datetime" value="{$data.endtime|date='Y-m-d H:i:s',###}" /> 
                                        </td>
                                        </tr>
                                        <tr>
                                                <th>广告内容</th>
                                                <td><textarea name="normbody" rows="2" cols="20" class="inputtext" style="height:120px;width:100%;">{$data.normbody}</textarea>
                                                </td>
                                        </tr>
                                        <tr>
                                                <th>过期显示内容</th>
                                                <td><textarea name="expbody" rows="2" cols="20" id="description" class="inputtext" style="height:120px;width:100%;">{$data.expbody}</textarea></td>
                                        </tr>

                                        </tbody>
                                </table>
                        </div>
                        <div class="btn_wrap">
                                <div class="btn_wrap_pd">             
                                        <button class="btn btn_submit mr10 J_ajax_submit_btn" type="submit">提交</button>
                                </div>
                        </div>
                </form>
        </div>




        <script src="{$config_siteurl}statics/js/common.js?v"></script>
        <script type="text/javascript" src="{$config_siteurl}statics/js/content_addtop.js"></script>
        <script language="JavaScript">
                (function($) {

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