<?php
/*
 * 分类字段类型
 */
function catid($field, $value, $fieldinfo) {
    if (!$value)
        $value = $this->catid;
    $publish_str = '';
    //if (ACTION_NAME == 'add' && defined("IN_ADMIN") && IN_ADMIN){
    if (defined("IN_ADMIN") && IN_ADMIN){	
        $publish_str = " <a href='javascript:;' onclick=\"omnipotent('selectid','".U("Contents/Contents/add_othors",array("catid"=>$this->catid))."','同时发布到其他分类',1);return false;\" style='color:red'>[同时发布到其他分类]</a>
            <ul class='three_list cc' id='add_othors_text'></ul>";
    }
    return '<input type="hidden" name="info[' . $field . ']" value="' . $value . '">' . $this->categorys[$value]['catname'] . $publish_str;
}

?>