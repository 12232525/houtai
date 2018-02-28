<?php

/**
 * 后台环境页
 * Some rights reserved：it100.net
 * Contact email:admin@it100.net
 */
class MainAction extends AdminbaseAction {

    public function index() {
        //服务器信息
        $info = array(
            '操作系统' => PHP_OS,
            '运行环境' => $_SERVER["SERVER_SOFTWARE"],
            'PHP运行方式' => php_sapi_name(),
            'MYSQL版本' => mysqli_get_server_info(),
            '上传附件限制' => ini_get('upload_max_filesize'),
            '执行时间限制' => ini_get('max_execution_time') . "秒",
            '剩余空间' => round((@disk_free_space(".") / (1024 * 1024)), 2) . 'M',
        );

        $this->assign('server_info', $info);
        $this->display();
    }
    
    public function carStatis(){
    	$arr = array('rent'=>0, 
					 'car'=>0,
					 'renting'=>0,
					 'norent'=>0,
					 'brand'=>0,
					 'model'=>0);
					 
		$arr['rent'] = M('car')->where('status = 99')->count();
		$arr['car'] = M('car_list')->count();
		$arr['renting'] = 0;
		$arr['norent'] = $arr['car'] - $arr['renting'];
		$arr['brand'] = M('car_brand')->where('is_enable = 1')->count();
		$arr['model'] = M('car_model')->where('is_enable = 1')->count();
		
		echo json_encode($arr);   	    	
		exit;		
    }
    
    public function orderStatis(){
    	$arr = array('sub_noconfirm'=>0, 
					 'sub_nofinish'=>0,
					 'rent_noconfirm'=>0,
					 'rent_nofinish'=>0,
					 'all_noconfirm'=>0,
					 'all_nofinish'=>0);
					 
		$arr['sub_noconfirm'] = M('car_subscribe')->where('order_status = 1')->count();
		$arr['sub_nofinish'] = M('car_subscribe')->where('order_status != 3')->count();
		$arr['rent_noconfirm'] = M('car_rent')->where('order_status = 1')->count();
		$arr['rent_nofinish'] = M('car_rent')->where('order_status != 3')->count();
		$arr['all_noconfirm'] = $arr['sub_noconfirm'] + $arr['rent_noconfirm'];
		$arr['all_nofinish'] = $arr['sub_nofinish'] + $arr['rent_nofinish'];
		
		echo json_encode($arr);   	    	
		exit;		
    }
    
    public function userStatis(){
    	$arr = array('new'=>0, 
					 'auth'=>0,
					 'bind'=>0,
					 'allUser'=>0,
					 'noverifyUser'=>0);
					 
		$arr['new'] = M('member')->where('regdate > ' . strtotime(date('Ymd 00:00:00')) . ' and regdate <= ' . strtotime(date('Ymd 23:59:59')))->count();
		$arr['auth'] = M('member')->where('checked = 1')->count();
		$arr['bind'] = M('member')->where('mobile is not null')->count();
		$arr['allUser'] = M('member')->count();
		$arr['noverifyUser'] = M('member')->where('checked = 0')->count();
		
		echo json_encode($arr);   	    	
		exit;		
    }
}


?>
