<template>
  <ALayout>
    <LayoutMenu />
    <ALayout>
      <LayoutHeader />
      <ALayoutContent :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        Content
        <!--        <div class="bg-blue-500 p-4">-->
        <!--          <h1 class="text-2xl font-semibold text-white">Hello Tailwind CSS</h1>-->
        <!--        </div>-->
      </ALayoutContent>
    </ALayout>
  </ALayout>
</template>

<script setup>
  import LayoutMenu from './components/menu/index.vue';
  import LayoutHeader from './components/header/index.vue';
</script>

<style>
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }

  .site-layout .site-layout-background {
    background: #fff;
  }

  .app-menu {
    font-size: 16px;
  }

  .app-menu .anticon {
    font-size: 16px; /* 设置子菜单图标的大小 */
  }
</style>
