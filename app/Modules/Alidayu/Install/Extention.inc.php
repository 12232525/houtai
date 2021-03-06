<?php 
/**
 * 模块安装，菜单/权限配置
 * Some rights reserved：it100.net
 * Contact email:admin@it100.net
 */
defined('INSTALL') or exit('Access Denied');
//添加一个菜单到后台“模块->模块列表”ID等于常量 MENUID
$parentid = M("Menu")->add(array(
    //父ID
    "parentid" => '8', //系统设置
    //模块目录名称，也是项目名称
    "app" => "Alidayu",
    //文件名称，比如AlidayuAction.class.php就填写 Alidayu
    "model" => "Alidayu",
    //方法名称
    "action" => "index",
    //附加参数 例如：a=12&id=777
    "data" => "",
    //类型，后台是1。
    "type" => 1,
    //状态，1是显示，2是不显示
    "status" => 1,
    //名称
    "name" => "阿里大鱼短信",
    //备注
    "remark" => "阿里大鱼短信",
    //排序
    "listorder" => 0
));

//添加其他需要加入权限认证的方法，后台进行权限认证时不通过。
//提示：比如一些删除，修改这类方法需要配合参数使用，该类不适合直接显示出来，可以把status设置为0
//M("Menu")->add(array("parentid"=>$parentid,"app"=>"Alidayu","model"=>"Alidayu","action"=>"index","data"=>"","type"=>1,"status"=>1,"name"=>"阿里大鱼短信","remark"=>"","listorder"=>0));
?>