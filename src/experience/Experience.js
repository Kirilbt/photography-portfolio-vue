import Sizes from '../utils/Sizes.js'
import Time from '../utils/Time.js'

import Scrolling from '../components/Scrolling.js'

export default class Experience {
  static instance
  constructor(canvas) {
    if(Experience.instance) {
      return Experience.instance
    }
    Experience.instance = this
    this.canvas = canvas
    this.sizes = new Sizes()
    this.time = new Time()

    this.scrolling = new Scrolling({
      element: document.querySelector('.container')
    })

    this.sizes.on('resize', () => {
      this.resize()
    })
    this.time.on('update', () => {
      this.update()
    })

  }

  resize() {
    this.scrolling.resize()
    document.documentElement.style.setProperty('--100vh', `${window.innerHeight}px`)
  }
  update() {
    this.scrolling.update()
  }
}
