<template>
  <div class="wrap">
     <div class="header">
        <span>北京</span>
        <input type="text" placeholder="面试地址"  v-model="value" @input="getSuggestion(value)">
     </div>
     <ul>
          <li v-for="(item,index) in addressList" :key="index" @click="getAddress(item)">
            <span><img src="/static/images/location.svg" alt=""></span>
            <div>
              <p>{{item.title}}</p>
              <span>{{item.address}}</span>
            </div>
          </li>
     </ul>
  </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from "vuex"
import {debounce , throttle} from "../../utils/debounce"
export default {
  props:{

  },
  components:{

  },
  data(){
    return {
      value:""
    }
  },
  computed:{
    //搜索地址之后返回的列表
    ...mapState({
      addressList:state=>state.map.addressList.filter((item)=>item.city==="北京市")
    })
  },
  methods:{
    //搜索地址
    ...mapActions({
      sendSuggestion:"map/getSuggestion",
    }),
    //防抖
    getSuggestion(value){
      
      this.sendSuggestion(value)
    },
    //点击获取--回传地址
    ...mapMutations({
       sendAddress:"map/targetAddress"
    }),
    getAddress(item){
      wx.navigateBack({
        delta:1
      })
      this.sendAddress(item)
    }
  },
  created(){
     
  },
  mounted(){

  }
}
</script>
<style scoped lang="">
  .wrap{
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .header{
    display: flex;
    border-top:1px solid #aaa;
    border-bottom: 1px solid #aaa;
    padding: 20rpx;
  }
  .header span{
    padding-right:20rpx;
    border-right: 1px solid #ccc;
  }
  .header input{
    flex: 1;
    padding-left: 20rpx;
  }
  li{
    display: flex;
    border-bottom: 1px solid #aaa;
    padding:20rpx;
    align-items: center;
  }
  li div{
    padding: 0 20rpx;
  }
  li div>span{
    color: #aaa;
  }
  img{
    width: 44rpx;
    height: 44rpx;
  }
</style>
