'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _onLoadIdle = require('../mixins/onLoadIdle');

var _onLoadIdle2 = _interopRequireDefault(_onLoadIdle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'onload-idle-queue',
  mixins: [_onLoadIdle2.default],
  render: function render(h) {
    if (this.isOnloadIdle) {
      return h('div', null, this.$slots.default);
    }
    return h;
  }
};