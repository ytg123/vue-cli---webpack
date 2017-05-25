<template>
	<div class="mui-content-padded">
		<ul class="mui-table-view">
		    <li class="mui-table-view-cell"><h4>短篇小说</h4></li>
		</ul>
		<Loading v-if="load"></Loading>
		<ul class="mui-table-view" id="refreshContainer">
		    <li class="mui-table-view-cell mui-media" v-for="item in arrList">
		        <router-link :to="'/con/'+item.title+item.id">
		            <img class="mui-media-object mui-pull-right" :src="item.img">
		            <div class="mui-media-body">
		                {{item.title}}
		                <p class="mui-ellipsis">{{item.desc}}</p>
		            </div>
		        </router-link>
		    </li>
		</ul>
		<ul class="mui-table-view">
		    <li class="mui-table-view-cell mui-text-center" v-if="arrList.length == 0">暂无数据</li>
		</ul>
	</div>
</template>

<script>
	//loading
	import Loading from "./Load.vue"
	export default{
		data(){
			return {
				load:true,
				arrList:[],
				mart:"margin-left: -2.8em;",
				page:1
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
				let that = this;
				this.$http.get("https://route.showapi.com/955-1",{
					params:{ showapi_appid:30699,
			          showapi_sign:"48c9abdbb3604b9b82af331570e343a5",
			          appId:30699,
			          type:"dp",
			          page:that.page
			       	}
				}).then(function(res){
					that.load = false;
					let con = res.data.showapi_res_body.pagebean.contentlist;
					for(let i =0,len=con.length;i<len;i++){
						that.arrList.push(con[i]);
					}
				}).catch(function(err){
					console.log(err);
				});
			}
		}
	}
</script>

<style scoped>
	.mui-content-padded{margin-bottom: 56px;}
	.mui-table-view .mui-table-view-cell{margin-bottom: 2px;}
</style>