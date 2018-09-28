import Vue from 'vue'
import VueRouter from 'vue-router'
// 电影列表
const List = import('./../components/List.vue')
// 电影详情
const Detail = import('./../components/Detail.vue')

Vue.use(VueRouter)

export function createRouter(){
	const routes = [{
    	path: '/',
	    component: List
	}, {
	    path: '/:id',
	    component: Detail
	}]

	return new VueRouter({
		mode: 'history',
	    routes
	})
}
