<template>
	<div style="width: 100%;height: 100%;margin: 0;padding: 0;background-color: #fff;">
		<div class="login">
			<div class="top-container">
				<img src="../../../static/img/logo.png" class="logo" />
				<img src="../../../static/img/smart-school.png" class="start" />
			</div>

			<div class="register-panel">
				<el-row>
					<el-col :span="4">
						<img class="licon" src="../../../static/img/account.png" />
					</el-col>
					<el-col :span="20">
						<mt-field placeholder="请输入账号"></mt-field>
					</el-col>
				</el-row>
				
				<!--<el-row>
					<el-col :span="4">
						<img class="licon" src="../../../static/img/password.png" />
					</el-col>
					<el-col :span="20">
						<mt-field placeholder="请输入密码"></mt-field>
					</el-col>
				</el-row>-->
				<div class="register-button">
					<mt-button  @click="login">登  录</mt-button>
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				
			}
		},
		mounted() {
			
		},
		methods: {
			//登录验证
			login() {
				this.$router.push({ path: "/xxgg" });
			},
			
		}
	}
</script>
<style scoped>
	.login {
		/*width: 100%;
		position: absolute;
		top: 0;*/
		background: url(../../../static/img/bg.png) no-repeat 100% 100%;
		background-size: 100% 100%;
		/*background-repeat:no-repeat;*/
		z-index: -1;
		height: 320px;
	}
	
	.logo {
		width: 75%;
		margin-top: 20px;
	}
	
	.start {
		width: 25%;
		margin-top: 20px;
	}
	
	.register-panel {
		width: 78%;
		height: 17.5rem;
		margin: auto;
		background-color: #fff;
		border-radius: .5rem;
		margin-top: 1.875rem;
		overflow: hidden;
		padding-top:12px ;
		padding-right: 15px;
		padding-left: 15px;
	}
	
	.van-cell {
		width: 85%;
		margin: 1rem auto;
	}
	
	.van-button {
		width: 85%;
	}
	
	.mint-button--large {
		margin-top: 20px;
		/*width: 80%;*/
	}
	
	.licon{
		width: 24px;
		height: 24px;
		margin-top: 12px;
	}
	.el-row{
		border-bottom: 1px solid #dedede;
		margin-top:10px;
		
	}
	.el-row .mint-cell{
		background-position:center;
	} 
	.mint-button{
		width:100%;
		background: linear-gradient(left,#598eff,#7c66fe); 
		color:#fff;
	}

</style>