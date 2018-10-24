'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      isOnloadIdle: false,
      onLoad: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    if ((0, _get2.default)(document, 'readyState') === 'complete') {
      this.onLoad = true;
      this.checkIdle();
    } else {
      window.addEventListener('load', function () {
        _this.onLoad = true;
      });
    }
  },

  methods: {
    checkIdle: function checkIdle() {
      var _this2 = this;

      this.$idleQueue(function () {
        _this2.isOnloadIdle = true;
      });
    }
  },
  watch: {
    onLoad: function onLoad(_onLoad, oldValue) {
      if (_onLoad && !oldValue) {
        this.checkIdle();
      }
    }
  }
};