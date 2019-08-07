<template>
  <div class="login">
      <div class="avatar">
         <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1565096932&di=02e2e78aa959d2eafe4812ef0d9cbb68&src=http://wx.qlogo.cn/mmopen/ZMdxSDafpxTCjhFqJwQvbvicQpeMCqe2iboVXnoySSibkoE6gGjgyiaHdpXNNjrPIKAoFjeMXCrWRicdCmIibzzichKoe2Lywt7Zo3G/0" alt="">
          <span>11111111111</span>
      </div>
      <ul class="info">
          <li @click="toList">
            <div>
              <i class="iconfont icon-jinggao2"></i>
              <span>我的面试</span>
            </div>
            <i class="iconfont icon-fanhui2"></i>
          </li>
          <li>
             <div>
              <i class="iconfont icon-jinggao2"></i>
              <span>客服中心</span>
            </div>
            <i class="iconfont icon-fanhui2"></i>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  props:{

  },
  components:{

  },
  data(){
    return {

    }
  },
  computed:{

  },
  methods:{
    toList(){
      wx.navigateTo({
        url:'/pages/list/main'
      })
    }
  },
  created(){

  },
  mounted(){

  }
}
</script>
<style scoped lang="">
.login{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.avatar{
  width: 100%;
  height: 328rpx;
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.avatar>img{
  border-radius: 50%;
  width:140rpx;
  height: 140rpx;
}
.avatar>span{
  margin-top: 20rpx;
}
.info>li{
  height: 120rpx;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 20rpx;
}
.info>li div{
  display: flex;
}
.info>li div span{
  margin-left: 20rpx;
}
i{
  font-size:40rpx;
}
.icon-jinggao2{
  color:skyblue;
}
</style>