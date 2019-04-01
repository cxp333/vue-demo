<template>
  <div class="newsList">
    <ul>
      <li
        v-for="(item,index) of list"
        :key="item._id"
      >
        <router-link
          :to="'follow'"
        >
          <h2>{{index+1}}.{{item.title}}/{{ 1 | fillzero }}</h2>
           <!-- <img :src=""> -->
          <img referrer="no-referrer|origin|unsafe-url" :src="item.directors[0].avatars.small" > 
          {{item.directors[0].avatars.small}}

        </router-link>
      </li>     
    </ul>
  </div>
</template>
<script>
export default {
  props:['list']
}
</script>

<style scoped>
.content .newsList{width:6.4rem; margin:0 auto;}
.newsList ul{ padding:0 0.4rem;}
.newsList ul li{ color:#494d4d; padding:0.2rem 0; border:1px dashed #ccc;border-radius: 10px;margin:5px}
.newsList ul li h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
.newsList ul li p{max-height:1.8rem; margin-top:0.05rem;}
.newsList{clear: both;margin-bottom:1rem;}
</style>
