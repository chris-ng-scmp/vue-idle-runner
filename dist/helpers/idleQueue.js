'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (func) {
  if ((0, _isFunction2.default)(func)) {
    addToQueue(func);
    return true;
  }
  return false;
};

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _isFunction = require('lodash/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queue = [];
var running = false;

var runItem = function runItem() {
  if (queue.length) {
    queue.shift()();
  }
  running = false;
  processQueue();
};

var addToQueue = function addToQueue(func) {
  queue.push(func);
  processQueue();
};

var processQueue = function processQueue() {
  if (queue.length && !running) {
    running = true;
    if ((0, _get2.default)(window, 'requestIdleCallback')) {
      window.requestIdleCallback(function () {
        runItem();
      });
    } else {
      runItem();
    }
  }
};