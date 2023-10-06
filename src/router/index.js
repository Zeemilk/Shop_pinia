import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/HomeView.vue'
import detail from '../views/DetailView.vue'
import Buy from '../views/BuyView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/detail/:id',
    name: 'productDetail',
    component: detail
  },
  {
    path: '/buy',
    name: 'buy',
    component: Buy
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router