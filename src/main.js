import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import { setupStore } from '@/store';

async function setupApp() {
  const app = createApp(App);

  /* 配置store */
  setupStore(app);
  app.use(router);
  app.use(Antd);

  app.mount('#app');
}

setupApp();
