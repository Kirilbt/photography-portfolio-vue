<template>
  <main>
    <div class="container">
      <ProjectItem
        v-for="project in projectsStore.projects"
        :id="project.fields.id"
        :title="project.fields.title"
        :cover="project.fields.cover.fields.file.url"
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
    projectsStore.getAllProjects()
    return { projectsStore  }
  }
};
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
