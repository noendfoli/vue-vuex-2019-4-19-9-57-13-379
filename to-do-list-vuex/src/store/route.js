import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Welcome from '../components/welcome.vue'

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
