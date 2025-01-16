<script setup>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import DashboardBarChart from "@/components/DashboardBarChart.vue";
import DashboardLineChart from "@/components/DashboardLineChart.vue";
import DashboardOverview from "@/components/DashboardOverview.vue";
import DashboardChart from "@/components/DashboardChart.vue";

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
  <div class="min-h-screen pt-2 bg-base-200 px-2">
    <!--Top-->
    <div
      class="flex flex-col lg:flex-row justify-between items-center gap-10 bg-white px-4 ring-1 ring-inset ring-gray-300 py-4 mb-2 rounded-md"
    >
      <div>
        <h1 class="text-2xl font-medium uppercase">Budget Tracker</h1>
      </div>
      <div class="w-1/2 relative">
        <input
          type="text"
          class="input input-bordered pl-12 w-full"
          placeholder="Search..."
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-5 absolute left-4 top-4"
        >
          <path
            fill-rule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <div class="flex items-center gap-5">
        <div class="flex gap-2 items-center">
          <div className="avatar">
            <div className=" w-10 h-10 rounded-full ">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <!-- <h3 class="font-medium text-md">{{ user.email }}</h3> -->
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 text-primary"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>
        <button @click="handleSignOut">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="grid grid-cols-[1fr_4fr] gap-3">
      <!--sidebar-->
      <div
        class="bg-white w-full px-5 py-8 rounded-md ring-1 ring-inset ring-base-300 h-full"
      >
        <div>
          <div
            class="flex gap-4 items-center px-4 py-3 bg-base-300 hover:bg-base-300 rounded-md cursor-pointer mb-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <h2 class="font-medium">Dashboard</h2>
          </div>

          <!--Transactions-->
          <div
            class="flex gap-4 items-center px-4 py-3 hover:bg-base-300 rounded-md cursor-pointer mb-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h18v18H3zM8 7h8v2H8zM8 11h8v2H8zM8 15h8v2H8z"
              />
            </svg>

            <h2 class="font-medium">Transaction</h2>
          </div>

          <div
            class="flex gap-4 items-center px-4 py-3 hover:bg-base-300 rounded-md cursor-pointer mb-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 6h15M3 12h18M4.5 18h15"
              />
            </svg>
            <h2 class="font-medium">Budget Overview</h2>
          </div>

          <div
            class="flex gap-4 items-center mt-8 px-4 py-3 hover:bg-base-300 rounded-md cursor-pointer mb-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 6h.008v.008H6V6Z"
              />
            </svg>

            <h2 class="font-medium">Categories</h2>
          </div>

          <div
            class="flex gap-4 items-center px-4 py-3 hover:bg-base-300 rounded-md cursor-pointer mb-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12M6 12h12" />
            </svg>
            <h2 class="font-medium">Goals</h2>
          </div>

          <!-- Settings -->
          <div
            class="flex gap-4 items-center px-4 py-3 mt-10 hover:bg-base-300 rounded-md cursor-pointer mb-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <h2 class="font-medium">Settings</h2>
          </div>
        </div>
      </div>

      <!--Overview-->
      <div class="w-full">
        <DashboardOverview />
        <!--Chart-->
        <DashboardChart />
      </div>
    </div>
  </div>
</template>
