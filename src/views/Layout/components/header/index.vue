<script setup>
  import { ref } from 'vue';

  const collapsed = ref(false);
</script>

<template>
  <ALayoutHeader style="background: #fff; padding: 0 20px">
    <MenuUnfoldOutlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
    <MenuFoldOutlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
  </ALayoutHeader>
</template>

<style scoped lang="scss"></style>
