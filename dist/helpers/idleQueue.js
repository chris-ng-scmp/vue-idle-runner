'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _isFunction = require('lodash/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      queue: [],
      running: false
    };
  },
  mounted: function mounted() {
    var self = this;
    this.$root.$on('idle-queue', function (func) {
      if ((0, _isFunction2.default)(func)) {
        self.addToQueue(func);
      }
    });
  },

  methods: {
    addToQueue: function addToQueue(func) {
      this.queue.push(func);
      this.processQueue();
    },
    processQueue: function processQueue() {
      if (this.queue.length && !this.running) {
        this.running = true;
        var self = this;
        if ((0, _get2.default)(window, 'requestIdleCallback')) {
          window.requestIdleCallback(function () {
            self.runItem();
          });
        } else {
          self.runItem();
        }
      }
    },
    runItem: function runItem() {
      if (this.queue.length) {
        this.queue.shift()();
      }
      this.running = false;
      this.processQueue();
    }
  },
  render: function render(h) {
    return h;
  }
};