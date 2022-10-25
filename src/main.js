import { createApp } from "vue";
import App from "./App.vue";
import VueBarcode from "@chenfengyuan/vue-barcode";

const app = createApp(App);

app.component(VueBarcode.name, VueBarcode);

app.mount("#app");
