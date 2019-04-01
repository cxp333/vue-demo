
    <template id="buycar">
    <div class="buycar">
        <img src="" alt="">
      <div class="car" v-for="(item,index) of list">
        <span>商品:{{item.name}}</span>
        <span>单价:{{item.price | currency}}</span>
        数量: <input type="number" v-model="item.count">
       
      </div>
      <van-submit-bar

       button-text="提交订单"
      @submit="onSubmit"
/>
       <p> 总价:{{ cptSum | currency('RMB',1)}}</p>
      
    </div>
  </template>

  <script>

  export default {
      
    
      data(){
        return {
          list: [
            {name:'',price:3.4,count:2},
            {name:'鸡蛋',price:1.7,count:9},
            {name:'黄瓜',price:1.9,count:5}
          ]
        }
      },
      methods: {
        show(ev) {
          console.log('btn');
        },
        onSubmit(){
          window.location.href="/home"
        }
      },
      filters:{
        currency(data,currency,digit=2){
          console.log('过滤器运行了')
          currency=currency||'$';
          return currency + data.toFixed(digit);
        }
      },
      computed:{
        cptSum(){
          let result=0;
          this.list.map(function(item,index){
            result += item.price * item.count;
          });
          return result;
        }
      }
    }
 
       
      
  
  </script>
  <style scoped>
   .car{width: 80%;margin-left: 20px;height: 80px;border: 1px solid #e6e6e6;font:700 26px/50px;} 
   .car span{display: inline-block;} 
  .buycar{background: #e6e6e6;;margin-top:100px;padding: 50px auto}
 

    p{margin-left: 260px;font-size:16px;line-height:60px}  
  </style>
  