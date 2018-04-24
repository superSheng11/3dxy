import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import VueLazyload from 'vue-lazyload';

import 'asset/scss/rest.scss';
Vue.config.productionTip = false;

Vue.use(VueLazyload);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: { App }
});
