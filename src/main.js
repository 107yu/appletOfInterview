import Vue from 'vue'
import App from './App'
//引入 store
import store from "./store"
//picker
import Picker from "./components/picker.vue"
Vue.config.productionTip = false
App.mpType = 'app'

//挂载store
Vue.prototype.$store=store

Vue.component('myPicker',Picker)
const app = new Vue(App)
app.$mount()
