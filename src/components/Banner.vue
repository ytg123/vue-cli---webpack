<template>
	<div class="mui-content-padded">
		<div id="slider" class="mui-slider" >
		  <div class="mui-slider-group mui-slider-loop">
		    <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
		    <div class="mui-slider-item mui-slider-item-duplicate">
		      <a href="#">
		        <img src="../assets/img/b.jpg" width="100%" height="80%">
		      </a>
		    </div>
		    <!-- 第一张 -->
		    <div class="mui-slider-item">
		      <a href="#">
		        <img src="../assets/img/b.jpg" >
		      </a>
		    </div>
		    <!-- 第二张 -->
		    <div class="mui-slider-item">
		      <a href="#">
		        <img src="../assets/img/b.jpg" width="100%" height="80%">
		      </a>
		    </div>
		    <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
		    <div class="mui-slider-item mui-slider-item-duplicate">
		      <a href="#">
		        <img src="../assets/img/b.jpg" width="100%" height="80%">
		      </a>
		    </div>
		  </div>
		  <div class="mui-slider-indicator">
		    <div class="mui-indicator mui-active"></div>
		    <div class="mui-indicator"></div>
		  </div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.mui-content-padded{margin-top: 55px;}
</style>