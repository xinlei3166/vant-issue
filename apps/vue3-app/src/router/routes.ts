import type { RouteRecordRaw } from 'vue-router'

const RouterLayout = () => import('@/components/layout/Router.vue')
const NavbarLayout = () => import('@/components/layout/Navbar.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'homeHidden',
    meta: {
      title: '首页',
      icon: 'icon-reloadtime'
    },
    component: RouterLayout,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/home/home.vue')
      }
    ]
  }
]

export default routes
