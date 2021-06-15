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
    path: '/listfavoritos',
    name: 'ListFavoritos',
    component: () => import(/* webpackChunkName: "ListFavoritos" */ '../views/ListFavoritos.vue')
  },
  {
    path: '/detalhesmovie/:id',
    name: 'detalhesmovie',
    component: () => import(/* webpackChunkName: "DetalhesMovie" */ '../views/DetalhesMovie.vue')
  },
  {
    path: '/moviesearch',
    name: 'MovieSearch',
    component: () => import(/* webpackChunkName: "DetalhesMovie" */ '../views/MovieSearch.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes
 
})

export default router
