import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import store from '@/store';
import Songs from '../pages/Songs.vue';
import AuthPage from '../pages/AuthPage.vue';
import { auth } from '@/services/userService';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Songs,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/start',
        component: AuthPage,
        meta: {
            requiresAuth: false,
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

    if (requiresAuth && !auth.currentUser) {
        next('/start');
    } else {
        next();
    }
});

export default router;
