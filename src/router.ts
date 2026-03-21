import { createWebHistory, createRouter } from 'vue-router';
import HomeView from "./pages/Home.vue";
import PortfolioView from "./pages/Portfolio.vue";
import ProjectPageView from "./pages/ProjectPage.vue";

const routes =  [ 
    { path: "/", component: HomeView },
    { path: "/portfolio", component: PortfolioView },
    { path: '/project/:id', component: ProjectPageView, props: true }
]

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router;