import Vue from "vue";
import App from "./App.vue";
import Omiv, { render } from "omiv";
import createStore from "./store";
import createRouter from "./router";

Vue.use(Omiv);

export function createApp() {
  const store = createStore();
  const router = createRouter();
  const app = render(App, "#app", store, {
    router
  });
  return { app, router, store };
}
