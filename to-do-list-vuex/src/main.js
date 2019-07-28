import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import axios from 'axios'
import store from './store/store'
import router from './store/route'
import Button from "ant-design-vue/lib/button";
import "ant-design-vue/dist/antd.css";
Vue.prototype.$axios = axios
Vue.component(Button.name, Button);
Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
