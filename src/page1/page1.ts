import Vue from 'vue';
import vendors from '../vendors'
import page1 from './page1.vue';
// jquery is local import
import $ from 'jquery'

import store from '../store/index'
import router from '../router/index'

Vue.config.productionTip = false

let index = new Vue({
  el: '#app',
  store,
  router,
  template: '<page1/>',
  components: { page1 }
});

/** jQuery DOM */
