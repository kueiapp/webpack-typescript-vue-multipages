// vuex
import Vue from 'vue'
import Vuex, {Store,Getter,Action,Mutation} from 'vuex'
Vue.use(Vuex)
// data
const state = {
	status: 'Offline',
	counter: 0
}
// get states (computed)
const getters = {
	status(state) {
		return state.status.toUpperCase();
	},
	counter(state) {
		return state.counter;
	}
}
// methods to call mutations asyncly (methods)
const actions = {
	// set action method name
	asyncAddCounter(state, payload=0) {
		// async
		setTimeout(function() {
			// call methods in mutations
			state.commit('addCounter', payload)
		}, 3000);
	}
}
// to change states syncly
const mutations = {
	setStatus(state,newstatus) {
		state.status = newstatus;
  	console.log('set Store status: '+state.status);
	},
	addCounter(state, payload=0) {
		state.counter += payload;
		console.log('add Store counter: '+state.counter);
	}
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})