<template>
  <div class="hello">
    <h1>$route.params.uid: {{ $route.params.uid }}</h1>
    <h1>$route.params.nationality: {{ $route.params.nationality }}</h1>
    <h3>status: {{showStatus}}</h3>
    <h1>ID: {{ uid }}</h1>
    <h1>Nation: {{ nationality }}</h1>
    <!-- subview with specified name -->
    <route-view name="myDetail"></route-view>
    <hr>
    <button class="btn btn-primary" @click="goUserAbout">Show About Comp</button>
    <!-- subview -->
    <router-view/>
  </div>
</template>

<script lang="ts">
// import Vue from 'vue';
// import Component from 'vue-class-component';
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator';
import $ from 'jquery'
import MyRoute from '../MyRoute.class'

@Component({
  components: {  }
})
export default class User extends Vue {
// data
  name = 'User';
// props
  @Prop(String)
  uid:string;
  nationality:string;
// watch
  @Watch('$route',{ immediate: true })
  private changeRouter(route:MyRoute):void {
    console.log('change User route: ', route)
    this.uid = route.params.uid
    this.nationality = route.params.nationality    
  }
// computed
  get showStatus() {
    return this.$store.getters.status;
  }
// lifecycle
  mounted () {
    console.log('User mounted...')
  }
// methods
  goUserAbout() {
    this.$router.push({ path: `/user/${this.uid}/${this.nationality}/about` });
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
