<?php if (!defined('APP_VERSION')) exit(); ?>
<Admintemplate file="Common/Head"/>
<link href='{$config_siteurl}statics/addons/bootstrap/v3/css/bootstrap.css' rel='stylesheet' />
<link href='{$config_siteurl}statics/addons/jquery/switch/switch.css' rel='stylesheet' />
<script src='{$config_siteurl}statics/addons/jquery/switch/switch.js'></script>
	
<body class="J_scroll_fixed">
<div class="wrap jj">
  <Admintemplate file="Common/Nav"/>
  <div class="common-form">
    <form method="post" class="J_ajaxForm" action="{:U('Menu/edit')}">
      <div class="h_a">菜单信息</div>
      <div class="table_list">
        <table cellpadding="0" cellspacing="0" class="table_form" width="100%">
          <input type="hidden" name="id" value="{$id}" />
          <tbody>
            <tr>
              <td width="140">上级</td>
              <td><select name="parentid">
                  <option value="0">作为一级菜单</option>
                  
                     {$select_categorys}
                
                </select></td>
            </tr>
            <tr>
              <td>名称</td>
              <td><input type="text" class="input" name="name" value="{$data.name}"></td>
            </tr>
            <tr>
              <td>项目</td>
              <td><input type="text" class="input" name="app" id="app" value="{$data.app}"></td>
            </tr>
            <tr>
              <td>模块</td>
              <td><input type="text" class="input" name="model" id="model" value="{$data.model}"></td>
            </tr>
            <tr>
              <td>方法</td>
              <td><input type="text" class="input" name="action" id="action" value="{$data.action}"></td>
            </tr>
            <tr>
              <td>参数</td>
              <td><input type="text" class="input length_5" name="data" value="{$data.data}">
               	 例:groupid=1&amp;type=2</td>
            </tr>
            <tr>
              <td>选择图标类型</td>
              <td>
				<input type="radio" name="icontype" id="icontype1" value="1" <if condition="!$data['icontype'] || $data['icontype'] eq 1">checked="checked"</if>/> 通用图标字体FontAwesome
				<input class="ml10" type="radio" name="icontype" id="icontype2" value="2" <if condition="$data['icontype'] eq 2">checked="checked"</if>/> 阿里开源图标iconfont
				<input class="ml10" type="radio" name="icontype" id="icontype3" value="3" <if condition="$data['icontype'] eq 3">checked="checked"</if>/> 图片上传
              </td>
            </tr>
            <tr>
              <td>类型1：通用图标字体</td>
              <td>
         		<div class="pull-left input-group" style="width: 300px;">
					<input value="{$data.icon}" name="icon" id="icon" class="form-control" autocomplete="off" type="text">
					<span class="input-group-addon"><i class="fa fa-external-link fa"></i></span>
					<span class="input-group-btn">
						<button class="btn btn-default" type="button"  onclick="omnipotent('iconID', '/index.php?g=Admin&m=Utils&a=icon', '选择图标');">选择图标</button>
					</span>
				</div>
              </td>
            </tr>
            <tr>
              <td>类型2：阿里开源图标</td>
              <td>
         		<div class="pull-left input-group" style="width: 300px;">
					<input value="{$data.icon2}" name="icon2" id="icon2" class="form-control" autocomplete="off" type="text">
				</div>
				<div class="pull-left ml10 mt5">
				  <span class="p5"><i class="fa fa-th" aria-hidden="true"></i> <a href="http://www.iconfont.cn" target="_blank">浏览ICON图标</a></span>
				</div>
              </td>
            </tr>
            <tr>
              <td>类型3：图片上传</td>
              <td>
         		<div class="pull-left input-group" style="width: 300px;">
					<div  style="text-align: left;">
				    	<input type='hidden' name='logo' id='logo' value='{$data.logo}'>
						<a href='javascript:void(0);' onclick="flashupload('logo_images', '图片上传','logo',thumb_images,'1,gif|jpg|jpeg|png,1,,,0', 'content','', '{$authkey}');return false;">
						<img <if condition="$data['logo']">src="{$data.logo}"<else/>src='/statics/images/icon/upload-pic.png'</if> id='logo_preview' width='48' height='48' style='cursor:hand' /></a> 
		            	<input type="button" class="ml10 btn btn-primary" onclick="$('#logo_preview').attr('src','/statics/images/icon/upload-pic.png');$('#logo').val('');return false;" value="取消图片">
				    </div>
				</div>
              </td>
            </tr>
            <tr>
              <td>图标字体大小</td>
              <td>
              	<select name="font" id="font">
              		<option value="f12"> f12（字体12px）</option>
              		<option value="f14"> f14（字体14px）</option>
              		<option value="f16"> f16（字体16px）</option>
              		<option value="f18"> f18（字体18px）</option>
              		<option value="f20"> f20（字体20px）</option>
              		<option value="f22"> f22（字体22px）</option>
              		<option value="f24"> f24（字体24px）</option>
              		<option value="f26"> f26（字体26px）</option>
              		<option value="f28"> f28（字体28px）</option>
              		<option value="f30"> f30（字体30px）</option>
              		<option value="f32"> f32（字体32px）</option>
              		<option value="f34"> f34（字体34px）</option>
              	</select>
			  </td>
            </tr>
            <tr>
              <td>图标字体</td>
              <td><input type="text" class="input" name="font" id="font" value="{$data.font}"></td>
            </tr>
            <tr>
              <td>备注</td>
              <td><textarea name="remark" rows="5" cols="57">{$data.remark}</textarea></td>
            </tr>
            <tr>
              <td>是否跳转</td>
              <td>
                <input name="redirect" type="checkbox" id="redirect" class="switch inputText" <if condition="$data['redirect'] eq 1">checked="checked"</if>/>                           
                <span class="ml10">注意：设置为“直接跳转”时，点击一级菜单项将会直接跳转，不会显示左边菜单栏。</span>
              </td>
            </tr>
            <tr>
              <td>显示状态</td>
              <td>
                <input name="status" type="checkbox" value="1" id="status" class="switch inputText" <if condition="$data['status'] eq 1">checked="checked"</if>/>
              </td>
            </tr>
            <tr>
              <td>类型</td>
              <td><select name="type">
                   <option value="1" <eq name="data.type" value="1">selected</eq>>权限认证+菜单</option>
                   <option value="0" <eq name="data.type" value="0">selected</eq>>只作为菜单</option>
                  </select>
                注意：“权限认证+菜单”表示加入后台权限管理，纯碎是菜单项请不要选择此项。</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="">
        <div class="btn_wrap_pd">
          <button class="btn btn_submit mr10 J_ajax_submit_btn" type="submit">修改</button>
          <input type="hidden" name="id" value="{$data.id}" />
        </div>
      </div>
    </form>
  </div>
</div>
<script src="{$config_siteurl}statics/js/common.js?v"></script>
<script type="text/javascript">
    <!--
    $(function() {
    	var mySwitch = {};
    	$('.switch').each(function(i, e){
    		mySwitch[i] = new Switch(e, {
    				size: 'small',
                showText: true,
                onText: '是',
                offText: '否'
            });
    	});
    });
    //-->
</script>
</body>
</html>