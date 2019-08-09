<template>
   <div class="wrap">
      <div class="address">
        <MyMap></MyMap>
      </div>
      <div class="punchClock" @click="punchClock">打卡</div>
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
      interviewDetail: state=>state.interviewDetail.detail,
    })
  },
  methods:{
   //点击去添加面试页面
    punchClock(){
      let currentLatitude = this.interviewDetail.latitude
      let currentLongitude = this.interviewDetail.longitude
     
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