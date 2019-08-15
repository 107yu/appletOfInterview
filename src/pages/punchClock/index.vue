<template>
   <div class="wrap">
      <div class="address">
        <MyMap :markers="markers" :updateDistance="updateDistance"></MyMap>
      </div>
      <div class="punchClock" @click="goSign">打卡</div>
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
       distance: 0
    }
  },
  computed:{
    //当前面试的详细信息
    ...mapState({
      interviewDetail: state=>state.interviewDetail.detail,
    }),
    distance(){
      return getDistance(this.interviewDetail.latitude, this.interviewDetail.longitude)
    },
    markers(){
      if (this.interviewDetail && Object.keys(this.interviewDetail)){
        return [{
          iconPath: '/static/images/job.png',
          latitude: this.interviewDetail.latitude,
          longitude: this.interviewDetail.longitude,
          title: this.interviewDetail.company,
          width: 20,
          height: 20
        }]
      }else{
        return []
      }
    }
  },
  methods:{
   
    // goSign(){
    //   let currentLatitude = this.interviewDetail.latitude
    //   let currentLongitude = this.interviewDetail.longitude
     
    // },
    ...mapActions({
        changeInterview : "interviewDetail/changeInterview",
    }),
    updateDistance(distance){
      console.log('distance...', distance);
      this.distance = distance;
    },

    //点击打卡
    async goSign(){
      let distance = this.distance;
      if (this.distance < 100){
        let result = await this.changeInterview({
          id: this.interviewDetail.id,
          params: {
            status: 0,
          }
        })
        console.log('result...', result);
        wx.showToast({
          title: '打卡成功', //提示的内容,
          icon: 'none' //图标,
        });
      }else{
          if (this.distance > 1000){
            distance = (this.distance/1000).toFixed(2)+'公里'
          }else{
            distance = this.distance+'米'
          }
          console.log('distance...', distance, this.distance);
          wx.showToast({
            title: `你距目的地还有${distance},暂时还不能打卡`, //提示的内容
            icon: 'none'
          });
      }
    }
  },
  created(){

  },
  mounted(){
  //   async onShow(){
  //     // 修改标题
  //     wx.setNavigationBarTitle({ title: '打卡: '+this.info.company });
  //   },
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
  .punchClock{
    width: 100%;
    height: 92rpx;
    background: #000;
    color:#fff;
    text-align: center;
    line-height: 92rpx;
  }
  .address{
    flex: 1;
  }
</style>