<script setup>
  import { onMounted, ref } from 'vue';
  import { useAppStore } from '@/store/modules/app';
  import { getMenus } from '@/router/meuns';
  import { useRoute, useRouter } from 'vue-router';
  import Logo from '@/views/Layout/components/logo/index';

  const $route = useRoute();
  const $router = useRouter();
  const appStore = useAppStore();

  const menus = getMenus();
  const selectedKeys = ref([]);
  console.log(menus);
  function onSelectMenu(event) {
    $router.push({
      name: event.key,
    });
  }

  onMounted(() => {
    selectedKeys.value = [$route.name];
  });
</script>

<template>
  <ALayoutSider v-model:collapsed="appStore.menuCollapsed" :width="250" :trigger="null" collapsible>
    <Logo />
    <AMenu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="inline"
      class="app-menu"
      :items="menus"
      @select="onSelectMenu"
    />
  </ALayoutSider>
</template>

<style scoped lang="scss"></style>
