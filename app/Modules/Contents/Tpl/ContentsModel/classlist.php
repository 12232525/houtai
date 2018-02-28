<?php if (!defined('APP_VERSION')) exit(); ?>
<Admintemplate file="Common/Head"/>
<Admintemplate file="Common/Table"/>
<link href="{$config_siteurl}statics/addons/css/iCheck/skins/square/blue.css" rel="stylesheet">
<script src="{$config_siteurl}statics/addons/jquery/iCheck/icheck.min.js"></script>

<style type="text/css">
    .tdclass{  width:60px; }
    .btn_wrap_pd{padding:10px 20px 40px 10px !important;}
</style>

<body class="J_scroll_fixed">

<div class="wrap J_check_wrap">
	<div class="navpar">
	  <div class="nav">
	    <ul class="cc">
	      <li <if condition=" !isset($_GET['status']) ">class="current"</if>><a href="{:U('Contents/ContentsModel/classlist', array('modid'=>$modid, 'show'=>$show)  )}">{$catname}列表</a></li>
	      <li <if condition=" isset($_GET['status']) ">class="current"</if>><a href="{:U('Contents/ContentsModel/classlist', array('modid'=>$modid ,'search'=>1 ,'status'=>1, 'show'=>$show)  )}">待审核{$catname}</a></li>
	    </ul>
  		<ul class="rr">
  			<li><a class="pl10" href="javascript:history.go(-1)"><i class="fa fa-reply-all"></i> 返回</a></li>
  			<li><a href="javascript:location.reload(true);" class=" refresh mr10 " id="" title="刷新"><i class="fa fa-refresh" aria-hidden="true"></i> 刷新</a></li>
  		</ul>	
	  </div>
    </div>
  
   <input id="ifameModelShow" name="" type="hidden" value="{$show}"/>
  
