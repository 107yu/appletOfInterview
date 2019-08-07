//模块所有的状态
const state = {
    latitude : 23.099994,//纬度
    longitude : 113.324520//经度
}

//模块内的同步改变
const mutations = {
    updateLocation(state,payload){
        state.latitude = payload.latitude;
        state.longitude = payload.longitude;
    }
}

//模块内的异步改变
const actions = {
    getLocation({commit}){
        wx.getLocation({
            type: 'wgs84',
            success (res) {
                commit("updateLocation",res)
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