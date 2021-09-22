import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import SongList from '../components/SongList.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: SongList,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
