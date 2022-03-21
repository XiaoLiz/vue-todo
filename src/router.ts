import { createRouter, createWebHashHistory } from './min-router/min-vue-router';
import Home from './view/Home.vue';
import About from './view/About.vue';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/about',
        component: About,
    },
];

export default createRouter({
    history: createWebHashHistory(),
    routes,
});
