<?php
//文本框
function hidden($field, $value, $fieldinfo, $isSearch = 0) {
    extract($fieldinfo);
    $setting = unserialize($setting);
    $size = $setting['size'];
	
	extract($setting);
    if (!$value) $value = $defaultvalue;

    $tstr = '';
    if($isSearch){
        $type = 'text';
    }else{
        $type = 'text';
        $tstr = "readonly='readonly'";
    }

    //错误提示
    $errortips = $this->fields[$field]['errortips'];
    if ($minlength){
        //验证规则
        $this->formValidateRules['info[' . $field . ']']= array("required"=>true);
        //验证不通过提示
        $this->formValidateMessages['info[' . $field . ']']= array("required"=>$errortips?$errortips:$name."不能为空！");
    }

    $input = '<input type="'.$type.'" name="info[' . $field . ']" id="' . $field . '" size="' . $size . '" value="' . $value . '" ' . $tstr . ' class="input form-control">';
    
	return $input;
}

?>