//验证是否为正数
var checkNum = function(a)
{
	var patrn=/^\d+(.\d+)?$/; 
	if (!patrn.exec(a)) return false;
	return true;
};

/*
var checkName = function(a)
{
	var patrn = /^\s*[\u4e00-\u9fa5]{1,10}[.·]{0,1}[\u4e00-\u9fa5]{1,10}\s*$/; 
	if (!patrn.exec(a)) return false;
	return true;
};
*/

//验证姓名
var checkName = function(a)
{
	// 允许输入中文，字母，".", "·", " "(空格)
	return /^[\u4e00-\u9fa5]{2,4}$/.test(a.trim());
};

//验证手机号码
var checkPhone = function(a)
{
	var patrn = /^((?:13|15|18|14|17)\d{9}|0(?:10|2\d|[3-9]\d{2})[1-9]\d{6,7})$/;
	if (!patrn.exec(a)) return false;
	return true;
};

 //验证车牌号码
var checkCp = function(a)
{
	var rtn = false;
	var patrns = ['//^[\u4e00-\u9fa5]{1}[a-zA-Z]{1}([a-zA-Z0-9]{5}|[a-zA-Z0-9]{4}[\u4e00-\u9fa5]{1})$//', '//^[a-zA-Z]{2}[a-zA-Z0-9]{5}$//', '//^使[a-zA-Z0-9]{6}$//', '//^WJ[\u4e00-\u9fa5]{1}[a-zA-Z0-9]{5}$//', '//^WJ[0-9]{2}[a-zA-Z0-9]{5}$//', '//^WJ[0-9]{2}(消|边|通|森|金|警|电)[a-zA-Z0-9]{4}$//'];
	
	for(var i = 0;i < patrns.length; i++){
		var patrn = patrns[i];
		patrn = patrn.replace(/\/\//g,"\/");
		var re = eval(patrn);//转成正则
		if (re.exec(a))
		{    
			rtn =  true;
			break;
		}
	} 
	return rtn;
};

//验证车架号
var checkVIN = function(a)
{
	var patrn = /^[a-zA-Z0-9]{6,20}$/
	if (!patrn.exec(a)) return false;
	return true;
}

//验证字母加数字
var checkAbc = function(a)
{
	var patrn=/^[a-zA-Z0-9]+$/; 
	if (!patrn.exec(a)) return false;
	return true;	
}
