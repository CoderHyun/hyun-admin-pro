<template>
  <div>
    <component :is="iconName" />
  </div>
</template>

<script setup>
  defineProps({
    iconName: {
      type: String,
      default: '',
    },
  });
</script>
