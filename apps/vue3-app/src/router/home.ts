import type { RouteRecordRaw } from 'vue-router'

const beforeEnter = async (to: any, from: any, next: any) => {
  return next({ path: '/home' })
}

export default [
  {
    path: '/',
    meta: {
      title: '首页'
    },
    beforeEnter,
    component: () => import('@/views/home/index.vue')
  }
] as any as RouteRecordRaw[]
