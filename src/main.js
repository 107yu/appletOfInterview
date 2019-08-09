import Vue from 'vue'
import App from './App'
//引入 store
import store from "./store"
//picker
import InderviewList from "./components/inderviewList.vue"
import MyMap from "./components/map.vue"

Vue.config.productionTip = false
App.mpType = 'app'

//挂载store
Vue.prototype.$store=store

Vue.component('InderviewList',InderviewList)
Vue.component('MyMap',MyMap)

const app = new Vue(App)
app.$mount()
