<?php

defined('INSTALL') or exit('Access Denied');

$parentid = M("Menu")->add(array("parentid" => MENUID, "app" => "Myad", "model" => "Myad", "action" => "index", "data" => "", "type" => 1, "status" => 1, "name" => "广告管理", "remark" => "广告管理", "listorder" => 0));
M("Menu")->add(array("parentid" => $parentid, "app" => "Myad", "model" => "Myad", "action" => "add", "data" => "", "type" => 1, "status" => 1, "name" => "添加广告", "remark" => "", "listorder" => 0));
M("Menu")->add(array("parentid" => $parentid, "app" => "Myad", "model" => "Myad", "action" => "type", "data" => "", "type" => 1, "status" => 1, "name" => "广告分类管理", "remark" => "", "listorder" => 1));
M("Menu")->add(array("parentid" => $parentid, "app" => "Myad", "model" => "Myad", "action" => "upcache", "data" => "", "type" => 1, "status" => 1, "name" => "更新广告", "remark" => "", "listorder" => 2));
?>