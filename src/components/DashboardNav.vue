<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import SidebarCloseButton from "./SidebarCloseButton.vue";
import AddTransactionModal from "./AddTransactionModal.vue";

const router = useRouter();
const isLoggedIn = ref(false);

const user = ref("");
let auth = getAuth();
const route = useRoute();

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

const showModal = () => {
  const modal = document.getElementById("add_transaction");

  if (modal) {
    modal.showModal();
  } else {
    console.error("Modal element not found");
  }
};
const isSidebarOpen = ref(false);
const handleToggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;

  console.log("Sidebar toggled:", isSidebarOpen.value);
};
</script>
<template>
  <!--Top-->
  <div
    class="flex flex-col lg:flex-row justify-between items-center gap-10 py-4 mb-2 rounded-md"
  >
    <div class="flex items-center gap-4">
      <div class="flex gap-5 items-center">
        <SidebarCloseButton @toggleSidebar="handleToggleSidebar" />
        <p class="text-gray-500">|</p>
      </div>
      <h1 class="font-medium text-2xl">{{ route.meta.title }}</h1>
    </div>

    <div class="flex items-center gap-5">
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
          class="size-5 absolute left-4 top-4 text-gray-500"
        >
          <path
            fill-rule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div>
        <button class="btn btn-primary" @click="showModal">
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
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          Add Transaction
        </button>
      </div>

      <!--Modal-->
      <AddTransactionModal />
    </div>
  </div>
</template>
