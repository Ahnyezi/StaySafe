import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Main from "@/views/Main/Main.vue";
import NotFound from "@/views/NotFound/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
