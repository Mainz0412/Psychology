import { createRouter, createWebHistory } from 'vue-router'

// 引入你的页面组件
import Login from '@/views/Login.vue'
import Main from '@/views/Main.vue'
import Datasets from '@/views/Datasets.vue'
import Procedure from '@/views/Procedure.vue'
import Profile from '@/views/Profile.vue'
import Report from '@/views/Report.vue'
import Students from '@/views/Students.vue'
import VideoEvaluation from '@/views/VideoEvaluation.vue'
// 例如：import Datasets from '@/views/Datasets.vue'
// 你可以继续添加其他页面组件

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/main', name: 'Main', component: Main },
  { path: '/datasets', name: 'Datasets', component: Datasets },
  { path: '/procedure', name: 'Procedure', component: Procedure },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/report', name: 'Report', component: Report },
  { path: '/students', name: 'Students', component: Students },
  { path: '/video-evaluation', name: 'VideoEvaluation', component: VideoEvaluation },
  // 继续添加其他页面路由
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
