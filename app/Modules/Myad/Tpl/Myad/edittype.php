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
                <div class="h_a">链接详情</div>
                <form name="myform" action="{:U('Myad/edittype')}" method="post" class="J_ajaxForm">
                        <input name="id" type="hidden" value="{$data.id}" value="code"/>

                        <div class="table_full">
                                <table width="100%">
                                        <tbody>
                                                <tr>
                                                        <th width="200">分类名称</th>
                                                        <td><input type="text" name="typename" value="{$data.typename}" class="input length_6" id="name" size="30"></td>
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
</body>
</html>