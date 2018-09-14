<template>
	<div>
		<!--<div class="header">
			<mt-header title="最新资讯">
			  <router-link to="/xxgg" slot="left">
			    <mt-button icon="back"></mt-button>
			  </router-link>
		    </mt-header>
		</div>-->
		
		<mt-header title="最新资讯" class="header">
		  <router-link to="/xxgg" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		<div class="content">
			<div class="artic-title">关于本校上周发布的交通信息总结通知</div>
			<div class="artic-info">
				<i>2018-07-20 12:00:24</i> 
				<span>来源:校园编辑部</span>
			</div>
			<div class="text">交通安全是指不发生交通事故或少发生交通事故的主观条件，即指交通参与者要严格遵守交通法规，提高警惕，不因麻痹大意而发生交通事故。</div>
		</div>
	</div>
</template>

<script>
      export default{
      	data() {
			return {
				
				
			}
		},
      }
</script>

<style scoped>
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
	.content{
		margin:16px;
		/*margin-top:45px;*/
		text-align:left;
	}
	.artic-title{
		font-size:18px;
		font-weight: 600;
		margin-bottom:10px;
		
	}
	.artic-info{
		color:#ccc;
		font-size:12px;
		margin-bottom:10px;
	}
</style>