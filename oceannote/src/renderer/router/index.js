/*
 * @Descripttion: 
 * @version: V0.0.1
 * @Author: OCEAN.GZY
 * @Date: 2022-07-14 22:37:27
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2022-07-14 23:26:42
 */
import Vue from 'vue'
import Router from 'vue-router'
import HomeView from "../views/HomeView.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
  ]
})
