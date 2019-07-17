<template>
  <div id="app">
  	<router-view name="myHeader"></router-view>
    <h1>Page1</h1>
    <h3><a href="page2.html">go to Page2</a></h3>
    <h2>Router link</h2>
    <p>
    	<!-- router-link will be rendered as <a> -->
      <router-link to="/home">Home</router-link>
      <router-link to="/mynews">News</router-link>
      <!-- to 傳URI path 
      <router-link to="/player/1/about">球員1 About</router-link>
      <router-link to="/player/2">球員2</router-link>   -->   
    </p>
    <!-- router export -->
    <router-view/>

    <!-- child view -->
    <router-view name="myDetail"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import EventBus from '../utils/EventBus'
import $ from 'jquery'


@Component({
  components: {  }
})
export default class page1 extends Vue {

}
</script>

<style lang="css" scoped>

</style>
