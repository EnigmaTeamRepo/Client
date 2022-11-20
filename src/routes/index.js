import * as VueRouter from 'vue-router'
import authMiddleware from './middlewares/authMiddleware'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/HomePage.vue'),
        meta: {
            layout: 'HomeLayout',
        },
    },
    {
        path: '/Analytics',
        name: 'Analytics',
        component: () => import('../pages/AnalyticsPage.vue'),
        meta: {
            layout: 'HomeLayout',
        },
    },
    {
        path: '/PayIn-Out',
        name: 'PayIn-Out',
        component: () => import('../pages/PayInOutPage.vue'),
        meta: {
            layout: 'HomeLayout',
        },
    },

    {
        path: '/Account',
        name: 'Account',
        component: () => import('../pages/AccountPage.vue'),
        meta: {
            layout: 'DefaultLayout',
        },
    },

    {
        path: '/History',
        name: 'History',
        component: () => import('../pages/HistoryPage.vue'),
        meta: {
            layout: 'DefaultLayout',
        },
    },

    {
        path: '/Buy-sell',
        name: 'Buy-sell',
        component: () => import('../pages/BuySellPage.vue'),
        meta: {
            layout: 'DefaultLayout',
        },
    },
    {
        path: '/CreateAccount',
        name: 'CreateAccount',
        component: () => import('../pages/CreateAccountPage.vue'),
        meta: {
            layout: 'DefaultLayout',
        },
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: () => import('../pages/SignUpPage.vue'),
        meta: {
            layout: 'DefaultLayout',
            middleware: {
                ignore: [authMiddleware],
            },
        },
       
    },

    {
        path: '/SignIn',
        name: 'SignIn',
        component: () => import('../pages/SignInPage.vue'),
        meta: {
            layout: 'DefaultLayout',
            middleware: {
                ignore: [authMiddleware],
            },
        },
    },

    {
        path: '/Admin',
        name: 'AdminPage',
        component: () => import('../pages/AdminPage.vue'),
        meta: {
            layout: 'HomeLayout',
        },
    },
]

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})