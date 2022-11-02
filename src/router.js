import { createRouter, createWebHistory } from "vue-router"

import ProjectsList from './pages/projects/ProjectsList.vue'
import ProjectDetails from './pages/projects/ProjectDetails.vue'
import About from './pages/about/About.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/projects' },
    { path: '/projects', component: ProjectsList },
    { path: '/projects/:id', component: ProjectDetails, props: true },
    { path: '/about', component: About},
    { path: '/:notFound(.*)', component: NotFound },
  ]
})

export default router
