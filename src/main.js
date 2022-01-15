import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Homepage from "../src/components/Homepage.vue";
import NewHomepage from "../src/components/NewHomepage.vue";
import AllEvents from "../src/components/AllEvents.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: NewHomepage,
  },
  {
    path: "/events",
    name: "events",
    component: AllEvents,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
