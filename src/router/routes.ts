import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') },
    { path: '/artefactos', component: () => import('src/pages/lists/Artefactos.vue') },
    { path: '/minutas', component: () => import('src/pages/lists/Minutas.vue') },
    { path: '/rtecnicos', component: () => import('src/pages/lists/ReportesTecnicos.vue') },
    { path: '/rnotificacion', component: () => import('src/pages/lists/ReportesNotificacion.vue') },
    { path: '/hallazgos', component: () => import('src/pages/lists/Hallazgos.vue') },
    { path: '/users', component: () => import('src/pages/lists/Users.vue') },
    { path: '/dictamenes', component: () => import('src/pages/lists/Dictamenes.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
