<?php

/**
 * 通用的树型类，可以生成任何树型结构
 */
class Tree {

    /**
     * 生成树型结构所需要的2维数组
     * @var array
     */
    public $arr = array();
	
	/**
	 * 返回最终排序的IDs
	 */
	public $ids = array(); 

    /**
     * 生成树型结构所需修饰符号，可以换成图片
     * @var array
     */
    public $icon = array('│', '├─', '└─');
    public $nbsp = "&nbsp;";

    /**
     * @access private
     */
    public $ret = '';

    /**
     * 构造函数，初始化类
     * @param array 2维数组，例如：
     * array(
     *      1 => array('id'=>'1','parentid'=>0,'name'=>'一级分类一'),
     *      2 => array('id'=>'2','parentid'=>0,'name'=>'一级分类二'),
     *      3 => array('id'=>'3','parentid'=>1,'name'=>'二级分类一'),
     *      4 => array('id'=>'4','parentid'=>1,'name'=>'二级分类二'),
     *      5 => array('id'=>'5','parentid'=>2,'name'=>'二级分类三'),
     *      6 => array('id'=>'6','parentid'=>3,'name'=>'三级分类一'),
     *      7 => array('id'=>'7','parentid'=>3,'name'=>'三级分类二')
     *      )
     */
    public function init($arr=array()) {
        $this->arr = $arr;
        $this->ret = '';
        return is_array($arr);
    }

    /**
     * 得到父级数组
     * @param int
     * @return array
     */
    public function get_parent($myid) {
        $newarr = array();
        if (!isset($this->arr[$myid]))
            return false;
        $pid = $this->arr[$myid]['parentid'];
        $pid = $this->arr[$pid]['parentid'];
        if (is_array($this->arr)) {
            foreach ($this->arr as $id => $a) {
                if ($a['parentid'] == $pid)
                    $newarr[$id] = $a;
            }
        }
        return $newarr;
    }

    /**
     * 得到子级数组
     * @param int
     * @return array
     */
    public function get_child($myid) {
        $a = $newarr = array();
        if (is_array($this->arr)) {
            foreach ($this->arr as $id => $a) {
                if ((isset($a['parentid']) && $a['parentid'] == $myid) || 
                	(isset($a['parent_id']) && $a['parent_id'] == $myid))
                    $newarr[$id] = $a;
            }
        }
		
        return $newarr ? $newarr : false;
    }

    /**
     * 得到当前位置数组
     * @param int
     * @return array
     */
    public function get_pos($myid, &$newarr) {
        $a = array();
        if (!isset($this->arr[$myid]))
            return false;
        $newarr[] = $this->arr[$myid];
        $pid = $this->arr[$myid]['parentid'];
        if (isset($this->arr[$pid])) {
            $this->get_pos($pid, $newarr);
        }
        if (is_array($newarr)) {
            krsort($newarr);
            foreach ($newarr as $v) {
                $a[$v['id']] = $v;
            }
        }
        return $a;
    }

    /**
     * 得到树型结构
     * @param int ID，表示获得这个ID下的所有子级
     * @param string 生成树型结构的基本代码，例如："<option value=\$id \$selected>\$spacer\$name</option>"
     * @param int 被选中的ID，比如在做树型下拉框的时候需要用到
     * @return string
     */
    public function get_tree($myid, $str, $sid = 0, $adds = '', $str_group = '') {
        $number = 1;
        //一级分类
        $child = $this->get_child($myid);
        if (is_array($child)) {
            $total = count($child);
            foreach ($child as $id => $value) {
                $j = $k = '';
                if ($number == $total) {
                    $j .= $this->icon[2];
                } else {
                    $j .= $this->icon[1];
                    $k = $adds ? $this->icon[0] : '';
                }
                $spacer = $adds ? $adds . $j : '';
                $selected = $id == $sid ? 'selected' : '';
                @extract($value);
                $parentid == 0 && $str_group ? eval("\$nstr = \"$str_group\";") : eval("\$nstr = \"$str\";");
                $this->ret .= $nstr;
                $nbsp = $this->nbsp;
                $this->get_tree($id, $str, $sid, $adds . $k . $nbsp, $str_group);
                $number++;
            }
        }
        return $this->ret;
    }
    
