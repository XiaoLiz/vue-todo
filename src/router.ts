import {
    createRouter,
    createWebHashHistory,
    Router,
    RouterOptions,
    RouteRecordRaw,
} from 'vue-router';
import Home from './view/Home.vue';
import About from './view/About.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
];

const options: RouterOptions = {
    history: createWebHashHistory(),
    routes,
};
const router: Router = createRouter(options);
export default router;
