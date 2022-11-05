<template>
  <div class="container">
    <img class="main-image" :src="this.selectedProject.image" alt="">
    <div class="project-details">
      <h2 class="title"> {{ this.selectedProject.title }}</h2>
      <p class="details">
        <!-- Model - {{ this.selectedProject.model }}<br> -->
        <!-- MUA - {{ this.selectedProject.mua }}<br> -->
        Date - {{ this.selectedProject.date }} <br>
        Location - {{ this.selectedProject.location }}
      </p>
    </div>
    <div class="image-gallery" v-for="image in images">
      <img class="image" :src="getImageUrl(image)" alt="">
    </div>
  </div>
</template>

<script>
  import { useProjectsStore } from '../../stores/projects.js'

  export default {
    props: ['id'],
    data() {
      return {
        selectedProject: null,
        images: 10
      }
    },
    setup() {
      const projectsStore = useProjectsStore()
      return { projectsStore }
    },
    created() {
      this.selectedProject = this.projectsStore.projects.find(project => project.id === this.id)
    },
    methods: {
      getImageUrl(num) {
        return new URL(`../../assets/images/${this.selectedProject.id}/${this.selectedProject.id}${num}.jpg`, import.meta.url).href
      }
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
  }

  .main-image {
    height: 100vh;
  }

  .project-details {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 40%;
  }

  .title {
    font-family: orpheuspro, serif;
    font-size: 8rem;
    font-weight: 400;
    font-style: normal;
    color: rgb(155, 155, 155);
    mix-blend-mode: luminosity;
  }

  .details {
    line-height: 1.5;
  }

  .image-gallery {
    display: flex;
  }

  .image {
    height: 100vh;
    margin-left: 0.5rem;
  }
</style>
