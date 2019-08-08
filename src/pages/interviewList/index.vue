<template>
  <div class="wrap">
     <div class="header">
        <span v-for="(item,index) in title" :key="index" :class="{active:index===ind}"  @click="changeTitle(index)">
          {{item}}
        </span>
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
      title:["未开始","已打卡","已放弃","全部"],
      ind:0
    }
  },
  computed:{
    
  },
  methods:{
    //改变头部：
    changeTitle(index){
      this.ind=index
    },
    ...mapActions({
      getList:'interviewList/getList'
    })
  },
  created(){
   this.getList()
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
</style>
