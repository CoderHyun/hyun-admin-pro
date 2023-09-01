import { ref } from 'vue';
import { store } from '../index';
import { defineStore } from 'pinia';

/**
 *  User Store
 *  @author hyun derek
 */
export const useUserStore = defineStore('user-store', () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }

  return { count, increment };
});

/**
 * 方法外使用UserStore
 */
export function useUserStoreWithOut() {
  return useUserStore(store);
}
