<?php

/**
 * 模块安装，菜单/权限配置
 * Some rights reserved：it100.net
 * Contact email:admin@it100.net
 */
defined('UNINSTALL') or exit('Access Denied');
//删除菜单/权限数据
M("Menu")->where(array("app" => "Domains"))->delete();
M("Access")->where(array("g" => "Domains"))->delete();
?>