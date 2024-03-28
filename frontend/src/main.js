import "bootstrap/dist/css/bootstrap.min.css";

import { createApp } from "vue";
import App from "@/App.vue";

const app = createApp(App);
app.mount("#app");

// const app = createApp({
//     data() {
//         return {
//             name: "Rehacan",
//         };
//     },
//     template: `<h1>Benim Adım {{name}}</h1>`,
// });

// app.mount("#app");