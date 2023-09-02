<script setup>
  import { useAppStore } from '@/store/modules/app';

  const appStore = useAppStore();
</script>

<template>
  <ALayoutHeader style="background: #fff; padding: 0 20px">
    <MenuUnfoldOutlined
      v-if="appStore.menuCollapsed"
      class="trigger"
      :style="appStore.iconStyle"
      @click="() => appStore.setMenuCollapsed(!appStore.menuCollapsed)"
    />
    <MenuFoldOutlined
      v-else
      class="trigger"
      :style="appStore.iconStyle"
      @click="() => appStore.setMenuCollapsed(!appStore.menuCollapsed)"
    />
  </ALayoutHeader>
</template>

<style scoped lang="scss"></style>
