import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import routes from "../src/routes/route";
import VueApexCharts from "vue3-apexcharts";
const app = createApp(App);
app.use(VueApexCharts);
app.use(routes);
app.mount("#app");

// createApp(App).mount('#app');
