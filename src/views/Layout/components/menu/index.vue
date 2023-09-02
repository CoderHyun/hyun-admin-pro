<script setup>
  import { ref } from 'vue';

  const collapsed = ref(false);
  const selectedKeys = ref(['1']);
</script>

<template>
  <ALayoutSider v-model:collapsed="collapsed" :width="250" :trigger="null" collapsible>
    <div class="logo">123</div>
    <AMenu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" class="app-menu">
      <AMenuItem key="1">
        <UserOutlined />
        <span>菜单1</span>
      </AMenuItem>
      <AMenuItem key="2">
        <VideoCameraOutlined />
        <span>菜单2</span>
      </AMenuItem>
      <AMenuItem key="3">
        <UploadOutlined />
        <span>菜单3</span>
      </AMenuItem>
    </AMenu>
  </ALayoutSider>
</template>

<style scoped lang="scss"></style>
