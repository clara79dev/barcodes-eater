import { createApp } from "vue";
import App from "./App.vue";
import VueBarcodeScanner from "vue-barcode-scanner";

const app = createApp(App);

app.use(VueBarcodeScanner);

app.mount("#app");
