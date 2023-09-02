import { defineComponent } from 'vue';
import { useAppStore } from '@/store/modules/app';

/**
 * Logo
 */
export default defineComponent({
  name: 'Logo',
  setup() {
    const appStore = useAppStore();

    return () => (
      <>
        <div className="flex items-center justify-center h-16 whitespace-nowrap overflow-hidden">
          <img src="/logo.png" className="h-8 w-auto" alt="logo" />
          {!appStore.menuCollapsed && <h2 className="text-white text-lg font-bold ml-4 mb-0">Hyun Admin Pro</h2>}
        </div>
      </>
    );
  },
});
