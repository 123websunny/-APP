<template>
	<div class="header">
		<div class="theme">
			<router-link to="/mine">
				<img style="width: 24px;height: 24px;margin-right: 11px;margin-top: 11px;position: absolute;right: 0;" src="../../static/img/person.png" />
		    </router-link>
		</div>
		<p>{{title}}</p>
	</div>
</template>

<script>
	export default {
		props: ["title"],
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.theme{
		position: absolute;
		right: 0;
	}
	.header {
		position: relative;
		left:0;
		top:0;
		height: 45px;
		width: 100%;
		background: linear-gradient(left,#598eff,#7c66fe); 
		color:#fff;
        z-index:100;
	}
	
	p {
		display: flex;
		font-size: 16px;
		color: whitesmoke;
		align-items: center;
		justify-content: center;
		height: 45px;
		margin: 0;
	}
	
	;
</style>