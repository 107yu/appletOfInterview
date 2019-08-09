<template>
  <div class="wrap">
      <map
        id="map"
        show-location
        :longitude="longitude"
        :latitude="latitude"
      ></map>
        <cover-view class="btn user"  @click="goToUser">
          <cover-image class="img" src="/static/images/user.png" />
        </cover-view>
        <cover-view class="btn location" @click="location">
          <cover-image class="img" src="/static/images/location.png" />
        </cover-view>
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

    //点击获取当前位置：
    ...mapActions({
      location : "map/getLocation",
    })
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
  .wrap>map{
    width: 100%;
    flex: 1;
  }
  .goToInterview{
    width: 100%;
    height: 92rpx;
    background: #000;
    color:#fff;
    text-align: center;
    line-height: 92rpx;
  }
  .btn{
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
  }
  .btn i{
    font-size: 34px;
    color: rgb(27, 161, 214);
  }
  .location{
     left: 30rpx;
  }
  .user{
    right: 30rpx;
    background: #fff;
  }
  .location .img{
    width: 80rpx;
    height:100rpx;
  }
</style>
