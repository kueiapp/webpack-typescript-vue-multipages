<template>
	<div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		  <a class="navbar-brand" href="#">Navbar</a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>

		  <div class="collapse navbar-collapse" id="navbarColor02">
		    <ul class="navbar-nav mr-auto">
		      <li class="nav-item active">
		        <a class="nav-link" href="page1.html">Page1 <span class="sr-only">(current)</span></a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="page2.html">Page2</a>
		      </li>
		    </ul>
		    <form class="form-inline my-2 my-lg-0">
		      <input class="form-control mr-sm-2" type="text" placeholder="Search">
		      <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
		    </form>
		  </div>
		</nav>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import $ from 'jquery'


@Component({
  components: {  }
})
export default class Header extends Vue {
	name = "Header"
}
</script>

<style lang="css" scoped>

</style>
