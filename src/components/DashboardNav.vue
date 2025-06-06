<script setup>
import { onMounted, ref } from "vue";
import Logo from "../assets/budget.png";
import { useRoute, useRouter } from "vue-router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import SidebarCloseButton from "./SidebarCloseButton.vue";

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
</script>
<template>
  <!--Top-->
  <div
    class="flex flex-col lg:flex-row justify-between items-center gap-10 py-4 mb-2 rounded-md"
  >
    <div class="flex items-center gap-4">
      <div class="flex gap-5 items-center">
        <SidebarCloseButton />
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
      <dialog id="add_transaction" class="modal">
        <div class="modal-box w-11/12 max-w-2xl">
          <h3 class="text-lg font-bold">Add New Transaction</h3>
          <p class="text-gray-500">Enter the details of your transaction below.</p>
          <div>
            <form method="">
              <div class="mt-4 mb-10">
                <p class="font-medium">Transaction Type</p>
                <div class="flex items-center gap-2 mt-2">
                  <div class="flex items-center gap-2">
                    <input
                      id="income"
                      type="radio"
                      name="type"
                      value="income"
                      class="radio radio-primary radio-sm"
                      checked
                    />
                    <label for="income" class="font-sans">Income</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <input
                      id="expense"
                      type="radio"
                      name="type"
                      value="income"
                      class="radio radio-primary radio-sm"
                    />
                    <label for="expense" class="font-sans">Expense</label>
                  </div>
                </div>
                <div class="flex items-center gap-5 mt-4 w-full">
                  <div class="w-full">
                    <label for="amount" class="font-medium mt-2">Amount</label>
                    <input
                      id="amount"
                      type="number"
                      class="mt-2 input input-secondary w-full"
                      min="0"
                    />
                  </div>

                  <div class="w-full">
                    <label for="date" class="font-medium">Date</label>
                    <input type="date" class="mt-2 input input-secondary w-full" />
                  </div>
                </div>
                <div class="mt-4">
                  <label for="description" class="font-medium">Description</label>
                  <input type="text" class="input mt-2 input-secondary w-full" />
                </div>
                <div class="mt-4">
                  <div class="w-full flex items-center gap-5">
                    <div class="w-full">
                      <p class="font-medium mb-2">Category</p>
                      <select class="select select-secondary w-full">
                        <option disabled selected>Select Category</option>
                        <option>Zig</option>
                        <option>Go</option>
                        <option>Rust</option>
                      </select>
                    </div>
                    <div class="w-full">
                      <p class="font-medium mb-2">Payment Method</p>
                      <select class="select select-secondary w-full">
                        <option selected>Cash</option>
                        <option>Zig</option>
                        <option>Go</option>
                        <option>Rust</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex gap-2 modal-action">
                <button class="btn">Close</button>
                <button class="btn btn-primary" type="submit">Save Transaction</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
      <!-- <div class="flex gap-2 items-center">
        <div className="avatar">
          <div className=" w-10 h-10 rounded-full ">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <h3 class="font-medium text-md">{{ user.email }}</h3>
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
      </button> -->
    </div>
  </div>
</template>