    /**
     * 得到树型结构数组
     * @param int ID，表示获得这个ID下的所有子级
     * @param string 生成树型结构的基本代码，例如："<option value=\$id \$selected>\$spacer\$name</option>"
     * @param int 被选中的ID，比如在做树型下拉框的时候需要用到
     * @return string
     */
    public function get_tree_array($myid, $str, $sid = 0, $adds = '', $str_group = '') {
        $retarray = array();
		
        //一级分类数组
        $child = $this->get_child($myid);
        if (is_array($child)) {
            //数组长度
            $total = count($child);
            foreach ($child as $id => $value) {
                @extract($value);
                $retarray[$value['id']] = $value;
                $retarray[$value['id']]["child"] = $this->get_tree_array($id, '');
            }
        }
        return $retarray;
    }

    /**
     * 同上一方法类似,但允许多选
     */
    public function get_tree_multi($myid, $str, $sid = 0, $adds = '') {
        $number = 1;
        $child = $this->get_child($myid);
        if (is_array($child)) {
            $total = count($child);
            foreach ($child as $id => $a) {
                $j = $k = '';
                if ($number == $total) {
                    $j .= $this->icon[2];
                } else {
                    $j .= $this->icon[1];
                    $k = $adds ? $this->icon[0] : '';
                }
                $spacer = $adds ? $adds . $j : '';

                $selected = $this->have($sid, $id) ? 'selected' : '';
                @extract($a);
                eval("\$nstr = \"$str\";");
                $this->ret .= $nstr;
                $this->get_tree_multi($id, $str, $sid, $adds . $k . '&nbsp;');
                $number++;
            }
        }
        return $this->ret;
    }

    /**
     * @param integer $myid 要查询的ID
     * @param string $str   第一种HTML代码方式
     * @param string $str2  第二种HTML代码方式
     * @param integer $sid  默认选中
     * @param integer $adds 前缀
     */
    public function get_tree_category($myid, $str, $str2, $sid = 0, $adds = '') {
        $number = 1;
        $child = $this->get_child($myid);
        if (is_array($child)) {
            $total = count($child);
            foreach ($child as $id => $a) {
                $j = $k = '';
                if ($number == $total) {
                    $j .= $this->icon[2];
                } else {
                    $j .= $this->icon[1];
                    $k = $adds ? $this->icon[0] : '';
                }
                $spacer = $adds ? $adds . $j : '';

                $selected = $this->have($sid, $id) ? 'selected' : '';
                @extract($a);
                if (empty($html_disabled)) {
                    eval("\$nstr = \"$str\";");
                } else {
                    eval("\$nstr = \"$str2\";");
                }
                $this->ret .= $nstr;
                $this->get_tree_category($id, $str, $str2, $sid, $adds . $k . '&nbsp;');
                $number++;
            }
        }
        return $this->ret;
    }

    /**
     * 同上一类方法，jquery treeview 风格，可伸缩样式（需要treeview插件支持）
     * @param $myid 表示获得这个ID下的所有子级
     * @param $effected_id 需要生成treeview目录数的id
     * @param $str 末级样式
     * @param $str2 目录级别样式
     * @param $showlevel 直接显示层级数，其余为异步显示，0为全部限制
     * @param $style 目录样式 默认 filetree 可增加其他样式如'filetree treeview-famfamfam'
     * @param $currentlevel 计算当前层级，递归使用 适用改函数时不需要用该参数
     * @param $recursion 递归使用 外部调用时为FALSE
     */
    function get_treeview($myid, $effected_id='example', $str="<span class='file'>\$name</span>", $str2="<span class='folder'>\$name</span>", $showlevel = 0, $style='filetree ', $currentlevel = 1, $recursion=FALSE) {
        $child = $this->get_child($myid);
        if (!defined('EFFECTED_INIT')) {
            $effected = ' id="' . $effected_id . '"';
            define('EFFECTED_INIT', 1);
        } else {
            $effected = '';
        }
        $placeholder = '<ul><li><span class="placeholder"></span></li></ul>';
        if (!$recursion)
            $this->str .='<ul' . $effected . '  class="' . $style . '">';
        foreach ($child as $id => $a) {

            @extract($a);
            if ($showlevel > 0 && $showlevel == $currentlevel && $this->get_child($id))
                $folder = 'hasChildren'; //如设置显示层级模式@2011.07.01
            $floder_status = isset($folder) ? ' class="' . $folder . '"' : '';
            $this->str .= $recursion ? '<ul><li' . $floder_status . ' id=\'' . $id . '\'>' : '<li' . $floder_status . ' id=\'' . $id . '\'>';
            $recursion = FALSE;
            //判断是否为终极分类
            if ($child == 1) {
                eval("\$nstr = \"$str2\";");
                $this->str .= $nstr;
                if ($showlevel == 0 || ($showlevel > 0 && $showlevel > $currentlevel)) {
                    $this->get_treeview($id, $effected_id, $str, $str2, $showlevel, $style, $currentlevel + 1, TRUE);
                } elseif ($showlevel > 0 && $showlevel == $currentlevel) {
                    $this->str .= $placeholder;
                }
            } else {
                eval("\$nstr = \"$str\";");
                $this->str .= $nstr;
            }
            $this->str .=$recursion ? '</li></ul>' : '</li>';
        }
        if (!$recursion)
            $this->str .='</ul>';
        return $this->str;
    }

