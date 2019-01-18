import Vue from 'vue'
// 路由
import router from './route'
// store
import store from './store'
// 总页面
import Index from './components/Index.vue'

var app = new Vue({
    router,
    store,
    template: '<Index />',
    components: {
        Index
    }
}).$mount('#app')
