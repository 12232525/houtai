<?php
/**
 * 扩展功能
 * Some rights reserved：it100.net
 * Contact email:admin@it100.net
 */
class UtilsAction extends AdminbaseAction {

    function _initialize() {
        parent::_initialize();
    }
	
	public function icon(){
		$icon = I('get.t', 'icon');
		$this->assign('icon', $icon);
		$html = $this->fetch();
		echo $html;
		exit;
	}
	
}

?>