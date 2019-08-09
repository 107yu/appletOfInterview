import {interviewDetail,updateInterview} from '@/service';
import moment from "moment"
const state = {
    detail:{},
    address:""
}

const mutations = {
    getInterviewDetail(state,payload){
        state.detail = payload
        state.address = payload.address.address 
    }
}

const actions = {
    //获取面试详情
    async sendInterview({commit},payload){
        let data = await interviewDetail(payload)
        if(data.data.address.includes('{')){
            data.data.address = JSON.parse(data.data.address)
        } else{
            data.data.address = {"address": data.data.address}
        }
        data.data.start_time = moment(Number(data.data.start_time)).format("YYYY-MM-DD hh:mm")
        commit("getInterviewDetail",data.data)
    },
    //更改面试信息：
    async changeInterview({commit},payload){
        let data = await updateInterview(payload)
        if(data.code===0){
            
        }
    }

}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}
