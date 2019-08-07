<template>
  <div class="wrap">
      <map
        id="map"
        show-location
        :longitude="longitude"
        :latitude="latitude"
      ></map>
      <cover-view class="play">
        <button class="location" @click="location">定位</button>
      </cover-view>
      <button class="goToInterview" @click="goToInterview">添加面试</button>
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
  }
  .location{
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
    text-align: center;
    line-height: 100rpx;
    background: #fff;
    color: #000;
    position: fixed;
    bottom: 100rpx;
    right: 50rpx;
    font-weight: 600;
  }
</style>
