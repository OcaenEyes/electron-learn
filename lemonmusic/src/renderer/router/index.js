import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../components/Index'
import Login from '../components/Login/Login'
import Landing from '../components/LandingPage/Landing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage,
    },
    {
      path:'/land',
      name:'Landing',
      component:Landing,
    },
    {
      path:'/login',
      name:'Login',
      component:Login,

    },
    // {
    //   path: '*',
    //   redirect: '/'
    // }
  ]
})
