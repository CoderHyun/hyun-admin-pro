<template>
  <div class="home">
    {{ userStore.count }}
    <a-button type="primary" @click="onIncrementClick">increment</a-button>
  </div>
</template>

<script setup>
  import { useUserStore } from '@/store/modules/user';

  const userStore = useUserStore();

  function onIncrementClick() {
    userStore.increment();
  }
</script>

<style lang="scss" scoped>
  .home {
    padding: 100px;
  }
</style>
