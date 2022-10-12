import { createWebHistory, createRouter } from "vue-router";
import WelcomePage from "@/page/WelcomePage.vue";
import HelpPage from "@/page/HelpPage.vue";
import TestPage from "@/page/TestPage.vue";
import FinishPage from "@/page/FinishPage.vue";

const routes = [
  {
    name: "welcome",
    path: "/",
    component: WelcomePage,
    props: true,
  },
  {
    name: "help",
    path: "/help",
    component: HelpPage,
    props: true,
  },
  {
    name: "test",
    path: "/test",
    component: TestPage,
    props: true,
  },
  {
    name: "finish",
    path: "/finish",
    component: FinishPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
