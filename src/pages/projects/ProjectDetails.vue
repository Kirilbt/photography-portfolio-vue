<template>
  <div class="container">
    <img class="main-image" :src="this.selectedProject.fields.cover.fields.file.url" alt="">
    <div class="project-details">
      <h2 class="title"> {{ this.selectedProject.fields.title }}</h2>
      <p class="details">
        Model - {{ this.selectedProject.fields.model }}<br>
        MUA - {{ this.selectedProject.fields.mua }}<br>
        Date - {{ this.selectedProject.fields.date }} <br>
        Location - {{ this.selectedProject.fields.location }}
      </p>
    </div>
    <div class="image-gallery" v-for="image in this.selectedProject.fields.images">
      <img class="image" :src="image.fields.file.url" alt="">
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
      }
    },
    setup() {
      const projectsStore = useProjectsStore()
      return { projectsStore }
    },
    created() {
      this.selectedProject = this.projectsStore.projects.find(project => project.fields.id === this.id)
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
