<template>
  <div class="content">
    <div class="header">
      <h2><img :src="baseUrl + user.icon" alt=""/></h2>
      <div class="user-box">
        <a href="javascript:;">{{user.nikename}}</a>
        <a href="javascript:;" @click="logout">注销</a>
        <!-- <a href="login_m.html">登录</a> -->
        <!-- <a href="reg_m.html">注册</a> -->
      </div>
      <ul class="clear">
        <li>
          <span>{{user.follow}}</span>
          <p>美好的一天</p>
        </li>
        <li>
          <span>{{user.fans}}</span>
          <p class="end">天天有钱</p>
        </li>
      </ul>
    </div>
    <div class="docList">
      <ul>
        <li class="gk-text">
          <i></i>
          <p>我的贷款</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="mm-text">
          <i></i>
          <p>积分余额</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="cg-text">
          <i></i>
          <p>已借订单</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="sc-text">
          <i></i>
          <p>收藏夹</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="my_cz">
          <i></i>
          <p>收藏夹</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import store from '../store'
import * as types  from '../store/types.js'
export default {
  data(){
    return {
      user:{},
      baseUrl:baseUrl
    }
  },
  methods:{
    logout(){

      //1.同步服务器，本地，内存
      axios({
        url:'/api/logout'
      })

      //2. 清除cookie/localStrage

      //3.清除状态管理
      this.$store.commit(types.CLEAR_USER)

      this.$router.push('/home')
    }
  },
  beforeRouteEnter(to,from,next){
    //同步抓取 仓库数据state
    store.state.user.auth ? 
      next(_this=>_this.user=store.state.user.data) :
      next('/login')
    
    /* axios({
      url:'/api/user'
    }).then(
      res=>{
        if(res.data.error==0){
          next(_this=>_this.user=res.data.data);//数据预载
        }else{
          next('/login')
        }
      }
    ) */
    //next(访问目标组件，把数据传给目标组件)
  }
}
</script>

<style scoped>

.content{max-width:6.4rem; margin:0 auto; margin-bottom:0.8rem;}
.content .header{width:6.4rem;height:2.84rem; background:#9e9a95; padding-top:0.4rem;}
.header h2{width:1.02rem;height:1.02rem; border-radius:50%; margin:0 auto;}
.header h2 img{width:100%;}
.header .user-box{width:1.14rem; font-size:0.25rem; color:#fff; margin:0 auto; margin-top:0.2rem;}
.user-box a{color:#fff;}
.header ul{ margin-top:0.4rem;}
.header ul li{width:50%;height:0.7rem; float:left; color:#fff;}
.header ul li span{height:0.37rem; line-height:0.37rem; text-align:center; display:block; font-size:0.25rem;}
.header ul li p{ text-align:center; font-size:0.3rem;height:0.32rem; line-height:0.32rem; border-right:1px solid #fff;}
.header ul li p.end{ border:0;}

.content .docList{width:6.4rem; margin:0 auto; margin-top:0.32rem;}
.docList ul{ border-top:1px solid #7b7c7c;}
.docList ul li{ background:#fff;height:0.79rem; border-top:1px solid #bcbbba; border-bottom:1px solid #7b7c7c;}
.docList ul li span{ float:right;margin-right:0.14rem; margin-top:0.26rem;}
.docList ul li b{width:0.21rem;height:0.24rem; background:url(../assets/img/next_img.png) no-repeat 0 0; background-size:100%; float:right;margin-right:0.34rem; margin-top:0.28rem;}


.docList ul .gk-text i{width:0.37rem;height:0.37rem; background:url(../assets/img/gk_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
.gk-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
.docList ul .mm-text i{width:0.29rem;height:0.35rem; background:url(../assets/img/mm_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.32rem; margin-top:0.24rem;}
.mm-text p{ float:left; font-size:0.25rem;margin-left:0.35rem; margin-top:0.25rem;}
.docList ul .cg-text i{width:0.37rem;height:0.37rem; background:url(../assets/img/cg_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
.cg-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
.docList ul .sc-text i{width:0.37rem;height:0.37rem; background:url(../assets/img/sc_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
.sc-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
.docList ul .my_cz{ margin-top:0.45rem;}
.docList ul .my_cz i{width:0.37rem;height:0.37rem; background:url(../assets/img/my_cz.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
.my_cz p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}




</style>

