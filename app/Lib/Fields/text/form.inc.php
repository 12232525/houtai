<?php

//文本框
function text($field, $value, $fieldinfo) {
    extract($fieldinfo);
    $setting = unserialize($setting);
    $size = $setting['size'];
    if (!$value) $value = $defaultvalue;
	
	extract($setting);
    $type = $ispassword ? 'password' : 'text';
    //错误提示
    $errortips = $this->fields[$field]['errortips'];
    if ($minlength){
        //验证规则
        $this->formValidateRules['info[' . $field . ']']= array("required"=>true);
        //验证不通过提示
        $this->formValidateMessages['info[' . $field . ']']= array("required"=>$errortips?$errortips:$name."不能为空！");
    }
	
	$html = '<div class="pull-left input-group">';
	//首位显示效果
	if($ficon || $ftext){
		$html .= '<span class="pull-left input-group-addon">';
		if($ficon){
		  	$html .= '<font id="preicon" class="">';
			$html .= '<i class="fa '.$ficon.'"></i>';
			$html .= '</font>';
		}
		if($ftext){ $html .= '<font id="pretext"> '. $ftext .'</font>'; }		
		$html .= '</span>';
	}
	//输入框效果
	$html .= '<input type="'.$type.'" name="info[' . $field . ']" id="' . $field . '" size="' . $size . '" value="' . $value . '" class="input form-control" ' . $formattribute . ' ' . $css . '>';	
	//末位效果
	if($ficon2 || $ftext2){
		$html .= '<span class="pull-left input-group-addon">';
		if($ficon2){
		  	$html .= '<font id="suficon" class="">';
			$html .= '<i class="fa '. $ficon2 .'"></i>';
			$html .= '</font>';
		}
		if($ftext2){ $html .= '<font id="suftext"> '. $ftext2 .'</font>'; }		
		$html .= '</span>';
	}
	
	$html .= '</div>';
	
    return $html;
}

?>