import Vue from 'vue'
// 路由
import router from './route'
// 总页面
import Index from './components/Index.vue'

var app = new Vue({
    router,
    template: '<Index />',
    components: {
        Index
    }
}).$mount('#app')
