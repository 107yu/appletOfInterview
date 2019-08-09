import {interviewList} from '@/service';

const state = {
    list:[],
}

const mutations = {
    interList(state,payload){
        console.log(payload)
        state.list = payload
    }
}

const actions = {
    async getList({commit},payload){
        let data = null;
        if(payload===2){
            data = await  interviewList()
        }else{
            data = await  interviewList({status:payload})
        }
        commit("interList",data.data)
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}
