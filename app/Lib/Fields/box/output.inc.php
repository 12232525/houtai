<?php

//选项
function box($field, $value) {
    extract(unserialize($this->fields[$field]['setting']));
    if ($outputtype) {
        return $value;
    } else {
    	
		
		//--start---原来老的方案：选项名称|选项值
		$opRes = $options;
		$option = $op = array();
		if(!is_array($opRes)){
			$info = array();
			$options = explode("\n", $options);
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
		
        $string = '';
        switch ($boxtype) {
            case 'radio':
                $string = $option[$value];
                break;
            case 'checkbox':
                $value_arr = explode(',', $value);
                foreach ($value_arr as $_v) {
                    if ($_v)
                        $string .= $option[$_v] . ' 、';
                }
                break;
            case 'select':
                $string = $option[$value];
                break;
            case 'multiple':
                $value_arr = explode(',', $value);
                foreach ($value_arr as $_v) {
                    if ($_v)
                        $string .= $option[$_v] . ' 、';
                }
                break;
        }
        return $string;
    }
}

?>