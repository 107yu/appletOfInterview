import {addInterview} from '@/service';
const state = {
    currentCompany:"",
    currentMobile:"",
    note:"",
    flag:false
}

const actions = {
    sendInterview({commit},payload){
       addInterview(payload).then(res=>{
        if(res.code === 0){
            commit("changeFlag",true)
            wx.showModal({
                title: '提示',
                content: '添加面试成功',
                success (res) {
                  if (res.confirm) {
                    wx.navigateTo({
                        url:"/pages/interviewList/main"
                      })
                    }
                    commit("changeFlag",false)
                  } 
              })
           }
       })   
    }
}

const mutations = {
    changeFlag(state,payload){
        state.flag = payload;
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}