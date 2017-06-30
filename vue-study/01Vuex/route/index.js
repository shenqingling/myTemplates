import Vue from 'vue'
import VueRouter from 'vue-router'
// 电影列表
import List from './../components/List.vue'
// 电影详情
import Detail from './../components/Detail.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: List
}, {
    path: '/:id',
    component: Detail
}]

const router = new VueRouter({
    routes
})

export default router