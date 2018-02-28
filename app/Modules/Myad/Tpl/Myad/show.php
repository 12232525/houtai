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

                <div class="h_a">温馨提示</div>
                <div class="prompt_text">
                        <p>说明：如果嵌入的是thkCMS广告标签，那么将会解析成标签中的内容到页面，广告更改后需要重新生成。
                                如果不希望重新生成所有页面，则直接调用JS代码即可。</p>
                </div>
                <div class="h_a">广告详情</div>
                <div class="table_full">
                        <table width="100%">
                                <tbody>
                                        <tr>
                                                <th width="200">标签调用代码</th>
                                                <td>&lt;myad name='{$data.aid}' /&gt;</td>
                                        </tr>
                                        <tr>
                                                <th>JS调用代码</th>
                                                <td>&lt;script src='/index.php?g=myad&a=getmyad&aid={$data.aid}' language='javascript'&gt;&lt;/script&gt;</td>
                                        </tr>
                                        <tr>
                                                <th>预览</th>
                                                <td>{$data.normbody}</td>
                                        </tr>
                                </tbody>
                        </table>
                </div>

        </div>
        <script src="{$config_siteurl}statics/js/common.js?v"></script>
</body>
</html>