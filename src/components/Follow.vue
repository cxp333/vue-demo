<template>
  <div class="newsList">
    <List :list="list" :dataName="dataName"/>
  </div>
</template>
<script>
import List from './List'
export default {
  data(){
    return {
      list:[],
      dataName:'follow'
    }
  },
  components:{List},
  mounted(){

    axios({
      url:'/api/product',
      params:{dataName:this.dataName}
    }).then(
      res=>this.list=res.data.page_data
    )


  }
}
</script>

<style scoped>
    .newsList{clear: both;margin-bottom:1rem;margin-top:.7rem;}
  </style>

