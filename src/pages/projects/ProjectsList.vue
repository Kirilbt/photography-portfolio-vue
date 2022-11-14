<template>
  <main>
    <div class="container">
      <ProjectItem
        v-for="project in projectsStore.projects"
        :id="project.fields.id"
        :title="project.fields.title"
        :cover="project.fields.cover.fields.file.url"
        :color="project.fields.color"
      />
    </div>
  </main>
</template>

<script>
import ProjectItem from '../../components/projects/ProjectItem.vue'
import { useProjectsStore } from '../../stores/projects.js'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    ProjectItem
  },
  setup() {
    const projectsStore = useProjectsStore()
    projectsStore.getAllProjects()


    return { projectsStore  }
  },
  mounted() {
    this.sections = gsap.utils.toArray('.section')

    // Change background color on scroll
    this.sections.map((elem) => {

      const bgColor = elem.getAttribute('data-color');

      const trigger = ScrollTrigger.create({
        trigger: elem,
        start: 'top 5%',
        end: 'bottom 95%',
        markers: false,
        onToggle() {
          gsap.to('body', {
            backgroundColor: bgColor,
            duration: '1.2'
          })
        }
      });

      // return () => {
      //   if (trigger.isActive) {
      //     gsap.killTweensOf('body');
      //     gsap.set('body', {
      //       backgroundColor: bgColor
      //     })
      //   }
      // }
    })
  },
  unmounted() {
    console.log('unmounted');
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
