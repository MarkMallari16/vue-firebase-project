<script setup>
import { ref } from "vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
import Navbar from "@/components/Navbar.vue";

const router = useRouter();
const email = ref("");
const password = ref("");

const errorMessage = ref("");
const auth = getAuth();

const login = (event) => {
  event.preventDefault();

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("successfully login", data);

      console.log(auth.currentUser);
      router.push("/home");
    })
    .catch((error) => {
      console.log(error.message);
      switch (error.code) {
        case "auth/invalid-email":
          errorMessage.value = "Invalid Email.";
          break;
        case "auth/user-not-found":
          errorMessage.value = "User does not exists.";
          break;
        case "auth/wrong-password":
          errorMessage.value = "Incorrect password.";
          break;
        default:
          errorMessage.value = "Email or Password was incorrect.";
          break;
      }
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push("/home");
    })
    .catch((error) => {
      console.error(error.message);
    });
};
</script>
<template>
  <Navbar />
  <div class="grid min-h-screen place-items-center">
    <div class="w-full lg:w-1/3 bg-base-200 ring-1 ring-inset ring-gray-700 p-8 rounded-lg">
      <form @submit="login">
        <h1 class="text-2xl">Log in</h1>
        <div class="mt-2">
          <div>
            <label for="email">Email</label>
            <input
              type="email"
              class="mt-1 block input input-bordered w-full"
              placeholder="Enter your email"
              v-model="email"
              required
            />
          </div>
          <div class="mt-4">
            <label for="email">Password</label>
            <input
              type="password"
              class="mt-1 block input input-bordered w-full"
              placeholder="Enter your password"
              v-model="password"
              required
            />
          </div>
        </div>
        <div>
          <p v-if="errorMessage" class="mt-2 text-red-500">{{ errorMessage }}</p>
        </div>
        <div class="mt-6">
          <button class="btn btn-primary text-center w-full mb-3" @click="login">
            Log in
          </button>
          <button class="btn btn-outline text-center w-full" @click="signInWithGoogle">
            Log in with Google
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
