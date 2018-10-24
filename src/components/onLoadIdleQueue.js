import onLoadIdle from '../mixins/onLoadIdle'

export default {
  name: 'onload-idle-queue',
  mixins: [onLoadIdle],
  render(h) {
    if (this.isOnloadIdle) {
      return h('div', null, this.$slots.default)
    }
    return h
  },
}
