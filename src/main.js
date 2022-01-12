import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import WelcomePage from "../src/components/WelcomePage.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: WelcomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
