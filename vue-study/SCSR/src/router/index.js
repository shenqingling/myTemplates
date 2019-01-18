import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const List = () => import('./../components/List.vue')
const Detail = () => import('./../components/Detail.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: List },
      { path: '/:id', component: Detail },
    ]
  })
}
