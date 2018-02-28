<?php if (!defined('APP_VERSION')) exit(); ?>
<Admintemplate file="Common/Head"/>
<body class="J_scroll_fixed">
<div class="wrap J_check_wrap">
  <div class="table_full"> 
  <div class="h_a">基本信息</div>
  <table width="100%" class="table_form">
		<tr>
			<th width="120">用户名</th> 
			<td>{$username}</td>
		</tr>
		<tr>
			<th>头像</th> 
			<td><img src="{:getavatar($userid, 90, true)}" onerror="this.src='/statics/images/member/nophoto.gif'" height=90 width=90></td>
		</tr>
		<tr>
			<th>是否审核</th> 
			<td><if condition=" $checked eq '1' "> 审核通过<else />待审核</if></td>
		</tr>
		<tr>
			<th>昵称</th> 
			<td>{$nickname}</td>
		</tr>
		<tr>
			<th>邮箱</th>
			<td>{$email}</td>
		</tr>
		<tr>
			<th>会员组</th>
			<td><?php echo $groupCache[$groupid];?></td>
		</tr>
		<tr>
			<th>积分点数</th>
			<td>{$point}</td>
		</tr>
        <tr>
			<th>金钱总额</th>
			<td>{$amount}</td>
		</tr>
		<tr>
			<th>会员模型</th>
			<td><?php echo $groupsModel[$modelid];?></td>
		</tr>
	</table>
    <div class="h_a"> 详细信息</div>
    <table width="100%" class="table_form">
	<?php foreach($Model_field as $k=>$v) {?>
		 <?php if($k != 'modelId'){ ?> 
			<tr>
				<th width="120">
					   <?php echo $v['name']?>
				</th> 
				<td>
				 <?php if(in_array($k, array('drivingImg', 'driving_licence_img', 'id_card_img1', 'id_card_img2', 'strong_policy_img', 'commercial_policy_img', 'bank_card'))){ ?> 
				 	
				 	<?php if($output_data[$v['field']]){ ?> 
				        <img src="<?php echo $output_data[$v['field']] ?>" onerror="this.src='/statics/images/member/nophoto.gif'" height=200 width=400>
				    <?php }else{ ?>
				    	<img src="this.src='/statics/images/member/nophoto.gif'" onerror="this.src='/statics/images/member/nophoto.gif'" height=90 width=90>
				    <?php } ?> 	  
				      
				 <?php }else{ ?>
				   	 
				  <?php if($k == 'sex'){ ?>  
				   	 
					   	 <?php if($output_data[$v['field']] == 0){ ?> 
					   		未知
					  	 <?php }elseif($output_data[$v['field']] == 1){ ?>	
					 	        男
					 	 <?php }elseif($output_data[$v['field']] == 2){ ?>
					 	 	女
					 	 <?php } ?>
					 	 
				  <?php }elseif($k != 'modelId'){ ?> 	 
			 	   		<?php echo $output_data[$v['field']]; ?>
				 <?php } } ?>
				</td>
			</tr>
		<?php }?>
	<?php }?>
	</table>
  </div>
</div>
</body>
</html>