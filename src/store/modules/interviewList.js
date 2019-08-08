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
    getList({commit},payload){
      interviewList(payload).then(res=>{
        if(res.code===0){
            commit("interList",res.data)
        }
      })
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}
