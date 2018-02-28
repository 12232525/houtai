<?php
/**
 * @package		广告
 * @subpackage  Libraries
 * @category    it100
 * @author		it100
 */
class MyadModel extends CommonModel {

        //自动验证
        protected $_validate = array(
            //array(验证字段,验证规则,错误提示,验证条件,附加规则,验证时间)
            array('tagname', 'require', '广告位标识不能为空！', 1, 'regex', 3),
            array('tagname', '', '广告位标识已经存在！', 0, 'unique', 3),
            array('adname', 'require', '广告名称不能为空！', 1, 'regex', 3),
        );
        
         //自动完成
        protected $_auto = array(
       		 //array(填充字段,填充内容,填充条件,附加规则)
       		array('starttime', 'time', 1, 'function'),
        	array('endtime', 'time', 3, 'function'),
        );

}

