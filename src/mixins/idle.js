export default {
  data() {
    return {
      isIdle: false,
    }
  },
  mounted() {
    this.$idleQueue(() => {
      this.isIdle = true
    })
  },
}
