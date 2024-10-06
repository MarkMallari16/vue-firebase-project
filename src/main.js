import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG_ezAeYgbdBdReF90wlcnSOardH2x46I",
  authDomain: "vue-firebase-7de77.firebaseapp.com",
  projectId: "vue-firebase-7de77",
  storageBucket: "vue-firebase-7de77.appspot.com",
  messagingSenderId: "120517127738",
  appId: "1:120517127738:web:2f30d11e5cf8da65a9cf03",
  measurementId: "G-7TZVZQ6PY9"
};
const app = createApp(App);
// Initialize Firebase
initializeApp(firebaseConfig);

app.use(router);
app.mount("#app");

