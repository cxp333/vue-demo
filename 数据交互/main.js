import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//配置全局资源
import './assets/css/base.css';
import './assets/js/font';
// import './assets/js/jquery-1.7.2';
// import $ from  'jquery';
// window.$=$;
import'./plugins/axios';


//路由引入
import router from './plugins/router.config'

//配置全局 baseUrl
import config from './config/config';
// window.baseUrl = config.baseUrl.localhost;
window.baseUrl = config.baseUrl.https

//配置全局过滤器
import filters from './filters';
Object.keys(filters).forEach(key=>Vue.filter(key,filters[key]));

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
