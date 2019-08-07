<template>
  <div class="wrap">
      <map></map>
      <button class="goToInterview" @click="goToInterview">添加面试</button>
  </div>
</template>
<script>
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

  },
  methods:{
    goToInterview(){
      wx.navigateTo({
        url:'/pages/login/main'
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
</style>
