import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Antd from 'ant-design-vue';
import { setupStore } from '@/store';
import { setupIconVue } from '@/plugins';

import 'tailwindcss/tailwind.css';
import './style/index.scss';
import 'ant-design-vue/dist/reset.css';

async function setupApp() {
  const app = createApp(App);

  /* 配置store */
  setupStore(app);

  /* 配置icons */
  setupIconVue(app);

  app.use(router);
  app.use(Antd);
  app.mount('#app');
}

setupApp();
