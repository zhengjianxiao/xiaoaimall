import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../view/home/home')
const Category = () => import('../view/category/catgrory')
const Cart = () => import('../view/shopcar/shopcar')
const Profile = () => import('../view/profile/profile')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/catgrory',
    component: Category
  },
  {
    path: '/shopcar',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router
