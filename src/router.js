import { createRouter, createWebHistory } from "vue-router";


// Components
import ContactPage from "./views/ContactPage.vue";
import HomePage from "./views/HomePage.vue";
import PortfolioPage from "./views/PortfolioPage.vue";
import ProjectsPage from "./views/ProjectsPage.vue";
import ResumePage from "./views/ResumePage.vue";

// Router
let router = createRouter({
    routes: [
        { path: "/", component: HomePage },
        { path: "/portfolio", component: PortfolioPage },
        { path: "/projects", component: ProjectsPage },
        { path: "/resume", component: ResumePage },
        { path: "/contacts", component: ContactPage }
    ],
    history         : createWebHistory(),
    linkActiveClass : "active"
});

export default router;
