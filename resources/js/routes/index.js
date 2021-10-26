import Vue from 'vue'
import VueRouter from 'vue-router'
import baseroutes from '@/routes/baseroutes.js'
import dashboard from '@/routes/dashboard.js' 
Vue.use(VueRouter)

const routes = [
    ...baseroutes,
    ...dashboard,
]
const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next, store) => {
    var isAuthenticated = localStorage.getItem('auth_token')?true:false;
    if (to.name !== 'auth.login' && !isAuthenticated) next({ name: 'auth.login' })
    if (to.name === 'auth.login' && isAuthenticated) next({ name: 'auth.dashboard' })
    else next()
})

export default router