<script setup>
  import TheHeaderVue from './components/layout/TheHeader.vue';
  import TheFooterVue from './components/layout/TheFooter.vue';
</script>

<template>
  <TheHeaderVue />
  <router-view></router-view>
  <TheFooterVue />
</template>

<style scoped>

</style>
