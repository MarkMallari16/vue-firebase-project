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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-8"
          >
            <path
              d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z"
            />
          </svg>
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
