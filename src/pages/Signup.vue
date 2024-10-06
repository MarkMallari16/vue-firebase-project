<script setup>
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
import Navbar from "@/components/Navbar.vue";

const router = useRouter();
const email = ref("");
const password = ref("");
const errorMessage = ref("");

const register = (event) => {
  event.preventDefault();

  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("susccessfully register!", data);
      router.push("/home");
    })
    .catch((error) => {
      if (error.code === "auth/invalid-email") {
        errorMessage.value = "Invalid email address.";
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
    <div class="w-full lg:w-1/3 bg-base-200 p-8 rounded-lg">
      <form @submit="register">
        <h1 class="text-2xl">Sign in</h1>
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
          <button
            type="submit"
            class="btn btn-primary text-center w-full mb-3"
            @click="register"
          >
            Sign in
          </button>
          <button type="button" class="btn btn-outline text-center w-full" @click="signInWithGoogle">Sign in with Google</button>
        </div>
      </form>
    </div>
  </div>
</template>
