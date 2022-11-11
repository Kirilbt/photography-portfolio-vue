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

import Lenis from '@studio-freight/lenis'

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

      var bgColor = elem.getAttribute('data-color');

      let trigger = ScrollTrigger.create({
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

      return () => {
        bgColor = elem.getAttribute('data-color')
        if (trigger.isActive) {
          gsap.killTweensOf('body');
          gsap.set('body', {
            backgroundColor: bgColor
          })
        }
      }
    })

    // Smooth Scroll

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    // //get scroll value
    // lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
    //   console.log({ scroll, limit, velocity, direction, progress })
    // })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
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
