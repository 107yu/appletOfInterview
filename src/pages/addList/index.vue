<template>
  <div class="addInterview">
     <h2>面试信息</h2>
      <div class="form">
        <div>
          <span>公司名称</span>
          <input type="text" placeholder="请输入公司名称" v-model="name">
        </div>
        <div>
          <span>公司电话</span>
          <input type="text" placeholder="请输入面试联系人电话" v-model="mobile">
        </div>
        <div>
          <span>面试时间</span>
          <input type="text" placeholder="请选择面试时间" v-model="time">
           <i class="iconfont icon-jinggao2" @click="showToast"></i>
        </div>
        <div>
          <span>面试地址</span>
          <input type="text" placeholder="请选择面试地址" @focus="chooseAddress" v-model="targetAddress">
        </div>
      </div>
      <h2>备注信息</h2>
      <div class="form textarea">
          <textarea  cols="30" rows="10" placeholder="备注信息(可选，100字以内)" maxlength="100" v-model="note"></textarea>
      </div>
      <div class="confirm" @click="confirm">确认</div>
      <myPicker></myPicker>
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
      name:"",
      mobile:"",
      time:"",
      note:"",
    }
  },
  computed:{
    ...mapState({
      targetAddress:state=>state.map.targetAddress
    })
  },
  methods:{
    //确认按钮
   confirm(){
     wx.navigateTo({
        url:"/pages/interviewList/main"
      })
   },

   //选择地址
   chooseAddress(){
      wx.navigateTo({
        url:"/pages/address/main"
      })
   },

   //点击警告出现提示框
   showToast(){
     wx.showToast({
        title: '在面试前一个小时，我们会通知哦',
        icon: 'none',
        duration: 1000
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
h2{
  background: #ccc;
  padding: 20rpx;
}
.form{
   padding: 20rpx;
}
.form>div{
  display: flex;
  padding: 20rpx 0;
  border-bottom: 1px solid #eee;
  flex-wrap: wrap;
}
.form>div>span{
  color:#aaa;
  padding-right: 10rpx;
}
.form>div input{
  flex: 1;
  padding-left: 10rpx;
  color:#aaa;
}
.icon-jinggao2{
   color:blue;
   font-size: 60rpx;
   position: absolute;
   right: 20rpx;
   z-index: 99999;
}
.textarea{
  border:1px solid #ccc;
  margin:20rpx;
}
.confirm{
  width: 100%;
  height: 80rpx;
  text-align: center;
  line-height: 80rpx;
  background: #999;
  color:#fff;
  font-size: 40rpx;
}
</style>
