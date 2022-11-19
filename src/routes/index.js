import * as VueRouter from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/HomePage.vue'),
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
            layout: 'AdminLayout',
        },
    },
]

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})