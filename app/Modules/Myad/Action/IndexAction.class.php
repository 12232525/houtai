<?php
/**
 * @package		广告
 * @subpackage  Libraries
 * @category    it100
 * @author		it100
 */
class IndexAction extends BaseAction {

        public function getmyad() {
                $arcID = I("get.aid");
                if (!empty($arcID))
                        $aid = $arcID;
                $arcID = $aid = (isset($aid) && is_numeric($aid)) ? $aid : 0;
                if ($aid == 0)
                        die(' Request Error! ');


                if (!$cacheFile = S("Myad_" . $aid)) {
                        $row = M("Myad")->where(array("aid" => $aid))->find();
                        $cacheFile = '';
                        if ($row['timeset'] == 0) {
                                $cacheFile = $row['normbody'];
                        } else {
                                $ntime = time();
                                if ($ntime > $row['endtime'] || $ntime < $row['starttime']) {
                                        $cacheFile = $row['expbody'];
                                } else {
                                        $cacheFile = $row['normbody'];
                                }
                        }
                        $cacheFile = str_replace('"', '\"', $cacheFile);
                        $cacheFile = str_replace("\r", "\\r", $cacheFile);
                        $cacheFile = str_replace("\n", "\\n", $cacheFile);
                        $cacheFile = "<!--\r\ndocument.write(\"{$cacheFile}\");\r\n-->\r\n";
                        S("Myad_" . $aid, $cacheFile, ($row['endtime'] - $ntime));
                }
                echo $cacheFile;
        }

}

/* End of file IndexAction.php */
/* Location: .Expression path is undefined on line 23, column 17 in Templates/Scripting/PHPClass.php./IndexAction.php */