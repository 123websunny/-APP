<template>
	<div style="width: 100%;height: 100%;margin: 0;padding: 0;background-color: #fff;">
		<div class="header">
			<el-row>
				<el-col :span="21">
					<!--<input type="text" placeholder="请输入搜索内容"/>-->
					<mt-search placeholder="请输入搜索内容"></mt-search>
				</el-col>
				<el-col :span="3">
					<router-link to="/shfw" class="cancel">取消</router-link>
				</el-col>
			</el-row>
		</div>
	</div>
	
</template>

<script>
</script>

<style>
	.header{
		position:fixed;
		top:0;
		left:0;
		width:100%;
		height:50px;
		line-height:50px;
		background: linear-gradient(left,#598eff,#7c66fe); 
		color:#fff;
		
		
	}
	input{
		width:90%;
		height:35px;
		border:0;
		border-radius:5px;
	}
	.cancel{
		color:#fff;
		text-decoration:none;
		/*margin-right:5px;*/
	}
	.mint-search{
		    width: 95%;
    margin-top: 5px;
    margin-left: 12px;
    border-radius: 4px;
	}
</style>