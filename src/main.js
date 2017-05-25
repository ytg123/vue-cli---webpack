import Vue from 'vue'
//路由
import vueRoute from "vue-router"
import vRouteConfig from "./router/router.config.js"
//axios
import Axios from "axios"
import App from './App.vue'
Vue.use(vueRoute);
//引入css
import "./assets/css/animate.css"
//new实例
const router = new vueRoute({
	mode:"history",
	routes:vRouteConfig
})
//axios 配置
//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
Axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  return config;
}, function (error) {
  return Promise.reject(error);
});

Axios.interceptors.response.use(function (response) { //配置请求回来的信息
  return response;
}, function (error) {

  return Promise.reject(error);
});

/*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';*/
//axios.defaults.baseURL='http://localhost:8082/';
Vue.prototype.$http = Axios  //其他页面在使用axios的时候直接  this.$http就可以了
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
