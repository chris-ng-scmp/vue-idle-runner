'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _idleQueue = require('./helpers/idleQueue');

var _idleQueue2 = _interopRequireDefault(_idleQueue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  install: function install(Vue) {
    Vue.component('lazy-queue-runner', _idleQueue2.default);
  }
};