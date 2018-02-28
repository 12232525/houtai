<?php

/**
 * 处理信息录入表单
 * Some rights reserved：it100.net
 * Contact email:admin@it100.net
 */
class content_form {

    //validate表单验证
    public $formValidateRules, $formValidateMessages, $formJavascript;
    //分类ID
    protected $catid = 0;
    //分类缓存
    protected $categorys = array();
    //模型ID
    protected $modelid = 0;
    //字段信息
    protected $fields = array();
    //模型缓存
    protected $model = array();
    //数据
    protected $data = array();
    //最近错误信息
    protected $error = '';
    // 数据表名（不包含表前缀）
    protected $tablename = '';

    /**
     * 构造函数
     * @param type $modelid 模型ID
     * @param type $catid 分类id
     */
    function __construct($modelid, $catid) {
        $this->model = F("Model");
        $this->modelid = $modelid;
        if (empty($this->model[$this->modelid])) {
            return false;
        }
        $this->catid = $catid;
        $this->categorys = F('Category');
        $this->fields = F("Model_field_" . $this->modelid);
        $this->tablename = trim($this->model[$this->modelid]['tablename']);
    }

    /**
     * 魔术方法，获取配置
     * @param type $name
     * @return type
     */
    public function __get($name) {
        return isset($this->data[$name]) ? $this->data[$name] : (isset($this->$name) ? $this->$name : NULL);
    }

    /**
     *  魔术方法，设置options参数
     * @param type $name
     * @param type $value
     */
    public function __set($name, $value) {
        $this->data[$name] = $value;
    }

    /**
     * 获取模型字段信息
     * @param type $data
     * @param int $isSearch 1:表示搜索显示 0：非搜索显示
     * @return type 
     */
    public function get($data = array(), $isSearch = 0) {
        $this->data = $data;
        $info = array();
        foreach ($this->fields as $field => $fieldInfo) {
            //判断是否后台
            if (defined('IN_ADMIN') && IN_ADMIN) {
                //判断是否内部字段，如果是，跳过
                if ($fieldInfo['iscore']) continue;
            } else {
                //判断是否内部字段或者，是否禁止前台投稿字段
                if ($fieldInfo['iscore']) continue;
                //是否在前端页面中显示
                if (!$fieldInfo['isadd']) continue;
            }
            //字段类型
            $func = $fieldInfo['formtype'];
            //判断对应方法是否存在，不存在跳出本次循环
            import('util', LIB_PATH . '/Fields/' . $func , '.inc.php');
            if (!method_exists($this, $func)) continue;
            $value = isset($this->data[$field]) ? Input::getVar($this->data[$field]) : '';
            //如果是分页类型字段
            if ($func == 'pages' && isset($this->data['maxcharperpage'])) {
                $value = $this->data['paginationtype'] . '|' . $this->data['maxcharperpage'];
            }
            //取得表单HTML代码 传入参数 字段名 字段值 字段信息
            $form = $this->$func($field, $value, $fieldInfo, $isSearch);
            if ($form !== false) {
                $star = $fieldInfo['minlength'] || $fieldInfo['pattern'] ? 1 : 0;
                $fieldConfg = array(
                    'name' => $fieldInfo['name'],
                    'tips' => $fieldInfo['tips'],
                    'form' => $form,
                    'star' => $star,
                    'isomnipotent' => $fieldInfo['isomnipotent'],
                    'formtype' => $fieldInfo['formtype'],
                    'issearch' => $fieldInfo['issearch'],
                );
                //作为基本信息
                if ($fieldInfo['isbase']) {
                    $info['base'][$field] = $fieldConfg;
                } else {
                    $info['senior'][$field] = $fieldConfg;
                }
            }
        }

        //配合 validate 插件，生成对应的js验证规则
        $this->formValidateRules = $this->ValidateRulesJson($this->formValidateRules);
        $this->formValidateMessages = $this->ValidateRulesJson($this->formValidateMessages, true);

        return $info;
    }

