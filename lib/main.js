'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App.vue');

var _App2 = _interopRequireDefault(_App);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

require('./assets/style.css');

var _vueMaterial = require('vue-material');

var _vueMaterial2 = _interopRequireDefault(_vueMaterial);

require('vue-material/dist/vue-material.min.css');

require('vue-material/dist/theme/black-green-light.css');

require('expose-loader?$!expose-loader?jQuery!jquery');

var _jqueryStalactite = require('./plugins/jquery.stalactite.min');

var _jqueryStalactite2 = _interopRequireDefault(_jqueryStalactite);

var _jquery = require('./plugins/fancy-box/source/jquery.fancybox');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Theme


_vue2.default.use(_vueMaterial2.default);

// jQuery plugin


// Vue material
// Built in Vue Imports


new _vue2.default({
  el: '#app',
  router: _router2.default,
  render: function render(h) {
    return h(_App2.default);
  }
});