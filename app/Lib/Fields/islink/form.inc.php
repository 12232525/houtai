<?php
//转向地址
function islink($field, $value, $fieldinfo) {
    if ($value) {
        $url = $this->data['url'];
        $checked = 'checked';
        $_GET['islink'] = 1;
    } else {
        $disabled = 'disabled';
        $url = $checked = '';
        $_GET['islink'] = 0;
    }
    $size = $fieldinfo['size'] ? $fieldinfo['size'] : 25;
    return '<input type="hidden" name="info[islink]" value="0"><input type="url" name="linkurl" id="linkurl" value="' . $url . '" size="' . $size . '" maxlength="255" ' . $disabled . ' class="input length_3"> <input name="info[islink]" type="checkbox" id="islink" value="1" onclick="ruselinkurl();" ' . $checked . '> <font color="red">转向链接</font>';
}

?>