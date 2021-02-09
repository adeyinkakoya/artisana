// Import views here.
//import Home from '../views/Home.vue'
//import About from '../views/About.vue'

//import { redirectToDashboard } from './middlewares'

export const routes = [{
        path: '/',
        name: 'landing',
        component: () =>
            import ('../views/Landing.vue'),
        meta: {
            desc: "Landing",
            isGuest: true,
            layout: "landing"
        }

    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/Home.vue'),
        meta: {
            desc: "Login",
            step: 1,
            isGuest: true
        },
        //beforeEnter: redirectToDashboard
    },

    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../views/Home.vue'),
        meta: {
            desc: "Register",
            step: 2,
            isGuest: true
        },
        //beforeEnter: redirectToDashboard
    },

    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () =>
            import ('../views/Home.vue'),
        meta: {
            desc: "Forgot Password",
            step: 3,
            isGuest: true
        },
        //beforeEnter: redirectToDashboard
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () =>
            import ('../views/user/Dashboard.vue'),
        meta: {
            desc: "Dashboard",
            isAuth: true,
            layout: 'page'
        }
    },
    {
        path: '*',
        component: () =>
            import ( /* webpackChunkName: "notfound" */ '../views/NotFound.vue'),
        meta: {
            layout: "page"
        }
    }

]