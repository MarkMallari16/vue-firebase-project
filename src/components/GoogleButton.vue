<script setup>
import { useAuth } from "@/composables/auth";
import GoogleLogo from "../assets/google.png";

const { signInWithGoogle } = useAuth();
</script>

<template>
  <button
    type="button"
    class="btn bg-white  text-center w-full ring-1 ring-inset ring-gray-300"
    @click="signInWithGoogle"
  >
    <img :src="GoogleLogo" alt="Google Logo" class="w-4 h-4" />
    Sign in with Google
  </button>
</template>
