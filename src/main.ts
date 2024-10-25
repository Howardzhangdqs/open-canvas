import "./assets/main.css";
import "vditor/dist/index.css";

import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "./App.vue";

import * as i18n_config from "./i18n/index";

const i18n = createI18n({
    locale: "zh",
    messages: {
        en: i18n_config.en,
        zh: i18n_config.zh,
    }
});

const app = createApp(App);

app.use(i18n);

app.mount("#app");
