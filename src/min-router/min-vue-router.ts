// window.addEventListener('haschange') 动态监听路由hash的变化

//1.能够监听路由变化
//2.注册全局router-link 和 router-view
//3.路由变化的时候，router-view找到匹配的组件、动态渲染

import { App, ref, inject } from 'vue';

import RouterLink from './RouterLink.vue';
import RouterView from './RouterView.vue';

// interface options {
//     router: string;
//     history: string;
// }

function createRouter(options) {
    return new Router(options);
}

function createWebHashHistory() {
    function bindEvents(fn) {
        window.addEventListener('hashchange', fn);
    }

    return {
        url: window.location.hash.slice(1) || '/',
        bindEvents,
    };
}

const ROUTER_KEY = '_ROUTER_KEY_';
function userRouter() {
    return inject(ROUTER_KEY);
}

class Router {
    constructor(options) {
        this.routes = options.routes;
        this.history = options.history;

        //管理当前路由，触发组件渲染需要响应式
        this.current = ref(this.history.url);

        this.history.bindEvents(() => {
            //路由变化更新当前路由
            this.current.value = window.location.hash.slice(1);
        });
    }

    install(app: App) {
        app.provide(ROUTER_KEY, this);
        app.component('RouterLink', RouterLink);
        app.component('RouterView', RouterView);
    }
}

export { createWebHashHistory, createRouter, userRouter };
