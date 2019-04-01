<template>
  <div class="home">
    <Slider :banner="banner"></Slider>
    <List :list="list" :dataName="dataName"></List>
  </div>
</template>
<script>
import Slider from './Slider'
import List from './List'
export default {
  data(){
    return {
      list:[],
      dataName:'home',
      banner:[]
    }
  },
  components:{Slider,List},

  created(){

    axios({
      url:'/api/product',
      params:{dataName:this.dataName}
    }).then(
      res=>this.list=res.data.page_data
    )

    axios({
      url:'/api/banner',
      params:{dataName:'banner'}
    }).then(
      res=>this.banner=res.data.page_data
    )


  }
}
</script>