<if condition="$show eq 1">
  <form method="get" action="">
  <input type="hidden" value="Contents" name="g">
  <input type="hidden" value="ContentsModel" name="m">
  <input type="hidden" value="classlist" name="a">
  <input type="hidden" value="{$modid}" name="modid">
  <input type="hidden" value="0" name="steps">
  <input type="hidden" value="1" name="search">

  <Admintemplate file="Contents/ContentsModel/search"/>

  </form>
  
  <form class="J_ajaxForm" action="" method="post">
  </if>
  
    <div class="table_list bra4">
    	
    <if condition="$show eq 1">
      <div class="mt5 fl">
		<a href="javascript:void(0)" onClick="javascript:openwinx('{:U("Contents/ContentsModel/add",array("modid"=>$modid))}','添加{$catname}')" class="btn btn-primary" title="添加{$catname}"><i class="fa fa-plus pr5" aria-hidden="true"></i>添加{$catname}</a>
  	  </div>
  	</if>  
  	
  	 <div class="mt5 fr mr10">
  	  	<div class="btn-toolbar">
		  <div class="btn-group">
		  	    <a class="btn pl10 pr10" href="javascript:;"><i class="fa fa-bar-chart" aria-hidden="true"></i> {$catname}</a>
		  	<foreach name="statisticsTotal" item="total">
        	    <a class="btn pl10 pr10 {$total.class}" href="javascript:;">{$total.title}{$total.count}</a>
		  	</foreach>
		  </div>
		</div>
  	 </div>
  	  
      <table id="table"
      		data-toggle="table" 
      		data-sort-order="desc"  
      		data-show-columns="true"  
      		data-toolbar="#toolbar" 
      		data-reorderable-columns="true"  
            data-search="true"
            data-use-row-attr-func="true" 
            data-reorderable-rows="true" 
            data-show-pagination-switch="true" 
            data-show-refresh="true" 
            data-key-events="true"  
            data-mobile-responsive="true"
            data-detail-formatter="detailFormatter"
      		<if condition="$Content">data="1"<else/>data="0"</if> class="display ">
        <thead>
          <tr>
            <th data-field="state" data-checkbox="true" data-class="tdclass"></th>
            <!--
            <th id="td-listorders-0" data-halign="center" data-align="center" data-field="listorders" data-sortable="true" data-cell-style="cellStyle" style="text-align:center;min-width:60px">排序</th>
            -->
            <th id="td-id-0" data-halign="center" data-align="center" data-field="id" data-sortable="true" data-cell-style="cellStyle" style="text-align:center;min-width:60px;">ID</th>
            <if condition="$showsetting eq 1">
            	<th align="center" style="min-width:60px">关联操作</th>
            </if>
            <th align="center" style="min-width:60px" data-halign="center" data-align="center">管理操作</th>
            <foreach name="FieldList" item="fieldInfo">
            	<th data-filter-control="select" id="td-{$fieldInfo.field}-0" data-field="{$fieldInfo.field}" data-sortable="true" align="{$fieldInfo.isalign}" data-cell-style="cellStyle" style="min-width:{$fieldInfo.showwidth}px;">{$fieldInfo.name}</th>
            </foreach>
            <th align="center" style="min-width:70px" data-align="center">发布人</th>
            <th align="center" id="td-savetime-0" data-halign="center" data-align="center" data-field="savetime" data-sortable="true" data-cell-style="cellStyle" style="text-align:center;min-width:140px;"><span>发布时间</span></th>
            <th align="center" id="td-updatetime-0" data-halign="center" data-align="center" data-field="updatetime" data-sortable="true" data-cell-style="cellStyle" style="text-align:center;min-width:140px;"><span>更新时间</span></th>
          </tr>
        </thead>
        <tbody>
        <volist name="Content" id="vo" key="k">
          <tr>
            <td align="center"></td>
            <!--
            <td id="td-listorders-{$k}" data-field="listorders" data-sortable="true" data-cell-style="cellStyle" style="text-align:center;min-width:60px;"><input name='listorders[{$vo.id}]' class="input" type='text' size='3' value='{$vo.listorder}'></td>
            -->
            <td id="td-id-{$k}" data-field="id" data-sortable="true" data-cell-style="cellStyle" style="text-align:center;min-width:60px;">{$vo.id}</td>
           
           	<if condition="$showsetting eq 1">
	            <td align="center" data-halign="center" data-align="center">
	            	<div class="btn-toolbar">
					  <div class="btn-group">
					  	<foreach name="vo.manager" item="op">
					  		<if condition="$op.open eq 1">
		            	    	<a class="btn pl5 pr5 posrel" href="javascript:;" onClick="javascript:openwinx('{$op.url}','查看【{$vo.name}】{$op.name}')">{$op.name}<span class="badge badge-success">{$op.tongji}</span></a>
					  		<elseif condition="$op.open eq 2"/>
					  			<a class="btn pl5 pr5 posrel" target="_blank" href="{$op.url}">{$op.name}<span class="badge badge-success">{$op.tongji}</span></a>
					  		<elseif condition="$op.open eq 5"/>	
					  			<a class="btn pl5 pr5 posrel" href="{$op.url}">{$op.name}<span class="badge badge-success">{$op.tongji}</span></a>
					  		</if>		
					  	</foreach>
					  </div>
					</div>
	            </td>
            </if>
            
            <td align="center" data-halign="center" data-align="center">
            	<div class="btn-toolbar">
				  <div class="btn-group">
            	    <a class="btn pl5 pr5" href="javascript:;;" onClick="javascript:openwinx('{:U("Contents/ContentsModel/view",array("modid"=>$modid,"id"=>$vo['id'], "show"=>$show))}','查看{$catname}：{$vo.name}')"><i class="fa fa-search" aria-hidden="true"></i></a>
            		<a class="btn pl5 pr5" href="javascript:;;" onClick="javascript:openwinx('{:U("Contents/ContentsModel/edit",array("modid"=>$modid,"id"=>$vo['id'], "show"=>$show))}','编辑{$catname}：{$vo.name}')"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a> 
            		<a class="J_ajax_del btn pl5 pr5" href="{:U("Contents/ContentsModel/delete",array("modid"=>$modid,"id"=>$vo['id']))}"><i class="fa fa-trash-o" aria-hidden="true"></i></a> 
				  </div>
				</div>
            </td>
           	
            <foreach name="FieldList" item="fieldInfo">
            	<td id="td-{$fieldInfo['field']}-{$k}" data-field="{$fieldInfo['field']}" data-sortable="true" data-cell-style="cellStyle" style="text-align:{$fieldInfo['isalign']};min-width:{$fieldInfo['showwidth']}px;">
            		<if condition="isset($vo[$fieldInfo['field'].'_tips']) ">
            			<?php echo $vo[$fieldInfo['field'].'_tips'];?>
            		<else />
            			<?php echo $vo[$fieldInfo['field']];?>
            		</if>
        	    </td>
            </foreach>
            
            <td align="center">
            	<if condition=" $vo['sysadd'] ">
            		{$vo.username}
                <else />
                	<font>{$vo.username}</font>
                </if>
            </td>
            <td align="center" id="td-savetime-{$k}" data-field="savetime" data-sortable="true" data-cell-style="cellStyle" style="text-align:center;min-width:140px;">{$vo.savetime}</td>
            <td align="center" id="td-updatetime-{$k}" data-field="updatetime" data-sortable="true" data-cell-style="cellStyle" style="text-align:center;min-width:140px;">{$vo.updatetime}</td>
            
          </tr>
        </volist>
        </tbody>
      </table>

    </div>
    
