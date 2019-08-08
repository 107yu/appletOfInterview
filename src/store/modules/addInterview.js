import {addInterview} from '@/service';
const state = {

}

const actions = {
    sendInterview({commit},payload){
       addInterview(payload).then(res=>{
           if(res.code===0){
               
           }
       })
    }
}

const mutations = {
    
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}