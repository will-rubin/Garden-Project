import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Gardens from '../views/Gardens.vue'
import Plants from '../views/Plants.vue'
import Account from '../views/Account.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/gardens', name: 'Gardens', component: Gardens},
    {path: '/plants', name: 'Plants', component: Plants},
    {path: '/account', name: 'Account', component: Account}
]
    
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router