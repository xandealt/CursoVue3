import { createRouter, createWebHistory } from 'vue-router'
// import { defineAsyncComponent } from '@vue/runtime-core'

const Home = () => import('../views/Home/index.vue')
const Credencials = () => import('../views/Credencials/index.vue')
const Feedbacks = () => import('../views/Feedbacks/index.vue')

/* const Feedbacks = defineAsyncComponent({
  loader: () => import('')
}) */

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/credencials',
    name: 'Credencials',
    component: Credencials,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:/pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
