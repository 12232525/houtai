DROP TABLE IF EXISTS `app_cron`;
CREATE TABLE `app_cron` (
  `cron_id` int(10) unsigned NOT NULL auto_increment COMMENT '计划任务ID',
  `type` tinyint(2) default '0' COMMENT '计划任务类型',
  `subject` varchar(50) NOT NULL default '' COMMENT '计划任务名称',
  `loop_type` varchar(10) NOT NULL default '' COMMENT '循环类型month/week/day/hour/now',
  `loop_daytime` varchar(50) NOT NULL default '' COMMENT '循环类型时间（日-时-分）',
  `cron_file` varchar(50) NOT NULL default '' COMMENT '计划任务执行文件',
  `isopen` tinyint(3) unsigned NOT NULL default '1' COMMENT '是否开启 0 否，1是，2系统任务',
  `created_time` int(10) unsigned NOT NULL default '0' COMMENT '计划任务创建时间',
  `modified_time` int(10) unsigned NOT NULL default '0' COMMENT '计划任务上次执行结束时间',
  `next_time` int(10) unsigned NOT NULL default '0' COMMENT '下一次执行时间',
  `data` text COMMENT '数据',
  PRIMARY KEY  (`cron_id`),
  KEY `idx_next_time` (`next_time`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='计划任务表';