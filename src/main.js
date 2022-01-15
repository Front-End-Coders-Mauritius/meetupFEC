import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Homepage from "../src/components/Homepage.vue";
import AllEvents from "../src/components/AllEvents.vue";
import Event from "../src/components/Event.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: Homepage,
  },
  {
    path: "/events",
    component: AllEvents,
    children: [
      {
        path: ":eventIndex",
        name: "singleEvent",
        component: Event,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");
