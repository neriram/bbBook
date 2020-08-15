import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'

Vue.use(VueRouter)

export default new Router({
    routes: [
        {
            path:'/',
            name: 'Hello',
            component: HelloWorld
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        }

    ]
})