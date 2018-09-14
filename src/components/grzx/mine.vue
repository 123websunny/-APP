
<template>
	<div style="width: 100%;height: 100%;margin: 0;padding: 0;background-color: #F8F7FC;">
		<!--<div class="header">
			<div class="theme">
				<router-link to="/xydh" slot="">
				    <mt-button icon="back"></mt-button>
				</router-link>
			</div>
			<p>个人中心</p>
		</div>-->
		<mt-header title="个人中心" class="header">
		  <router-link to="/xydh" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		
		<div class="content">
			<div class="personal-info">
				<el-row>
					<el-col :span="6" >
						<img src="../../../static/img/photo.png" alt="" />
					</el-col>
					<el-col :span="18" class="info">
						<p>王宪君</p>
						<p>计算机科学学院  软件工程  1班</p>
						<p>学号：2017350200109</p>
					</el-col>
				</el-row>
			</div>
			<div class="panel">
				<mt-cell title="系统消息" is-link>
					  <span class="hint">5</span>
				</mt-cell>
				<mt-cell title="声音提示" >
					  <mt-switch ></mt-switch>
				</mt-cell>
				<mt-cell title="清除缓存" is-link></mt-cell>
				<mt-cell title="版本检查" is-link>
					  <span>版本1.1.1</span>
				</mt-cell>
				<mt-cell title="关于我们" is-link></mt-cell>
			</div>
			<div class="register-button">
				<mt-button  @click="loginOut">退 出 登  录</mt-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		mounted() {
			
		},
		methods: {
			loginOut() {
				this.$router.push({ path: "/" });
			},
			
		}
	}
</script>

<style>
	
	.header {
		position: relative;
		font-size: 16px;
		left:0;
		top:0;
		height: 45px;
		width: 100%;
		background: linear-gradient(left,#598eff,#7c66fe); 
		color:#fff;
        z-index:100;
	}
	.theme{
		position: absolute;
		left: 0;
	}
	.theme .mint-button{
		background-color: transparent;
		border:0;
	}
	.mint-button--default{
		color:#fff;
	}
	.header p {
		display: flex;
		font-size: 20px;
		color: #fff;
		align-items: center;
		justify-content: center;
		height: 45px;
		margin: 0;
	}
	

	/*.content{
		margin-top:55px;
	}*/
	.personal-info{
		
		margin-bottom:10px;
		padding:1rem;
		font-size:1rem;
		/*border-top:0.0625rem solid #aaa;
		border-bottom:0.0625rem solid #aaa;*/
		text-align:left;
		background-color: #fff;
    margin-top: 10px;
	}
	.personal-info img{
        width: 65px;
    /*border: 1px solid #dedede;*/
    border-radius: 6px;
	}
	.info{
		/*padding-left:1.25rem;*/
		font-size: 14px;
		/*margin-top: 3px;*/
	}
	.info p{
		margin: 8px;
	}
	/*.panel{
		border-top:0.0625rem solid #aaa;
		border-bottom:0.0625rem solid #aaa;
		
	}*/
	.mint-cell-text{
		float:left;
	}
	.mint-cell{
		height:48px;
		line-height:48px;
	}
	.mint-cell-wrapper{
		line-height:60px;
		border-bottom:0.0625rem solid #aaa;
	}
	.hint{
		width:25px;
		height:25px;
		line-height:25px;
		border-radius: 50%;
		font-size:20px;
		color: #fff;
		background-color:#e74848 ;
	}
	.register-button{
		margin-top:40px;
	}
	.register-button .mint-button{
		width:80%;
		background: linear-gradient(left,#598eff,#7c66fe); 
		color:#fff;
	}
</style>