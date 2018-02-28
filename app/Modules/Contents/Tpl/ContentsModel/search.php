<style type="text/css">
    .searchCol{
        float: left;
        vertical-align: middle;
    }
    .labelCol{  line-height: 26px;  }
    .labelCol2{  line-height: 28px;  }
    .searchCol .table_full{
        margin: 0 !important;
    }

</style>
<div class="search_type cc mb10 bra4">
  <div class="searchCol" id="searchCol">
      <div class="table_full">
          <table width="100%" id="searchTableId">
            <tr>
              <td>
                <span class="mr20">添加时间：
                <input type="text" name="start_time" class="input length_2 J_date" value="{$Think.get.start_time}" style="width:140px;"> - <input type="text" class="input length_2 J_date" name="end_time" value="{$Think.get.end_time}" style="width:140px;">
                </span>
                </td>
                <td colspan="">
                <span class="">关键字：</span>
                <select class="select_2" name="searchtype">
                  <option value='0' <if condition=" $searchtype == '0' "> selected</if>>{$catname}</option>
                  <option value='3' <if condition=" $searchtype == '3' "> selected</if>>ID</option>
                  <option value='1' <if condition=" $searchtype == '1' "> selected</if>>简介</option>
                </select>
                <input type="text" class="input" name="keyword" style="width:200px;" value="" placeholder="请输入关键字...">
                </td>
                <td>
                    <div class="fl mr20">
                        <button class="btn btn-primary mr10"><i class="fa fa-search mr5"></i> 搜索</button>
                        <a class="btn btn-default" href="{:U('Contents/ContentsModel/classlist', array('modid'=>$modid, 'show'=>$show)  )}"><i class="fa fa-cog mr5"></i> 重置</a>
                    </div>
                    <div class="fr labelCol2">
                        <a data-type="1" href="javascript:showAdvSearchFunc(this)" class="mr20 f15">
                            <i class="fa fa-search-plus"></i> 高级搜索
                            <span id="searchSpan1"><i class="fa fa-angle-double-down"></i></span>
                            <span id="searchSpan2" class="hide"><i class="fa fa-angle-double-up"></i></span>
                        </a>
                    </div>
                </td>
            </tr>
                <?php
                if(is_array($forminfos['base'])) {
                    $isShow = true; //判断是否显示
                    $i = 0;
                    foreach ($forminfos['base'] as $field => $info) {
                        if($info['issearch'] == 0) continue;
                        $isShow = true;
                        if ($info['isomnipotent'] || $field == 'name') continue;
                        if ($info['formtype'] == 'omnipotent') {
                            foreach ($forminfos['base'] as $_fm => $_fm_value) {
                                if ($_fm_value['isomnipotent']) {
                                    $info['form'] = str_replace('{' . $_fm . '}', $_fm_value['form'], $info['form']);
                                }
                            }
                            foreach ($forminfos['senior'] as $_fm => $_fm_value) {
                                if ($_fm_value['isomnipotent']) {
                                    $info['form'] = str_replace('{' . $_fm . '}', $_fm_value['form'], $info['form']);
                                }
                            }
                        } elseif ($info['formtype'] == 'hidden') {
                            $isShow = false; //判断是否显示
                        }

                        if ($i%3 == 0) {
                            ?>
                        <tr id="searchTr{$i}" class="hide">
                        <?php } ?>
                        <td width="">
                            <div class="fl labelCol"><?php echo $info['name']; ?>：</div><div class="fl"><?php echo $info['form']; ?></div>
                        </td>
                    <?php if ($i%3 == 2) { ?>
                    </tr>
                    <?php
                        }
                        $i++;
                    }
                }
                ?>
          </tbody>
      </table>

    </div>
  </div>
</div>
<script type="text/javascript">
    var showAdvSearchFunc = function (obj) {
        var trs = $('#searchTableId').find('tr');
        trs.each(function (index, ele) {
            if(index > 0){
                if($(this).hasClass('hide')) $(this).removeClass('hide');
                else $(this).addClass('hide');
            }
        });
        var cmark = parseInt($(obj).attr('data-type'));
        if(cmark == 2){
            $(obj).attr('data-type', '1');
            $('#searchSpan1').removeClass('hide');
            $('#searchSpan2').addClass('hide');
        } else{
            $(obj).attr('data-type', '2');
            $('#searchSpan2').removeClass('hide');
            $('#searchSpan1').addClass('hide');
        }
    }
</script>