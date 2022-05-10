import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Details from '../views/Details';
import Create from '../views/Create';
import Tag from '../views/Tag';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/:id',
    name: 'details',
    component: Details,
    props: true,
  },
  {
    path: '/add',
    name: 'create',
    component: Create,
    props: true,
  },
  {
    path: '/tag/:tag',
    name: 'tag',
    component: Tag,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
