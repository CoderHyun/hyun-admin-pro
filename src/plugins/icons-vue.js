import Icon from '@/components/Icon/index.vue';
import * as Icons from '@ant-design/icons-vue';

/**
 * 引入图标
 * @param app
 */
export function setupIconVue(app) {
  for (let iconsKey in Icons) {
    app.component(iconsKey, Icons[iconsKey]);
  }
  app.component('Icon', Icon);
}
