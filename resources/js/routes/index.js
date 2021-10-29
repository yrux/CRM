import Vue from 'vue'
import VueRouter from 'vue-router'
import baseroutes from '@/routes/baseroutes.js'
import dashboard from '@/routes/dashboard.js' 
import chat from '@/routes/chat.js' 

Vue.use(VueRouter)

const routes = [
    ...baseroutes,
    ...dashboard,
    ...chat,
]
const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes
})
export default router