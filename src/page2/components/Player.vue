<template>
  <div class="hello">
    <h1 class="alert alert-primary">{{ msg }}</h1>
    <h2 class="alert alert-dismissible alert-primary">Player Page</h2>
    <h1>state: {{showStatus}}</h1>
    <p>{{ detail.uid }} - {{ detail.name }}</p>
    <button class="btn btn-success" @click="goPlayerAbout(detail.uid)">Show About Comp</button>
    <!-- subview with specified name -->
    <router-view name="myDetail"/>
    <hr>
    <!-- subview -->
    <router-view/>
  </div>
</template>

<script lang="ts">
// import Vue from 'vue';
// import {Prop} from 'vue-property-decorator';
// use vue-property-decorator to replace them
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator';
import $ from 'jquery'
import MyRoute from '../MyRoute.class'

@Component
export default class Player extends Vue {
  name = 'Player';
  msg = 'Welcome to Player App';
  aboutlink = "";
  detail = {};
  // commonStatus = this.$store.state.status;
// computed
  get showStatus() {
    return this.$store.getters.status;
  }
// watch
  @Watch('$route',{ immediate: true })
  private changeRouter(route:MyRoute):void {
    console.log('change Player route: ', route)
    this.detail = this.getData(route.params.uid)
    this.aboutlink = '/player/' + route.params.uid + '/about';
  }
// life-cycle
  mounted () {
    // executed only ONCE after el was created
    // cannot go to next elements when clicking Player, it should go back /home again
    console.log('Player mounted...')
    // this.detail = this.getData(this.$route.params.uid)
    // this.aboutlink = '/player/' + this.$route.params.uid + '/about';
  }
  // to solve problem above, using hooks below in JS
  // but it doens't work for TypeScript
  // beforeRouteEnter(to: MyRoute, from: MyRoute, next: () => void): void {
  //   console.log('beforeRouteEnter'); 
  //   next();
  // }
  // beforeRouteUpdate(to: MyRoute, from: MyRoute, next: () => void): void {
  //   console.log('beforeRouteUpdate');
  //   next();
  // }
  // beforeRouteLeave(to: MyRoute, from: MyRoute, next: () => void): void {
  //   console.log('beforeRouteLeave'); 
  //   next();
  // }

  goPlayerAbout(uid) {
    this.$router.push({ path: `/player/${uid}/about` });
  }
  // methods
  getData (uid):object {
    console.log('get data uid = '+uid)
    switch( uid.toString() ){
      case '1':
        return {uid: 1, name:"Jordan"}
      case '2':
        return {uid: 2, name:"Peppon"}
      default:
        return {uid: -1}
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-weight: bold;
  color: green;
}
</style>
