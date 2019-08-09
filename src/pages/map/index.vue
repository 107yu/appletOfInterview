<template>
  <div class="wrap">
      <div class="address">
        <MyMap></MyMap>
        <cover-view class="user"  @click="goToUser">
          <cover-image class="img" src="/static/images/wode1.png" />
        </cover-view>
      </div>
      <div class="goToInterview" @click="goToInterview">添加面试</div>
  </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
export default {
  data(){
    return {

    }
  },
  computed:{
    ...mapState({
      longitude : state=>state.map.longitude,
      latitude : state=>state.map.latitude
    })
  },
  methods:{
    //点击去添加面试页面
    goToInterview(){
      wx.navigateTo({
        url:'/pages/addList/main'
      })
    },
    //点击去个人信息页面
    goToUser(){
      wx.navigateTo({
        url:'/pages/login/main'
      })
    },
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
  .goToInterview{
    width: 100%;
    height: 90rpx;
    background: #000;
    color:#fff;
    text-align: center;
    line-height: 90rpx;
  }
  .address{
    flex: 1;
  }
  .user{
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  text-align: center;
  line-height: 100rpx;
  color: #000;
  position: fixed;
  bottom: 140rpx;
  font-weight: 600;
  z-index: 999;
    right: 30rpx;
  background: #fff;
}
</style>
