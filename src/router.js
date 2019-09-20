import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DogsPage from './views/DogsPage.vue'
import DogPage from './views/DogPage.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: DogsPage,
    },
    {
      path: '/dogs/:id',
      name: 'dog',
      component: DogPage,
    }
  ]
})
