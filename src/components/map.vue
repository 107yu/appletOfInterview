<template>
    <div>
         <map 
        show-location
        :longitude="longitude"
        :latitude="latitude"
        ></map>
        <cover-view class="location" @click="location">
          <cover-image class="img" src="/static/images/lo2.png" />
        </cover-view>
    </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
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
            longitude : state=>state.map.longitude,
            latitude : state=>state.map.latitude
        })
    },
    methods:{
         //点击获取当前位置：
        ...mapActions({
            location : "map/getLocation",
        })
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
div{
    width: 100%;
    height: 100%;
}
map{
    width: 100%;
    height: 100%;
}
.location{
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
    text-align: center;
    line-height: 100rpx;
    color: #000;
    position: fixed;
    bottom: 140rpx;
    font-weight: 600;
    z-index: 999;
    left: 30rpx;
  }

</style>