import {interviewList} from '@/service';
import moment from "moment"
const state = {
    list:[],
}

const mutations = {
    interList(state,payload){
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
        data.data.forEach(item=>{
            if(item.address.includes('{')){
                item.address=JSON.parse(item.address)
            }else{
                item.address={"address":item.address}
            }
            item.start_time = moment(Number(item.start_time)).format("YYYY-MM-DD hh:mm")
        })
        commit("interList",data.data)
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}
