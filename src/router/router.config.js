import Vue from 'vue'
//路由
import vueRoute from "vue-router"
//模板引入
import Contents from "../components/Contents.vue"
import Searchs from "../components/Searchs.vue"
import Mines from "../components/Mines.vue"
import Details from "../components/Details.vue"
import Chapter from "../components/Chapter.vue"
//配置路由
export default [

	{path:"/home",component:Contents},
	{path:"/search",component:Searchs},
	{path:"/mine",component:Mines},
	{path:"/con/:title/:dp/:id",component:Details},
	{path:"/chapter/:id",component:Chapter},
	{path:"/",redirect:"/home"}
];


