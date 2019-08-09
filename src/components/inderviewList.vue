<template>
    <li>
        <div>
            <p class="title"  @click="goToDetail">{{item.company}}</p>
            <span class="notStart">
                {{item.status===-1?'未开始':item.status===0?'已打卡':'已放弃'}}
            </span>
        </div>
        <div>
            <p>{{item.address.address}}</p>
        </div>
        <div>
            <p>面试时间：{{item.start_time}}</p>
            <span class="notRemind">{{item.remind===-1?'未提醒':item.remind===0?'已提醒':'取消提醒'}}</span>
        </div>
    </li>
</template>
<script>
import {mapState,mapActions,mapMutations} from "vuex"
export default {
    props:["item"],
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        goToDetail(){
            wx.navigateTo({
                url:`/pages/interviewDetail/main?id=${this.item.id}`
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
    font-size:28rpx;
}
.notStart{
    background: #eee;
}
.notRemind{
    background: rgb(236, 170, 170);
    color:red;
}
</style>