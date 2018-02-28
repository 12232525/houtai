<?php
/**
 * 用于页面显示输出
 */
function datetime($field, $value) {
	if ($value == '0000-00-00 00:00:00') return '';
	 
    $setting = unserialize($this->fields[$field]['setting']);
    extract($setting);
    if ($fieldtype == 'date' || $fieldtype == 'datetime') {
        return $value;
    } else {
        $format_txt = $format;
    }
    if (strlen($format_txt) < 6) {
        $isdatetime = 0;
    } else {
        $isdatetime = 1;
    }
    if (!$value) $value = time();
    $value = date($format_txt, $value);
    return $value;
}

?>