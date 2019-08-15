<template>
  <div class="login">
      <div class="avatar">
         <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1565096932&di=02e2e78aa959d2eafe4812ef0d9cbb68&src=http://wx.qlogo.cn/mmopen/ZMdxSDafpxTCjhFqJwQvbvicQpeMCqe2iboVXnoySSibkoE6gGjgyiaHdpXNNjrPIKAoFjeMXCrWRicdCmIibzzichKoe2Lywt7Zo3G/0" alt="">
          <span>{{phone}}</span>
      </div>
      <ul class="info">
          <li @click="toInterviewList">
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
            <button open-type="openSetting" class="setting">设置</button>
          </li>
      </ul>
      <!-- <div v-if="!show" class="getphone">
        <div class="getPhoneBtn">
            <p>为了更好地获取我们的服务，我们需要获取您的手机号</p>
            <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">确定</button>
        </div>
      </div> -->
  </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from "vuex"
export default {
  props:{

  },
  components:{

  },
  data(){
    return {
        show:false
    }
  },
  computed:{
    ...mapState({
      phone: state=>state.user.phone
    }),

  },
  methods:{
  toInterviewList(){
    wx.navigateTo({
      url:'/pages/interviewList/main'
    })
  },
  ...mapActions({
    sendDecrypt:"user/sendDecrypt"
  }),
  getPhoneNumber (e) {
    let {iv,encryptedData} = e.target;
    if(iv){
      this.sendDecrypt({
        iv,
        encryptedData
      })
      this.show=true
    } else {
      this.show=true;
    }
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
  position: relative;
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
.getphone{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
  position: absolute;
  top:0;
}
.getPhoneBtn{
  background: #fff;
  width: 400rpx;
  height: 200rpx;
  position: absolute;
  top:0;
  left:0;
  bottom: 0;
  right: 0;
  margin:auto;
}
.getPhoneBtn p{
   padding: 10rpx;
}
.getPhoneBtn button{
  width: 100%;
  border:0;
  background: blue;
  color:#fff;
}
.setting{
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  left:0;
  opacity: 0;
  z-index: 999;
}
</style>