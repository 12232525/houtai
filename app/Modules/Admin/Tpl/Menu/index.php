<?php if (!defined('APP_VERSION')) exit(); ?>
<Admintemplate file="Common/Head"/>
<body class="J_scroll_fixed">
<div class="wrap J_check_wrap">
  <Admintemplate file="Common/Nav"/>
  <form class="J_ajaxForm" action="{:U('Menu/listorders')}" method="post">
    <div class="table_list">
      <table width="100%">
        <colgroup>
        <col width="60">
        <col width="80">
        <col>
        <col width="100">
        <col width="100">
        <col width="100">
        <col width="100">
        <col width="130">
        <col width="120">
        <col width="100">
        <col width="50">
        <col width="80">
        <col width="80">
        <col width="80">
        <col width="120">
        </colgroup>
        <thead>
          <tr>
            <th>排序</th>
            <th>ID</th>
            <th>菜单名称</th>
            <th>项目</th>
            <th>模块</th>
            <th>方法</th>
            <th>参数</th>
            <th>FontAwesome图标</th>
            <th>IconFont图标</th>
            <th>Img图标</th>
            <th><a href="javascript:" data-show="1" class="btn btn-mini btn-primary btn-child-show"><i class="fa fa-chevron-up"></i></a></th>
            <th>菜单类型</th>
            <th>是否显示</th>
            <th>是否跳转</th>
            <th>管理操作</th>
          </tr>
        </thead>
        {$categorys}
      </table>
      <div class="p10"><div class="pages"> {$Page} </div> </div>
     
    </div>
    <div class="btn_wrap">
      <div class="btn_wrap_pd">             
        <button class="btn btn_submit mr10 J_ajax_submit_btn" type="submit">排序</button>
      </div>
    </div>
  </form>
</div>
<script src="{$config_siteurl}statics/js/common.js?v"></script>
<script type="text/javascript">
    $(function () {
        $('.btn-child-show').on('click', function () {
            var st = $(this).attr('data-show');
            if(st == 0){
                $('.table_list tbody tr').each(function (i, e) {
                    if($(e).attr('data-parent') > 0){
                        $(e).show();
                    }
                });
                $(this).html('<i class="fa fa-chevron-up"></i>');
                $(this).attr('data-show', '1');
            }else{
                $('.table_list tbody tr').each(function (i, e) {
                    if($(e).attr('data-parent') > 0){
                        $(e).hide();
                    }
                });
                $(this).html('<i class="fa fa-chevron-down"></i>');
                $(this).attr('data-show', '0');
            }
        });

        $('.btn-node-sub').on('click', function () {
            var pid = $(this).attr('data-id');
            $('.table_list tbody tr').each(function (i, e) {
                if($(e).attr('data-parent') == 0 || $(e).attr('data-parent') == pid){
                    $(e).show();
                }else{
                    //  $(e).hide();
                }
            });
        });

    })
    



</script>
</body>
</html>