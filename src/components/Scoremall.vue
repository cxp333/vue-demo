<template>
    <div class="scoremall">
        <h1>积分商城</h1>
        
        <ul>
            
            <li v-for ='(item,index) of list'
             :key="item._id"
            >     <router-link
          :to="'/detail/'+item.id+'?dataName='+item.pinming+'&src='+item.imgurl"
        >
                <p>{{item.pinming}}</p>
                <img :src="item.imgurl">
                  
        </router-link>
                <!-- <h4>加入购物车</h4> --> 
              
       <router-link to="/buycar"><a href="javascript:;" ></a> <h2>加入购物车</h2></router-link>
          
        

            </li>
        </ul>
        <h2>没有更多商品内容</h2>
    </div>
</template>
<script>
export default {
     data(){
        return {
            list:[],
            dataName:[],
            src:[]
        }
    },
   
    created(){
        axios({
        url:'./data/shuju.json'
    }).then(
        res=>this.list=res.data,
        console.log(this.list.imgurl)
        
   
    )

}
}




</script>
<style scoped>
ul{display: flex;width: 90%;margin:0 auto;flex-wrap: wrap;justify-content: space-between}
li{width: 160px;height: 200px;  overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;}
 img{width:160px;height: 160px;}
 h2{background:red}
 h1{margin-bottom:50px;text-align: center}


    
</style>