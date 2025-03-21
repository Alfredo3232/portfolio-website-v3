import { createApp } from "vue";
import * as bootstrap from "bootstrap";
import router from "./router.js";

// App & CSS
import App from "./App.vue";
import "./scss/styles.scss";

// Components
import NavBar from "./components/NavBar.vue";

const app = createApp(App);

// Global Components
app.component("nav-bar", NavBar);

// Plugins
app.use(router);

app.mount("#app");
