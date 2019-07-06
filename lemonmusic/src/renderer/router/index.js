import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default
    // },
    {
      path:'/',
      name:'login',
      component:Login
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
