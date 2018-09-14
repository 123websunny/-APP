<template>
	<div style="width: 100%;height: 100%;margin: 0;padding: 0;background-color: #fff;">
		<Header title="掌上教务"></Header>
		<div>
			<div class='banner'>
				<img src='../../../static/img/banner_56.png' class='img-responsive' />
			</div>
			<div class='click el-row--flex'>

					<router-link to='' class='flex1 a-bg'>
						校园校历查询
					</router-link>

				<router-link to='kxjs' class='flex1 a-bg2'>
					空闲教室查询
				</router-link>
				<router-link to='kxjs' class='flex1 a-bg3'>
					课表查询
				</router-link>
				
				<router-link to='kxjs' class='flex1 a-bg4'>
					成绩查询
				</router-link>
			</div>
		</div>
		<Views></Views>
	</div>
</template>

<script>
	import Header from '@/components/header';
	import Views from "@/components/views";

	export default {
		data() {
			return {}
		},
		mounted() {

		},
		components: {
			Header,
			Views
		},
		methods: {

		}
	}
</script>
<style scoped>
	a {
		text-decoration: none;
		color: #333;
		box-sizing: border-box;
	}
	
	.flex1 {
		width: 48%;
		height: 90px;
		display: inline-block;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		box-shadow: 0 0 15px 5px rgba(204, 204, 204, .3);
		border-radius: 5px;
		padding-top: 15px;
		padding-left: 15px;
		font-size: 1.2rem;
		font-weight: bold;
		text-align: left;
		box-sizing: border-box;
	}
	
	.banner {
		height: 150px;
		width: 100%;
	}
	
	.banner .img-responsive {
		height: 150px;
		width: 100%;
	}
	
	.click {
		padding: 15px 22px;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	
	.a-bg {
		background-image: url(../../../static/images/zsjw-bg1.png);
	}
	
	.a-bg2 {
		background-image: url(../../../static/images/zsjw-bg2.png);
	}
	
	.a-bg3 {
		background-image: url(../../../static/images/zsjw-bg3.png);
	}
	
	.a-bg4 {
		background-image: url(../../../static/images/zsjw-bg4.png);
	}
	
	.click .flex1:nth-child(3),
	.click .flex1:nth-child(4) {
		margin-top: 10px;
	}
	
	.click .flex1:nth-child(odd) {
		margin-right: 10px;
	}
	
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
		padding-top: 12px;
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
		width: 80%;
	}
	
	.licon {
		width: 24px;
		height: 24px;
		margin-top: 12px;
	}
	
	.el-row {
		border-bottom: 1px solid #dedede;
	}
</style>