    /**
     * 获取子分类json
     * Enter description here ...
     * @param unknown_type $myid
     */
    public function creat_sub_json($myid, $str='') {
        $sub_cats = $this->get_child($myid);
        $n = 0;
        if (is_array($sub_cats))
            foreach ($sub_cats as $c) {
                $data[$n]['id'] = iconv(CHARSET, 'utf-8', $c['catid']);
                if ($this->get_child($c['catid'])) {
                    $data[$n]['liclass'] = 'hasChildren';
                    $data[$n]['children'] = array(array('text' => '&nbsp;', 'classes' => 'placeholder'));
                    $data[$n]['classes'] = 'folder';
                    $data[$n]['text'] = iconv(CHARSET, 'utf-8', $c['catname']);
                } else {
                    if ($str) {
                        @extract(array_iconv($c, CHARSET, 'utf-8'));
                        eval("\$data[$n]['text'] = \"$str\";");
                    } else {
                        $data[$n]['text'] = iconv(CHARSET, 'utf-8', $c['catname']);
                    }
                }
                $n++;
            }
        return json_encode($data);
    }

    private function have($list, $item) {
        return(strpos(',,' . $list . ',', ',' . $item . ','));
    }
	
	
	/**
	 * 根据顺序查找IDS
	 */
	private function get_tree_list($myid = 0, $str = '') {
        //一级分类数组
        $child = $this->get_child($myid);
        if (is_array($child)) {
            //数组长度
            foreach ($child as $id => $value) {
				$this->ids[] = $value['id'];
                $this->get_tree_list($id, '');
            }
        }
    }
	
	/**
	 * 返回树形结构的ID数组
	 */
	public function get_tree_ids(){
		$this->get_tree_list();
		return $this->ids;
	}
	
	// 将数据按照缩进简单排列 见图1  
	public function get_tree_level(&$tree, $parent_id = 0, $level = 0) {
		if(!is_array($tree))  return '';
		
		$arr = $child = $last = array();
		
	    foreach($tree as $key => &$leaf) {  
	        if($leaf['parent_id'] == $parent_id) {
	        	$arr[$leaf['id']] = $leaf;
				$leaf['level'] = $level;
				if($level > 0) $leaf['name'] = $this->get_padding_space($level) . $this->icon[1] . '&nbsp;&nbsp;' . $leaf['name'];
                $child = $this->get_tree_level($tree, $leaf['id'], $level + 1);  
				
				$leaf['haschild'] = $child ? 1 : 0;
				if($child){
					//$leaf['child'] = $child;
					$last = end($child);
					$tree[$last['id']]['name'] = str_replace($this->icon[1], $this->icon[2], $tree[$last['id']]['name']);  
				}
	        }
	    } 
		
		return $arr; 
	}  
	
	private function get_padding_space($level){
		$str = '';
		for($i=0; $i <= $level; $i++){
			$str .= '&nbsp;&nbsp;&nbsp;';
		}
		return $str;
	}

}

?>