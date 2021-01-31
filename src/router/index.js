import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


import { checkAccessMiddleware, setPageTitleMiddleware } from './middlewares'

Vue.use(VueRouter)


const router = new VueRouter({
    //linkExactActiveClass: 'is-active',
    routes
})



//router.beforeEach(CheckCurrentUserStateMiddleware)
router.beforeEach(checkAccessMiddleware)
router.beforeEach(setPageTitleMiddleware)
router.beforeEach((to, from, next) => {
    if (to.name) {
        NProgress.start()
    }
    next()
})
router.afterEach((to, from) => {
    NProgress.done()
})

export default router