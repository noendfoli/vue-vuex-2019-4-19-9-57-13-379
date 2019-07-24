import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueRouter from 'vue-router'
import store from './store/store'
import router from './store/route'
Vue.prototype.$axios = axios

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
