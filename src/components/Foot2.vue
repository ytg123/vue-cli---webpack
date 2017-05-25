<template>
	<div>
		<nav class="mui-bar mui-bar-tab">
		    <router-link to="/home"  active-class="mui-active" class="mui-tab-item">
		        <span @click="gohome">
		        	<span class="mui-icon mui-icon-home"></span>
		        	<span class="mui-tab-label">首页</span>
		        </span>
			</router-link>
			<router-link to="/search"  active-class="mui-active" class="mui-tab-item">
		        <span @click="gosearch">
		        	<span class="mui-icon mui-icon-search"></span>
		        	<span class="mui-tab-label">搜索</span>
		        </span>
			</router-link>
			<router-link to="/mine"  active-class="mui-active" class="mui-tab-item">
		        <span @click="gomine">
		        	<span class="mui-icon mui-icon-contact"></span>
		        	<span class="mui-tab-label">我的</span>
		        </span>
			</router-link>
		</nav>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			gohome(){
				mui.openWindow({
					url:"/home"
				})
			},
			gosearch(){
				mui.openWindow({
					url:"/search"
				})
			},
			gomine(){
				mui.openWindow({
					url:"/mine"
				})
			}
		}
	}
</script>

<style>
	.mui-bar-tab .mui-tab-item{width: auto;}
</style>