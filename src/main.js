import './less/main.less';
import { createApp } from 'vue';
import App from './vue/app.vue';
import router from './router.js';
import * as theme from './js/theme.js';
import silenceDay from './js/silenceDay.js';
import 'overlayscrollbars/overlayscrollbars.css';

// 设置主题
silenceDay();
theme.setTheme();

// 挂载 Vue 实例
const app = createApp(App);
app.use(router);
app.mount('#app');
