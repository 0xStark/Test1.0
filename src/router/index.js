import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/doc',
    name: 'Doc',
    component: () => import(/* webpackChunkName: "about" */ '../views/Doc.vue')
  },
  {
    path: '/bounty',
    name: 'Bounty',
    component: () => import(/* webpackChunkName: "about" */ '../views/Bounty.vue')
  },
  {
    path: '/bountydetail/:id',
    name: 'BountyDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/BountyDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
