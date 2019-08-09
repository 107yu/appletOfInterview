<template>
   <div class="wrap">
      <MyMap class="map"></MyMap>
      <div class="goToInterview" @click="goToInterview">打卡</div>
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
       
    }
  },
  computed:{
    ...mapState({
      interviewDetail: state=>state.interviewDetail.detail
    })
  },
  methods:{
   //点击去添加面试页面
    goToInterview(){
      console.log(this.interviewDetail)
      // wx.navigateTo({
      //   url:'/pages/addList/main'
      // })
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
</style>