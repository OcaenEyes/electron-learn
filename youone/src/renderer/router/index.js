import Vue from 'vue'
import Router from 'vue-router'
import RecomendMusic from '../components/RecomendMusic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'landing-page',
      // component: require('@/components/LandingPage').default
      name: "RecomendMusic",
      component: RecomendMusic
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
