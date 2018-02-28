<?php
/**
 * 处理及渲染模型层所需要数据
 */
require('CommonModule.class.php');
class RenderModelModule extends CommonModule{
	
	protected $content_form;
	//当前模型ID
	protected $modelid = null;
	//模型的详细配置信息
	protected $modelInfo = null;
	
	/**
	 * Undocumented function
	 *
	 * @param integer $p_modelid
	 * @param boolean $need_model_info
	 */
	public function __construct($p_modelid = 0, $need_model_info = false){
		if($p_modelid > 0)    $this->modelid = $p_modelid; 
		if($need_model_info)  $this->modelInfo = $this->getModelInfo($p_modelid);
	}
	
	private function getModelInfo($p_modelid){
		$res = F("Model_field_" . $p_modelid);
		
		$opRes = array();
		foreach($res as $key => $columnArr){
			if($columnArr['formtype'] != 'box') continue;
			
			$setting = unserialize($columnArr['setting']);
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
			$op = array();
			for($i = 0; $i < $boxCount; $i++){
				$tk = $opRes['value'][$i];
				$op[$tk]['sort']  = $opRes['sort'][$i];
				$op[$tk]['name']  = $opRes['name'][$i];
				$op[$tk]['value'] = $opRes['value'][$i];
				$op[$tk]['color'] = $opRes['color'][$i];
			}
			
			$res[$key]['setting'] = $op;				
		}
		return $res;
	}
	
	/**
	 * 将模型中的数据，格式化为id=>value的形式
	 * @param [type] $table
	 * @param string $where
	 * @param boolean $needPage
	 * @return void
	 */
	public function getModelInfoListForId2Value($table, $where = '', $needPage = false){
		if(!$table) return array();
		
		$result = array();
		$page = '';
		if(!$where) $where = 'status = 99';
		
		$TableObj = M($table);
		if($needPage){
			//信息总数
	        $count = $TableObj->where($where)->count();
			$page = $this->page($count, 15);
			$result = $TableObj->where($where)->limit($page->firstRow . ',' . $page->listRows)->select();
		}else{
			$result = $TableObj->where($where)->select();
		}
		
		if(!$result) return $result;
		
		$list = array();
		foreach($result as $cval){
			$list[$cval['id']] = $cval;
		}
		
		return array('list'=>$list, 'page'=> $page);
	}
	
	//引入输入表单处理类
	public function getContentFormObject(){
		if($this->content_form) return;
		
		//引入输入表单处理类
        require_cache(RUNTIME_PATH . 'content_form.class.php');
        $this->content_form = new content_form($this->modelid, $this->modelid);
	}
	
	public function renderModelStatusTips(&$list){
    	if(!is_array($list)) return;
    	
    	foreach($list as $key=> &$val){
			$val['status_tips'] = $this->renderModelStatus($val['status']);
    	}
    }
	
	
	//格式化数据字段中的数据
	public function getRelationColumnData(&$data){
		if(!$data) return;
		
		//引入输入表单处理类
        $this->getContentFormObject();
		$this->content_form->getOutputFormatField($data);
	}
	
	//格式化数据字段中的数据
	public function getRelationColumnDataFormat(&$data, $modelName){
		if(!$data) return;
		
		//引入输入表单处理类
        $this->getContentFormObject();
		$this->content_form->getOutputFormatField($data);
		
		//格式化数据
		import("Date");
		$Date = new Date();
		
		//显示用户真实姓名
		import('UserModule', LIB_PATH . 'Module');
		$userModule = new UserModule();
		$adminList = $userModule->getUserList();
			
		foreach($data as &$dv){
			$dv['username'] = $adminList[$dv['username']]['nickname'];
			$dv['savetime'] =  $this->formatCurrentYear($dv['savetime']) . $Date->time2Units($dv['savetime']);
			$dv['updatetime'] = $this->formatCurrentYear($dv['updatetime']) . $Date->time2Units($dv['updatetime']);
		}
		
		//处理特殊的显示
		$this->renderValueDisplay($data, $modelName);
	}
	
