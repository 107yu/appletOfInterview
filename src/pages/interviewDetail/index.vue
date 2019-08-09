<template>
  <form class="form">
    <ul>
      <li>
        <label>面试地址:</label>
        <input type="text">
      </li>
      <li>
        <label>面试时间:</label>
        <input type="text">
      </li>
      <li>
        <label>联系方式:</label>
        <input type="text">
      </li>
      <li>
        <label>是否提醒:</label>
        <input type="text">
      </li>
      <li>
        <label>面试状态:</label>
          
      </li>
      <li>
        <label>取消提醒:</label>
        <input type="text">
      </li>
    </ul> 
    <div class="btn">
      <span>去打卡</span>  
      <span>放弃面试</span>
    </div>  
  </form>
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
    
  },
  created(){

  },
  mounted(){

  }
}
</script>
<style scoped lang="">
.form{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.btn{
  display: flex;
  justify-content: center;
}
.btn span{
  width: 40%;
}

</style>