import get from 'lodash/get'
import isFunction from 'lodash/isFunction'

const queue = []
let running = false

const runItem = () => {
  if (queue.length) {
    queue.shift()()
  }
  running = false
  processQueue()
}

const addToQueue = (func) => {
  queue.push(func)
  processQueue()
}

const processQueue = () => {
  if (queue.length && !running) {
    running = true
    if (get(window, 'requestIdleCallback')) {
      window.requestIdleCallback(() => {
        runItem()
      })
    } else {
      runItem()
    }
  }
}

export default function (func) {
  if (isFunction(func)) {
    addToQueue(func)
    return true
  }
  return false
}
