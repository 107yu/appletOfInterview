import {getdata} from "@/service"
const state = {
    phone:"",
}

const mutations = {
    getPhone(state,payload){
        state.phone = payload
    }
}

const actions = {
    async sendDecrypt({commit},payload){
        let data = await getdata(payload)
        if(data.code===0){
            commit("getPhone",data.data.phoneNumber)
        }
    }
}

export default {
    namespaced:true,//命名空间--可以不写，默认true
    state,
    mutations,
    actions,
}