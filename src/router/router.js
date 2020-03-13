import Vue from 'vue'
import VueRouter from 'vue-router'
import Todos from '../components/Todos.vue'
import About from '../components/About.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'todos',
    component: Todos
  },
  {
    path: '/about/:name',
    name: 'about',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
