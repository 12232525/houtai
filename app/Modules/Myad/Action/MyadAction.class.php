<?php
/**
 * @package		广告
 * @subpackage  Libraries
 * @category    it100
 * @author		it100
 */
class MyadAction extends AdminbaseAction {

        private $db;
        private $type;

        public function _initialize() {
                parent::_initialize();
                $this->db = D("Myad");
                $this->type = D("Myadtype");
        }

        public function index() {
                $count = $this->db->count();
                $page = $this->page($count, 20);
                $data = $this->db->limit($page->firstRow . ',' . $page->listRows)->order(array("aid" => "DESC"))->select();
                $this->assign("Page", $page->show('Admin'));
                $this->assign("data", $data)->assign("type", $this->type->getField("id,typename"));
                $this->display();
        }

        public function add() {
                if (IS_POST) {
                        if (FALSE === $this->db->create()) {
                                $this->error($this->db->getError());
                        }
                        $this->db->tagname = I("post.tagname");

                        $link = addslashes($this->db->normbody['link']);

                        if ($this->db->normbody['style'] == 'code') {
                                $this->db->normbody = addslashes($this->db->normbody['htmlcode']);
                        } else if ($this->db->normbody['style'] == 'txt') {

                                $this->db->normbody = "<a href=\"{$link}\" font-size=\"{$this->db->normbody['size']}\" color=\"{$this->db->normbody['color']}\">{$this->db->normbody['title']}</a>";
                        } else if ($this->db->normbody['style'] == 'img') {
                                if (empty($this->db->normbody['width'])) {
                                        $width = "";
                                } else {
                                        $width = " width=\"{$this->db->normbody['width']}\"";
                                }
                                if (empty($this->db->normbody['height'])) {
                                        $height = "";
                                } else {
                                        $height = "height=\"{$this->db->normbody['height']}\"";
                                }
                                $this->db->normbody = "<a href=\"{$link}\"><img src=\"{$this->db->normbody['url']}\"$width $height border=\"0\" /></a>";
                        } else {
                                if (empty($this->db->normbody['width'])) {
                                        $width = "";
                                } else {
                                        $width = " width=\"{$this->db->normbody['width']}\"";
                                }
                                if (empty($this->db->normbody['height'])) {
                                        $height = "";
                                } else {
                                        $height = "height=\"{$this->db->normbody['height']}\"";
                                }
                                $this->db->normbody = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"http://download.Macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0\"$width $height><param name=\"movie\" value=\"{$link}\"/><param name=\"quality\" value=\"high\"/></object>";
                        }
                        /**
                         * 分类  如果有添加新的分类
                         */
                        $tagname = I("post.newType");
                        if (!empty($tagname)) {
                                $clsid = $this->type->add(array("typename" => $tagname));
                                if (FALSE === $clsid) {
                                        $this->error($this->type->getDbError());
                                }
                                $this->db->clsid = $clsid;
                        }

                        if (FALSE === $this->db->add()) {
                                $this->error($this->db->getDbError());
                        }
                        $this->success("成功增加一个广告");
                } else {
                        /**
                         * 分类
                         */
                        $this->assign("type", $this->type->getField("id,typename"));
                        $this->display();
                }
        }

        /**
         * 广告展示 
         */
        public function show() {
                $this->assign("data", $this->db->where(array("aid" => I("get.aid")))->find());
                $this->display();
        }

        /**
         * 广告分类管理
         */
        public function type() {

                $count = $this->type->count();
                $page = $this->page($count, 20);
                $data = $this->type->limit($page->firstRow . ',' . $page->listRows)->order(array("id" => "DESC"))->select();
                $this->assign("Page", $page->show('Admin'))->assign("data", $data);
                $this->display();
        }

        /**
         * 编辑 广告分类
         */
        public function edittype() {
                if (IS_POST) {
                        if (FALSE === $this->type->create()) {
                                $this->error($this->type->getError());
                        }
                        if (FALSE === $this->type->save()) {
                                $this->error($this->type->getDbError());
                        }
                        $this->assign("jumpUrl", U("Myad/type"));
                        $this->success("更新成功");
                } else {
                        $this->assign("data", $this->type->find(I("get.id")));
                        $this->display();
                }
        }

        /**
         * 删除  广告分类
         */
        public function delteyp() {
                if (IS_POST) {
                        $ids = I("post.ids");
                        if (is_array($ids)) {
                                $this->type->where(array("id" => array("in", $ids)))->delete();
                        }
                        $this->success("删除成功！");
                } else {
                        $id = I("get.id");
                        $status = $this->type->where(array("id" => $id))->delete();
                        if ($status) {
                                $this->success("删除成功！");
                        } else {
                                $this->error("删除失败！");
                        }
                }
        }

        /**
         * 更新广告
         */
        public function edit() {
                if (IS_POST) {
                        if (FALSE === $this->db->create()) {
                                $this->error($this->db->getError());
                        }
                        if (FALSE === $this->db->save()) {
                                $this->error($this->db->getDbError());
                        }
                        S("Myad_" . I("post.aid"), NULL, 0);
                        $this->assign("jumpUrl", U("Myad/index"));
                        $this->success("更新成功");
                } else {
                        $this->assign("data", $this->db->where("aid = " . I("get.aid"))->find());
                        $this->assign("type", $this->type->getField("id,typename"));
                        $this->display();
                }
        }

        /**
         * 删除 广告
         */
        public function delete() {
                if (IS_POST) {
                        $ids = I("post.ids");
                        if (is_array($ids)) {
                                $this->db->where(array("aid" => array("in", $ids)))->delete();
                        }
                        $this->success("删除成功！");
                } else {
                        $id = I("get.aid");
                        $status = $this->db->where(array("aid" => $id))->delete();
                        if ($status) {
                                $this->success("删除成功！");
                        } else {
                                $this->error("删除失败！");
                        }
                }
        }

        /**
         * 更新广告缓存
         */
        public function upcache() {
                foreach ($this->db->getField("aid,tagname") as $key => $value) {
                        S("Myad_{$key}", NULL, 0);
                }
                $this->success("更新广告成功");
        }

}

/* End of file MyadAction.php */
/* Location: .Expression path is undefined on line 23, column 17 in Templates/Scripting/PHPClass.php./MyadAction.php */