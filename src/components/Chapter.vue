<template>
	<div>
		<header class="mui-bar mui-bar-nav">
		    <router-link to="/search">
		    	<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		    </router-link>
		</header>
		<div class="mui-content-padded">
			<ul class="mui-table-view">
			        <li class="mui-table-view-cell" v-for="item in arrList">
			            <router-link to="cd">
			            	{{item.name}}
			            </router-link>
			        </li>
			    </ul>
		</div>
		<Loading v-if="load"></Loading>
	</div>
</template>

<script>
	//loading
	import Loading from "./Load.vue"
	export default{
		data(){
			return {
				load:true,
				arrList:[]
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
					url = "/dp/"+murl.split("/")[murl.split("/").length -1].split("/")[2];
				this.$http.get("https://route.showapi.com/211-1",{
					params:{ 
						showapi_appid:30699,
			        	showapi_sign:"48c9abdbb3604b9b82af331570e343a5",
			        	appId:30699,
			        	bookId:162824
			       	}
				}).then(function(res){
			        let arrs = res.data.showapi_res_body.book.chapterList;
			        for(let i=0,len=arrs.length;i<len;i++){
			        	that.arrList.push(arrs[i])
			        }
			        that.load = false;
				}).catch(function(err){
					console.log(err);
				});
			}
		}
	}
</script>

<style>
</style>