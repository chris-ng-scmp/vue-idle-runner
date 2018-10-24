import idleQueueHelper from './helpers/idleQueue'
export default {
  install (Vue) {
    Vue.component('lazy-queue-runner', idleQueueHelper)
  }
}
