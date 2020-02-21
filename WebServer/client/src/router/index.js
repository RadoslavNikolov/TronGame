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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: () => import('../views/Ranking.vue')
  },
  {
    path: '/game/:id/:playerNum',
    name: 'Game',
    props: (route) => ({ gameUid: route.params.id, playerNumStr: route.params.playerNum}),
    component: () => import('../views/Game.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
