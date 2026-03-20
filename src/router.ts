import { createWebHistory, createRouter } from 'vue-router';
import HomeView from "./pages/Home.vue";
import PortfolioView from "./pages/Portfolio.vue";


export const router = createRouter({
    linkActiveClass: 'border-indigo-500',
    linkExactActiveClass: 'border-indigo-700',
    history: createWebHistory(),
    routes: [ 
        { path: "/", component: HomeView },
        { path: "/portfolio", component: PortfolioView }
    ],
})