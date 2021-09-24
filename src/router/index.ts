import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import store from '@/store';
import SongList from '../components/SongList.vue';
import Auth from '../pages/Auth.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: SongList,
    },
    {
        path: '/start',
        component: Auth,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.path === '/start') {
        next();
        return;
    }
    if (!store.getters.isLoggedIn) {
        next('/start');
    } else {
        next();
    }
});

export default router;
