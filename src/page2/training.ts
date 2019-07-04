import Vue from 'vue';
import page2 from './page2.vue';
import vendors from '../vendors'
// jquery is local import
import $ from 'jquery'

let training = new Vue({
  el: '#app2',
  template: '<page2/>',
  components: { page2 }
});

/** jQuery DOM */