<if condition="$show eq 1">    
    
    <div class="btn_wrap">
      <div class="btn_wrap_pd">
        
        <div class="fl">
	        <label class="mr20"><input type="checkbox" class="J_check_all" data-direction="y" data-checklist="J_check_y"> 全选</label>
	        <!--
	        <button class="btn J_ajax_submit_btn" type="submit" data-action="{:U('Contents/ContentsModel/listorder',array('modid'=>$modid))}">排序</button>
	        -->
	        <button class="btn J_ajax_submit_btn" type="submit" data-action="{:U('Contents/ContentsModel/public_check',array('modid'=>$modid))}">审核</button>
	        <button class="btn J_ajax_submit_btn" type="submit" data-action="{:U('Contents/ContentsModel/public_nocheck',array('modid'=>$modid))}">取消审核</button>
	        <button class="btn J_ajax_submit_btn" type="submit" data-action="{:U('Contents/ContentsModel/delete',array('modid'=>$modid))}">删除</button>
	    </div>
      	<div class="fr">
            <div class="fl mr20 mt5">
              <i class="fa fa-calculator mr5"></i>查询结果：【总共：{$pageList.Total_Size} 条，每页：{$pageList.Page_size} 条，当前：{$pageList.Current_page} / {$pageList.Total_Pages} 页】
            </div>
            <div class="fr pages"> {$Page} </div>
        </div>
      	
      </div>
    </div>
  </form>
  
</if>  

</div>

<script src="{$config_siteurl}statics/js/common.js"></script>
<script>
var ifameShow = $('#ifameModelShow').val();
var hg = $(window).height() - 280;
if(ifameShow < 1){
	hg = $(window).height() - 280;
	//$('.wrap').css('margin-bottom', '0');
}
$.extend($.fn.bootstrapTable.defaults, {
    height: hg,
});
   
$(function() {
    $('input').iCheck({
        labelHover : false,
        cursor : true,
        checkboxClass : 'icheckbox_square-blue',
        radioClass : 'iradio_square-blue',
        increaseArea : '0%'
    });

    //如果出现了空数据，刚显示
    if($('#table tr').hasClass('.no-records-found')){
        $('.table_list').css('height', '220px');
    }

    $("#searchCol").find("[type='radio']").on("ifClicked", function(event){
        $(this).iCheck('uncheck');
    });

    $('.J_check_all').on('ifClicked', function(event){
        //ifCreated 事件应该在插件初始化之前绑定
        $('#table').find("input[type='checkbox']").each(function(i, e){
            if($(this).parent().hasClass('checked')){
                $(this).parent().removeClass('checked');
                $(this).removeAttr('checked');
            }else{
                $(this).parent().addClass('checked');
                $(this).attr('checked', 'checked');
            }
        });
    });

    var hg2 = $(window).height() - 280;
	if($('.fixed-table-body table').height() < hg2){
		hg2 = $('.fixed-table-body table').height();
		
		if($.browser.mozilla) hg2 = hg2 - 42;
		if($.browser.chrome) hg2 = hg2 - 23;
		
		$('.fixed-table-container').css('height', hg2+'px');
	}
	
} );

/**
var $table = $('#table'),
$button = $('#button');
$(function () {
    $button.click(function () {
        $table.bootstrapTable('toggleView');
    });
});	
*/    
</script>

<script>
setCookie('refersh_time', 0);
function refersh_window() {
    var refersh_time = getCookie('refersh_time');
    if (refersh_time == 1) {
        window.location.reload();
    }
}
setInterval(function(){
	refersh_window()
}, 3000);
$(function () {
    Wind.use('ajaxForm','artDialog','iframeTools', function () {
        //批量移动
        $('#J_Content_remove').click(function (e) {
            var str = 0;
            var id = tag = '';
            $("input[name='ids[]']").each(function () {
                if ($(this).attr('checked')) {
                    str = 1;
                    id += tag + $(this).val();
                    tag = '|';
                }
            });
            if (str == 0) {
				art.dialog.through({
					id:'error',
					icon: 'error',
					content: '您没有勾选信息，无法进行操作！',
					cancelVal: '关闭',
					cancel: true
				});
                return false;
            }
            var $this = $(this);
            art.dialog.open("{$config_siteurl}index.php?g=Contents&m=Contents&a=remove&modid={$modid}&ids=" + id, {
                title: "批量移动"
            });
        });
    });
});

function view_comment(obj) {
	Wind.use('artDialog','iframeTools', function () {
         art.dialog.open($(obj).attr("data-url"), {
			close:function(){
				$(obj).focus();
			},
            title: $(obj).attr("data-title"),
			width:"800px",
            height: '520px',
			id:"view_comment",
            lock: true,
            background:"#CCCCCC",
            opacity:0
        });
    });
}

function pushs() {
    $("form").submit(function () {
        return false;
    });
    var str = 0;
    var id = tag = '';
    $("input[name='ids[]']").each(function () {
        if ($(this).attr('checked')) {
            str = 1;
            id += tag + $(this).val();
            tag = '|';
        }
    });
    if (str == 0) {
       art.dialog({
		   id:'error',
		   icon: 'error',
		   content: '您没有勾选信息，无法进行操作！',
		   cancelVal: '关闭',
		   cancel: true
		});
        return false;
    }
    Wind.use('artDialog','iframeTools', function () {
         art.dialog.open("{$config_siteurl}index.php?g=Contents&m=Contents&a=push&action=position_list&modelid={$modelid}&modid={$modid}&id=" + id, {
            title: "信息推送"
        });
    });
}
</script>
</body>
</html>