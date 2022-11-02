<template>
  <main>
    <div class="container">
      <ProjectItem
        v-for="project in projects"
        :key="project.id"
        :title="project.title"
        :image="project.image"
      />
    </div>
  </main>
</template>

<script>
import ProjectItem from '../../components/projects/ProjectItem.vue'

import summer from '../../assets/images/summer.jpg'
import power from '../../assets/images/power.jpg'
import minimal from '../../assets/images/minimal.jpg'
import neon from '../../assets/images/neon.jpg'
import light from '../../assets/images/light.jpg'

export default {
  components: {
    ProjectItem
  },
  data() {
    return {
      projects: [
        {
          id: 'summer',
          title: 'Summer Tones',
          date: 'May 2019',
          location: 'Bern, Switzerland',
          image: summer
        },
        {
          id: 'power',
          title: 'Elegant Power',
          date: 'November 2019',
          location: 'Lausanne, Switzerland',
          image: power
        },
        {
          id: 'minimal',
          title: 'Minimal Sensuality',
          date: 'March 2019',
          location: 'Bern, Switzerland',
          image: minimal
        },
        {
          id: 'neon',
          title: 'Neon Future',
          date: 'November 2019',
          location: 'Zürich, Switzerland',
          image: neon
        },
        {
          id: 'light',
          title: 'Under a New Light',
          date: 'September 2018',
          location: 'Milano, Italy',
          image: light
        }
      ]
    }
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
