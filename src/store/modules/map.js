import QQMapWX from '@/utils/qqmap-wx-jssdk.min.js';

// 实例化一下
const qqMapSdk = new QQMapWX({
    key: 'UCGBZ-XN5KU-FUNVX-2JHW7-QJG3S-65F5I' // 必填
  });

//模块所有的状态
const state = {
    latitude : 23.099994,  //纬度
    longitude : 113.324520, //经度
    addressList:[], //搜索地址列表
    targetAddress:"" //回传地址
}

//模块内的同步改变
const mutations = {

    //定位地址
    updateLocation(state,payload){
        state.latitude = payload.latitude;
        state.longitude = payload.longitude;
    },

    //搜索位置
    search(state,payload){
        state.addressList=payload;
    },

    //回传地址
    targetAddress(state,payload){
        state.targetAddress=payload;
        wx.navigateTo({
            url:"/pages/addList/main"
          })
    }
}

//模块内的异步改变
const actions = {
    
    //定位信息
    getLocation({commit}){
        wx.getLocation({
            type: 'wgs84',
            success (res) {
                commit("updateLocation",res)
            }
        })
    },

    //搜索位置
    getSuggestion({commit}, payload){
        qqMapSdk.getSuggestion({
          keyword: payload,
          success: res=>{
            commit("search",res.data)
            console.log('getSuggestion...', res);
          }
        })
      }
}

export default {
    namespaced:true,//命名空间--可以不写，默认true
    state,
    mutations,
    actions
}