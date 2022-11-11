<template>
  <section class="section" :data-color="color">
    <div>
      <router-link class="project" :to="projectDetailLink">
        <img class="image" :src="cover" alt="">
      </router-link>
    </div>
    <h2 class="title">{{ title }}</h2>
  </section>
</template>

<script>
  export default {
    props: [
      'id',
      'title',
      'date',
      'location',
      'type',
      'cover',
      'color'
    ],
    computed: {
      projectDetailLink() {
        return '/projects/' + this.id
      }
    }
  }
</script>

<style scoped>
  .section {
    /* position: relative; */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  a {
    background-color: none;
  }
  .image {
    max-height: 80vh;
    transition: transform .2s;
  }
  .title {
    position: absolute;
    font-family: orpheuspro, serif;
    font-size: 8rem;
    font-weight: 400;
    font-style: normal;
    color: rgb(155, 155, 155);
    pointer-events: none;
    mix-blend-mode: luminosity;
  }
</style>
