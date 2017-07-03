import Vue from 'vue'
// 路由
import router from './route'
// store
import store from './store'
// 总页面
import Index from './components/Index.vue'

export function createApp(context) {
	const app = new Vue({
		router,
		store,
    	template: '<Index />',
		components: {
	        Index
	    }
	})
	return { app };
}
