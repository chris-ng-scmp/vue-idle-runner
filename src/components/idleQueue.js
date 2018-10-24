import idle from '../mixins/idle'

export default {
  name: 'idle-queue',
  mixins: [idle],
  render (h) {
    if (this.isIdle) {
      return h('div', null, this.$slots.default)
    }
    return h
  },
}
