'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _home = require('./home.vue');

var _home2 = _interopRequireDefault(_home);

var _aboutme = require('./aboutme.vue');

var _aboutme2 = _interopRequireDefault(_aboutme);

var _photography = require('./photography.vue');

var _photography2 = _interopRequireDefault(_photography);

var _experience = require('./experience.vue');

var _experience2 = _interopRequireDefault(_experience);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

var routes = [];

routes.push({
  name: 'home',
  path: '/',
  component: _home2.default
});
routes.push({
  name: 'home',
  path: '/home',
  component: _home2.default
});
routes.push({
  name: 'aboutme',
  path: '/aboutme',
  component: _aboutme2.default
});
routes.push({
  name: 'photography',
  path: '/photography',
  component: _photography2.default
});
routes.push({
  name: 'experience',
  path: '/experience',
  component: _experience2.default
});

exports.default = new _vueRouter2.default({
  routes: routes
});