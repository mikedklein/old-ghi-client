import axios from 'axios';

const URL = 'https://api.ghi.global';
/**
 * Used to login a user. This returns a promise should modify the user
 * model based on the results of the promise.
 * @param {string} username - the username provided by the user on login attempt
 * @param {string} password - the password provided by the user on login attempt
 */
export function loginUser(username, password) {
  const config = {
    clientAccessMethod: 'Header',
    username,
    password
  };
  return axios.post(`${URL}/auth/authenticateWithPassword`, config);
}
