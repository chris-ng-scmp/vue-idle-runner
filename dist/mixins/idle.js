"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      isIdle: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$idleQueue(function () {
      _this.isIdle = true;
    });
  }
};