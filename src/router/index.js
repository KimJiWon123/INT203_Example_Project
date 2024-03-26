import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import TodoManager from '../components/TodoManager.vue'
import TodoDetail from '../components/TodoDetail.vue'
import { getItemById } from '../libs/fetchUtils.js'
//set history object to store path when visiting
const history = createWebHistory()
//give route paths
const routes = [
  { path: '/todo-detail/:todoId', name: 'TodoDetail', component: TodoDetail },
  { path: '/login', name: 'Login', component: Login },
  { path: '/', name: 'AboutUs', component: About },
  //   { path: '/home', name: 'Home', redirect: { name: 'AboutUs' } },
  { path: '/home', name: 'Home', component: TodoManager },
  { path: '/todo-manager', name: 'TodoManager', component: TodoManager },
  { path: '/:notfoundpath(.*)', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history,
  routes,
  linkActiveClass: 'text-purple-500',
  linkExactActiveClass: 'text-blue-500'
})

// async function validateUser(user) {
//   return await getItemById(`${import.meta.env.VITE_BASE_URL}/users`, user)
// }
// router.beforeEach(async (to, from) => {
//   const isMember = await validateUser('member-101')
//   console.log(isMember)
//   if (!isMember && to.name !== 'Login') return '/login'
// })

export default router