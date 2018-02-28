<?php
class LinkfieldField {
	
	public $fields;
	
	/**
	 * 返回下拉框的一维数组：id => value
	 */
	public function getInfo($field) {
		
	}

	/**
	 * 用于二维数组中的数据显示输出
	 * @param $fieldList key:字段名，value:字段对应的所有设置内容
	 */
	public function getInfoList(&$data, $fieldList) {
		if (!$data || !$fieldList) return;
		
		$this->fields = $fieldList; 
		
		//查找关联字段相关的所有表名
		$tableList = $arr = array();
		foreach($fieldList as $column => $va){
			$arr = unserialize($va['setting']);
			if(isset($arr['table_name'])){
				$tableList[$column]['table'] = substr($arr['table_name'], strlen(C("DB_PREFIX")));
				$tableList[$column]['setting'] = $arr;
			} 
		}
		
		//目标数组data中关联字段相对应的所有id值
		$tarColList = array_keys($fieldList);
		$columnIdList = array();
		foreach($data as $key1 => $val1){
			foreach($tarColList as $k1 => $v1){
				if($val1[$v1]) $columnIdList[$v1][] = $val1[$v1];  //目标字段，对应的所有记录值
			}
		}
		
		//根据相关的表中，根据条件id值，进行表数据查询结果集
		$result = $res = array();
		foreach($tableList as $colu => $table){
			$where = array();	
			
			$id = $table['setting']['set_id'];
			$name = $table['setting']['set_show']; 
			
			$where[$id] = array('in', implode(',', array_unique($columnIdList[$colu])));
			$res = M($table['table'])->where($where)->field($table['setting']['select_title'])->select();
			
			if($res){
				$tarRes = array();
				foreach($res as $k => $v){
					$tarRes[$v[$id]] = $v[$name];
				}
				$result[$colu] = $tarRes;
				unset($tarRes);
			}
			unset($where);
		}
		
		//赋值关联字段的数据
		foreach($data as &$val){
			foreach($fieldList as $column => $set){
				$val[$column . '_arr']['name'] = isset($result[$column]) ? $result[$column][$val[$column]] : '';
				$val[$column . '_arr']['clickurl'] = $set['clickurl'] . $val[$column];
			}
		}
		
	}

}
?>