	/**
	 * 根据数据库中返回的值，来显示输出相应的格式
	 * @param type $data
     * @return type 
	 */ 
	public function getOutputFormatField(&$data){
		if(!$data) return ;
		
        $FieldTypeList = $formatInfo = array();
        foreach ($this->fields as $field => $fieldInfo) {
			
			//是否设置在列表显示的字段
			if($fieldInfo['islistshow'] != 1) continue;
			
			//字段类型
            $func = $fieldInfo['formtype'];
			$FieldTypeList[$func][$field] = $fieldInfo;		
		}
		
		if(!$FieldTypeList) return ;
		
		foreach($FieldTypeList as $func => $fieldData){
			 //判断对应方法是否存在，不存在跳出本次循环
            $className = ucfirst($func) .'Field';
            import($className, LIB_PATH . '/Fields/' . $func , '.class.php');
            if (!class_exists($className, false)) {
                continue;
            }
			
			$FieldClass = new $className();
			if (!method_exists($FieldClass, 'getInfoList')) {
                continue;
            }
			$FieldClass->getInfoList($data, $fieldData);
		}
		
	}
	
	//关联数据统计操作字段
	public function getRelationManagerList(&$data){
		if(!$data) return ;	
			
		$setting = M('model')->field('showsetting')->where("modelid = $this->modelid")->find();
		if(!$setting) return ;
		
		$setting = unserialize($setting['showsetting']);
		sort($setting);
		
		$ids = $arr = array();
		foreach($data as &$val){
			$ids[] = $val['id'];
		}
		
		$tongji = $res = array();
		$Model = new Model();
		foreach($setting as &$stv){
			if($stv['tongji'] && $stv['table'] && $stv['column']){
				$sql = 'SELECT '.$stv['column'].',count(id) AS count FROM ' . $stv['table'] . ' WHERE ' . $stv['column'] . ' in (' . implode(',', $ids) . ') AND status=99 GROUP BY ' . $stv['column'];  
				$res = $Model->query($sql);
				if($res){
					foreach($res as $v){
						$tongji[$v[$stv['column']]][$stv['table']] = $v['count'];
					}
				}				
			}
		}
		
		foreach($data as &$va){
			foreach($setting as $st){
				$st['url'] = str_replace('{ID}', $va['id'], $st["url"]); 
				$st['pos'] = isset($st['pos']) ? $st['pos'] : 1;
				$st['open'] = isset($st['open']) ? $st['open'] : 1;
				$st['show'] = isset($st['show']) ? $st['show'] : 1;
				$st['color'] = isset($st['color']) ? $st['color'] : 'btn';
				
				if($st['tongji'] && $st['table'] && $st['column']){
					$st['tongji'] = isset($tongji[$va['id']]) ? $tongji[$va['id']][$st['table']] : '';
				}	
				
				$va['manager'][] = $st;
			}
		}	
	}

	//获取选项字段相对应的值
	public function getBoxFieldValue($data = array()){
		$this->data = $data;
        $info = array();
		
		$func = 'box';
		import('util', LIB_PATH . '/Fields/' . $func , '.inc.php');
		
        foreach ($this->fields as $field => $fieldInfo) {
            //字段类型
            $func = $fieldInfo['formtype'];
			if($func == 'box'){
	            $setting = unserialize($this->data[$field]['setting']);
				$options = explode("\n", $setting['options']);
			    foreach ($options as $_k) {
			        $v = explode("|", $_k);
			        $k = trim($v[1]);
			        $option[$k] = $v[0];
			    }
				$info[$field] = $option;
			}
        }
        return $info;
	}

    /**
     * 转换为validate表单验证相关的json数据
     * @param type $ValidateRules
     */
    public function ValidateRulesJson($ValidateRules, $suang = false) {
        foreach ($ValidateRules as $formname => $value) {
            $va = array();
            if (is_array($value)) {
                foreach ($value as $k => $v) {
                    //如果作为消息，消息内容需要加引号，不然会JS报错，是否验证不需要
                    if ($suang) {
                        $va[] = "$k:'$v'";
                    } else {
                        $va[] = "$k:$v";
                    }
                }
            }
            $va = "{" . implode(",", $va) . "}";
            $formValidateRules[] = "'$formname':$va";
        }
        $formValidateRules = "{" . implode(",", $formValidateRules) . "}";
        return $formValidateRules;
    }

    ##{字段处理函数}##
}