<?php

/**
 * 计划任务事例
 * Some rights reserved：it100.net
 * Contact email:admin@it100.net
 */
class AppCMSDemo extends AppframeAction {

    //任务主体
    public function run($cronId) {
        Log::write("我执行了计划任务事例 AppCMSDemo.php！","NOTICE");
    }

}