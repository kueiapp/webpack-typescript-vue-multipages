<template>
  <div class="hello">
    <h2 class="alert alert-dismissible alert-success">Embeded About Page</h2>
    <h1>Params.uid: {{ $route.params.uid }}</h1>
    <h1>uid: {{ uid }}</h1>
  </div>
</template>

<script lang="ts">
// import Vue from 'vue';
// import Component from 'vue-class-component';
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator';
import $ from 'jquery'
import MyRoute from '../../MyRoute.class'

@Component
export default class About extends Vue {
// data
  name = "About"
  uid = 'xx'
// watch
  @Watch('$route',{ immediate: true })
  private changeRouter(route:MyRoute):void {
    console.log('change About route: ', route)
    this.uid = route.params.uid  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
