import { defineStore } from 'pinia'

import summer from '../assets/images/summer.jpg'
import power from '../assets/images/power.jpg'
import minimal from '../assets/images/minimal.jpg'
import neon from '../assets/images/neon.jpg'
import light from '../assets/images/light.jpg'

export const useProjectsStore = defineStore('projects', {
  state: () => {
    return {
      projects: [
        {
          id: 'summer',
          title: 'Summer Tones',
          date: 'May 2019',
          location: 'Bern, Switzerland',
          type: 'portrait',
          image: summer
        },
        {
          id: 'power',
          title: 'Elegant Power',
          date: 'November 2019',
          location: 'Lausanne, Switzerland',
          type: 'portrait',
          image: power
        },
        {
          id: 'minimal',
          title: 'Minimal Sensuality',
          date: 'March 2019',
          location: 'Bern, Switzerland',
          type: 'portrait',
          image: minimal
        },
        {
          id: 'neon',
          title: 'Neon Future',
          date: 'November 2019',
          location: 'Zürich, Switzerland',
          type: 'portrait',
          image: neon
        },
        {
          id: 'light',
          title: 'Under a New Light',
          date: 'September 2018',
          location: 'Milano, Italy',
          type: 'portrait',
          image: light
        }
      ]
    }
  }
});
