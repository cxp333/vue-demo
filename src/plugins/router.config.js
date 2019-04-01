import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


import Buycar from '@/components/Buycar'
import Home from '@/components/Home'
import Follow from '@/components/Follow'
import Column from '@/components/Column'
import Scoremall from '@/components/Scoremall'
import User from '@/components/User'
import Login from '@/components/Login'
import Reg from '@/components/Reg'
import Detail from '@/components/Detail'
import AppError from '@/common/AppError'

let routes=[
  {path:'/Buycar',component:Buycar},
  {path:'/home',component:Home},
  {path:'/scoremall',component:Scoremall},
  {path:'/follow',component:Follow},
  {path:'/column',component:Column},
  {path:'/detail/:id',component:Detail},
  {path:'/user',component:User},
  {path:'/login',component:Login},
  {path:'/reg',component:Reg},
  {path:'/',redirect:'/home'},
  {path:'*',component:AppError}
];

const router = new VueRouter({routes});

export default router;

