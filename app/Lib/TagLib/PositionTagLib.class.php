<?php

/**
 * 推荐位
 * Some rights reserved：it100.net
 * Contact email:admin@it100.net
 */
class PositionTagLib {

    /**
     * 推荐位数据获取
     * 参数名	 是否必须	 默认值	 说明
     * posid	 是	 null	 推荐位ID
     * catid	 否	 null	 调用分类ID
     * thumb	 否	 0	 是否仅必须缩略图
     * order	 否	 null	 排序类型
     * num	 是	 null	 数据调用数量
     * @param type $data 
     */
    public function position($data) {
        //缓存时间
        $cache = (int) $data['cache'];
        $cacheID = to_guid_string($data);
        if ($cache && $return = S($cacheID)) {
            return $return;
        }
        $posid = (int) $data['posid'];
        if ($posid < 1) {
            return false;
        }
        $catid = (int) $data['catid'];
        $thumb = isset($data['thumb']) ? $data['thumb'] : 0;
        $order = empty($data['order']) ? array("listorder" => "DESC", "id" => "DESC") : $data['order'];
        $num = (int) $data['num'];

        $db = M("PositionData");
        $Position = F("Position");
        if ($num == 0) {
            $num = $Position[$posid]['maxnum'];
        }
        
        $where = array();
        //设置SQL where 部分
        if (isset($data['where']) && $data['where']) {
            $where['_string'] = $data['where'];
        }
        $where['posid'] = array("EQ", $posid);
        if ($thumb) {
            $where['thumb'] = array("EQ", 1);
        }
        if ($catid > 0) {
            $Category = F("Category");
            $cat = $Category[$catid];
            if ($cat) {
                //是否包含子分类
                if ($cat['child']) {
                    $where['catid'] = array("IN", $cat['arrchildid']);
                } else {
                    $where['catid'] = array("EQ", $catid);
                }
            }
        }
        
        import('Url');
        $this->url = new Url();
        $url_arr = array();
        
        $data = $db->where($where)->order($order)->limit($num)->select();
        $Model = F("Model");
        foreach ($data as $k => $v) {
            $data[$k]['data'] = unserialize($v['data']);
            //$tab = ucwords($Model[$v['modelid']]['tablename']);
            //$data[$k]['data']['url'] = M($tab)->where(array("id" => $v['id']))->getField("url");
            $url_arr = $this->url->show($v);
            $data[$k]['data']['url'] = $url_arr['url'];
            $data[$k]['url'] = $url_arr['url'];
        }
        
        //结果进行缓存
        if ($cache) {
            S($cacheID, $data, $cache);
        }
        return $data;
    }

}

?>
