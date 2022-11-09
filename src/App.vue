<script setup>
  import TheHeaderVue from './components/layout/TheHeader.vue';
  import TheFooterVue from './components/layout/TheFooter.vue';
</script>

<template>
  <TheHeaderVue />
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <TheFooterVue />
</template>

<style>
  .route-enter-active {
    animation: fade-in .4s ease-out;
  }

  .route-leave-active {
    animation: fade-out .4s ease-in;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
</style>
