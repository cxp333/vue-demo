<template>
  <div class="home">
   
    
     <ul >
      <router-link to="/home" tag="li" active-class="active"><a href="javascript:;" ><img :src="hisliderEnters[2].img">首页</a></router-link>
      <router-link to="/follow" tag="li" active-class="active"><a href="javascript:;" ><img :src="hisliderEnters[2].img">积分商城</a></router-link>
      
      <router-link to="/column" tag="li" active-class="active"><a href="javascript:;" ><img :src="hisliderEnters[2].img">我的</a></router-link>
      <router-link to="/home" tag="li" active-class="active"><a href="javascript:;" ><img :src="hisliderEnters[2].img">首页</a></router-link>
      <router-link to="/follow" tag="li" active-class="active"><a href="javascript:;" ><img :src="hisliderEnters[2].img">积分商城</a></router-link>
      <router-link to="/column" tag="li" active-class="active"><a href="javascript:;" ><img :src="hisliderEnters[2].img">我的</a></router-link>
      <router-link to="/home" tag="li" active-class="active"><a href="javascript:;" ><img :src="hisliderEnters[2].img">首页</a></router-link>
      <router-link to="/home" tag="li" active-class="active"><a href="javascript:;" ><img :src="hisliderEnters[2].img">首页</a></router-link>
    </ul> 
    <Slider :banner="banner"></Slider>
    <List :list="list" :dataName="dataName"></List>
  </div>
</template>
<script>

import Slider from './Slider'
import List from './List'
import * as types from '../store/types.js'
export default {
  data(){
    return {
      list:[],
      dataName:'home',
      banner:[],
       hisliderItems: [{
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t13744/11/2508939408/43213/58bfe502/5a421ff3N52d0a474.jpg?width=750&height=320'
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t16138/325/817844900/36681/5d874455/5a422029Ncd678ea3.jpg?width=750&height=320'
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t13465/324/2563794460/43029/3ffca963/5a421f83Ne8089231.jpg?width=750&height=320'
      }],
      hisliderEnters: [{
        href: 'home',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
        title: '优惠券'
      }, {
        href: 'home',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
        title: '领红包'
      }, {
        href: 'home',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
        title: '抢钢镚'
      }, {
        href: 'home',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t4618/115/2179710654/11347/bf520df/58ec9d84Nfd169001.png?width=132&height=132',
        title: '领京豆'
      }, {
        href: 'home',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
        title: '白条提额'
      }],
    }
  },
  components:{Slider,List},

  created(){

    axios.all([
      axios({
        url: 'https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters',
        params:{count:20}
      }),
     
      axios({
        url:'/api/banner',
        params:{dataName:'banner'}
      })
       
    ]).then(
      axios.spread((list,banner)=>{
        // this.$store.dispatch(types.VIEW_LOADING,false)
        this.list=list.data.subjects
        this.banner=banner.data.page_data
      })
    )
    


  }
}
</script>
<style scoped>
.home ul {width:80%;height:200px;margin:10px auto;display:flex;flex-wrap:wrap;justify-content:space-between}
ul li{width:68px;height:100p;border:1px solid #eee;text-align: center}
ul li img{display:block;width:20px;margin:10px auto}

</style>

