import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@/assets/main.scss";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  components,
  directives,
});
app.use(pinia);
app.use(vuetify);
app.use(router);
app.mount("#app");
