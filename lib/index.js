'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginUser = exports.User = undefined;

var _userService = require('./services/userService');

Object.defineProperty(exports, 'loginUser', {
  enumerable: true,
  get: function get() {
    return _userService.loginUser;
  }
});

var _User2 = require('./beans/User');

var _User3 = _interopRequireDefault(_User2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.User = _User3.default;
/* Services */
/* Beans */