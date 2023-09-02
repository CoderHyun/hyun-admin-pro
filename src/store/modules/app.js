import { store } from '../index';
import { defineStore } from 'pinia';
import { useCustom } from '@/hooks/useCustom';

/**
 *  App Store
 *  @author hyun derek
 */
export const useAppStore = defineStore('app-store', () => {
  // 菜单展开，关闭
  const [menuCollapsed, setMenuCollapsed] = useCustom(false);
  // icon type
  const [iconStyle] = useCustom({
    fontSize: '16px',
  });

  return {
    menuCollapsed,
    setMenuCollapsed,

    iconStyle,
  };
});

/**
 * 方法外使用UserStore
 */
export function useAppStoreWithOut() {
  return useAppStore(store);
}
