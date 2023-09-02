import { store } from '../index';
import { defineStore } from 'pinia';

/**
 *  App Store
 *  @author hyun derek
 */
export const useAppStore = defineStore('app-store', () => {});

/**
 * 方法外使用UserStore
 */
export function useAppStoreWithOut() {
  return useAppStore(store);
}
