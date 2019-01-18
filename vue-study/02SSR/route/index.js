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

export function createRouter(){
    return new VueRouter({
        mode: 'history',
        routes
    })
}