import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/home'
import Header from '../components/luHeader'
import Footer from '../components/luFooter'
import Movies from '../components/moviePages/movieTitle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        header: Header,
        content: Home,
        footer: Footer
      }
    }, {
      path: '/movies',
      name: 'Movies',
      components: {
        header: Header,
        content: Movies,
        footer: Footer
      }
    }
  ]
})
