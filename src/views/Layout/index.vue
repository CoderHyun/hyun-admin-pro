<template>
  <ALayout>
    <LayoutMenu />
    <ALayout>
      <LayoutHeader />
      <ALayoutContent :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <RouterView />
      </ALayoutContent>
    </ALayout>
  </ALayout>
</template>

<script setup>
  import LayoutMenu from './components/menu/index.vue';
  import LayoutHeader from './components/header/index.vue';
</script>

<style></style>
