<style>
	span.error{color:#C00; padding:0 6px;}
</style>
<section>
  <article>
  <div contenteditable="true"  class="reply-form" id="commentReplyForm">
	<h4><i class="icon icon-comment"></i> 评论回复</h4>
	<hr>
    <div class="contenteditable form">
      <form role="form" method="post" id="commentForm">
      	
      	<div class="form-group">
          <div>
            <div class="input-group">
              <span class="input-group-addon">提醒相关人 @</span>
              <select class="chosen-select form-control" tabindex="1" multiple>
	            <option value="strawberries">毛儒军</option>
	            <option value="apple">黄东</option>
	            <option value="orange">胡剑</option>
	            <option value="cherry">周志华</option>
	            <option value="banana">乔安吉</option>
	            <option value="figs">陈春蕾</option>
	          </select>
              <span class="input-group-addon"><i class="icon icon-heart"></i>&nbsp;提醒</span>
            </div>
          </div>
        </div>
      	
        <div class="form-group mt10">
          <textarea class="form-control new-comment-text" id="content" required="" aria-required="true" rows="10" placeholder="请输入回复交流的内容..."></textarea>
        </div>
        
        <div>
        	<input type="hidden" name="modid" value="{$modid}" />
        	<input type="hidden" name="id" value="{$id}" />
      		<input type="hidden" name="ajax" value="1" />
					<button type="submit" class="btn btn-primary"><i class="icon-ok"></i>&nbsp;提交</button>    
					<button type="button" class="btn">取消</button>            	
        </div>
        
      </form>
    </div>
  </div>
  </article>	
</section>

<link href='{$config_siteurl}statics/addons/zui/dist/lib/chosen/chosen.min.css' rel='stylesheet' />
<script src='{$config_siteurl}statics/addons/zui/dist/lib/chosen/chosen.min.js'></script> 
<link href='{$config_siteurl}statics/addons/zui/dist/lib/chosen/chosen.icons.min.css' rel='stylesheet' />
<script src='{$config_siteurl}statics/addons/zui/dist/lib/chosen/chosen.icons.min.js'></script> 

<script src='{$config_siteurl}statics/addons/jquery/validate/jquery.validate.min.js'></script> 
<script src='{$config_siteurl}statics/addons/jquery/validate/messages_zh.min.js'></script> 

<script>
	$(function(){
		$('select.chosen-select').chosen({
	   	 	no_results_text: '没有找到',    // 当检索时没有找到匹配项时显示的提示文本
	    	disable_search_threshold: 10, // 10 个以下的选择项则不显示检索框
	    	search_contains: true,         // 从任意位置开始检索
	    	width:'100%'
		});
		
		$.validator.setDefaults({
			errorElement:'span'
		});
		//配置通用的默认提示语
		$.extend($.validator.messages, {
			  required: '*必填',
		    equalTo: "*请再次输入相同的值"
		});
		
		var modid = "{$modid}";
    var id = "{$id}";
	 	//jquery.validate
		$("#commentForm").validate({
			submitHandler: function(form) {
				//验证通过后 的js代码写在这里
				 $.ajax({
						type:"post",
						url:"{:U('talk/Comments/addComment')}",
						data: "modid="+modid+"&id="+id+"&content="+$('#content').val(),
						dataType : 'json',
						async:true,
						success : function(data){
							// 使用jQuery对象
							var msg = $.zui.messager.show(data.message, {icon:'ok-sign',placement:'bottom-left', type:'success', time:'2500', fade:true, scale:true});
							form.reset();
							location.reload(true);
						}
				});
		
			}
		})
		
	});
</script>
<style type="text/css">
.chosen-container-multi .chosen-choices{border-radius: 0;}
.reply-form {
	position: relative;
	padding: 20px;
	margin: 0 0 15px;
	border: 1px solid #ddd;
	border-style: solid;
	outline: 0;
	-webkit-transition: all .3s;
	transition: all .3s
}
.reply-form [contenteditable]:focus,
.reply-form:focus {
	outline: 0;
	box-shadow: 0 1px 15px rgba(0, 0, 0, .5);
	-moz-animation-name: glow;
	-moz-animation-duration: 1s;
	-moz-animation-timing-function: ease-in-out;
	-moz-animation-iteration-count: infinite;
	-moz-animation-direction: alternate
	-webkit-animation-name: glow;
	-webkit-animation-duration: 1s;
	-webkit-animation-timing-function: ease-in-out;
	-webkit-animation-iteration-count: infinite;
	-webkit-animation-direction: alternate
}
</style>