import Vue from 'vue'
import App from './App.vue'
import { Button, Cell } from 'vant';
Vue.use(Button).use(Cell)
import { Area } from 'vant';
import { SubmitBar } from 'vant';


Vue.use(SubmitBar);
import {
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant';

Vue
  .use(GoodsAction)
  .use(GoodsActionBigBtn)
  .use(GoodsActionMiniBtn);


Vue.use(Area);

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


import loading from './plugins/loading'
Vue.use(loading);

import store from './store'
//配置store插件 



//引入全局
import 'animate.css';


new Vue({
  render: h => h(App),
  router,store

}).$mount('#app')