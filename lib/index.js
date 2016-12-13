'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginUser = exports.user = undefined;

var _userService = require('./services/userService');

Object.defineProperty(exports, 'loginUser', {
  enumerable: true,
  get: function get() {
    return _userService.loginUser;
  }
});

var _User = require('./beans/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.user = _User2.default;
/* Services */
/* Beans */
// TODO this is a default export not sure why this isn't working