<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import GoogleButton from "@/components/GoogleButton.vue";
import Logo from "../assets/budget.png";

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
      switch (error.code) {
        case "auth/invalid-email":
          errorMessage.value = "Invalid email address.";
          break;
        case "auth/email-already-in-use":
          errorMessage.value = "The email address is already in use by another account.";
          break;
        case "auth/weak-password":
          errorMessage.value = "The password must be 6 characters long or more.";
          break;
      }
    });
};
</script>
<template>
  <div class="bg-base-200">
    <div class="grid min-h-screen place-items-center mx-6 lg:mx-0">
      <div class="w-full lg:w-1/3 bg-white ring-1 ring-inset ring-gray-200 p-10">
        <div class="flex items-center gap-2 mb-6">
          <img :src="Logo" alt="Logo" class="w-10 h-10" />
          <h2 class="text-3xl font-bold uppercase">Bugdet Tracker</h2>
        </div>
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
            <GoogleButton />
          </div>
          <div class="mt-2 text-center text-gray-800">
            <router-link to="/login">Already have an account? Log in here. </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
