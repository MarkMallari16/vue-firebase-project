<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { db } from "../collection/firebase";
import GoogleButton from "@/components/GoogleButton.vue";
import { doc, setDoc } from "firebase/firestore";
import Logo from "../assets/budget.png";

const router = useRouter();
const email = ref("");
const password = ref("");

const errorMessage = ref("");
const auth = getAuth();

const login = async (event) => {
  event.preventDefault();

  try {
    const { user } = signInWithEmailAndPassword(auth, email.value, password.value);

    console.log("Successfully logged in!", user);

    //save user data
    const userRef = doc(db, "users", user.uid);
    console.log(userRef);
    await setDoc(
      userRef,
      {
        email: user.email,
        displayName: user.displayName || "Anonymous",
        lastLogin: new Date(),
      },
      { merge: true }
    );

    console.log("User added/updated in Firestore.");
    console.log(auth.currentUser);
    router.push("/home");
  } catch (error) {
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
  }
};
</script>
<template>
  <div class="bg-base-200">
    <div class="grid min-h-screen place-items-center mx-6 lg:mx-0">
      <div
        class="w-full lg:w-1/3 bg-white ring-1 ring-inset ring-gray-200 rounded-md p-10"
      >
        <div class="flex items-center gap-2 mb-6">
          <img :src="Logo" alt="Logo" class="w-10 h-10" />
          <h2 class="text-3xl font-bold uppercase">Bugdet Tracker</h2>
        </div>
        <form @submit.prevent="login">
          <div class="mb-4">
            <h1 class="text-2xl font-bold">Log in</h1>
            <p class="text-gray-400">Log into your account</p>
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
            <button type="submit" class="btn btn-primary text-center w-full mb-3">
              Log in
            </button>
            <GoogleButton />
          </div>
          <div class="mt-2 text-center text-gray-800">
            <router-link to="/signup"> Don't have an account? Sign up here.</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
