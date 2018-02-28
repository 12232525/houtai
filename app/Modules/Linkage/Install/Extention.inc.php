<?php
defined('INSTALL') or exit('Access Denied');

$parentid = M("Menu")->add(array("parentid" => MENUID, "app" => "Linkage", "model" => "Linkage", "action" => "index", "data" => "", "type" => 1, "status" => 1, "name" => "级联菜单", "remark" => "级联菜单", "listorder" => 0));
M("Menu")->add(array("parentid" => $parentid, "app" => "Linkage", "model" => "Linkage", "action" => "add", "data" => "", "type" => 1, "status" => 1, "name" => "添加级联菜单", "remark" => "", "listorder" => 0));
?>