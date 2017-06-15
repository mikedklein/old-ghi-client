```
// -------- CLIENT JS PROJECT

// Ajaxservice.js -- an interface for each platform to implement
class AjaxService {
  doAjax() {

  }

  listen() {

  }
}

// Container .js -- holds all the runtime references
const map = {};

class Container {

  /**
   * @returns {AjaxService}
   */
  ajaxService() {
    return this.get('ajaxService');
  }

  set(name, impl) {
    if(map[name]) {
      throw new Error(`impl ${name} already exists!`);
    }
    map[name] = impl;
  }

  get(name) {
    if(!map[name]) {
      throw new Error(`unmapped service '${name}'`);
    }
    map[name] = impl;
  }
}

export default new Container();

// WEBAPP PROJECT


// -- WebappCOntainer.js, could also just make an "init" code that wires up container from client js
import JqueryAjaxService from 'asdf';

class WebappContainer extends Container {
  ajaxService() {
    return JqueryAjaxService;
  }
}

// native

class NativeContainer extends Container {
  ajaxService() {
    return JqueryAjaxService;
  }
}








// webstorm (and maybe atom) can track typing through jsdoc
const container = new Container();
container.ajaxService().doAjax();

// -webapp
  // webappcontainer (extends container from client js)
  import Container from 'container';
  container.set('ajaxService', jqueryAjaxService);

  // jqueryajaxservice (extends ajaxservice)



// native
  // nativecontainer (extends container from client js)
  // axiosajaxservice(extends ajaxservice)

// client js
  // container.js (has documentation and jsdoc)
  // ajaxservice.js
```
