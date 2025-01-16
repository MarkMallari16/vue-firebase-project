import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import './collection/firebase'; 

const app = createApp(App);

app.use(router);
app.mount("#app");