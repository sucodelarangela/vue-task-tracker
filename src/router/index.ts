import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Tasks from '@/views/Tasks.vue';
import Projects from '@/views/Projects.vue';
import Form from '@/views/projects/Form.vue';
import List from '@/views/projects/List.vue';

// All routes go in this array
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/projects',
    component: Projects,
    // route nesting
    children: [
      {
        path: '',
        name: 'Projects',
        component: List
      },
      {
        path: 'new',
        name: 'Novo projeto',
        component: Form
      },
      {
        path: ':id',
        name: 'Editar projeto',
        component: Form,
        // setting the :id as a prop of the component
        props: true
      },
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router; // to be imported in `main.ts`
