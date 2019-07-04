<template>
  <div id="app">
    <h1>Page1</h1>
    <h3><a href="training.html">go to Page2</a></h3>
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
