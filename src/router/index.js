import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'JobRoaster - Roasting Lowongan Kerja' }
  },
  {
    path: '/about',
    name: 'about',
    // lazy-loading untuk route about
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'Tentang RoasterHub' }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Ubah title halaman berdasarkan rute
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'RoasterHub'
  next()
})

export default router