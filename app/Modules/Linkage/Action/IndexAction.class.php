<?php
class IndexAction extends AdminbaseAction {
	//配置
	private $configs = array();

	protected function _initialize() {
		parent::_initialize();
		$keyid = $keyid ? $keyid : I('get.keyid', 0, 'intval');
		if (!cache('linkage_' . $keyid)) {
			//用于生成插件缓存
			$this -> db = D('Linkage');
			$this -> db -> _cache($keyid);
			//生成当前缓存
		}
	}

	public function index() {

	}

	/**************************************************************
	 *
	 *	以下函数适用于select联动样式
	 *
	 *************************************************************/
	public function ajax_select($keyid, $parentid = 0) {
		$keyid = I('get.keyid', 0, 'intval');
		$parentid = I('get.parent_id', 0, 'intval');
		$datas = cache('linkage_' . $keyid);
		$infos = $datas['data'];
		$json_str = "[";
		$json = array();
		//print_r($infos);
		foreach ($infos AS $k => $v) {
			if ($v['parentid'] == $parentid) {
				$r = array('region_id' => $v['linkageid'], 'region_name' => $v['name']);
				$json[] = json_encode($r);
			}
		}
		$json_str .= implode(',', $json);
		$json_str .= "]";
		echo $json_str;
	}

	/**
	 * 获取地区父级路径路径
	 * @param $parentid 父级ID
	 * @param $keyid 菜单keyid
	 * @param $callback json生成callback变量
	 * @param $result 递归返回结果数组
	 * @param $infos
	 */
	function ajax_getpath($parentid, $keyid, $callback, $result = array(), $infos = array()) {
		$keyid = $keyid ? $keyid : I('get.keyid', 0, 'intval');
		if ($parentid != null) {

		} else {
			$parentid = I('get.parentid', 0, 'intval');
		}

		$linkageid = $linkageid ? $linkageid : I('get.linkageid', 0, 'intval');
		$callback = $callback ? $callback : I('get.callback');
		if (!$infos) {
			$datas = cache('linkage_' . $keyid);
			$infos = $datas['data'];
		}
		if (array_key_exists($parentid, $infos)) {
			$result[] = $infos[$parentid]['name'];
			//echo $infos[$parentid]['parentid'];
			return $this -> ajax_getpath($infos[$parentid]['parentid'], $keyid, $callback, $result, $infos);
		} else {
			if (count($result) > 0) {
				krsort($result);
				$jsonstr = json_encode($result);
				echo $this -> trim_script($callback) . '(', $jsonstr, ')';
				exit ;
			} else {
				$result[] = $datas['title'];
				$jsonstr = json_encode($result);
				echo $this -> trim_script($callback) . '(', $jsonstr, ')';
				exit ;
			}
		}
	}

	/**
	 * 获取地区顶级ID
	 * Enter description here ...
	 * @param  $linkageid 菜单id
	 * @param  $keyid 菜单keyid
	 * @param  $callback json生成callback变量
	 * @param  $infos 递归返回结果数组
	 */
	function ajax_gettopparent($linkageid, $keyid, $callback, $infos = array()) {
		$keyid = $keyid ? $keyid : I('get.keyid', 0, 'intval');
		$linkageid = $linkageid ? $linkageid : I('get.linkageid', 0, 'intval');
		$callback = $callback ? $callback : I('get.callback');
		if (!$infos) {
			$datas = cache('linkage_' . $keyid);
			$infos = $datas['data'];
		}
		if ($infos[$linkageid]['parentid'] != 0) {
			return $this -> ajax_gettopparent($infos[$linkageid]['parentid'], $keyid, $callback, $infos);
		} else {
			echo $this -> trim_script($callback) . '(', $linkageid, ')';
			exit ;
		}
	}

	//获取地址
	public function ajax_getlist() {
		$keyid = I('get.keyid', 0, 'intval');
		$datas = cache('linkage_' . $keyid);
		$infos = $datas['data'];
		$where_id = isset($_GET['parentid']) ? I('get.parentid', 0, 'intval') : intval($infos[$_GET['linkageid']]['parentid']);
		$parent_menu_name = ($where_id == 0) ? $datas['title'] : $infos[$where_id]['name'];
		if (is_array($infos)) {
			foreach ($infos AS $k => $v) {
				if ($v['parentid'] == $where_id) {
					$s[] = $v['linkageid'] . ',' . $v['name'] . ',' . $v['parentid'] . ',' . $parent_menu_name;
				}
			}
		}
		if (count($s) > 0) {
			$jsonstr = json_encode($s);
			echo $this -> trim_script($_GET['callback']) . '(', $jsonstr, ')';
			exit ;
		} else {
			echo $this -> trim_script($_GET['callback']) . '()';
			exit ;
		}
	}

	function trim_script($str) {
		if (is_array($str)) {
			foreach ($str as $key => $val) {
				$str[$key] = trim_script($val);
			}
		} else {
			$str = preg_replace('/\<([\/]?)script([^\>]*?)\>/si', '&lt;\\1script\\2&gt;', $str);
			$str = preg_replace('/\<([\/]?)iframe([^\>]*?)\>/si', '&lt;\\1iframe\\2&gt;', $str);
			$str = preg_replace('/\<([\/]?)frame([^\>]*?)\>/si', '&lt;\\1frame\\2&gt;', $str);
			$str = str_replace('javascript:', 'javascript：', $str);
		}
		return $str;
	}

}
