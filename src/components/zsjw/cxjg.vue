<template>
	<div>
		<div class="header">
			<mt-header title="查询结果">
				<router-link to="/kxjs" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<div class='item-wrap'>
			<ul>
				<li class='el-row--flex item'>
					<div class='classroom'>逸夫楼101</div>
					<div class='useing'>使用中</div>
				</li>
				<li class='el-row--flex item'>
					<div class='classroom'>逸夫楼101</div>
					<div class='useing'>使用中</div>
				</li>
				<li class='el-row--flex item'>
					<div class='classroom'>逸夫楼101</div>
					<div class='free'>空闲</div>
				</li>
				<li class='el-row--flex item'>
					<div class='classroom'>逸夫楼101</div>
					<div class='free'>空闲</div>
				</li>
			</ul>
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

	a{
		text-decoration: none;

	}
	ul,li{ padding:0;margin:0;list-style:none}
	.mint-header {
		background: #6383ff !important;
	}
	.item-wrap{
		padding:15px;
	}
	.item{
		margin-bottom: 15px;
		background-color: #fff;
		height: 60px;
		border:1px solid #e6e6e6;
		padding: 20px;
		box-sizing: border-box;
		background-image: ur;
	}
	.classroom{
		flex:1;
		text-align: left;
	}
	.useing{
		color: #5b61e5;
	}
	.free{
		color: #2ac6a4;
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
		width: 80%;
	}
	
	.licon{
		width: 24px;
		height: 24px;
		margin-top: 12px;
	}
	.el-row{
		border-bottom: 1px solid #dedede;
	}
</style>