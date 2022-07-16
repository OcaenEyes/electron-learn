/*
 * @Description: .
 * @Version: 0.0.1
 * @Autor: OCEAN.GZY
 * @Date: 2022-07-15 23:43:11
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2022-07-16 10:02:10
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MarkdownCore from '../views/MarkdownCore.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MarkdownCore',
    component: MarkdownCore
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
