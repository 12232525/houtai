<?php

/**
 * App模式
 * Some rights reserved：it100.net
 * Contact email:admin@it100.net
 */
// App模式定义文件
$version = include SITE_PATH . '/app/Conf/version.php';
$version = $version?$version:array();
$dataconfig = include SITE_PATH . '/app/Conf/dataconfig.php';
$dataconfig = $dataconfig?$dataconfig:array();
$addition = include SITE_PATH . '/app/Conf/addition.php';
$addition = $addition?$addition:array();
$App = array(
    'core' => array(
        LIB_PATH . 'Mode/app/functions.php', // 标准模式函数库
        CORE_PATH . 'Core/Log.class.php', // 日志处理类
        LIB_PATH . 'Mode/app/Dispatcher.class.php', // URL调度类
        CORE_PATH . 'Core/App.class.php', // 应用程序类
        CORE_PATH . 'Core/Action.class.php', // 控制器类
        CORE_PATH . 'Core/View.class.php', // 视图类
    ),
    'config' => array_merge($version, $addition, $dataconfig),
);
return $App;
