<template>
  <main>
    <div class="container" v-if="this.selectedProject">
      <img class="main-image" :src="this.selectedProject.fields.cover.fields.file.url" alt="">
      <div class="project-details">
        <h2 class="title"> {{ this.selectedProject.fields.title }}</h2>
        <div class="details">
          <div v-if="this.selectedProject.fields.model">Model - {{ this.selectedProject.fields.model.join(', ') }}</div>
          <div v-if="this.selectedProject.fields.mua">MUA - {{ this.selectedProject.fields.mua.join(', ') }}</div>
          Date - {{ this.selectedProject.fields.date }} <br>
          Location - {{ this.selectedProject.fields.location }}
        </div>
      </div>
      <div class="image-gallery" v-for="image in this.selectedProject.fields.images">
        <img class="image" :src="image.fields.file.url" alt="">
      </div>
    </div>
  </main>
</template>

<script>
  import { watch } from "vue"
  import { useProjectsStore } from '../../stores/projects.js'

  export default {
    props: ['id'],
    data() {
      return {
        selectedProject: null
      }
    },
    setup() {
      const projectsStore = useProjectsStore();
      if (projectsStore.projects.length === 0) projectsStore.getAllProjects()
      return { projectsStore }
    },
    created() {
      const setSelectedProject = () => {
        if (this.projectsStore.projects.length > 0) {
          this.selectedProject = this.projectsStore.projects.find(
            (project) => project.fields.id === this.id
          );
        }
      };
      setSelectedProject()

      watch(this.projectsStore, (_) => setSelectedProject())
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
