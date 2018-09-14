<template>
	<div class="page-navbar">
		<mt-tabbar :selected.sync="selected">
			<mt-tab-item id="外卖">
				<img slot="icon" src="../assets/100x100.png"> 外卖
			</mt-tab-item>
			<mt-tab-item id="订单">
				<img slot="icon" src="../assets/100x100.png"> 订单
			</mt-tab-item>
			<mt-tab-item id="发现">
				<img slot="icon" src="../assets/100x100.png"> 发现
			</mt-tab-item>
			<mt-tab-item id="我的">
				<img slot="icon" src="../assets/100x100.png"> 我的
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
	
</script>
<style scoped>
	
</style>
