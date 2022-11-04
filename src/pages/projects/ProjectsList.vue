<template>
  <main>
    <div class="container">
      <ProjectItem
        v-for="project in projectsStore.projects"
        :id="project.id"
        :title="project.title"
        :image="project.image"
      />
    </div>
  </main>
</template>

<script>
import ProjectItem from '../../components/projects/ProjectItem.vue'
import { useProjectsStore } from '../../stores/projects.js'

export default {
  components: {
    ProjectItem
  },
  setup() {
    const projectsStore = useProjectsStore()
    return { projectsStore  }
  }
}


</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
