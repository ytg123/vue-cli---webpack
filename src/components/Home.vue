<template>
	<div>
		<!--顶部-->
    	<header class="mui-bar mui-bar-nav" :style="bg">
    	    <h1 class="mui-title" :style="colr">小说大全</h1>
    	</header>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				bg:"background:#3ABDF9;",
				colr:"color:#fff;"
			}
		}
	}
</script>

<style>
</style>