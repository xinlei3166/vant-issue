import { createRouter, createWebHistory } from 'vue-router'
import home from './home'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...home, ...routes]
})

router.beforeEach(async (to, from, next) => {
  next()
})

router.afterEach(() => {})

export default router
