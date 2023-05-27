import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Tasks from '@/views/Tasks.vue';
import Projects from '@/views/Projects.vue';
import Form from '@/views/projects/Form.vue';

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
  {
    path: '/projects/new',
    name: 'Novo projeto',
    component: Form
  },
  {
    path: '/projects/:id',
    name: 'Editar projeto',
    component: Form,
    // setting the :id as a prop of the component
    props: true
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router; // to be imported in `main.ts`
