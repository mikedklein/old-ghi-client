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

var _User = _interopRequireWildcard(_User2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.User = _User;
/* Services */
/* Beans */