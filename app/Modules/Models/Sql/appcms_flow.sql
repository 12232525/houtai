CREATE TABLE `@app@@zhubiao@` (
  `id` int(10) unsigned NOT NULL auto_increment,
  `status` varchar(20) NOT NULL default '',
  `content` varchar(1000) NOT NULL default '',
  `description` char(255) NOT NULL default '',
  `username` char(20) NOT NULL,
  `savetime` int(10) unsigned NOT NULL default '0',
  `updatetime` int(10) unsigned NOT NULL default '0',
  `deleted` tinyint(2) unsigned NOT NULL default '0',
  PRIMARY KEY  (`id`),
  KEY `objid` (`obj_id`),
  KEY `statusid` (`status`,`id`),
  KEY `delid` (`deleted`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `@app@model_field` VALUES (NULL, '@modelid@', 'obj_id', '对象ID', '', '', '0', '6', '', '', 'number', '', '', '', '', '1', '1', '0', '1', '0', '0', '0', '0', '18', '0', '0', '0', 'left', '', 1, '', '');
INSERT INTO `@app@model_field` VALUES (NULL, '@modelid@', 'status', '状态', '', '', '0', '2', '', '', 'box', '', '', '', '', '1', '1', '0', '1', '0', '0', '0', '0', '15', '0', '0', '1', 'center', '80', 1, '', '');
INSERT INTO `@app@model_field` VALUES (NULL, '@modelid@', 'content', '评审内容', '', '', '0', '1000', '', '', 'textarea', 'a:4:{s:5:\"width\";s:2:\"99\";s:6:\"height\";s:2:\"46\";s:12:\"defaultvalue\";s:0:\"\";s:10:\"enablehtml\";s:1:\"0\";}', '', '', '', '0', '1', '0', '1', '0', '1', '1', '1', '5', '0', '0', '0', 'left', '', 1, '', '');
INSERT INTO `@app@model_field` VALUES (NULL, '@modelid@', 'description', '备注', '', '', '0', '255', '', '', 'textarea', 'a:4:{s:5:\"width\";s:2:\"99\";s:6:\"height\";s:2:\"46\";s:12:\"defaultvalue\";s:0:\"\";s:10:\"enablehtml\";s:1:\"0\";}', '', '', '', '0', '1', '0', '1', '0', '1', '1', '1', '5', '0', '0', '0', 'left', '', 1, '', '');
INSERT INTO `@app@model_field` VALUES (NULL, '@modelid@', 'username', '用户名', '', '', '0', '20', '', '', 'text', '', '', '', '', '1', '1', '0', '1', '0', '0', '0', '0', '16', '0', '0', '0', 'left', '120', 1, '', '');
INSERT INTO `@app@model_field` VALUES (NULL, '@modelid@', 'savetime', '添加时间', '', '', '0', '0', '', '', 'datetime', 'a:3:{s:9:\"fieldtype\";s:3:\"int\";s:6:\"format\";s:11:\"Y-m-d H:i:s\";s:11:\"defaulttype\";s:1:\"0\";}', '', '', '', '1', '1', '0', '0', '0', '0', '0', '1', '11', '0', '0', '0', 'center', '', 1, '', '');
INSERT INTO `@app@model_field` VALUES (NULL, '@modelid@', 'updatetime', '更新时间', '', '', '0', '0', '', '', 'datetime', 'a:3:{s:9:\"fieldtype\";s:3:\"int\";s:6:\"format\";s:11:\"Y-m-d H:i:s\";s:11:\"defaulttype\";s:1:\"0\";}', '', '', '', '1', '1', '0', '0', '0', '0', '0', '1', '11', '0', '0', '0', 'center', '120', 1, '', '');
INSERT INTO `@app@model_field` VALUES (NULL, '@modelid@', 'deleted', '是否删除', '', '', '0', '6', '', '', 'number', '', '', '', '', '1', '1', '0', '1', '0', '0', '0', '0', '18', '0', '0', '0', 'left', '', 1, '', '');