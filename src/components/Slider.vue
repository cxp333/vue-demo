<template>
  <swipe 
    class="my-swipe"
    :speed="100"
  >
    <swipe-item 
      v-for="item of banner"
      :key="item._id"
    >
        <img :src="baseUrl+item.banner" alt=""/>
      
    </swipe-item>
  </swipe>

</template>
<script>
// import $ from  'jquery';

// import Swipe from '../assets/js/swipe.js'


import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
  data(){return {baseUrl}},
  props:['banner'],
  components: {
    'swipe': Swipe,
    'swipe-item': SwipeItem
  },
 
}
</script>

<style scoped>

.my-swipe {
  margin-top:10px;
  height: 80px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  border-radius:10px;
}

img{width:100%}

</style>
