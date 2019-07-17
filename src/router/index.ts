// init Vue-Router and URI
import Vue from 'vue'
import Router from 'vue-router'
// header nav
import Header from '../page1/components/Header.vue'
// page1
import Hello from '../page1/components/Hello.vue'
import News from '../page1/components/News.vue'
// page2
import Player from '../page2/components/Player.vue'
import PlayerAbout from '../page2/components/player/About.vue'
import User from '../page2/components/User.vue'

// register global variables
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      // component: Hello,
      components: {
      	myHeader: Header,
      	myDetail: Hello
      },
      alias: '/home'
    },    
    {
      path: '/news',
      name: 'News',
      // component: News,
      components: {
      	myHeader: Header,
      	myDetail: News
      },
      alias: '/mynews'
    }, 
    {
    	path: '/Curry',
    	redirect: '/player/1'
    }, 
    {
    	path: '/user/:uid/:nationality',
    	name: 'User',
    	// component: User,
    	components: {
      	myHeader: Header,
      	myDetail: User
      },
      children: [
		    {
		      path: 'about',
		      component: PlayerAbout
		    }, 
      ],
    	props: true // true if there's any props in .vue
    },   
    {
      path: '/player/:uid', // dynamic param
      name: 'Player',
      // component: Player,
      components: {
      	myHeader: Header,
      	myDetail: Player
      },
      children: [
		    {
		      path: 'about',
		      component: PlayerAbout
		    }, 
      ]
    }
  ]
})