<?php

function box($field, $value, $fieldinfo) {
    extract($fieldinfo);
    //错误提示
    $errortips = $this->fields[$field]['errortips'];
    if ($minlength){
        //验证规则
        $this->formValidateRules['info[' . $field . ']']= array("required"=>true);
        //验证不通过提示
        $this->formValidateMessages['info[' . $field . ']']= array("required"=>$errortips?$errortips:$name."不能为空！");
    }
    $setting = unserialize($fieldinfo['setting']);
    if ($value == '')
        $value = $setting['defaultvalue'];
	
	//--start---原来老的方案：选项名称|选项值
	$opRes = $setting['options'];
	$option = $op = array();
	if(!is_array($opRes)){
		$info = array();
		$options = explode("\n", $setting['options']);
		foreach ($options as $j => $_k) {
			$v = explode("|", $_k);
			$k = trim($v[1]);
			
			if(!$v[0]) continue;	
				
			$op['sort'][$j]  = $k;
			$op['name'][$j]  = $v[0];
			$op['value'][$j] = $k;
			$op['color'][$j] = '#758697';
		}
		$opRes = $op;
	}
	//兼容新的规则，加入了颜色选项
	$boxCount = count($opRes['sort']); 
	$index = $boxCount + 1;
	for($i = 0; $i < $boxCount; $i++){
		$tk = $opRes['value'][$i];
		$option[$tk] = $opRes['name'][$i];
	}
	//----end----
	
    $values = explode(',', $value);
    $value = array();
    foreach ($values as $_k) {
        if ($_k != '')
            $value[] = $_k;
    }
    $value = implode(',', $value);
    switch ($setting['boxtype']) {
        case 'radio':
            $string = Form::radio($option, $value, "name='info[$field]' $fieldinfo[formattribute]", $setting['width'], $field);
            break;

        case 'checkbox':
            $string = Form::checkbox($option, $value, "name='info[$field][]' $fieldinfo[formattribute]", 1, $setting['width'], $field);
            break;

        case 'select':
            $string = Form::select($option, $value, "name='info[$field]' id='$field' $fieldinfo[formattribute]");
            break;

        case 'multiple':
            $string = Form::select($option, $value, "name='info[$field][]' id='$field ' size=2 multiple='multiple' style='height:60px;' $fieldinfo[formattribute]");
            break;
    }
    return $string;
}

?>