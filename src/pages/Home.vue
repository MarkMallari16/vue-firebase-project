<script setup>
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
const router = useRouter();
const auth = getAuth();

const logout = () => {
  signOut(auth)
    .then(() => {
      console.log("successfully logout");
      router.push("/login");
    })
    .catch((error) => {
      console.error(error.message);
    });
};
</script>

<template>
  <div class="pt-10 px-20">
    <h1 class="text-2xl">Welcome Back!</h1>
    <div>
      <button class="btn btn-error mt-4" @click="logout">logout</button>
    </div>
  </div>
</template>
