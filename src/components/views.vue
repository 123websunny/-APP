<template>
	<div class="footer">
		<router-link :to="t.path" v-for='t in rawTabs'>
			<img class="menuicon" :src="t.icon"/>
			<span>{{t.name}}</span>
		</router-link>
	</div>

</template>

<script>

	export default {
		watch:{

		},
		data(){
			return {
				tabs:[
					{
						icon:'../../static/img/xxgg.png',
						icon2:'../../static/img/xxgg-active.png',
						name:'信息公告',
						path:'/xxgg'
					},
					{
						icon:'../../static/img/edu.png',
						icon2:'../../static/img/eduActive.png',
						name:'掌上教务',
						path:'/zsjw'
					},
					{
						icon:'../../static/img/life.png',
						icon2:'../../static/img/lifeActive.png',
						name:'生活服务',
						path:'/shfw'
					},
					{
						icon:'../../static/img/navigation.png',
						icon2:'../../static/img/navActive.png',
						name:'校园导航',
						path:"/xydh"
					}
				]
			}
		},
		computed:{
			rawTabs(){
				return this.tabs.map(o=>{
					const obj = {
						name:o.name,
						icon:o.icon,
						path:o.path,
						
					};
					if(this.$route.path == o.path){
						obj.icon = o.icon2;
					}
					return obj;
				})
			}
		},
	}
</script>

<style scoped>
	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 55px;
		/*padding:0 25% 0 25%;*/
		border-top: solid;
		border-width: 1px;
		border-color: #E5E5E5;
		display: flex;
		background-color: #FFFFFF;
	}
	
	.menuicon {
		width: 24px;
		height: 24px;
	}
	
	.footer a {
		color: #333;
	}
	
	.footer span {
		font-size: 12px;
	}
	
	a {
		font-size: 4px;
		text-decoration: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
	}
	
	i {
		font-size: 27px;
	}
	
	a.router-link-active {
		color: #7A7EEA;
	}
</style>