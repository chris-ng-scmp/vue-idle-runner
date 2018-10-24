import get from 'lodash/get'
import isFunction from 'lodash/isFunction'

export default {
  data() {
    return {
      queue: [],
      running: false,
    }
  },
  mounted() {
    const self = this
    this.$root.$on('idle-queue', (func) => {
      if (isFunction(func)) {
        self.addToQueue(func)
      }
    })
  },
  methods: {
    addToQueue(func) {
      this.queue.push(func)
      this.processQueue()
    },
    processQueue() {
      if (this.queue.length && !this.running) {
        this.running = true
        const self = this
        if (get(window, 'requestIdleCallback')) {
          window.requestIdleCallback(() => {
            self.runItem()
          })
        } else {
          self.runItem()
        }
      }
    },
    runItem() {
      if (this.queue.length) {
        this.queue.shift()()
      }
      this.running = false
      this.processQueue()
    },
  },
  render(h) {
    return h
  },
}
