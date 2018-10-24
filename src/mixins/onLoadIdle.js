import get from 'lodash/get'

export default {
  data() {
    return {
      isOnloadIdle: false,
      onLoad: false,
    }
  },
  mounted() {
    if (get(document, 'readyState') === 'complete') {
      this.onLoad = true
      this.checkIdle()
    } else {
      window.addEventListener('load', () => {
        this.onLoad = true
      })
    }
  },
  methods: {
    checkIdle() {
      this.$idleQueue(() => {
        this.isOnloadIdle = true
      })
    },
  },
  watch: {
    onLoad(onLoad, oldValue) {
      if (onLoad && !oldValue) {
        this.checkIdle()
      }
    },
  },
}
