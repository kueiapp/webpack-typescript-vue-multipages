import Vue from 'vue';
import vendors from '../vendors'
import page1 from './page1.vue';
// jquery is local import
import $ from 'jquery'

let index = new Vue({
  el: '#app',
  template: '<page1/>',
  components: { page1 }
});

/** jQuery DOM */
