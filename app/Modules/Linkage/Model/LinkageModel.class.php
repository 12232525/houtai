<?php
// +----------------------------------------------------------------------
// | 联动菜单模型
// +----------------------------------------------------------------------
class LinkageModel extends CommonModel {
	
    //自动验证
    protected $_validate = array(
        //array(验证字段,验证规则,错误提示,验证条件,附加规则,验证时间)
        array('name', 'require', '菜单名不能为空！', 1, 'regex', 3),
        array('style', 'require', '菜单类型不能为空！', 1, 'regex', 3),
    );
    //自动完成
    protected $_auto = array(
        //array(填充字段,填充内容,填充条件,附加规则)
        array('listorder', 0),
    );

    /**
     * 添加
     * @param type $data
     * @return boolean
     */
    public function add($data) {
        if (empty($data)) {
            $this->error = '名称不能为空！';
            return false;
        }
        if (empty($data['name'])) {
            $this->error = '名称不能为空！';
            return false;
        }
        $db = M('Linkage');
        $data = $db->create($data, 1);
        if ($data) {
            $Id = $db->add($data);
            if ($Id) {
                return $Id;
            } else {
                $this->error = '添加失败！';
                return false;
            }
        }
        return false;
    }

    /**
     * 删除
     * @param type $Id 分类ID
     * @return boolean
     */
    public function delete($Id) {
        if (empty($Id)) {
            $this->error = '请指定需要删除的菜单ID！';
            return false;
        }
        $db = M('Linkage');
		if(is_array($Id)){
			$where['linkageid'] = array('IN',implode(',',$Id));
		}else{
			$where = array('linkageid' => $Id);
		}
		$r = $db->where($where)->delete();
		//echo $db->getLastsql();exit;
        if ($r) {
            return true;
        } else {
            $this->error = '删除失败！';
            return false;
        }
    }

	
	
	/**
	 * 生成联动菜单缓存
	 * @param init $linkageid
	 */
	public function _cache($linkageid) {
		$linkageid = intval($linkageid);
		$info = array();
		$db = M('Linkage');
		$r = $db->where(array('linkageid'=>$linkageid))->field('name,siteid,style,keyid,setting')->find();
		if(!$r){
			return false;
		}
		$info['title'] = $r['name'];
		$info['style'] = $r['style'];
		$info['setting'] = $r['setting'];
		$info['siteid'] = $r['siteid'];
		$info['data'] = $this->submenulist($linkageid);
		cache('linkage_'.$linkageid, $info);
		return $info;
	}
	
	/**
	 * 子菜单列表
	 * @param unknown_type $keyid
	 */
	private function submenulist($keyid=0) {
		$keyid = intval($keyid);
		$datas = array();
		$db = M('Linkage');
		$where = ($keyid > 0) ? array('keyid'=>$keyid) : '';
		$result = $db->where($where)->select();	
		if(is_array($result)) {
			foreach($result as $r) {
				$arrchildid = $r['arrchildid'] = $this->get_arrchildid($r['linkageid'],$result);				
				$child = $r['child'] =  is_numeric($arrchildid) ? 0 : 1;
				$db->where(array('linkageid'=>$r['linkageid']))->save(array('child'=>$child,'arrchildid'=>$arrchildid));			
				$datas[$r['linkageid']] = $r;
			}
		}
		return $datas;
	}
	/**
	 * 获取子菜单ID列表
	 * @param $linkageid 联动菜单id
	 * @param $linkageinfo
	 */
	private function get_arrchildid($linkageid,$linkageinfo) {
		$arrchildid = $linkageid;
		if(is_array($linkageinfo)) {
			foreach($linkageinfo as $linkage) {
				if($linkage['parentid'] && $linkage['linkageid'] != $linkageid && $linkage['parentid']== $linkageid) 	{
					$arrchildid .= ','.$this->get_arrchildid($linkage['linkageid'],$linkageinfo);
	
				}
			}
		}
		return $arrchildid;
	}

}