	/**
	 * Undocumented function
	 * @param [type] $data
	 * @param [type] $modelName
	 * @return void
	 */
	public function renderValueDisplay(&$data, $modelName){
		$tipTemplate = '<span class="badge" style="background-color:COLOR">VALUE</span>';
		
		$fieldKeys = array_keys($this->modelInfo);
		
		//处理树形菜单
		$is_tree = 0;
		foreach($this->modelInfo as $key => $mv){
			if($key == 'parent_id') $is_tree = 1;
		}
		$this->getTreeList($data, $is_tree);
		
		$sett = array();
    	foreach($data as $key=> &$fv){
    		
			foreach($fieldKeys as $fieldName){
				if($fieldName == 'name'){
					$fv['name_tips'] = $this->renderModelName($fv['name'], $fv['id'], $modelName);
				}elseif($fieldName == 'status'){
					$fv['status_tips'] = $this->renderModelStatus2($fv['status']);
				}else{
					$fv[$fieldName] = $this->renderModelFieldLink($fieldName, $fv[$fieldName], $fv, $modelName);			
				}
				
				if($this->modelInfo[$fieldName]['formtype'] == 'box'){
					$sett = $this->modelInfo[$fieldName]['setting'];
					foreach($sett as $st){
						if($st['name'] != $fv[$fieldName]) continue;
						if($st['color'] != '#758697'){
							$fv[$fieldName] = str_replace('VALUE', $st['name'], $tipTemplate);
							$fv[$fieldName] = str_replace('COLOR', $st['color'], $fv[$fieldName]);
						}
					}
					
				}
				
			}
			
    	}
	}
	
	function formatCurrentYear($time){
		$t = date('Y', $time);
		$y = date('Y', time());
		
		if($t == $y) return date('m-d H:i:s', $time);
		return date('Y-m-d H:i:s', $time);
	}
	
	//关联数据统计操作字段
	public function getRelationManagerData(&$data){
		//引入输入表单处理类
        $this->getContentFormObject();
		$this->content_form->getRelationManagerList($data);	
	}
	
	//处理树形菜单
	public function getTreeList(&$data, $is_tree = 0){
		if(!$data || !$is_tree) return;
		
		//将$data的key，改变为对应的val中的id值
		$list = array();
		foreach($data as $dvv){
			$list[$dvv['id']] = $dvv;
		}
		
		import('tree');
		$tree = new Tree();
		
		//取出已排序后的id主键值
		$tree->init($list);
		$ids = $tree->get_tree_ids();
		
		//将data中的数据按照id进行排序
		$result = $target = array();
		foreach($ids as $k => $id){
			$result[$k] = $list[$id];
		}
		
		//将$target的key，改变为对应的val中的id值
		foreach($result as $rval){
			$target[$rval['id']] = $rval;
		}
		
		$tree->get_tree_level($target);
		$data = $target;
	}
	
	
    public function renderModelStatus($status){
    	$tips = '';
    	switch($status){
			case '1' : 
				$tips = '未签';break; 	
			case '99':
				$tips = '已签';break;
			default:  break;
		}
		return $tips;
    }
	
	public function renderModelStatus2($status){
    	$tips = '';
    	switch($status){
			case '99' : 
				$tips = '已审';break; 	
			case '1':
				$tips = '<font color="#FF0000">未审</font>';break;
			default:  break;
		}
		return $tips;
    }
	
	public function renderModelName($name, $id, $modelName){
		$info = $this->modelInfo['name'];
		$url = U("Contents/ContentsModel/view", array("modid"=>$this->modelid, "id"=>$id, "show"=>0));
		$str = "<a href='javascript:;' onClick=\"javascript:openwinx('" . $url . "', '查看".$modelName."：".$name."')\">" . $name . "</a>";
		if($info['clickurl']) {
			$clickUrl = $info['clickurl'] . $id . '&show=0';   
			$openName = '查看' . $modelName . '：' . $name;
			$str = "<a onClick=\"javascript:openwinx('" . $clickUrl . "', '" . $openName . "')\" href='javascript:void(0)'>". $name . "</a>";
		}
		
		return $str;
	}
	
	public function renderModelFieldLink($fieldName, $fieldValue, $arr, $modelName){
		$info = $this->modelInfo[$fieldName];
		if($info['clickurl']) {
			$clickUrl = $arr[$fieldName.'_arr']['clickurl'] . '&show=0';   
			$openName = '查看' . $modelName . '：' . $arr[$fieldName.'_arr']['name']; 
			
			$fieldValue = "<a onClick='javascript:openwinx(\"$clickUrl\", \"$openName\")' href=\"javascript:void(0)\"> " . $arr[$fieldName.'_arr']['name'] . "</a>";
		}	
		return $fieldValue;
	}
	
}
