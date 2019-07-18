<template>
  <div id="app">
  	<router-view name="myHeader"></router-view>
  	<section class="container">
	    <h1>Page2</h1>
	    <select v-model="status">
	    	<option value="ONLINE">Online</option>
	    	<option value="OFFLINE">Offline</option>
	    </select>
	    <div class="jumbotron">
	    	<div class="col-md-6">
			    <h1>status: {{showStatus}}</h1>
			  </div>
	    	<div class="col-md-6">
			    <h1><button @click="addCounter"> Add </button> counter: {{showCounter}}</h1>
			    <h1><button @click="asyncAddCounter"> Add after 3 sec </button> counter: {{showCounter}}</h1>
			  </div>
	    </div>
	    <div class="row">
	    	<div class="col-md-6">
	    		<list></list>
	    	</div>
	    	<div class="col-md-6">
	    		<card></card>
	    	</div>
	    </div>
	    <h2 class="alert alert-dismissible alert-warning">Using Vue Router link</h2>
		  <div class="row">
		    <div class="col-md-6">
		    	<h3>Player</h3>
		    	<!-- router-link will be rendered as <a> -->
		      <!-- to URI path -->   
		      <router-link to="/player/1">Player1</router-link>   
		      <router-link to="/player/2">Player2</router-link>   
		    <hr>
		      <!-- go by $router methods -->
		      <button @click="goPlayer(1)">Player1</button>
		      <button @click="goPlayer(2)">Player2</button>
		    <hr>
		      <!-- go by passing objects -->
		      <router-link :to="{ name: 'Player', params: { uid: 1 }}">Player1</router-link>
		      <router-link :to="{ name: 'Player', params: { uid: 2 }}">Player2</router-link>
		    </div>
		    <div class="col-md-6">
		    	<h3>User</h3>
		      <!-- go by passing objects -->
		      <router-link :to="{ name: 'User', params: { uid: 1, nationality: 'usa' }}">User USA</router-link>
		      <button @click="goUser(2,'Taiwan')">User Taiwan</button>
		      <!-- go by passing string -->
		      <router-link to="/user/3/japan">User Japan</router-link>
		      <router-link :to="{ path: '/user/2/taiwan/about' }">About User Taiwan</router-link>
		    </div>
		  </div><!-- row -->
		  <hr>
	    <h2>--- child view: myDetail ---</h2>
	    <router-view name="myDetail"></router-view>
	  </section>
  </div>
</template>

<script lang="ts">
// import Vue from 'vue';
// import Component from 'vue-class-component';
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator';
import EventBus from '../utils/EventBus'
import $ from 'jquery'

@Component
export default class page2 extends Vue {
// data
	// hook UI via v-model
	status = this.$store.getters.status; 	 
// watch
  @Watch('status')
  private statusChanged():void {
  	// change state of Store
  	this.$store.commit('setStatus',this.status)
  }
// computed
	get showStatus() {
		return this.$store.getters.status;
	}
	get showCounter() {
		return this.$store.getters.counter;
	}
// methods
	addCounter() {
		// call mutations
		this.$store.commit('addCounter',2) // add 2
	}
	asyncAddCounter() {
		// call actions
		this.$store.dispatch('asyncAddCounter',1) // add 1
	}
  goPlayer(uid) {
    // by different $router methods
    this.$router.push({ path: `/player/${uid}` });      
    //this.$router.push({ name: 'Player', params: { uid: uid } });
    //this.$router.push({ path: '/player', query: { uid: uid }}); // url-get query
    //url History 
    //this.$router.go(-1);
    console.log(`goPlayer: /player/${uid}`)
  }
  goUser(uid,nationality) {
    this.$router.push({ path: `/user/${uid}/${nationality}` });  
    console.log(`goUser: /user/${uid}/${nationality}`)          
  }
// life-cycle
	mounted() {
		console.log(`mounted status = ${this.$store.getters.status}`)
	}
  
}
</script>

<style lang="css" scoped>

</style>
