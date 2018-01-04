Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box = exports.Flex = undefined;

var _Flex2 = require('./Flex');

var _Flex3 = _interopRequireDefault(_Flex2);

var _Box2 = require('./Box');

var _Box3 = _interopRequireDefault(_Box2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Copyright by AIWSolutions.
 */
/* eslint object-curly-spacing:0 no-underscore-dangle: 0, global-require: 0 */
if (!global._babelPolyfill) {
  require('babel-polyfill');
}
exports.Flex = _Flex3['default'];
exports.Box = _Box3['default'];