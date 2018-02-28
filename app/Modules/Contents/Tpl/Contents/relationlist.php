<?php if (!defined('APP_VERSION')) exit(); ?>
<Admintemplate file="Common/Head"/>
<body class="J_scroll_fixed">
<style type="text/css">
.cu,.cu-li li,.cu-span span {cursor: hand;!important;cursor: pointer}
 .line_ff9966,.line_ff9966:hover td{
	background-color:#FF9966;
}
 .line_fbffe4,.line_fbffe4:hover td {
	background-color:#fbffe4;
}
</style>
<div class="wrap">
  <div class="h_a">搜索</div>
  <form name="searchform" action="{:U("Contents/Contents/public_relationlist")}" method="get" >
    <input type="hidden" value="Contents" name="g">
    <input type="hidden" value="Contents" name="m">
    <input type="hidden" value="public_relationlist" name="a">
    <input type="hidden" value="{$modelid}" name="modelid">
    <div class="search_type cc mb10">
      <div class="mb10"> 
        <span class="mr20">
        <select class="select_2" name="searchtype" style="width:70px;">
          <option value='title' <if condition=" $_GET['field']=='title' ">selected</if>>标题</option>
          <option value='keywords' <if condition=" $_GET['field']=='keywords' ">selected</if> >关键字</option>
          <option value='description' <if condition=" $_GET['field']=='description' ">selected</if>>描述</option>
          <option value='id' <if condition=" $_GET['field']=='id' ">selected</if>>ID</option>
        </select>
        {$Formcategory}
        关键字：
        <input type="text" class="input length_2" name="keywords" style="width:200px;" value="{$Think.get.keywords}" placeholder="请输入关键字...">
        <button class="btn">搜索</button>
        </span>
      </div>
    </div>
  </form>
  <form class="" action="" method="post">
    <div class="table_list">
      <table width="100%">
        <colgroup>
        <col width="40">
        <col width="">
        <col width="80">
        <col width="70">
        <col width="140">
        </colgroup>
        <thead>
          <tr>
            <td>ID</td>
            <td>标题</td>
            <td>点击量</td>
            <td>发布人</td>
            <td><span>发帖时间</span></td>
          </tr>
        </thead>
        <volist name="data" id="vo">
          <tr onClick="select_list(this,'{$vo.title}',{$vo.id})"  class="cu" title="点击选择">
            <td>{$vo.id}</td>
            <td ><a href="javascript:;;"><span style="" >
              <if condition=" $vo['status']==99 ">{$vo.title}
                <else/>
                <font color="#FF0000">[未审核]</font> - {$vo.title}</if>
              </span></a>
              <if condition=" $vo['thumb']!='' "> <img src="{$config_siteurl}statics/images/icon/small_img.gif" title="标题图片"> </if>
              <if condition=" $vo['posids'] "> <img src="{$config_siteurl}statics/images/icon/small_elite.gif" title="推荐位"> </if>
              <if condition=" $vo['islink'] "> <img src="{$config_siteurl}statics/images/icon/link.png" title="转向地址"> </if></td>
            <td><?php echo hits("c-".$vo['catid']."-".$vo['id']);?></td>
            <td><if condition=" $vo['sysadd'] ">{$vo.username}
                <else />
                <font color="#FF0000">{$vo.username}</font><img src="{$config_siteurl}statics/images/icon/contribute.png" title="会员投稿"></if></td>
            <td>{$vo.updatetime|date="Y-m-d H:i:s",###}</td>
          </tr>
        </volist>
      </table>
      <div class="p10"><div class="pages"> {$Page} </div> </div>
    </div>
  </form>
</div>
<script>
function select_list(obj, title, id) {
    var relation_ids = window.parent.$('#relation').val();
    var sid = 'v{$modelid}' + id;
    if ($(obj).attr('class') == 'line_ff9966' || $(obj).attr('class') == null) {
        $(obj).attr('class', 'line_fbffe4');
        window.parent.$('#' + sid).remove();
        if (relation_ids != 'undefined') {
            var r_arr = relation_ids.split('|');
            var newrelation_ids = '';
            $.each(r_arr, function (i, n) {
                if (n != id) {
                    if (i == 0) {
                        newrelation_ids = n;
                    } else {
                        newrelation_ids = newrelation_ids + '|' + n;
                    }
                }
            });
            window.parent.$('#relation').val(newrelation_ids);
        }
    } else {
        $(obj).attr('class', 'line_ff9966');
        var str = "<li id='" + sid + "'>·<span>" + title + "</span><a href='javascript:;' class='close' onclick=\"remove_relation('" + sid + "'," + id + ")\"></a></li>";
        window.parent.$('#relation_text').append(str);
        if (relation_ids == 'undefined') {
            window.parent.$('#relation').val(id);
        } else {
            relation_ids = relation_ids + '|' + id;
            window.parent.$('#relation').val(relation_ids);
        }
    }
}
</script>
</body>
</html>