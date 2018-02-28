<?php
/**
 * 所有module的父类
 */
class CommonModule{
	
	/**
     * 分页输出
     * @staticvar array $_pageCache
     * @param type $Total_Size 信息总数
     * @param type $Page_Size 每页显示信息数量
     * @param type $Current_Page 当前分页号
     * @param type $List_Page 每次显示几个分页导航链接
     * @param type $PageParam 接收分页号参数的标识符
     * @param type $PageLink 分页规则 
     *                          array(
                                    "index"=>"http://www.it100.net/192.html",//这种是表示当前是首页，无需加分页1
                                    "list"=>"http://www.it100.net/192-{page}.html",//这种表示分页非首页时启用
                                 )
     * @param type $static 是否开启静态
     * @param string $TP 模板
     * @param array $Tp_Config 模板配置
     * @return array|\Page
     */
    protected function page($Total_Size = 1, $Page_Size = 0, $Current_Page = 0, $List_Page = 6, $PageParam = '', $PageLink = '', $static = FALSE, $TP = "", $Tp_Config = "") {
        $Page = page($Total_Size, $Page_Size, $Current_Page, $List_Page, $PageParam, $PageLink, $static, $TP, $Tp_Config);
        $Page->SetPager('Admin', '{first}{prev}&nbsp;{liststart}{list}{listend}&nbsp;{next}{last}', array("listlong" => "6", "first" => "首页", "last" => "尾页", "prev" => "上一页", "next" => "下一页", "list" => "*", "disabledclass" => ""));
        return $Page;
    }
}
?>