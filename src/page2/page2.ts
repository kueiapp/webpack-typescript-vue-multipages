import Vue from 'vue';
import page2 from './page2.vue';
import vendors from '../vendors'

import store from '../store/index'
import router from '../router/index'

// jquery is local import
import $ from 'jquery'

Vue.config.productionTip = false;

// register hook back in TypeScript
// 'vue-class-component' is useless
import { Component } from 'vue-property-decorator';
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
]);
Vue.component('list',{
	data() {
		return {
			
		}
	},
	computed: {
		showStatus() {
			return this.$store.getters.status;
		},
		showCounter() {
			return this.$store.getters.counter;
		}
	},
	template: `<ul class="list-group">
	  <li class="list-group-item d-flex justify-content-between align-items-center">
	    {{showStatus}}
	    <span class="badge badge-primary badge-pill">{{showCounter}}</span>
	  </li>
	</ul>`
})
// global sub-components
Vue.component('card',{
	data() {
		return {
			
		}
	},
	computed: {
		showStatus() {
			return this.$store.getters.status;
		},
		showCounter() {
			return this.$store.getters.counter;
		}
	},
	template: `<div class="card border-primary mb-3" style="max-width: 20rem;">
	  <div class="card-header">Header</div>
	  <div class="card-body">
	    <h4 class="card-title">{{showStatus}}</h4>
	    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	  </div>
	</div>
	<div class="card border-secondary mb-3" style="max-width: 20rem;">
	  <div class="card-header">Header</div>
	  <div class="card-body">
	    <h4 class="card-title">{{showCounter}}</h4>
	    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	  </div>
	</div>`
})

let training = new Vue({
  el: '#app2',
  store,
  router,
  template: '<page2/>',
  components: { page2 }
});
// new deliration in vue 3.x
// let training = new Vue({
//   router,
//   store,
//   render: (h) => h(page2),
// }).$mount('#app2');

/** jQuery DOM */
