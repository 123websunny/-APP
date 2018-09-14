<template>
	<div>
		<mt-header title="逸夫楼-全景">
		  <router-link to="/shfw" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		<div class="container">
			<img src="../../../static/img/allscene.png" />
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.mint-header{
		background: linear-gradient(left,#598eff,#7c66fe) !important; 
	}
	.container{
		width: 100%;
		height: 100%;
	}
	.container img{
		width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
	}
</style>