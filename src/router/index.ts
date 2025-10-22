import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import StudentListView from '../views/StudentListView.vue'

// 创建基本路由配置
const routes = [
  {
    path: '/',
    name: 'event-list-view',
    component: EventListView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/students',
    name: 'students',
    component: StudentListView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router