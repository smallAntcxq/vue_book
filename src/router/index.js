import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Cart from '@/views/Cart.vue'
import Member from '@/views/Member.vue'
import Search from '@/views/Search.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/Home',
        component: Home
    },
    {
        path: '/Cart',
        component: Cart
    },
    {
        path: '/Member',
        component: Member
    },
    {
        path: '/Search',
        component: Search
    },
]

const router = new VueRouter({
    routes
})

export default router
