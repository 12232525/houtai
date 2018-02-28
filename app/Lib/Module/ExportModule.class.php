<?php
/**
 * 处理和导出相关的业务逻辑
 */
class ExportModule{
	
	public $objPHPExcel;
	
	public function getPHPExcelObejct(){
		import('PHPExcel', LIB_PATH . 'PHPExcel', '.php');
    	import('IOFactory', LIB_PATH . 'PHPExcel/PHPExcel', '.php');
    	$this->objPHPExcel = new PHPExcel();
	}
	
	/**
	 * 导出excel
	 * @param $list array 目标数据集
	 * @param $relData array 相关数据数组
	 */
    public function exportExcel(&$list, &$data){
    	if(!$list || !$data) return;
		
		$this->getPHPExcelObejct();
		
		$prefix 	 = $data['prefix']; 	 	 //前缀
		$title  	 = $data['title'];  	 	 //表格名字
		$description = $data['description']; 	 //表格描述
		$len 		 = count($data['column'])-1; //excel中列中字母起始位置（显示的表格列数）如：12, 则取到char字母数据中的L
		$start	     = $data['start'];           //数据开始显示的行数，3：表示从第3行开始显示数据
		
		$char = array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
		
		$ActiveSheet = $this->objPHPExcel->getActiveSheet();
		
		$this->objPHPExcel->getProperties()->setCreator($description)
									 ->setLastModifiedBy($description)
									 ->setTitle($title)->setSubject($title)
									 ->setDescription($title)
									 ->setKeywords($prefix)
									 ->setCategory($prefix);

		$ActiveSheet->setTitle($prefix);

		$ActiveSheet->mergeCells('A1:' . $char[$len] . '1');
		$this->objPHPExcel->setActiveSheetIndex(0)->setCellValue('A1', $title)->getStyle('A1')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment :: HORIZONTAL_CENTER);
		$ActiveSheet->getStyle('A1')->getFont()->setBold(true);
		$ActiveSheet->getStyle('A1')->getFont()->setSize(11);
		
		//中文列名标题
		$titleList = array_values($data['column']);
		$secondRow = $this->objPHPExcel->setActiveSheetIndex(0);
		foreach($titleList as $k => $t){
			$secondRow->setCellValue($char[$k].'2', $t);
		}
		
		//英文列名
		$columnList = array_keys($data['column']);
		$total = count($list);
		for ($i = $start; $i < $total+$start; $i++) {
			
			$row = $list[$i-$start];
			
			foreach($columnList as $ke => $columnName){
				if($columnName == 'serial_num') {
					$ActiveSheet->setCellValue('A' . $i, $i-2); //第一列，显示序号
				}else{
					$ActiveSheet->setCellValue($char[$ke] . $i, $this->convertUTF8($row[$columnName]));
				}
			}
		}

		$this->ToExportExcel($title);
    }
	
	private function ToExportExcel($title){
    	
    	$title .= '_' . date('Y年m月d日H时i分', time());
		
		// Redirect output to a client’s web browser (Excel2007)
		header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
		header('Content-Disposition: attachment;filename="' . $title . '.xlsx"');
		// If you're serving to IE 9, then the following may be needed
		header('Cache-Control: max-age=0');

		// If you're serving to IE over SSL, then the following may be needed
		header('Expires: Mon, 26 Jul 2027 05:00:00 GMT'); // Date in the past
		header('Last-Modified: ' . gmdate('D, d M Y H:i:s') . ' GMT'); // always modified
		header('Cache-Control: cache, must-revalidate'); // HTTP/1.1
		header('Pragma: public'); // HTTP/1.0

		$objWriter = IOFactory :: createWriter($this->objPHPExcel, 'Excel2007');
		$objWriter->save('php://output');
		die();
    }
    
    private function convertUTF8($str)
	{
	   if(empty($str)) return '';
	   return $str;
	   //return iconv('gb2312','utf-8//TRANSLIT//IGNORE', $str);
	}
	
}
