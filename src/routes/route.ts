import { createRouter, createWebHistory } from "vue-router";
import HomeMainView from "../views/app/home/HomeMainView.vue";
import { agentRoutes } from "./agent";

const routes = [
  ...agentRoutes,
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../views/404.vue"),
  },
  {
    path: "/",
    name: "home",
    component: HomeMainView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
