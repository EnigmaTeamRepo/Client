import * as VueRouter from 'vue-router'

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
        },
    },

    {
        path: '/SignIn',
        name: 'SignIn',
        component: () => import('../pages/SignInPage.vue'),
        meta: {
            layout: 'DefaultLayout',
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