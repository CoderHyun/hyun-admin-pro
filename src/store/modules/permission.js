import { ref } from 'vue';
import { store } from '../index';
import { defineStore } from 'pinia';

/**
 *  Permission Store
 *  @author hyun derek
 */
export const usePermissionStore = defineStore('permission-store', () => {
  // 菜单列表
  const menuList = ref([
    {
      path: '/dashboard',
      children: [
        {
          path: '/',
          name: 'Dashboard',
          meta: { title: '中控台', icon: 'user' },
        },
      ],
    },
  ]);

  return { menuList };
});

/**
 * 方法外使用UserStore
 */
export function usePermissionStoreWithOut() {
  return usePermissionStore(store);
}
