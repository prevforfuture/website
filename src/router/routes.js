
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/convenios', component: () => import('pages/Index.vue') },
      { path: 'clientes', component: () => import('pages/Cliente.vue') },
      { path: 'aportes', component: () => import('pages/Aporte.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
