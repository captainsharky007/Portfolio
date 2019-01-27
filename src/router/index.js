import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import About from '@/components/pages/About'
import Projects from '@/components/pages/Projects'
import Contact from '@/components/pages/Contact'
import Sendpal from '@/components/pages/Sendpal'

import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import '@/assets/scss/main.scss'
import '@/assets/fonts/inter-ui.css'

Vue.use(Router)
// window.$ = require('jquery')

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Projects',
      component: Projects,
      meta: {
        title: 'Home Page - Example App',
        metaTags: [
          {
            name: 'description',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/projects/sendpal',
      name: 'Sendpal',
      component: Sendpal
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
