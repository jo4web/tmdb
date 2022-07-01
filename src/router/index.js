import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import CheckoutPage from '../views/CheckoutPage.vue'

const routes = [
  {
    path: '/',
    component: Homepage,
    props: true
  },
  {
    path: '/checkout',
    component: CheckoutPage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
