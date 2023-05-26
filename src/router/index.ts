import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Tasks from '@/views/Tasks.vue';
import Projects from '@/views/Projects.vue';

// All routes go in this array
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router; // to be imported in `main.ts`
