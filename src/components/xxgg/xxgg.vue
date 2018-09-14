<template>
	<div style="width: 100%;height: 100%;margin: 0;padding: 0;background-color: #fff;">
		<Header title="信息公告"></Header>
		<div class="content">
			<div class="navbar" id="change">
				<div class="active lf">
					<router-link to="">应急信息</router-link>
				</div>
				<div class="rf">
					<router-link to="">后勤通知</router-link>
				</div>
			</div>
			<div>
				<mt-swipe :show-indicators="false">
					<mt-swipe-item>
						<img src="../../../static/img/banner.png" class="banner" />
					</mt-swipe-item>
				</mt-swipe>
			</div>

			<div class="sele">
				<router-link to="/xxgg">
					<img class="menu" src="../../../static/img/security.png" />
					<span>学校保安</span>
				</router-link>
				<router-link to="/zsjw">
					<img class="menu" src="../../../static/img/sos.png" />
					<span>SOS求救信号</span>
				</router-link>
				<router-link to="/shfw">
					<img class="menu" src="../../../static/img/call.png" />
					<span>紧急呼救</span>
				</router-link>
				<router-link to="/xydh">
					<img class="menu" src="../../../static/img/manoeuvre.png" />
					<span>应急演练</span>
				</router-link>
				<router-link to="/xydh">
					<img class="menu" src="../../../static/img/inform.png" />
					<span>演习通知</span>
				</router-link>
			</div>
			<div class="news-content">
				<div class="spot-news">最新资讯</div>
					<el-row>
						<el-col :span="16">
							<router-link to="/zxzx">
								<div class="title">关于本校上周发布的交通信息总结通知</div>
								<p>2018-07-20 12:00:04</p>
							</router-link>
						</el-col>
						<el-col :span="8">
							<img class="licon" src="../../../static/img/news_01.png" />
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="16">
							<router-link to="/zxzx">
								<div class="title">关于本校上周发布的交通信息总结通知</div>
								<p>2018-07-20 12:00:04</p>
							</router-link>

						</el-col>
						<el-col :span="8">
							<img class="licon" src="../../../static/img/news_03.png" />
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="16">
							<router-link to="/zxzx">
								<div class="title">关于本校上周发布的交通信息总结通知</div>
								<p>2018-07-20 12:00:04</p>
							</router-link>

						</el-col>
						<el-col :span="8">
							<img class="licon" src="../../../static/img/news_02.png" />
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="16">
							<router-link to="/zxzx">
								<div class="title">关于本校上周发布的交通信息总结通知</div>
								<p>2018-07-20 12:00:04</p>
							</router-link>

						</el-col>
						<el-col :span="8">
							<img class="licon" src="../../../static/img/news_01.png" />
						</el-col>
					</el-row>
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
			return {
				//				shows:1,
			}

		},
		mounted() {

		},
		components: {
			Header,
			Views
		},
		methods: {
			//			twshow(){
			//				this.shows=1;
			//			},
			//			fjshow(){
			//				this.shows=2;
			//			}

		}
	}
</script>
<style scoped>
	.navbar {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		/*margin-top: 45px;*/
		color: #333;
	}
	
	.lf {
		float: left;
		width: 50%;
		height: 50px;
	}
	
	.rf {
		float: right;
		width: 50%;
	}
	
	.navbar a {
		height: 40px;
	}
	
	.active {
		color: #677efe;
		background: url(../../../static/img/select.png) center 40px no-repeat;
		background-size: 70px;
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
		/*border-bottom: 1px solid #dedede;*/
	}
	
	.mint-swipe {
		height: 160px;
	}
	
	.banner {
		width: 100%;
		height: 160px;
	}
	
	.sele {
		    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    /* margin-top: 20px; */
    background-color: #FFFFFF;
    padding-top: 12px;
    padding-bottom: 12px;
	}
	
	.menu {
		width: 80%;
		display: flex;
		flex-direction: column;
		margin: auto;
	}
	
	.sele a {
		color: #333;
	}
	
	.sele span {
		font-size: 12px;
	}
	
	a {
		text-decoration: none;
	}
	
	.news-content {
		margin-top: 10px;
    text-align: left;
    background-color: #fff;
    padding-left: 12px;
    text-align: left;
    padding-right: 12px;
	}
	
	.spot-news {
		font-size: 18px;
    border-bottom: 1px solid #E5E5E5;
    padding-bottom: 5px;
    padding-top: 5px;
	}
	
	.content .title {
		font-size: 16px;
		padding-top: 10px;
		color: #333;
	}
	
	.content p {
		font-size: 14px;
		color: #ccc;
	}
	
	.content .licon {
		width: 90%;
		height: 80px;
		margin-left: 10px;
	}
</style>