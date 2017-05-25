<template>
	<div>
		<header class="mui-bar mui-bar-nav">
		    <router-link to="/home">
		    	<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		    </router-link>
		</header>
		<Loading v-if="load"></Loading>
		<div class="mui-card">
			<h4 class="mui-text-center">{{$route.params.title}}</h4>
			<p class="gdei">{{cons}}</p>
		</div>
	</div>
</template>

<script>
	//loading
	import Loading from "./Load.vue"
	export default{
		data(){
			return {
				cons:"",
				load:true
			}
		},
		components:{
			Loading
		},
		mounted(){
			this.getCon();
		},
		methods:{
			getCon(){
				let that = this,
					murl = location.href,
					url = "/dp/"+murl.split("/")[murl.split("/").length -1];
				this.$http.get("http://route.showapi.com/955-2",{
					params:{ 
						showapi_appid:30699,
			        	showapi_sign:"48c9abdbb3604b9b82af331570e343a5",
			        	appId:30699,
			        	id:`/dp/${that.$route.params.id}`
			       	}
				}).then(function(res){
					that.load = false;
			        var texts = res.data.showapi_res_body.text;
			        texts = texts.replace(/&nbsp;/ig, "");
			        texts = texts.replace("shoye_336();","");
			        texts = texts.replace("neirong336();","");
			        that.cons = texts;
			        
				}).catch(function(err){
					console.log(err);
				});
			}
		}
		
	}
</script>

<style scoped>
	h4{margin-top: 15px;}
	.mui-card{margin-top: 55px;}
	.gdei{padding: 10px;text-indent: 2em;line-height: 24px;}
</style>