<template>
  <div class="wrap">
     <div class="header">
        <span v-for="(item,index) in title" :key="index" :class="{active:index===ind}"  @click="changeTitle(index)">
          {{item.title}}
        </span>
     </div>
     <scroll-view scroll-y style="height:100%" class="content">
        <ul class="menu" v-if="interviewList">
          <InderviewList v-for="(item,index) in interviewList" :key="index" :item="item"></InderviewList>
        </ul>
     </scroll-view>
  </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from "vuex"
export default {
  data(){
    return {
      title:[
        {title:"未开始",status:-1},
        {title:"已打卡",status:0},
        {title:"已放弃",status:1},
        {title:"全部",status:2}
        ],
      ind:0
    }
  },
  computed:{
    ...mapState({
       interviewList: state=>state.interviewList.list 
    })
  },
  methods:{
    //改变头部：
    changeTitle(index){
      this.ind=index;
      this.getList(this.title[this.ind].status)
    },
    ...mapActions({
      getList:'interviewList/getList', //获取数据
    }),
    //点击进入详情页
    goToDetail(item){
      console.log(item.id)
    }
  },
  created(){
  
  },
  mounted(){
    this.getList(this.title[this.ind].status)
  }
}
</script>
<style scoped lang="">
 .wrap{
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
 }
.header{
  width: 100%;
  height: 100rpx;
  display: flex;
}
.header span{
  margin:0 30rpx;
  flex: 1;
  text-align: center;
  height: 100rpx;
  line-height: 100rpx;
}
.header .active{
  color:blue;
  border-bottom: 1px solid blue;
}
.content{
  flex: 1;
}
</style>
