<template>
  <form @submit="submit" report-submit class="addInterview">
    <h2>面试信息</h2>
    <ul>
      <li>
        <label>公司名称</label>
        <input type="text" placeholder="请输入公司名称" v-model="currentCompany">
      </li>
      <li>
        <label>公司电话</label>
        <input type="text" placeholder="请输入面试联系人电话" v-model="currentMobile" maxlength="11">
      </li>
      <li>
        <label>面试时间</label>
        <picker
          mode="multiSelector"
          :range="dateRange"
          :value="info.date"
          @change="dateChange"
          @columnchange="columnChange"
        ><view class="date">{{dateShow}}</view>
        </picker>
        <i class="iconfont icon-jinggao2" @click="showToast"></i>
      </li>
      <li>
        <label>面试地址</label>
        <input type="text" placeholder="请选择面试地址" @click="chooseAddress" v-model="targetAddress.address">
      </li>
    </ul>
    <h2>备注信息</h2>
    <textarea  placeholder="备注信息(可选，100字以内)" maxlength="100" v-model="note"></textarea>
    <button form-type="submit">确认</button>
  </form>
</template>
<script>
import {mapState,mapActions,mapMutations} from "vuex"
const moment = require('moment');
const range = [
  [0,1,2,3,4,5,6,7,8,9],
  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
  ['00分','10分','20分','30分','40分','50分']
];
export default {
  data(){
    return {
      info: {
        date: [0,0,0],
      }
    }
  },
  computed:{
    //当前选择的地址
    ...mapState({
      targetAddress:state=>state.map.targetAddress
    }),
    // 处理面试日期
    dateRange(){
      let dateRange = [...range];
      // 如果时间是今天，过滤掉现在之前的小时
      if (!this.info.date[0]){
        dateRange[1] = dateRange[1].filter(item=>{
          return item>moment().hour();
        })
      }else{
        //如果是明天，则所有的小时都需要
        dateRange[1] = range[1]
      }
      // 格式化小时
      dateRange[1] = dateRange[1].map(item=>{
        return item+'点'
      })
      // 计算当前日期之后的十天
      dateRange[0] = dateRange[0].map(item=>{
        return moment().add(item, 'days').date()+'号'
      })
      return dateRange;//dateRange是已经修改好的时间
    },
    // 显示的日期
    dateShow(){
      return moment()
      .add(moment().hour()==23?this.info.date[0]-1:this.info.date[0], 'd')
      .add(this.info.date[1]+1, 'h')
      .minute(this.info.date[2]*10)
      .format('YYYY-MM-DD HH:mm');
    }
  },
  methods:{
    ...mapActions({
      submitInterview:"addInterview/sendInterview"
    }),
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
    },
    // 监听多列选择器每列变化
    columnChange(e){
      let {column, value} = e.target;
      let date = [...this.info.date];
      date[column] = value;
      this.info.date = date;
    },
    //点击确认--进行提交
    submit(e) {
      if(!this.currentCompany){
        wx.showToast({
        title: '请填写公司名称',
        icon: 'none',
        duration: 1000
        })
        return false;
      }
      if(!/^1[3456789]\d{9}$/.test(this.currentMobile)){
        wx.showToast({
        title: '请填写正确的手机号',
        icon: 'none',
        duration: 1000
        })
        return false;
      }
      if(!this.targetAddress){
        wx.showToast({
        title: '请填写地址信息',
        icon: 'none',
        duration: 1000
        })
        return false;
      }
      let info={
        "company" : this.currentCompany,	
        "phone" : this.currentMobile,		
        "form_id" : e.target.formId,		
        "address" : this.targetAddress.address,	
        "latitude" : this.targetAddress.location.lat*1,	
        "longitude" : this.targetAddress.location.lng*1,	
        "start_time" : moment(this.dateShow).unix()*1000*1,	
        "description" : this.note
      };
      this.submitInterview(info)
    },
  },
  created(){
     // 如果当前时间是夜里十一点之后，过滤掉今天
    if (moment().hour() == 23){
      this.info.date = [1,0,0];
    }
  }
}
</script>
<style scoped lang="">
.addInterview{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
h2{
  background: #ccc;
  padding: 20rpx;
}
ul{
   padding: 20rpx;
}
li{
  display: flex;
  padding: 20rpx 0;
  border-bottom: 1px solid #eee;
  flex-wrap: wrap;
}
li label{
  color:#aaa;
  padding-right: 10rpx;
}
li input{
  flex: 1;
  padding-left: 10rpx;
}
.icon-jinggao2{
   color:blue;
   font-size: 60rpx;
   position: absolute;
   right: 20rpx;
   z-index: 99;
}
textarea{
  width: 80%;
  border:1px solid #ccc;
  margin:20rpx;
  padding: 20rpx;
}
button{
  border: 0;
  width: 100%;
  height: 80rpx;
  text-align: center;
  line-height: 80rpx;
  background: #999;
  color:#fff;
  font-size: 40rpx;
}


</style>
