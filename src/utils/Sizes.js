import { EventEmitter } from 'events'

export default class Sizes extends EventEmitter {
  constructor() {
    super()
    this.container = document.querySelector('.container')
    this.canvas = this.container.getBoundingClientRect()
    this.width = this.canvas.width
    this.height = this.canvas.height
    this.aspect = this.width / this.height
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)

    window.addEventListener('resize', () => {
      this.container = document.querySelector('.container')
      this.canvas = this.container.getBoundingClientRect()
      this.width = this.canvas.width
      this.height = this.canvas.height
      this.aspect = this.width / this.height
      this.pixelRatio = Math.min(window.devicePixelRatio, 2)

      this.emit('resize')
    })
  }
}
