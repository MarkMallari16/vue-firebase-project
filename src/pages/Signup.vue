<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import { useAuth } from "@/composables/auth";
import GoogleLogo from "../assets/google.png";

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

const { signInWithGoogle } = useAuth();
</script>
<template>
  <Navbar />
  <div class="grid min-h-screen place-items-center mx-6 lg:mx-0">
    <div
      class="w-full lg:w-1/3 bg-base-200 ring-1 ring-inset ring-gray-300 p-10"
    >
      <form @submit.prevent="register">
        <div class="mb-4">
          <h1 class="text-2xl font-bold">Sign in</h1>
          <p class="text-gray-400">Create your account</p>
        </div>
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
          <button
            type="button"
            class="btn btn-ghost text-center w-full"
            @click="signInWithGoogle"
          >
            <img :src="GoogleLogo" alt="Google Logo" class="w-4 h-4" />
            Sign in with Google
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
