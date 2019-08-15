<template>
    <div>
         <map 
        show-location
        show-compass
        :longitude="longitude"
        :latitude="latitude"
        subkey="X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL"
        :circles="circle"
        :include-points="points"
        :markers="markers"
        @markertap="markertap"
        @regionchange="regionChange"
        ></map>
        <cover-view class="location" @click="location">
          <cover-image class="img" src="/static/images/lo2.png" />
        </cover-view>
    </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
import getDistance from "../utils/distance.js"  //计算位置
export default {
    props:{
        markers: {
            type: Array,
            default: []
        },
        markertap: {
            type: Function,
            default: ()=>{}
        },
        reginonChange: {
            type: Function,
            default: ()=>{}
        },
        reLocation: {
            type: Boolean,
            default: false
        },
        updateDistance: {
            typef: Function,
            default: ()=>{}
        }
    },
    components:{

    },
    data(){
        return {
            distance: 0,
        }
    },
    computed:{
        //用户的位置：
        ...mapState({
            longitude: state=>state.map.longitude,
            latitude: state=>state.map.latitude
        }),
        // circle(){
        //     if (!this.markers.length){
        //         return []
        //     }else{
        //         return [{
        //             ...this.markers[0],
        //             color:  this.distance>100?'#C9394A': '#197DBF',
        //             fillColor: 'rgba(0,0,0, .3)',
        //             radius: 100,
        //             strokeWidth: 2
        //         }]
        //     }
        // }
    },
    methods:{
        //点击获取当前位置：
        ...mapActions({
            location : "map/getLocation",
        }),
        // goCurrent(){
        //     getAuth('scope.userLocation', async ()=>{
        //         let location = await getLocation();
        //         this.location = location;
        //         console.log('scope.userLocation...', this.location, this.markers[0]);
        //         // 重新计算距离
        //         if (this.updateDistance){
        //         this.distance = getDistance(this.location.latitude, this.location.longitude, this.markers[0].latitude, this.markers[0].longitude)
        //         this.updateDistance(this.distance)
        //         }
        //     })
        // }
    },
    created(){

    },
    mounted(){
        this.location ()
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