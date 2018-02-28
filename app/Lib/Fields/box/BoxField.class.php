<?php
class BoxField {
	
	public $fields;
	
	/**
	 * 返回下拉框的一维数组：id => value
	 */
	public function getInfo($field) {
		$info = array();

		$setting = unserialize($this->fields[$field]['setting']);
		$opRes = $setting['options'];
		if(!is_array($opRes)){
			$info = array();
			$options = explode("\n", $setting['options']);
			foreach ($options as $j => $_k) {
				$v = explode("|", $_k);
				$k = trim($v[1]);
				if(!$v[0]) continue;
					
				$option['sort'][$j]  = $k;
				$option['name'][$j]  = $v[0];
				$option['value'][$j] = $k;
				$option['color'][$j] = '#758697';
			}
			$opRes = $option;
		}
		
		$boxCount = count($opRes['sort']); 
		$index = $boxCount + 1;
		for($i = 0; $i < $boxCount; $i++){
			$tk = $opRes['value'][$i];
			$op[$tk]['sort']  = $opRes['sort'][$i];
			$op[$tk]['name']  = $opRes['name'][$i];
			$op[$tk]['value'] = $opRes['value'][$i];
			$op[$tk]['color'] = $opRes['color'][$i];
		}
		$info[$field] = $op;
		
		return $info;
	}

	/**
	 * 用于二维数组中的数据显示输出
	 * @param $fieldList key:字段名，value:字段对应的所有设置内容
	 */
	public function getInfoList(&$data, $fieldList) {
		if (!$data || !$fieldList) return;
		
		$this->fields = $fieldList; 
		
		//目标数组data中选项相对应的所有id值
		$tarColList = array_keys($fieldList);
		
		$columnIdList = array();
		foreach ($data as $boxKey => &$boxVal) {
			foreach ($tarColList as $tk => $tv) {
				$info = $this->getInfo($tv);
				$boxVal[$tv] = isset($info[$tv]) && $info[$tv][$boxVal[$tv]] ? $info[$tv][$boxVal[$tv]]['name'] : $boxVal[$tv];
				//目标字段，对应的所有记录值
			}
		}
	}

}
?>