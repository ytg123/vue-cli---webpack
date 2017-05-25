<template>
  <div id="app">
  	<!--头部-->
  	<Home v-if="show1"></Home>
		<!--内容-->
		<div class="mui-content">
				<!--banner-->
    		<Banner v-if="show2" v-mslider></Banner>
		    <transition enter-active-class="animated flipOutX" leave-active-class="animated flipOutY">
		    	<router-view></router-view>
		    </transition>
		</div>
    <!--底部-->
   	<Foot v-if="show3"></Foot>
  </div>
</template>

<script>
	//头部
	import Home from "./components/Home.vue"
	//Banner
	import Banner from "./components/Banner.vue"
	//底部
	import Foot from "./components/Foot.vue"
	export default {
	  name: 'app',
	  data () {
	    return {
	      show1:true,
	      show2:true,
	      show3:true
	    }
	  },
	  components:{
	  	Home,
	  	Banner,
	  	Foot
	  },
	  directives:{
	  	mslider:{
	  		inserted(){
	  			mui(arguments[0].children).slider({
					  interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
					});
	  		}
	  	}
	  },
	  watch:{
	  	$route(to){
	  		if(to.path == "/search"){
	  				this.show1 = false;
	  				this.show2 = false;
	  		};
	  		if(to.path == "/mine"){
	  				this.show1 = false;
	  				this.show2 = false;
	  		};
	  		if(to.path == "/home"){
	  				this.show1 = true;
	  				this.show2 = true;
	  				this.show3 = true;
	  		}
	  		let str = to.path;
	  		if(str.includes("con") == true || str.includes("chapter")){
	  				this.show1 = false;
	  				this.show2 = false;
	  				this.show3 = false;
	  		}
	  		console.log(str)
	  	}
	  }
	  
	}
</script>

<style>
</style>
