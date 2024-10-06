<script setup>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(false);

const user = ref("");
let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      isLoggedIn.value = true;
      user.value = currentUser;
    } else {
      isLoggedIn.value = false;
      user.value = null;
      router.push("/login");
    }
  });
});

const handleSignOut = () => {
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
    <h1 class="text-2xl">Welcome Back! {{ user.email }}</h1>
    <div>
      <button class="btn btn-error mt-4" @click="handleSignOut">logout</button>
    </div>
  </div>
</template>
