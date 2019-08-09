<template>
    <li>
        <div>
            <p class="title"  @click="goToDetail">北京八维研修学院</p>
            <span class="notStart">
                {{item.status===-1?'未开始':item.status===0?'已打卡':'已放弃'}}
            </span>
        </div>
        <div>
            <p>北京市海淀区上地软件园57号</p>
        </div>
        <div>
            <p>面试时间：2019-08-06 17:00</p>
            <span class="notRemind">未提醒</span>
        </div>
    </li>
</template>
<script>
import {mapState,mapActions,mapMutations} from "vuex"
export default {
    props:["item"],
    components:{
       
    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        goToDetail(){
            console.log(this.item)
        wx.navigateTo({
            url:'/pages/interviewDetail/main'
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
li{
    padding:0 30rpx 30rpx 30rpx;
    border-bottom: 1px solid #eee;
}
li>div{
    display: flex;
    justify-content: space-between;
    margin-top:20rpx;
}
li p{
    color: #666;
}
li .title{
    font-size: 40rpx;
    color: #000;
}
li span{
    display: inline-block;
    padding:6rpx;
    font-size: 24rpx;
}
.notStart{
    background: #eee;
}
.notRemind{
    background: rgb(236, 170, 170);
    color:red;
}
</style>