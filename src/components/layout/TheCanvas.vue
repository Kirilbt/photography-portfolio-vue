<template>
  <div class="experience">
    <canvas class="experience-canvas"></canvas>
  </div>
</template>

<script>
  import Experience from '../../experience/Experience';

  export default {
    mounted() {
      const experience = new Experience(document.querySelector('.experience-canvas'))
    }
  }
</script>

<style scoped>
  .experience {
    z-index: -1;
    position: fixed;
    width: 100vw;
    height: 100vh;
  }

  .experience-canvas {
    width: 100%;
    height: 100%;
  }
</style>
