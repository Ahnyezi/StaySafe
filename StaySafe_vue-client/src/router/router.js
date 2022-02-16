import Vue from "vue";
import VueRouter from "vue-router";
import SearchMain from "@/views/SearchMain/SearchMain";
import NotFound from "@/views/NotFound/NotFound";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SearchMain",
    component: SearchMain,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
