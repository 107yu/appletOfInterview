import {addInterview} from '@/service';
const state = {
    addStatus: false,
    currentCompany:"",
    currentMobile:"",
    note:""
}

const actions = {
    sendInterview({commit},payload){
       addInterview(payload).then(res=>{
        if(res.code === 0){
            wx.showModal({
                title: '提示',
                content: '添加面试成功',
                success (res) {
                  if (res.confirm) {
                    wx.navigateTo({
                        url:"/pages/interviewList/main"
                      })
                    }
                  } 
              })
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