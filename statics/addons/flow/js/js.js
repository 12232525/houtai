var MODE	= '',ACTION = '',DIR='',PROJECT='',HOST='',PARAMS='',QOM='xinhu_',apiurl='';
var windows	= null;
function initbody(){}
function globalbody(){}
$(document).ready(function(){
	$(window).scroll(js.scrolla);
	adminid=js.request('adminid');
	token=js.request('token');
	globalbody();
	initbody();
	$('body').click(function(e){
		js.downbody(this, e);
	});
});
var js={path:'index',url:'',bool:false,login:{},initdata:{},scroll:function(){}};
var isIE=true;
if(!document.all)isIE=false;
var get=function(id){return document.getElementById(id)};
var isempt=function(an){var ob	= false;if(an==''||an==null||typeof(an)=='undefined'){ob=true;}if(typeof(an)=='number'){ob=false;}return ob;}
var strreplace=function(str){if(isempt(str))return '';return str.replace(/[ ]/gi,'').replace(/\s/gi,'')}
var strhtml=function(str){if(isempt(str))return '';return str.replace(/\</gi,'&lt;').replace(/\>/gi,'&gt;')}
var form=function(an,fna){if(!fna)fna='myform';return document[fna][an]}
var xy10=function(s){var s1=''+s+'';if(s1.length<2)s1='0'+s+'';return s1;};
js.getarr=function(caa,bo){
	var s='';
	for(var a in caa)s+=' @@ '+a+'=>'+caa[a]+'';
	if(!bo)alert(s);
	return s;
}
js.getarropen=function(caa){
	jsopenararass = caa;
	js.open('js/array.shtml');
}
if(typeof(api)=='undefined'){
	var api={};
	api.systemType='android';
	api.deviceId='';
}
js.str=function(o){
	o.value	= strreplace(o.value);
}
js.getcan = function(i,dev){
	var a = PARAMS.split('-');
	var val = '';
	if(!dev)dev='';
	if(a[i])val=a[i];
	if(!val)val=dev;
	return val;
}
function winHb(){
	var winH=(!isIE)?window.innerHeight:document.documentElement.offsetHeight;
	return winH;
}
function winWb(){
	var winH=(!isIE)?window.innerWidth:document.documentElement.offsetWidth;
	return winH;
}
js.scrolla	= function(){
	var top	= $(document).scrollTop();
	js.scroll(top);
}
js.request=function(name,url){
	if(!name)return '';
	if(!url)url=location.href;
	if(url.indexOf('\?')<0)return '';
	neurl=url.split('\?')[1];
	neurl=neurl.split('&');
	var value=''
	for(i=0;i<neurl.length;i++){
		val=neurl[i].split('=');
		if(val[0].toLowerCase()==name.toLowerCase()){
			value=val[1];
			break;
		}
	}
	if(!value)value='';
	return value;
}
js.now=function(type,sj){
	if(!type)type='Y-m-d';
	if(type=='now')type='Y-m-d H:i:s';
	var dt,ymd,his,weekArr,Y,m,d,w,H=0,i=0,s=0,W;
	if(typeof(sj)=='string')sj=sj.replace(/\//gi,'-');
	if(/^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}/.test(sj)){
		sj=sj.split(' ');
		ymd=sj[0];
		his=sj[1];if(!his)his='00:00:00';
		ymd=ymd.split('-');
		his=his.split(':');
		H = his[0];if(his.length>1)i = his[1];if(his.length>2)s = his[2];
		dt=new Date(ymd[0],ymd[1]-1,ymd[2],H,i,s);
	}else{
		dt=(typeof(sj)=='number')?new Date(sj):new Date();
	}
	weekArr=new Array('日','一','二','三','四','五','六');
	Y=dt.getFullYear();
	m=xy10(dt.getMonth()+1);
	d=xy10(dt.getDate());
	w=dt.getDay();
	H=xy10(dt.getHours());
	i=xy10(dt.getMinutes());
	s=xy10(dt.getSeconds());
	W=weekArr[w];
	if(type=='time'){
		return dt.getTime();
	}else{
		return type.replace('Y',Y).replace('m',m).replace('d',d).replace('H',H).replace('i',i).replace('s',s).replace('w',w).replace('W',W);
	}
}
js.float=function(num,w){
	if(isNaN(num)||num==''||!num||num==null)num='0';
	num=parseFloat(num);
	if(!w&&w!=0)w=2;
	var m=num.toFixed(w);
	return m;	
}
js.email=function(str){
	var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
 	return myreg.test(str);
}
js.splittime=0;
js.getsplit=function(){
	if(!js.servernow)return false;
	var dt=js.now('Y-m-d H:i:s');
	var d1=js.now('time',dt);	
	var d2=js.now('time',js.servernow);
	js.splittime=d1-d2;
}
js.serverdt=function(atype){
	if(!atype)atype='Y-m-d H:i:s';
	var d1=js.now('time')-js.splittime;
	var dt=js.now(atype,d1);
	return dt;
}
js.openarr={};
js.open=function(url,w,h,wina,can){
	if(wina){
		try{
		var owina	= this.openarr[wina];
		owina.document.body;
		owina.focus();
		return false;
		}catch(e){}
	}
	var ja=(url.indexOf('?')>=0)?'&':'?';
	if(!w)w=600;
	if(!h)h=500;
	if(!can)can='resizable=yes,scrollbars=yes';
	var l=(screen.width-w)*0.5;
	var t=(screen.height-h)*0.5;
	var opar=window.open(url,'','width='+w+'px,height='+h+'px,left='+l+'px,top='+t+'px,'+can+'');
	if(wina)this.openarr[wina]=opar;
}
js.onunload=function(){
	var a=js.openarr;
	for(var b in a){
		try{a[b].close()}catch(e){}
	}
}
js.decode=function(str){
	var arr	= {length:-1};
	try{
		arr	= new Function('return '+str+'')();
	}catch(e){}
	return arr;
}
js.cropimg=function(aid,at,w,h){
	var sou='';
	if(get(aid))sou=get(aid).value;
	var img=sou;
	if(!at)at='';
	if(sou.indexOf('crop')>0){
		var ext=sou.substr(sou.lastIndexOf('.')+1);
		var img=sou.substr(0,sou.lastIndexOf('_'))+'.'+ext;
	}
	var url='mode/cropimg/cropimg.php?imgsize='+w+'x'+h+'&imgurl='+img+'&thumimg='+sou+'&title='+at+'&aid='+aid+'&callback=js.cropimgcall';
	js.open(url,750,430);
	return false;
}
js.cropimgcall=function(a, aid){
	var arr=a.split('|');
	var sou=arr[0],
		yan=arr[1];
	if(sou=='')sou=yan;
	if(get(aid)){
		get(aid).value = sou;
		if(sou=='')sou='images/noface.gif';
		if(get('view_'+aid+''))get('view_'+aid+'').src=sou;
	}
}
js.move=function(id,event){
	var _left=0,_top=0;
	var obj	= id;
	if(typeof(id)=='string')obj=get(id);
	var _Down=function(evt){
		try{
			var s='<div id="divmovetemp" style="filter:Alpha(Opacity=0);opacity:0;z-index:99999;width:100%;height:100%;position:absolute;background-color:#000000;left:0px;top:0px;cursor:move"></div>';
			$('body').prepend(s);
			evt=window.event||evt;
			_left=evt.clientX-parseInt(obj.style.left);
			_top=evt.clientY-parseInt(obj.style.top);
			document.onselectstart=function(){return false}
		}catch(e){}		
	}
	var _Move=function(evt){
		try{
			var c=get('divmovetemp').innerHTML;
			evt=window.event||evt;
			obj.style.left=evt.clientX-_left+'px';
			obj.style.top=evt.clientY-_top+'px';
		}catch(e){_Down(evt)}
	}
	var _Up=function(){
		document.onmousemove="";
		document.onselectstart=""
		$('#divmovetemp').remove();	
	}
	document.onmousemove=_Move
	document.onmouseup=_Up;
}
js.setdev=function(val,dev){
	var cv	= val;
	if(isempt(cv))cv=dev;
	return cv;
}
js.upload=function(call,can, glx){
	if(!call)call='';
	if(!can)can={};
	js.uploadrand	= js.now('YmdHis')+parseInt(Math.random()*999999);
	var url = 'mode/upload/upload.php?callback='+call+'&upkey='+js.uploadrand+'&p='+PROJECT+'';
	for(var a in can)url+='&'+a+'='+can[a]+'';
	if(glx=='url')return url;
	var s='';
	js.tanbody('uploadwin','上传文件',400,280,{
		html:'<div style="height:230px;overflow:hidden"><iframe src="" name="winiframe" width="100%" height="100%" frameborder="0"></iframe></div>',
		bbar:'none'
	});
	winiframe.location.href=url;
	return false;
}
js.downshow=function(id){
	js.open('?id='+id+'&a=down',600,350);
	return false;
}
js.downupdels=function(sid, said, o1){
	js.confirm('确定要删除此文件吗？', function(lx){
		if(lx=='yes'){
			js.downupdel(sid, said, o1);
		}
	});
}
js.downupdel=function(sid, said, o1){
	if(sid>0){
		$.get(js.getajaxurl('delfile','upload','public',{id:sid}));
	}
	if(o1)$(o1).parent().remove();
	var o = $('#view_'+said+'');
	var to= $('#count_'+said+'');
	var o1 = o.find('span'),s1='';
	for(i=0;i<o1.length;i++)$(o1[i]).html(''+(i+1));
	to.html('');
	if(i>0)to.html('<font style="font-size:11px" color="#555555">文件:'+i+'</font>');
	o1 = o.find('font');
	for(i=0;i<o1.length;i++)s1+=','+$(o1[i]).html();
	if(s1!='')s1=s1.substr(1);
	$('#'+said+'-inputEl').val(s1);
	$('#fileid_'+said+'').val(s1);
}
js.downupshow=function(a, showid){
	var s = '',i=0,s1='';
	var o = $('#view_'+showid+'');
	for(i=0; i<a.length; i++){
		s='<div onmouseover="this.style.backgroundColor=\'#f1f1f1\'" onmouseout="this.style.backgroundColor=\'\'" style="padding:4px 5px;border-bottom:1px #eeeeee solid"><span>'+(i+1)+'</span><font style="display:none">'+a[i].id+'</font>、<a class="a" onclick="return js.downshow('+a[i].id+',\''+a[i].fileext+'\')" href="javascript:">'+a[i].filename+'</a> ('+a[i].filesizecn+')';
		s+=' <a class="a" temp="dela" onclick="return js.downupdels('+a[i].id+',\''+showid+'\', this)" href="javascript:">×</a>';
		s+='</div>';
		o.append(s);
	}
	js.downupdel(0, showid, false);
}
js.getajaxurl=function(a,m,d,can){
	if(!can)can={};
	if(!m)m=MODE;
	if(!d)d=DIR;
	if(d=='null')d='';
	var jga	= a.substr(0,1);
	if(jga=='@')a = a.substr(1);
	var url	= ''+this.path+'.php?a='+a+'&m='+m+'&d='+d+'';
	for(var c in can)url+='&'+c+'='+can[c]+'';
	if(jga!='@')url+='&ajaxbool=true';	
	url+='&rnd='+Math.random()+'';	
	return url;
}
js.formatsize=function(size){
	var arr = new Array('Byte', 'KB', 'MB', 'GB', 'TB', 'PB');
	var e	= Math.floor(Math.log(size)/Math.log(1024));
	var fs	= size/Math.pow(1024,Math.floor(e));
	return js.float(fs)+' '+arr[e];
}
js.getformdata=function(na){
	var da	={};
	if(!na)na='myform';
	var obj	= document[na];
	for(var i=0;i<obj.length;i++){
		var type	= obj[i].type;
		var val		= obj[i].value;
		if(type=='checkbox'){
			val	= '0';
			if(obj[i].checked)val='1';
		}
		da[obj[i].name]	= val;
	}
	return da;
}
js.getdata = function(na,da){
	if(!da)da={};
	var obj	= $('#'+na+'');
	var inp	= obj.find('input,select');
	for(var i=0;i<inp.length;i++){
		var type	= inp[i].type;
		var val		= inp[i].value;
		if(type=='checkbox'){
			val	= '0';
			if(inp[i].checked)val='1';
		}
		var ad1	= inp[i].name;
		if(!ad1)ad1 = inp[i].id;
		da[ad1]	= val;
	}
	return da;
}
js.selall = function(o,na,bh){
	var i,oi1;
	if(bh){
		o1=$("input[name^='"+na+"']");
	}else{
		o1=$("input[name='"+na+"']");
	}
	for(i=0;i<o1.length;i++){
		if(!o1[i].disabled)o1[i].checked = o.checked;
	}
}
js.getchecked=function(na,bh){
	var s = '';
	var o1;
	if(bh){
		o1=$("input[name^='"+na+"']");
	}else{
		o1=$("input[name='"+na+"']");
	}
	for(var i=0;i<o1.length;i++){
		if(o1[i].checked && !o1[i].disabled)s+=','+o1[i].value+'';
	}
	if(s!='')s=s.substr(1);
	return s;
}
js.cookie=function(name){
	var str=document.cookie;
	var val='';
	if(str.length<=0)return '';
	arr=str.split('; ');
	for(i=0;i<arr.length;i++){
		cda=arr[i].split('=');
		if(name.toLowerCase()==cda[0].toLowerCase()){
			val=cda[1];
			break;
		}
	}
	if(!val)val='';
	return val;
}
js.savecookie=function(name,value,d){
	var expires = new Date();
	if(!d)d=365;
	if(!value)d=-10;
	expires.setTime(expires.getTime()+d*24*60*60*1000);
	var str=''+name+'='+value+';expires='+expires.toGMTString()+';path=/';
	document.cookie = str;
}
js.backtop=function(ci){
	if(!ci)ci=0;
	$('body,html').animate({scrollTop:ci});
	return false;
}
js.backto = function(oid){
	if(!get(oid))return;
	var of	= $('#'+oid+'').offset();
	this.backtop(of.top);
	return false;
}
js.applyIf=function(a,b){
	if(!a)a={};
	if(!b)b={};
	for(var c in b)if(typeof(a[c])=='undefined')a[c]=b[c];
	return a;
}
js.apply=function(a,b){
	if(!a)a={};
	if(!b)b={};
	for(var c in b)a[c]=b[c];
	return a;
}
js.tanbodyindex = 90;
js.tanbody=function(act,title,w,h,can1){
	this.tanbodyindex++;
	var can	= js.applyIf(can1,{html:'',showfun:function(){},bodystyle:'',guanact:'',titlecls:'',btn:[]});
	var l=(winWb()-w-50)*0.5,t=(winHb()-h-50)*0.5;
	var s	= '';
	var mid	= ''+act+'_main';
	$('#'+mid+'').remove();
	var posta= 'fixed';
	if(js.path == 'admin')posta='absolute';
	s+='<div id="'+mid+'" style="position:'+posta+';background-color:#ffffff;left:'+l+'px;width:'+w+'px;top:'+t+'px;z-index:'+this.tanbodyindex+';box-shadow:0px 0px 10px rgba(0,0,0,0.3);">';
	s+='	<div class="title '+can.titlecls+'" style="-moz-user-select:none;">';
	s+='		<table border="0"  width="100%" cellspacing="0" cellpadding="0"><tr>';
	s+='			<td height="34" style="font-size:16px; font-weight:bold;color:white; padding-left:8px" width="100%" onmousedown="js.move(\''+mid+'\')" id="'+act+'_title">'+title+'</td>';
	s+='			<td><div onmouseover="this.style.backgroundColor=\'#C64343\'" onmouseout="this.style.backgroundColor=\'\'" style="padding:0px 8px;height:40px;overflo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                a+'_id').value=naid;
	get(js.backnana).focus();
}
function changecancel(){
	js.tanclose('changeaction');
}