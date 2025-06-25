import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SkillView from '../views/SkillView.vue'
import ProjectView from '../views/ProjectView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/skill',
      name: 'Skill',
      component: SkillView
    },
    {
      path: '/project',
      name: 'Project',
      component: ProjectView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView,
    }
  ]
})

export default router
