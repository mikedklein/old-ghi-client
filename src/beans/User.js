import { observable } from 'mobx';

class User {
  // TODO will need to add more properties to user based on what is
  // stored in the backend.
  @observable user = null;
  @observable loggedIn = false;
  @observable userId = null;
  @observable loading = false;
  @observable error = false;
  @observable errorMsg = '';
}

// NOTE instantiating the user because it will be a singleton across the App
const user = new User();
export default user;
