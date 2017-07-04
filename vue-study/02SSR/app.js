import Vue from 'vue'
import { sync } from 'vuex-router-sync'
// 路由
import { createRouter } from './route'
// store
import { createStore } from './store'
// 总页面
import Index from './components/Index.vue'

export function createApp(context) {
    const router = createRouter()
    const store = createStore()
    // 同步路由状态(route state)到 store
    sync(store, router)
	const app = new Vue({
		router,
		store,
        // render: h => h(Index),
    	template: '<Index />',
		components: {
	        Index
	    }
	})
	return { app, router, store }
}
