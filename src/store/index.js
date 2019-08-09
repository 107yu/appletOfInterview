import Vue from "vue";
import Vuex from "vuex"
import CreateLogger from "vuex/dist/logger"

//引入store子模块
import map from "./modules/map"
import addInterview from "./modules/addInterview"
import interviewList from "./modules/interviewList"
import user from "./modules/user"
import interviewDetail from "./modules/interviewDetail"

Vue.use(Vuex);

export default new Vuex.Store({
    modules : {
        map,
        addInterview,
        interviewList,
        user,
        interviewDetail,
    },
    plugins : [CreateLogger()]
})