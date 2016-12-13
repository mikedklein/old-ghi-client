'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginUser = loginUser;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var URL = 'https://api.ghi.global';
/**
 * Used to login a user. This returns a promise should modify the user
 * model based on the results of the promise.
 * @param {string} username - the username provided by the user on login attempt
 * @param {string} password - the password provided by the user on login attempt
 */
function loginUser(username, password) {
  var config = {
    clientAccessMethod: 'Header',
    username: username,
    password: password
  };
  return _axios2.default.post(URL + '/auth/authenticateWithPassword', config);
}