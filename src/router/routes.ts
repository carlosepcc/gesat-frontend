import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') },
    { path: '/artefactos', component: () => import('src/pages/Artefactos.vue') },
    { path: '/minutas', component: () => import('src/pages/Minutas.vue') },
    { path: '/rtecnicos', component: () => import('src/pages/ReportesTecnicos.vue') },
    { path: '/rnotificacion', component: () => import('src/pages/ReportesNotificacion.vue') },
    { path: '/hallazgos', component: () => import('src/pages/Hallazgos.vue') },
    { path: '/users', component: () => import('src/pages/Users.vue') },
    { path: '/dictamenes', component: () => import('src/pages/Dictamenes.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
