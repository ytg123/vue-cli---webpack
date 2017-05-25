<template>
	<div>
		<div class="mui-content-padded">
			<div class="mui-input-row mui-search">
				<input type="search" class="mui-input-clear" placeholder="关键词"  v-model="value">		
			</div>
			<a class="mui-btn mui-btn-blue" @click="getCon">搜索</a>
		</div>
		<p v-if="value != ''">{{value}}</p>
	    <div class="mui-row">
	        <ul class="mui-table-view" style="margin-bottom: 60px;">
	            <li class="mui-table-view-cell" v-for="item in arrList">
	                <router-link :to="'/chapter/'+item.id">
						<h4><span class="mui-pull-left mui-ellipsis" :style="wd">名称：{{item.name}}</span> <span class="mui-pull-right mui-text-right" :style="wd">作者：{{item.author}}</span></h4>
						<div  class="mui-clearfix"></div>
						<div>
							<p :style="size">最新章节：{{item.newChapter}}</p> <p  :style="size">最后更新时间：{{item.updateTime}}</p>
						</div>
					</router-link>
	            </li>
	        </ul>
	        <p class="mui-text-center" v-if="arrList.length == 0">暂无数据</p>
	    </div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				value:"",
				arrList:[],
				size:"font-size:16px;",
				wd:"width:50%;"
			}
		},
		methods:{
			getCon(){
				this.value = "";
				let that = this;
				this.$http.get("https://route.showapi.com/211-2",{
					params:{ 
						showapi_appid:30699,
			        	showapi_sign:"48c9abdbb3604b9b82af331570e343a5",
			        	appId:30699,
			        	keyword:that.value
			       	}
				}).then(function(res){
					console.log(res);
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
	.mui-search{height: auto;width: 80%;display: inline-block;}
	.mint-button--normal{top: -20px;width: 18%;height: 49px;font-size: 14px;}
	p{margin: 5px;}
</style>