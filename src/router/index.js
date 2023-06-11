import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GaleriaView from '../views/GaleriaView.vue'
import ServiciosView from '../views/ServiciosViewView.vue'
import NotFoundView from '../views/NotFoundView'
const routes = [
{
path: "/",
name: "HomeView",
component:HomeView
},

{
path: '/GaleriaView',
name: 'GaleriaView',
component: GaleriaView,  
},

{
path: '/ServiciosView',
name: 'ServiciosView',
component: ServiciosView, 
},

{ 
path: '/:pathMatch(.*)*',
name: 'NotFoundView',
component: NotFoundView 
}
]
const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})
export default router
