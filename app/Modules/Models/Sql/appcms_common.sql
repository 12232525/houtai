CREATE TABLE `@app@@zhubiao@` (
  `id` int(10) unsigned NOT NULL auto_increment,
  `name` char(80) NOT NULL default '',
  `thumb` char(100) NOT NULL default '',
  `description` char(255) NOT NULL default '',
  `listorder` tinyint(3) unsigned NOT NULL default '0',
  `status` tinyint(2) unsigned NOT NULL default '1',
  `username` char(20) NOT NULL,
  `savetime` int(10) unsigned NOT NULL default '0',
  `updatetime` int(10) unsigned NOT NULL default '0',
  PRIMARY KEY  (`id`),
  KEY `status` (`status`,`listorder`,`id`),
  KEY `listorder` (`name`,`status`,`listorder`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `@app@model_field` VALUES (NULL, '@modelid@', 'status', '状态', '', '', '0', '2', '', '', 'box', '', '', '', '', '1', '1', '0', '1', '0', '0', '0', '0', '15', '0', '0', '1', 'center', '80', 1, '', '');
INSERT INTO `@app@model_field` VALUES (NULL, '@modelid@', 'username', '用户名', '', '', '0', '20', '', '', 'text', '', '', '', '', '1', '1', '0', '1', '0', '0', '0', '0', '16', '0', '0', '0', 'left', '120', 1, '', '');
INSERT INTO `@app@model_field` VALUES (NULL, '@modelid@', 'savetime', '添加时间', '', '', '0', '0', '', '', 'datetime', 'a:3:{s:9:\"fieldtype\";s:3:\"int\";s:6:\"format\";s:11:\"Y-m-d H:i:s\";s:11:\"defaulttype\";s:1:\"0\";}', '', '', '', '1', '1', '0', '0', '0', '0', '0', '1', '11', '0', '0', '0', 'center', '', 1, '', '');
INSERT INTO `@app@model_field` VALUES (NULL, '@modelid@', 'listorder', '排序', '', '', '0', '6', '', '', 'number', '', '', '', '', '1', '1', '0', '1', '0', '0', '0', '0', '18', '0', '0', '0', 'left', '', 1, '', '');
INSERT INTO `@app@model_field` VALUES (NULL, '@modelid@', 'name', '名称', '', 'inputtitle', '1', '80', '', '请输入名称', 'title', '', '', '', '', '0', '1', '0', '1', '1', '1', '1', '1', '3', '0', '0', '1', 'left', '', 1, '', '');
INSERT INTO `@app@model_field` VALUES (NULL, '@modelid@', 'description', '备注', '', '', '0', '255', '', '', 'textarea', 'a:4:{s:5:\"width\";s:2:\"98\";s:6:\"height\";s:2:\"46\";s:12:\"defaultvalue\";s:0:\"\";s:10:\"enablehtml\";s:1:\"0\";}', '', '', '', '0', '1', '0', '1', '0', '1', '1', '1', '5', '0', '0', '0', 'left', '', 1, '', '');
INSERT INTO `@app@model_field` VALUES (NULL, '@modelid@', 'updatetime', '更新时间', '', '', '0', '0', '', '', 'datetime', 'a:3:{s:9:\"fieldtype\";s:3:\"int\";s:6:\"format\";s:11:\"Y-m-d H:i:s\";s:11:\"defaulttype\";s:1:\"0\";}', '', '', '', '1', '1', '0', '0', '0', '0', '0', '1', '11', '0', '0', '0', 'center', '120', 1, '', '');
INSERT INTO `@app@model_field` VALUES (NULL, '@modelid@', 'thumb', 'LOGO', '', '', '0', '100', '', '', 'image', 'a:9:{s:4:\"size\";s:2:\"50\";s:12:\"defaultvalue\";s:0:\"\";s:9:\"show_type\";s:1:\"1\";s:14:\"upload_maxsize\";s:4:\"1024\";s:15:\"upload_allowext\";s:20:\"jpg|jpeg|gif|png|bmp\";s:9:\"watermark\";s:1:\"0\";s:13:\"isselectimage\";s:1:\"1\";s:12:\"images_width\";s:0:\"\";s:13:\"images_height\";s:0:\"\";}', '', '', '', '0', '1', '0', '0', '0', '1', '0', '1', '7', '0', '0', '0', 'left', '', 1, '', '');
