<style>
.comment > .content > .text{
	line-height: 32px;
}
</style>
<section>
  <article>
    <div contenteditable="true" spellcheck="false" class="example">
      <div class="comments">
        <header>
          <h3><i class="icon-comments icon-border-circle f16"></i> 6 交流回复</h3>
        </header>
        <div class="comments-list">
         
         	<if condition="$res eq 1 "> 
	          <foreach name="commentList" item="comment">
		          <div class="comment">
		            <a href="###" class="avatar"><i class="icon-user icon-border icon-2x icon-muted"></i></a>
		            <div class="content">
		              <div class="pull-right"><span class="text-muted">{$comment.updatetime|date="Y-m-d H:i:s",###}</span> &nbsp;<strong>#2</strong></div>
		              <a href="#" class="author pr15"><strong>{$comment.username}</strong> </a>{$comment.updatetime|date="Y-m-d H:i:s",###}
		              <div class="text">{$comment.content}</div>
		              <div class="actions">
		                <a href="#">回复</a>
		                <a href="#">编辑</a>
		                <a href="#">删除</a>
		              </div>
		            </div>
		            
		          </div>
		        		
		        </foreach>
		      <else/>  
	       			<div class="mt20 loading-tip"><i class="icon icon-smile f16"></i>  暂无记录，留下你的痕迹吧！</div> 	
	        </if>
	        
        </div>
      </div>
    </div>
  </article>
</section>
