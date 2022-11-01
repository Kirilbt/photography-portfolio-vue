import { createRouter, createWebHistory } from "vue-router"

import ProjectsListVue from './pages/projects/ProjectsList.vue'
import ProjectDetailVue from './pages/projects/ProjectDetail.vue'
import AboutVue from './pages/about/About.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/projects' },
    { path: '/projects', component: ProjectsListVue },
    { path: '/projects/:id', component: ProjectDetailVue, props: true },
    { path: '/about', component: AboutVue },
    { path: '/:notFound(.*)', component: NotFound },
  ]
})

export default router
