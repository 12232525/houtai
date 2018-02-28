<?php
//更新时间 
function datetime($field, $value, $fieldinfo) {
    extract($fieldinfo);
    //错误提示
    $errortips = $this->fields[$field]['errortips'];
    if ($minlength){
        //验证规则
        $this->formValidateRules['info[' . $field . ']']= array("required"=>true);
        //验证不通过提示
        $this->formValidateMessages['info[' . $field . ']']= array("required"=>$errortips?$errortips:$name."不能为空！");
    }
    extract(unserialize($fieldinfo['setting']));
    $isdatetime = 0;
    $timesystem = 0;
    //时间格式
    if ($fieldtype == 'int') {//整数 显示格式
        if (!$value && $defaulttype)
		$value = time();
        //整数 显示格式
        $format_txt = $format == 'm-d' ? 'm-d' : $format;
        if ($format == 'Y-m-d Ah:i:s')
            $format_txt = 'Y-m-d h:i:s';
        $value = $value ? date($format_txt, $value) : '';
		
        $isdatetime = strlen($format) > 6 ? 1 : 0;
        if ($format == 'Y-m-d Ah:i:s') {
            $timesystem = 0;
        } else {
            $timesystem = 1;
        }
    } elseif ($fieldtype == 'datetime') {
        $isdatetime = 1;
        $timesystem = 1;
    } elseif ($fieldtype == 'datetime_a') {
        $isdatetime = 1;
        $timesystem = 0;
    }
	
	//时间类型
	if(!$datetype) $datetype = 'text';
	
	//预设效果
	if(!$ficon) $ficon = 'fa-calendar';
	if(!$ficon2) $ficon2 = 'fa-angle-down';
	
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
	$html .= '%s';	
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
	
	if($datetype == 'month' || $datetype == 'week' || $datetype == 'time'){
		//使用H5标签	
		$input = '<input type="'.$datetype.'" name="info[' . $field . ']" id="' . $field . '" size="' . $size . '" value="' . $value . '" class="input form-control">';
		return sprintf($html, $input);
	}elseif($datetype == 'datetime-local'){
		$timesystem = 1;
		$isdatetime = 1;
		$format_txt = 'Y-m-d h:i';
		$value = time();
        $value = $value ? date($format_txt, $value) : '';
	}elseif($datetype == 'date'){
		$timesystem = 1;
		$isdatetime = 1;
		$format_txt = 'Y-m-d';
		$value = time();
        $value = $value ? date($format_txt, $value) : '';
	}
	//使用datepicker控件
    return Form::date("info[$field]", $value, $isdatetime, 1, 'true', $timesystem, $html);
}

?>