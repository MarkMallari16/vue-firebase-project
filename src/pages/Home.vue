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
  <div class="pt-10 px-8 lg:px-20">
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h1 class="text-3xl font-bold">Welcome Back, {{ user.email }}!</h1>
        <p class="text-lg text-gray-600 mt-1">
          Here’s what’s happening with your account today.
        </p>
        <label htmlFor="my-drawer" className="mt-2 btn btn-primary drawer-button"
          >Open drawer</label
        >

        <div class="mt-4 grid grid-cols-1 lg:grid-cols-3  gap-5 ">
          <div class="bg-base-200 rounded-sm p-10 ring-1 ring-inset ring-base-300">
            <h2 class="text-2xl">Income: <span class="font-bold">20040</span></h2>
          </div>
          <div class="bg-base-200 rounded-sm  p-10 ring-1 ring-inset ring-base-300">
            <h2 class="text-2xl">Expenses: <span class="font-bold">2000</span></h2>
          </div>
          <div class="bg-base-200 rounded-sm  p-10 ring-1 ring-inset ring-base-300">
            <h2 class="text-2xl">Remaining Budget: <span class="font-bold">2000</span></h2>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <li><a>Dashboard </a></li>
          <li><a>Income Tracking</a></li>
          <li><a>Expense Tracking</a></li>
          <li><a>Budget Overview</a></li>
          <li><a>Reports/Charts</a></li>
          <li><a>Settings</a></li>
        </ul>
      </div>
    </div>
    <div>
      <button class="btn btn-error mt-4" @click="handleSignOut">logout</button>
    </div>
  </div>
</template>
