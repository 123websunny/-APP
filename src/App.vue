<template>
	<div id="app">
		<router-view/>
		<tab></tab>
	</div>
</template>

<script>
	import tab from '@/components/views.vue';
	export default {
		name: 'App',
		components:{tab}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		font-size:1rem;
		color: #333;
		width: 100%;
		height: 100%;
		/*  margin-top: 60px;*/
	}
</style>