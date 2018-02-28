<?php if (!defined('APP_VERSION')) exit(); ?>
<Admintemplate file="Common/Head"/>
<body class="J_scroll_fixed">
        <div class="wrap J_check_wrap">
                <Admintemplate file="Common/Nav"/>
                <form name="myform" class="J_ajaxForm" action="{:U('Myad/delete')}" method="post" >
                        <div class="table_list">
                                <table width="100%" cellspacing="0">
                                        <thead>
                                                <tr>
                                                        <td width="20" align="center"><input type="checkbox" class="J_check_all" data-direction="x" data-checklist="J_check_x"></td>
                                                        <td width="100" align="center">ID</td>
                                                        <td>分类名称</td>
                                                        <td width="180" align="right">管理</td>
                                                </tr>
                                        </thead>
                                        <tbody>
                                        <volist name="data" id="vo">
                                                <tr>
                                                        <td align="center"><input class="J_check" data-yid="J_check_y" data-xid="J_check_x" name="ids[]" value="{$vo.id}" type="checkbox"></td>
                                                        <td align="center">{$vo.id}</td>
                                                        <td>{$vo.typename}</td>
                                                        <td align="center"><a href="{:U('Myad/edittype',array('id'=>$vo['id']))}">编辑</a> | <a href="{:U('Myad/delteyp',array('aid'=>$vo['aid']))}">删除</a></td>
                                                </tr>
                                        </volist>
                                        </tbody>
                                </table>
                                <div class="p10">
                                        <div class="pages"> {$Page} </div>
                                </div>
                        </div>
                        <div class="">
                                <div class="btn_wrap_pd">             
                                        <button class="btn btn_submit mr10 J_ajax_submit_btn" type="submit">提交</button>
                                </div>
                        </div>
                </form>
        </div>
        <script src="{$config_siteurl}statics/js/common.js?v"></script>
</body>
</html>