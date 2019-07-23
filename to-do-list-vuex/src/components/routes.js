import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from  './Home'
import Welcome from './welcome'
Vue.use(VueRouter)
export default new VueRouter({
    routes: [
      {
        path: '/home/:username',
        name: 'home',
        props: true,
        component: Home
      },
      {
        path: '/welcome',
        name: 'welcome',
        props: true,
        component: Welcome
      }
    ]
  })