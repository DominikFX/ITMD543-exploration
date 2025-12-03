import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import PlantsView from '../views/PlantsView.vue';
import PlantDetailView from '../views/PlantDetailView.vue';
import TasksView from '../views/TasksView.vue';
import ZonesView from '../views/ZonesView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/plants', name: 'plants', component: PlantsView },
  { path: '/plants/:id', name: 'plant-detail', component: PlantDetailView, props: true },
  { path: '/tasks', name: 'tasks', component: TasksView },
  { path: '/zones', name: 'zones', component: ZonesView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;