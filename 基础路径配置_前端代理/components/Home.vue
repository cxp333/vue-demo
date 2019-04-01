<template>
  <div class="home">
    <Slider></Slider>
    <List :list="list" dataName="dataName"></List>
  </div>
</template>
<script>
import Slider from './Slider'
import List from './List'
export default {
  data(){
    return {
      list:[],
      dataName:'home'
    }
  },
  components:{Slider,List},
  mounted(){

    //基础路径配置，前端代理
    // console.log('baseUrl',baseUrl)
    // console.log('axios',axios)
    // console.log('axios2',this.$axios)
   /*  axios({
      // url:baseUrl + '/data/index.data'
      // url:baseUrl + '/api/product',
      // url:'/api/product',
      url:'/douban/v2/movie/top250',
      // params:{dataName:'home'}
      params:{start:1,count:2}
    }).then(
      res=>console.log('res',res.data)
    ) */

    

  }
}
</script>

