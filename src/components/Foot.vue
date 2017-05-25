<template>
	<div>
		<footer class="gfoot">
			<router-link to="/home" :style="ml3" active-class="gsel">
				<i class="mui-icon mui-icon-home" :style="fzi"></i>
				<span>首页</span>
			</router-link>
			<router-link to="/search" active-class="gsel">
				<i class="mui-icon mui-icon-search" :style="fzi"></i>
				<span>搜索</span>
			</router-link>
			<router-link to="/mine" active-class="gsel">
				<i class="mui-icon mui-icon-contact" :style="fzi"></i>
				<span>我的</span>
			</router-link>
		</footer>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				ml3:"margin-left: 4px;",
				fzi:" font-size: 32px;"
			}
		}
	}
</script>

<style>
	.mui-bar-tab .mui-tab-item{width: auto;}
	.gfoot{width: 100%;height: 50px;position: fixed;bottom: 0;background: #E5E5E5;}
	.gfoot a{display: inline-block;width: 32%;text-align: center;height: 50px;line-height: 18px;color:#333;}
	.gfoot a span{display: block;}
	.gsel{color:#f50!important;background-color: rgba(100,100,102,0.2);}
</style>