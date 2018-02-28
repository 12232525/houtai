$(function(){
    (function ($) {
        $.getUrlParam = function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        }
    })(jQuery);

    var $timer ,URL = window.location.href;
    /* 顶部菜单 */
    $(".btn.icon_menu").on("click",function(){
        $(".menu").toggle();
    });
    /* 返回顶部 */
    $(window).scroll(function(){
        var height = $(this).scrollTop();
        if(height >= 300){
            $(".top").fadeIn();
        }
        else{
            $(".top").fadeOut();
        }
    });
    $(".top").click(function(){
        $("html,body").animate({scrollTop:0});
    });
    /* 全文Dialog */
    var dialog = new Dialog();

    /* 微信获取验证码 */
    $(".randomcode_wechat").on("click",function(){
        var that = $(this),  phone = $("input[name='phone']").val();
        if(that.attr("disabled")){
            return;
        }
        if(!app.isMobile(phone)) {
            dialog.alert('请正确填写手机号码');
            return;
        }
        that.attr("disabled","disabled")
        $.get('/wechat/phone-code', {'mobile': phone}, function(ret) {
            var dopost = $("input[name=dopost]");
            if(ret.code==0){
                dopost.val("0");
                that.removeAttr("disabled");
                dialog.confirm({
                    msg:'该手机号已注册汽车大师,是否关联?' ,
                    confirmtext:'是',
                    cancaltext: '否',
                    okfun :function(){
                        $.get('/util/phone-code', {'phone': phone}, function(ret) {});
                        var $second = 60;
                        $timer = window.setInterval(function() {
                            if($second == 0) {
                                window.clearInterval($timer);
                                that.removeClass("form_gray").text("重新发送");
                                that.removeAttr("disabled");
                            } else {
                                that.text($second + "s 重新发送") .addClass("form_gray");
                                that.attr("disabled","disabled");
                                $second--;
                            }
                        }, 1000);
                    }
                });

            }else{
                dopost.val("1");
                that.removeAttr("disabled");
                $.get('/util/phone-code', {'phone': phone}, function(ret) {});
                var $second = 60;
                $timer = window.setInterval(function() {
                    if($second == 0) {
                        window.clearInterval($timer);
                        that.removeClass("form_gray").text("重新发送");
                        that.removeAttr("disabled");
                    } else {
                        that.text($second + "s 重新发送") .addClass("form_gray");
                        that.attr("disabled","disabled");
                        $second--;
                    }
                }, 1000);
            }
        });
    });
    /* 登录 */
    $(".js_btn_login").on("click",function() {
        var phone = $("input[name='phone']").val(), code = $("input[name='code']").val(),
            $go = $.getUrlParam("go");
        // if(!$go){
        //     $go ='/';
        // }
        if(!app.isMobile(phone)) {
            dialog.alert('请输入正确的手机号');
            return;
        }
        if(code.length < 1) {
            dialog.alert('请输入密码');
            return;
        }
        dialog.tip({msg:"登录中,请稍后..."});
        $.post('/index.php?g=Member&m=Index&a=public_loginverify', {'username': phone, 'password': code}, function(ret) {
           if(ret.state == 'success') {
                if(ret.status == 0 ) {
                	dialog.alert(ret.info);
                    window.location.replace(ret.referer);
                }else{
                    if ($go){
                        /*if( $go.indexOf(GV.DOMAIN) >-1){
                            $.cookie("userLogin",'1',{expires:7,path:'/',domain:allHost.substring(4),secure:false,raw:false});
                        }*/
                        window.location.replace( $go);
                    }else{
                        window.location.replace(ret.referer);
                    }
                }
           } else {
                dialog.alert(ret.info);
           }
        }, 'JSON');
        return false;
    });
    /*退出登录*/
    $(".js_btn_logout").on("click",function(e){
        window.location.replace('/index.php?g=Member&a=logout');
    });
    
    /* 普通获取验证码*/
    $(".btn.randomcode").on("click",function(e){
        e.preventDefault();
        var that = $(this), dom = $("input[name=phone]"), phone = dom.val();
        if(!phone || !app.isMobile(phone)){
            dialog.alert( "请输入正确的手机号码" );
            return;
        }else{
            if(that.attr("disabled")){
                return ;
            }else{
                that.attr("disabled","disabled");
                $.get('/index.php?g=H5&m=Util&a=phoneCode', {'phone': phone}, function(ret) {
                	dialog.alert(ret.msg);
                }, 'JSON');
                var $second = 60;
                $timer = window.setInterval(function() {
                    if($second == 0) {
                        window.clearInterval($timer);
                        that.removeClass("form_gray").text("重新发送");
                        that.removeAttr("disabled");
                    } else {
                        that.text($second + "s 重新发送") .addClass("form_gray");
                        that.attr("disabled","disabled");
                        $second--;
                    }
                }, 1000);
            }

        }
    });
    /*普通绑定手机*/
    $(".js_bind_mobile").click(function() {
        var phone = $("input[name='phone']").val(), code = $("input[name='code']").val();
        if(!app.isMobile(phone)) {
            dialog.alert('手机号不正确');
            return;
        }
        if(code.length != 4) {
            dialog.alert('验证码不正确');
            return;
        }
        $.get('/index.php?g=H5&m=Util&a=verifyPhoneCode', {'phone': phone, 'code': code}, function(ret) {
            if(ret.code == '1') {
                var dopostVal = $("input[name=dopost]").val();
                if(dopostVal=="0"){
                    $.post('/index.php?g=h5&m=Member&a=bindingPhone', {'mobile': phone}, function(ret) {
                        if(ret.code == 1) {
                        	dialog.alert(ret.message);
                            /*if(ret["url"]){
                                location.href=ret['url'];
                            }else{*/
                                location.href='/index.php?g=h5&m=Member&a=authsuccess';
                            //}
                        } else {
                            dialog.alert(ret.message);
                        }
                    }, 'JSON');
                }else{
                    /*验证成功，但是没有标记*/
                    dialog.alert(ret.message);
                    //window.location.reload();
                }
            } else {
                dialog.alert(ret.message);
            }
        }, 'JSON');
    });
    /*微信 绑定手机*/
   $(".wechat_js_bind_mobile").click(function() {
        var phone = $("input[name='phone']").val(), code = $("input[name='code']").val();
        if(!app.isMobile(phone)) {
            dialog.alert('手机号不正确');
            return;
        }
        if(code.length != 4) {
            dialog.alert('验证码不正确');
            return;
        }

        $.get('/util/verify-phone', {'phone': phone, 'code': code}, function(ret) {
            if(ret.code == 0) {
                var dopostVal = $("input[name=dopost]").val();
                if(dopostVal=="0"){
                    $.post('/wechat/binding', {'mobile': phone}, function(ret) {
                        if(ret.code == 0) {
                            if(ret["url"]){
                                window.location.href=ret['url']
                            }else{
                                window.location.href='/user/mine'
                            }
                        } else {
                            dialog.alert(ret.message);
                        }
                    });
                }else if(dopostVal =="1"){
                    $.post('/wechat/register-binding', {'mobile': phone}, function(ret) {
                        if(ret.code == 0) {
                            if(ret["url"]){
                                window.location.href=ret['url']
                            }else{
                                window.location.href='/user/mine'
                            }
                        } else {
                            dialog.alert(ret.message);
                        }
                    });
                }else{
                    /*验证成功，但是没有标记*/
                    dialog.alert(ret.message );
                    //window.location.reload();
                }

            } else {
                dialog.alert(ret.message);
            }
        });
    });
    /* 完善资料 */
    $(".js-user-perfect").click(function() {
        var $phone = $("input[name='phone']").val(), nick = $("input[name='nick']").val(), $sex = $("select[name='sex']").val();
        if($.trim(nick) == '') {
            dialog.alert('昵称不能为空');
            return;
        }
        nick_regx = /^[\u4E00-\u9FA5\uF900-\uFA2DA-Za-z0-9_]{3,10}$/;
        if(!nick_regx.test(nick)) {
            dialog.alert('昵称应为3到10位的中文、英文或数字');
            return;
        }
        $.post('/user/login', {'phone': $phone, 'nick': nick, 'sex': $sex}, function(ret) {
            if(ret.code == 0) {
                window.location.href = '/';
            } else {
                dialog.alert(ret.message);
            }
        });
        return false;
    });
    $(".js-wechat-perfect").click(function() {
        var that = $(this);
        if(that.attr("data-disabled")){
            return
        }
        var $phone = $("input[name='phone']").val(), nick = $("input[name='nick']").val(), $sex = $("select[name='sex']").val();
        var $go = $.getUrlParam("go");
        var $act = $.getUrlParam("act");

            if($.trim(nick) == '') {
            dialog.alert('昵称不能为空');
            return;
        }
        nick_regx = /^[\u4E00-\u9FA5\uF900-\uFA2DA-Za-z0-9_]{3,10}$/;
        if(!nick_regx.test(nick)) {
            dialog.alert('昵称应为3到10位的中文、英文或数字');
            return;
        }
        that.attr("data-disabled","disable");
        $.post('/wechat/perfect', {'phone': $phone, 'nick': nick, 'sex': $sex, 'act': $act}, function(ret) {
            if(ret.code == 0) {
                that.removeAttr("data-disabled");
                if($act)
                    wx.closeWindow();
                else if($go)
                    window.location.href =$go;
                else
                    window.location.href = '/question/add';
            } else {
                that.removeAttr("data-disabled");
                dialog.alert(ret.message);
            }
        });
        return false;
    });

    /*个人资料，头像上传*/
    $("#avatar").on("change",function(){
        var that = $(this);
        if(that.val().length <1){
            dialog.alert("请选择一张图片");
            return false;
        }else{
            dialog.tip( "图片上传中" );
            $('#user-profile-img').submit();
        }
    });
    $('#user-profile-img').ajaxForm({dataType:'json', success: function(d){
    	    var picUrl = d.avatarUrls.avatar.url;
            $("#avatarImg").attr('src', picUrl);
            $("#user-profile-img").resetForm();
            dialog.destroy();
            $.post('/index.php?g=h5&m=Member&a=doProfile', {'userpic': picUrl}, function(ret) {
                if(ret && ret.state =="success"){
                	dialog.alert( ret.info );
                }else{
                    dialog.alert( "头像上传失败，请重试" );
                }
            }, 'JSON');

        },error:function(){
            $("#user-profile-img").resetForm();
            dialog.alert( "头像上传失败，请重试" );
        }
    });
    /* 个人资料 */
    $(".js-profiles-save").on('click', function() {
        var that  = $(this),
            nick = $("input[name='nick']").val(),
            sex = $("select[name='sex']").val(),
            city = $("select[name='city']").val(),
            province = $("select[name='province']").val(),
            nick_regx = /^[\u4E00-\u9FA5\uF900-\uFA2DA-Za-z0-9_]{3,10}$/;
        if(that.attr("disabled")){
            return;
        }
        if(!nick_regx.test(nick)) {
            dialog.alert( '昵称应为3到10位的中文、英文或数字' );
            return;
        }
        if(province!='0' && city =='0'){
            dialog.alert( "请选择城市" );
            return;
        }
        that.attr("disabled","disabled");
        dialog.tip("正在更新用户资料");
        $.post('/index.php?g=h5&m=Member&a=doProfile', {'nickname': nick, 'sex': sex, 'city': city, 'province': province}, function(ret) {
            that.removeAttr("disabled");
            if(ret.state == 'success') {
                dialog.alert(ret.info);
            } else {
                dialog.alert(ret.info);
            }
        }, 'JSON');
    });
    $("select[name=sex]").on("change", function(){
        var that = $(this),sex = that.val() ,dom = that.prev(".profile_sex");
        switch(sex){
            case "0" :
                dom.html("未知");
                break;
            case "1" :
                dom.html("男");
                break;
            case "2" :
                dom.html("女");
                break;
            default :
                dom.html("未知");
                break;
        }
    });
    /* 个人资料－获取省市*/
    $("select[name='province']").on("change", function(){
        var that = $(this), province_id = that.val(), dom  =that.prev(".perfect_province");
        dom.html(that.find("option:selected").text());
        var childSel = $("select[name=city]");
        childSel.find("option").hide();

        childSel.hide();
        childSel.next(".block_input.protext").html("请选择");
        childSel.find("option").removeAttr("selected");

        if(province_id && !isNaN(province_id) && province_id !='0'){
            dom.removeClass("colora");
            dialog.tip("正在拉取省市信息...");
            $.get('/index.php?g=h5&m=Util&a=regionList', {'province_id': province_id}, function(ret) {
                dialog.destroy();
                if(ret.length > 0) {
                    var $options = '<option value="0" selected="selected">请选择</option>';
                    $.each(ret, function(k, v) {
                        $options += '<option value="'+ v.region_id+'">'+ v.region_name +'</option>';
                    });
                    $("select[name='city']").html($options).show();
                    //$(".perfect_city").html("请选择城市");
                }else{
                    dialog.alert("省市信息错误");
                }
            }, 'JSON');
        }else{
            dialog.alert("出错啦，请重试！");
        }

    });

   /* $("select[name='city']").on("change", function(){
        var that = $(this),city_id = that.val(),dom  =that.prev(".perfect_city");
        dom.html(that.find("option:selected").text());
    });*/

    /*我的爱车管理 完善资料选车*/
    $(".js-add-car").on("click",function(e){
        $(".SelectCar").show();
    });
    /*关闭选车*/
    $(".SelectCar .closeTab").on("click",function(){
        $(".SelectCar").hide();
    });
    /* 从页面选车 */
    $(".letter_block a").on('click', function(){
        var that = $(this), id = that.attr("data-number");
        var $id = $("#"+id);
        $(".letter_block a").removeClass("has");
        that.addClass("has")
        $("html,body").animate({scrollTop:$id.offset().top});
    });
    $(".js-car-li a").on('click', function() {
       var that = $(this),brand = that.find("p").html();
       var brand_id = $(this).attr('data-id');

        if(that.closest('li').is('.on')) {
            that.attr('data-has', '1');
            that.closest('li').removeClass('on');
            that.closest('.block_car').find('.block_list_'+brand_id).hide();
            return;
        }
        if(that.attr('data-has') == 1) {
            $('li').removeClass('on');
            $('.block_list').hide();
            that.closest('li').addClass('on');
            that.closest('.block_car').find('.block_list_'+brand_id).show();
            return;
        }
        dialog.tip("正在努力加载车型信息..."); 
        $.get('/index.php?g=h5&m=Util&a=carModelList', {'brand_id': brand_id}, function(ret) {
            dialog.destroy();
           if(ret.code == 0) {
               if(ret.result && ret.result.length > 0) {
                   $('li').removeClass('on');
                   $(".block_list").hide();
                   that.closest('li').addClass('on');
                   $html = '<div class="block_list block_list_'+brand_id+'">';
                   $.each(ret.result, function(n, v) {
                        $html += '<p class="block_list_title">'+ v.name +'</p>';
                        $html += '<ul>';
                       $.each(v.series, function(k,s){
                           $html += '<li class="js-car-series-li"><a data-id='+ s.id +' data-img='+ s.pic_url +'>'+ s.name +'</a></li>';
                       });
                        $html += '</ul>';
                   });
                   $html += '</div>';
                   that.closest('ul').after($html);
               }else{
                    dialog.tip({msg:"哎呀,没有找到信息..",icon:"tip",time:2000});
               }
           }else{
                dialog.alert("哎呀,加载信息出错了..");
           }
        }, 'JSON');
    });
    $(".SelectCar").on('click',".js-car-series-li a", function(e) {
        e.preventDefault();
        var that = $(this), series_id = that.attr('data-id'), pic = that.attr('data-img'), car_name = that.html();
        var brand =  $(".js-car-li.on").find("a").attr("data-id");
        var refAct = $.getUrlParam("act"),
            url = window.location.href,
            $url = $.getUrlParam("url"),
            urlPath = window.location.pathname,
            urlSearch = window.location.search;
        	
        var brandName = $('.block_car_ul > li.on').find('p').html();
        var	modelName = that.parent().parent().siblings().html(); 
        
            $("#carModelId").val(series_id);
        	$("#carModelIdShow").html(brandName + "-" +  modelName + "-" + car_name);
        	$(".SelectCar").hide();
        
	        /*$.post('/user/bind-car', {'series_id': series_id}, function(ret) {
	           if(ret.code == 0) {
	                if($url == "/question/add"){
	                    $(".car_sel_status").html(brand + car_name);
	                    $("input[name=tag]").val(brand + car_name);
	                    $(".SelectCar").hide();
	                    $.post('/user/set-default-car', {'series_id': series_id},function(){
	                        window.location.href = $url
	                    });
	
	                }else if($url =='/question/mycar'){
	                    $.post('/user/set-default-car', {'series_id': series_id},function(){
	                        window.location.href = $url
	                    });
	                }else if(url.indexOf('/wechat/perfect') > -1 &&!$url){
	                    $(".car_select_tip p").html(car_name)
	                    $(".SelectCar").hide();
	                    $.post('/user/set-default-car', {'series_id': series_id},function(){
	                        //window.location.reload();
	                    });
	
	                }else if(!$url && url.indexOf('/wechat/perfect') == -1){
	                    $(".SelectCar").hide();
	                    if($(".car_info_list").length <1){
	                        $.post('/user/set-default-car', {'series_id': series_id},function(){
	                            window.location.reload();
	                        });
	                    }else{
	                        window.location.reload();
	                    }
	                }else if( $url ){
	                    $.post('/user/set-default-car', {'series_id': series_id},function(){
	                        if($url=="/")
	                            window.location.href = "/";
	                        else
	                            window.location.href = $url;
	                    });                    
	                }else{
	                    window.location.href = "/";
	                }
	
	           } else {
	               dialog.alert(ret.message);
	           }
	        });*/
        
        
    });
    $(".js-set-car-default").on("click", function() {
        dialog.tip("信息提交中...");
        var that = $(this),series_id = that.closest('.car_item').attr('data-id'),$url = $.getUrlParam("url");
        $.post('/user/set-default-car', {'series_id': series_id}, function(ret) {
            if(ret.code == 0) {
                $(".select").removeClass("select").addClass("js-set-car-default");
                dialog.alert( {msg:'设置成功',okfun:function(){
                    if($url===""){
                        window.location.href = "/";
                    }
                }});
                that.addClass('select').removeClass("js-set-car-default");
            } else {
                dialog.alert(ret.message);
            }
        });

    });

    /* 消息中心 */
    $(".tab_list").on("click",function(e){
        e.preventDefault();
        var that = $(this),target = that.attr("data-for"),userDom =$(".msg_list.user_msg"),sysDom = $(".msg_list.sys_msg") ;
        $(".tab_list a").removeClass("on");
        that.find("a").addClass("on");
        switch(target){
            case "user" :
                userDom.show();
                sysDom.hide();
                break;
            case "sys" :
                userDom.hide();
                sysDom.show();
                break;
        }
    });
    /* 我的问题列表 */
    if($("#js-my-ask").length > 0) {
        var $page = 1;
        var $pageNum = 0;
        getQuestionList(3, 8, $page);
        $(window).scroll(function() {
            if($(window).scrollTop() >= $(document).height() - $(window).height()) {
                $page++;
                if($page <= $pageNum) {
                    getQuestionList(3, 8, $page);
                }
            }
        });
    }
    /* 更新顶部的消息数 */
    app.updateMsgNum(0);

    function getQuestionList(type, limit, page) {
        var $this = $("#js-my-ask");
        var html = '' ,tags ,tip;
        $('.loading').show();
        $.get('/question/list', {'type': type, 'limit': limit, 'page': page}, function(ret) {

                if(ret.data.length > 0) {
                    $pageNum = Math.ceil(ret.count/limit);
                    $.each(ret.data, function(n, v) {
                        if(v.tags.length > 0) {
                            var tags = '',list = v.tags,len = v.tags.length;
                            for(var i=0;i< len;i++){
                                if(i>1){
                                    break;
                                }else{
                                    tags += '<span class="fz_12 margin-r-10">'+ list[i]+'</span>';
                                }
                            };
                        }else{
                            tags ="";
                        }
                        var $class = '';
                        if( v.is_expert==0 && v.best_answer == 0) {
                            tip = v.answer_users ? "咨询中" : "待回复";
                        }
                        else if( v.is_expert==1 && v.is_close == 0) {
                            tip = v.answer_users ? "咨询中" : "待回复";
                        }
                        else{
                            if(v.has_comment)
                            tip = "已结束";
                            else
                            tip = "待评价";
                        }

                    html +='<a class="question_item margin-t-10 bgwhite btn answer_none" href="/q/'+ v.question_id +'">'
                    html +='    <div class="item_head clear">'
                    html +='        <div class="name margin-l-10 left font_orange"><span>'+ v.user_name+'</span></div>'
                    html +='        <div class="time margin-l-10 left font_9">'+ $.timeago(new Date(v.add_time*1000))+'</div>'
                    html +='        <div class="tag textright margin-r-10 right font_orange"><span class="fz_12">'+ tip +'</span></div>'
                    html +='    </div>'
                    html +='    <div class="item_content margin-l-10 margin-r-10">'
                    html +='        <p class="item_word font_3 fz_14">'+ v.question_content+'</p>'
                    html +='    </div> '
                    html +='    <div class="item_bottom box">'
                    html +='        <div class="item_bottom_tag boxflex textleft margin-10">'+ tags +'</div>'
                    html +='        <div class="item_bottom_num textright margin-10 font_9"><span class="fz_14">'+ v.answer_users+'</span>回答</div>'
                    html +='    </div>'
                    html +='</a>'

                    });

                    $this.append(html);
                } else {
                    $this.html('<div class="fz_16 margin-t-20 font_6 textcenter">您还没有提问</div>');
                }
                $('.loading').hide();

        });
    }
    
    
    $(".del_photo").on("click",function() {
        $(".del_photo").hide();
        $(".thumImg").attr("src","").hide();
        $(".carimg").val('');
        $('#question_imageform').resetForm();
    });

    /*我的消息 系统消息*/
    /*tab切换*/
    $(".message.tab_list").on("click",'a',function(e){
        e.preventDefault();
        var that = $(this),targ = that.attr("data-for");
        $(".message.tab_list > a").removeClass("on");
        that.addClass("on");
        $(".bg_fff").hide();
        $("."+targ).show();
    });

    /* tiamgago 时间戳格式化*/
    if( $(".js_time_ago")[0] ) {
        $(".js_time_ago").each(function() {
            var time = $(this).text();
            //$(this).text($.timeago(unixToDate($time)));
            $(this).text( $.timeago(new Date( time*1000 ) ) );
        });
    }
    /* emoji*/
    if($(".js-qq-emoji").length > 0) {
        $(".js-qq-emoji").each(function() {
            var that = $(this), $emoji = that.html();
            that.html(qq_emoji($emoji));
        });
    }

    /** 问题详情页  弹层**/
    $(".ceng_cancle").on("click",function(){
        //$(".ceng_fixed").hide();
        window.location.reload();
    })
    $(".js_add_ask").on("click",function(e){
        e.preventDefault();
        var dom = $(".ceng_bc");
        dom.show();
    });
    $(".js_append_qa_submit").on("click",function(e){
        e.preventDefault();
        var dom = $(".ceng_bc"),
            that = $(this),
            append_question = dom.find("textarea[name=append_question]").val(),
            question_id=dom.find("input[name=question_id]").val();
        if(!append_question){

            dialog.alert("补充的问题内容不能为空");
            return ;
        }
        if(append_question.length <5){
            dialog.alert("补充内容长度不能少于5个字符");
            return;
        }
        if(!question_id || isNaN(question_id)){
            dialog.alert("问题id获取错误，请刷新页面");
            return;
        }
        if(that.attr("disabled")){
            return;
        }else{
            dialog.tip("提交中...");
            that.attr("disabled","disabled");
            $.post('/question/append', {'question_id': question_id, 'append_question': append_question}, function(ret) {
                that.removeAttr("disabled");
                if(ret.code == 0) {
                    window.location.reload();
                } else {
                    dialog.alert(ret.message);
                }
            });
        }

    });

    $(".score_list a").on("click",function(){
        var lists = $(".score_list a span"),that = $(this);
        lists.removeClass("on");
        that.find("span").addClass("on");
    });


    /* url 手动跳转*/
    $(".js_url_redirect").on("click",function(){
        var that = $(this) ,url = that.attr("data-href");
        window.location.href = url;
    });
    /* 对话上传图片 */
    $(".talk_desc_img").on("change",function(){
        var that = $(this);
        if(that.val().length <1){
            dialog.alert(  "请选择一张图片" );
            return false;
        }else{
            //dialog.tip("图片上传中");
            $('#talk_imageform').submit();
        }
    });

    /* 底部menu 计算图片拉伸的高度，动态赋值*/
    var menuDom = $(".footer"),menuHeight = menuDom.height();
    if(menuHeight){
        $(".top").css({'bottom': menuHeight });
    }
    /*手机输入问题时，弹层上移*/
    $("textarea.ceng_textarea").on("focus",function(e){
        var that = $(this);
        that.closest(".ceng_con").css("margin-top",40);
    });
    /*预约*/
    $(".close_daily_singin").on("click",function(){
        $(".signin_box").css({"transform":"translate(0,-180px)"});
        setTimeout(function(){
            $(".signin_overlayout").hide()
        },300);
    })
});

