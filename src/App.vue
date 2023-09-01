<template>
  <ConfigProvider>
    <AppProvider>
      <router-view />
    </AppProvider>
  </ConfigProvider>
</template>

<script setup>
  import { ConfigProvider } from 'ant-design-vue';
  import AppProvider from '@/components/Application';
</script>

<style lang="scss"></style>
