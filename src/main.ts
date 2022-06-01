import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import ElContainer from './components/container';

createApp(App).use(router).use(ElContainer).mount('#app');
