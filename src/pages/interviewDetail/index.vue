<template>
  <div class="wrap">
    <ul>
      <li>
        <span>面试地址：</span>
        <p>{{address}}</p>
      </li>
      <li>
        <span>面试时间：</span>
        <p>{{interviewDetail.start_time}}</p>
      </li>
      <li>
        <span>联系方式：</span>
        <p>{{interviewDetail.phone}}</p>
      </li>
      <li>
        <span>是否提醒：</span>
        <p>{{interviewDetail.remind===-1?"未提醒":interviewDetail.remind===0?"已提醒":"取消提醒"}}</p>
      </li>
      <li>
        <span>面试状态：</span>
        <p>{{interviewDetail.status===-1?"未开始":interviewDetail.status===0?"已打卡":"已放弃"}}</p>
      </li>
      <li :class="{hidden:interviewDetail.status===1||interviewDetail.status===0}">
        <span>取消提醒：</span>
        <span :class='["cancel", interviewDetail.remind===1?"show":""]' @click="changeRemind()">
          <b></b>
        </span>
      </li>
    </ul> 
    <div :class='["btn",interviewDetail.status===1||interviewDetail.status===0?"hidden":""]'>
      <span class="cardBtn" @click="punchClock">去打卡</span>  
      <span class="interviewBtn" @click="abandonInterview">放弃面试</span>
    </div>  
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
      address: state=>state.interviewDetail.address,
     })
  },
  methods:{
    ...mapActions({
      getDetail: "interviewDetail/sendInterview",
      changeInterview: "interviewDetail/changeInterview", 
    }), 
    //是否提醒
    changeRemind(){
      this.changeInterview({
        id: this.interviewDetail.id,
        info:{
           remind: this.interviewDetail.remind===1?-1:1
        }
      })
      this.getDetail(this.$root.$mp.query.id)
    },
    //放弃面试
    abandonInterview(){
      wx.showModal({
        title: '温馨提示',
        content: '确定要放弃本次面试吗？',
        success: (res)=> {
          if (res.confirm) {
             this.changeInterview({
              id: this.interviewDetail.id,
              info:{
                status: 1
              }
            })
            this.getDetail(this.$root.$mp.query.id)
          } 
        }
      })
     
    },
    //去打卡：
    punchClock(){
      wx.navigateTo({
        url:"/pages/punchClock/main",
      })
    }
  },
  created(){
   
  },
  mounted(){
    this.getDetail(this.$root.$mp.query.id)
  }
}
</script>
<style scoped lang="">
.wrap{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.btn{
  margin-top: 30rpx;
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
}
.btn span{
  width: 40%;
  text-align: center;
  height: 80rpx;
  line-height: 80rpx;
   color:#fff;
}
.cardBtn{
  background: rgb(91, 91, 243);
}
.interviewBtn{
  background: rgb(236, 75, 75);
}
ul{
  border-top: 1px solid #ccc;
}
li{
  display: flex;
  border-bottom: 1px solid #cccc;
  height: 90rpx;
  align-items: center;
  padding:0 20rpx;
}
li>span{
  flex-shrink: 0;
  margin-right: 10rpx;
}
p{
  flex:1;
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
}
.cancel{
  width: 100rpx;
  height: 50rpx;
  border-radius: 30rpx;
  border:1px solid #ccc;
}
.cancel b{
  width: 50rpx;
  height: 50rpx;
  display: inline-block;
  border-radius: 50%;
  background: #fff;
  border:1px solid #ccc;
}
.show{
  background: green;
}
.show b{
  transform: translate(50rpx)
}
.hidden{
  display: none;
}
</style>