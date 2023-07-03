import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

createApp(App).use(router).mount('#app')
