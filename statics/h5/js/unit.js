var app = {
	win : $(window) ,
	cookie : {
	    set: function(name, value, options) {
	        if (!options) {
	            options = options || {};
	        }
	        var hour = options.hour ? options.hour : 0;
	        var path = options.path ? options.path + ";" : "/";
	        if (hour) {
	            var today = new Date();
	            var expire = new Date();
	            expire.setTime(today.getTime() + 3600000 * hour);
	        }
	        window.document.cookie = name + "=" + encodeURI(value) + "; " + (hour ? ("expires=" + expire.toGMTString() + "; ") : "") + ("path=" + path);
	        return true;
	    },
	    get: function(name) {
	        var reg = new RegExp("(?:^|;+|\\s+)" + name + "=([^;]*)");
	        var m = window.document.cookie.match(reg);
	        return (!m ? "" : decodeURI(m[1]));
	    },
	    remove: function(name, path) {
	        var path = path ? path + ";" : "/";
	        window.document.cookie = name + "=; expires=Mon, 1 Jun 2014 01:00:00 GMT; " + (path ? ("path=" + path + "; ") : "path=/; ");
	    }
	},
	localStorage : {
		set : function(key, value){
            if(window.localStorage){
                localStorage.setItem(key, value);
            }else{
                app.cookie.set(key, value);
            }
		},
		get : function(key){
            if(window.localStorage){
                return localStorage.getItem(key);
            }else{
                return app.cookie.set(key);
            }
		},
		remove : function(key){
            if(window.localStorage){
                localStorage.removeItem(key);
            }else{
                app.cookie.remove(key);
            }		
		},
		clear : function(){
            if(window.localStorage){
                localStorage.clear();
            }else{
                //cookie.remove(key);
            }            
		}
	},
	isMobile : function( str ){
	    var regu =/^[1][0-9]{10}$/;
	    var re = new RegExp(regu);
	    if (re.test(str)){
	    	return true;
	    }else{
	    	return false;
	    }
	},
	setTipTotal : function(n){
		var num =  typeof(n)==="number" ? n : 0 ,uid = im_config.uid , sysnum = parseInt(app.localStorage.get(uid+"_sysMsgNo") )|| 0;
		app.localStorage.set(uid+"_myMsgNo", +num);
	},
	updateMsgNum: function( n ){
		var num = n ,uid = im_config.uid, 
			total = app.localStorage.get(uid+"_myMsgNo"),
			sysnum = parseInt(app.localStorage.get(uid+"_sysMsgNo") )|| 0 ,
			p = $(".icon_menu"),
			dom = p.find(".tip_sum"),
			menuItem = $(".menu_icon3").nextAll(".tip_sum"),
			footDot = $(".footer .footerbar .tip_sum"),
			list = app.localStorage.get(uid+"_myMsgList"),
			userNum = 0;

        if(!uid || uid.length <3){ return; }
		if(list!="" && list != null){
			var pardom = window.JSON.parse(list);
			if(pardom){
				userNum = pardom.length;
			}else{
				userNum = 0;
				total = 0;
			}
		}	
        if(total===true){
            total =0;
        }

		total = (total*1) + (num*1);
		total = total >0 ? total : 0;
		app.setTipTotal(total);

		tipSum = total + parseInt(sysnum,10);

		if(tipSum>0 && dom[0]){
			dom.html(tipSum).show();
			menuItem.html(tipSum).show();			
		}else{
			dom.hide();
			menuItem.hide();			
		}
		if(tipSum >0 && footDot[0]){
			footDot.html(tipSum).show();
		}else{
			footDot.hide();
		}

	},
	/* 分享iframe里的内容*/
	getFrameInfo: function(agu){
        if(typeof(agu) ==="object"){
        	var data = agu,title = agu.title,url = data.url,desc = agu.desc;
            wechat_sharedata = {
                title: title ,
                desc:   desc  ,
                link:  url ,
                imgUrl:  GV.DOMAIN + "statics/h5/img/share_logo.png" ,
            };
            wx.ready(function () {
                wx.onMenuShareAppMessage({
                    title: wechat_sharedata.title,
                    desc: wechat_sharedata.desc,
                    link: wechat_sharedata.link,
                    imgUrl: wechat_sharedata.imgUrl,
                    trigger: function (res) {
                    },
                    success: function (res) {
                    },
                    cancel: function (res) {
                    },
                    fail: function (res) {
                    }
                });

                wx.onMenuShareTimeline({
                    title: wechat_sharedata.title,
                    link: wechat_sharedata.link,
                    imgUrl: wechat_sharedata.imgUrl,
                    trigger: function (res) {
                    },
                    success: function (res) {
                    },
                    cancel: function (res) {
                    },
                    fail: function (res) {
                    }
                });
            });
        }
    }
}
;(function($) {
    function detect(ua) {
        var os = this.os = {},
            browser = this.browser = {},
            webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
            android = ua.match(/(Android);?[\s\/]+([\d.]+)?/),
            osx = !! ua.match(/\(Macintosh\; Intel /),
            ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
            ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
            iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
            webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
            wp = ua.match(/Windows Phone ([\d.]+)/),
            touchpad = webos && ua.match(/TouchPad/),
            kindle = ua.match(/Kindle\/([\d.]+)/),
            silk = ua.match(/Silk\/([\d._]+)/),
            blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/),
            bb10 = ua.match(/(BB10).*Version\/([\d.]+)/),
            rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
            playbook = ua.match(/PlayBook/),
            chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
            firefox = ua.match(/Firefox\/([\d.]+)/),
            ie = ua.match(/MSIE\s([\d.]+)/) || ua.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
            webview = !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
            safari = webview || ua.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/),
            weixin = ua.match(/MicroMessenger/);
        if (browser.webkit = !! webkit) browser.version = webkit[1]
        if (android) os.android = true, os.version = android[2]
        if (iphone && !ipod) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.');
        if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.');
        if (ipod) os.ios = os.ipod = true, os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null
        if (wp) os.wp = true, os.version = wp[1]
        if (webos) os.webos = true, os.version = webos[2]
        if (touchpad) os.touchpad = true
        if (blackberry) os.blackberry = true, os.version = blackberry[2]
        if (bb10) os.bb10 = true, os.version = bb10[2]
        if (rimtabletos) os.rimtabletos = true, os.version = rimtabletos[2]
        if (playbook) browser.playbook = true
        if (kindle) os.kindle = true, os.version = kindle[1]
        if (silk) browser.silk = true, browser.version = silk[1]
        if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true
        if (chrome) browser.chrome = true, browser.version = chrome[1]
        if (firefox) browser.firefox = true, browser.version = firefox[1]
        if (ie) browser.ie = true, browser.version = ie[1]
        if (safari && (osx || os.ios)) {
            browser.safari = true;
            if (osx) browser.version = safari[1]
        }
        if(weixin) browser.weixin = true
        if (webview) browser.webview = true
        os.tablet = !! (ipad || playbook || (android && !ua.match(/Mobile/)) || (firefox && ua.match(/Tablet/)) || (ie && !ua.match(/Phone/) && ua.match(/Touch/)));
        os.phone = !! (!os.tablet && !os.ipod && (android || iphone || webos || blackberry || bb10 || (chrome && ua.match(/Android/)) || (chrome && ua.match(/CriOS\/([\d.]+)/)) || (firefox && ua.match(/Mobile/)) || (ie && ua.match(/Touch/))))
    }
    detect.call($, navigator.userAgent);
    $.__detect = detect
})(jQuery);
/**/
function Dialog(options){
    opt = {
        "mask" : true,
        "time" : 0,
        "msg"  : "Loading...",
        "oktext" : "\u786e\u5b9a", 
        "cancaltext" : "\u53d6\u6d88" ,
        "okfun" : undefined,
        "cancalfun" : undefined,
        "confirmtext" :"\u7ee7\u7eed" , 
        "confirmfun" : undefined,
        "theme" : "",
        "zIndex" : "9999"
    }
    var that = this ,timmer,layout ;
    that.settings = $.extend({}, opt, options);
    that.count =100;
    layout = '<div class="dialog_global_layout"></div>'
    that.dialog="";

    that.destroy = function(){
        if(that.dialog){
            that.dialog.remove();
        }else{
            $("body .dialog_global_layout").remove();
        }

    }
    /* tip 弹层 */
    Dialog.prototype.tip = function(argu){
        if(that.dialog){ that.destroy(); }
        var tmp;
        if(typeof(argu) ==="object"){
            var t = argu, msg = t.msg,time = t.time ,icon = t.icon,mask = t.mask;
            tmp = '<p class="tip_msg '+icon+'">'+ msg +'</p>';
            if(mask ===false){
                that.dialog = $('<div>').css("z-index", +that.settings.zIndex + (that.count++) ).html(tmp).prependTo('body')
            }else{
                that.dialog = $('<div>').addClass('dialog_global_layout').css("z-index", +that.settings.zIndex + (that.count++) ).html(tmp).prependTo('body');                    
            }
            if(time > 0){
                setTimeout(function(){
                    that.dialog.remove();
                },time);
            }
        }else if(typeof(argu) ==="string"){
            var msg = argu
            tmp = '<p class="tip_msg">'+ msg +'</p>';
            that.dialog = $('<div>').addClass('dialog_global_layout').css("z-index", +that.settings.zIndex + (that.count++) ).html(tmp).prependTo('body');
        }else{
            throw "tip argumens type error need String or Object"
        }

    }
    /* alert 对话框 */
    Dialog.prototype.alert = function(argu){
        if(that.dialog){ that.destroy(); }
        var tmp ;
        if(typeof(argu) ==="object"){
            var msg = argu.msg,oktext = argu.oktext || that.settings.oktext,callback = argu.okfun;
            tmp = '<div class="alert_content"><p class="alert_msg">'+ msg +'</p><div class="alert_btn_list btn_list" ><a class="btn btn_alert">'+oktext+'</a></div></div>';
            that.dialog = $('<div>').addClass('dialog_global_layout').css("z-index", +that.settings.zIndex + (that.count++) ).html(tmp).prependTo('body');
            that.dialog.find(".btn_alert").on("click",function(){
                that.destroy();
                if(typeof(callback) ==="function"){
                    callback.call(callback);
                }
            });         

        }else if(typeof(argu)==="string"){
            var msg = argu;
            tmp = '<div class="alert_content"><p class="alert_msg">'+ msg +'</p><div class="alert_btn_list btn_list" ><a class="btn btn_alert">'+that.settings.oktext+'</a></div></div>';
            that.dialog = $('<div>').addClass('dialog_global_layout').css("z-index", +that.settings.zIndex + (that.count++) ).html(tmp).prependTo('body');
            that.dialog.find(".btn_alert").on("click",function(){
                that.destroy();
            });
        }else{
            throw "alert argumens type error need String or Object"
        }
    }
    /* confirm 提示框 */
    Dialog.prototype.confirm = function(argu){
        var tmp ;
        if(typeof(argu) ==="object"){
            var msg = argu.msg, cancaltext = argu.cancaltext || that.settings.cancaltext ,callback = argu.okfun ,confirmtext = argu.confirmtext || that.settings.confirmtext;
            tmp = '<div class="alert_content"><p class="alert_msg">'+ msg +'</p><div class="confirm_btn_list btn_list" ><a class="btn btn_comfirm_cancel">'+cancaltext+'</a><a class="btn btn_comfirm_ok">'+confirmtext+'</a></div></div>';
            that.dialog = $('<div>').addClass('dialog_global_layout').css("z-index", +that.settings.zIndex + (that.count++) ).html(tmp).prependTo('body');
            that.dialog.find(".btn_comfirm_cancel").on("click",function(){
                that.destroy();
            });
            that.dialog.find(".btn_comfirm_ok").on("click",function(){
                that.destroy();
                if(typeof(callback) ==="function"){
                    callback.call(callback);
                }
            });         

        }else if(typeof(argu)==="string"){
            var msg = argu;
            tmp = '<div class="alert_content"><p class="alert_msg">'+ msg +'</p><div class="confirm_btn_list btn_list" ><a class="btn btn_comfirm_cancel">'+that.settings.cancaltext+'</a><a class="btn btn_comfirm_ok">'+that.settings.confirmtext+'</a></div></div>';
            that.dialog = $('<div>').addClass('dialog_global_layout').css("z-index", +that.settings.zIndex + (that.count++) ).html(tmp).prependTo('body');
            that.dialog.find(".btn_comfirm_cancel").on("click",function(){
                that.destroy();
            });
            that.dialog.find(".btn_comfirm_ok").on("click",function(){
                that.destroy();
            }); 
        }else{
            throw "confirm argumens type error need String or Object"
        }
    }
    /* 对外关闭接口 */
    Dialog.prototype.destroy = function(argu){
        that.destroy();
    } 
}
