<script setup>
import DashboardNav from "../components/DashboardNav.vue";
import DashboardNavBarRightSlot from "@/components/DashboardNavBarRightSlot.vue";
import AddButtonModal from "@/components/AddButtonModal.vue";
import { ref } from "vue";

const tab = ref("expense");
</script>

<template>
  <div
    class="min-h-screen mx-4 my-2 px-12 transition-all duration-300 ease-in-out ring-1 ring-gray-200 shadow-inner rounded-2xl"
  >
    <div>
      <!--Top-->
      <DashboardNav>
        <DashboardNavBarRightSlot>
          <AddButtonModal @click=""> Add Category </AddButtonModal>
        </DashboardNavBarRightSlot>
      </DashboardNav>
      <h1 class="text-3xl font-bold">Manage Categories</h1>
      <div
        class="w-full mt-4 bg-gray-100 rounded-xl flex justify-center items-center gap-2 px-2 py-2"
      >
        <button
          class="btn w-1/2 rounded-lg"
          :class="[tab === 'expense' ? 'btn-primary' : 'btn-ghost']"
          @click="tab = 'expense'"
        >
          Expense
        </button>
        <button
          class="btn w-1/2 rounded-lg"
          :class="[tab === 'income' ? 'btn-primary' : 'btn-ghost']"
          @click="tab = 'income'"
        >
          Income
        </button>
      </div>
      <div>
        <div v-if="tab === 'expense'">
          <h2 class="text-2xl font-semibold mt-4">Expense Categories</h2>

          <div class="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <!--Card-->
            <div class="p-8 ring-1 ring-inset ring-gray-300 rounded-lg shadow-sm">
              <div class="flex justify-between items-center">
                <div class="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-11 bg-blue-500 text-white rounded-lg p-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                    />
                  </svg>
                  <div>
                    <h3 class="font-sans">Food & Dining</h3>
                    <p class="text-gray-600">8 transactions</p>
                  </div>
                </div>
                <div class="dropdown dropdown-bottom">
                  <div tabindex="0" role="button" class="m-1">
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
                        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </div>
                  <!--Dropdown-->
                  <ul
                    tabindex="0"
                    class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                    popover
                  >
                    <li>
                      <button>
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
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                        Edit
                      </button>
                    </li>
                    <li>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-6 text-red-600"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="pt-2 flex justify-between">
                <p>Spent: ₱2000</p>
                <p>Budget: ₱10000</p>
              </div>
              <div>
                <progress class="progress" value="10" max="100"></progress>
                <div class="pt-1 flex justify-between text-sm text-gray-500">
                  <p>10% of budget used</p>
                  <p>₱84.01 remaining</p>
                </div>
              </div>
            </div>
            <div class="p-8 ring-1 ring-inset ring-gray-300 rounded-lg shadow-sm">
              <div class="flex justify-between items-center">
                <div class="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-11 bg-yellow-500 text-white rounded-lg p-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                    />
                  </svg>

                  <div>
                    <h3 class="font-sans">Transportation</h3>
                    <p class="text-gray-600">3 transactions</p>
                  </div>
                </div>
                <div class="dropdown dropdown-bottom z-20">
                  <div tabindex="0" role="button" class="m-1">
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
                        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </div>
                  <!--Dropdown-->
                  <ul
                    tabindex="0"
                    class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                    popover
                  >
                    <li>
                      <button>
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
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                        Edit
                      </button>
                    </li>
                    <li>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-6 text-red-600"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="pt-2 flex justify-between">
                <p>Spent: ₱2000</p>
                <p>Budget: ₱10000</p>
              </div>
              <div>
                <!--Progress value-->
                <progress class="progress" value="40" max="100"></progress>

                <div class="pt-1 flex justify-between text-sm text-gray-500">
                  <p>10% of budget used</p>
                  <p>₱84.01 remaining</p>
                </div>
              </div>
            </div>
            <div class="p-8 ring-1 ring-inset ring-gray-300 rounded-lg shadow-sm">
              <div class="flex justify-between items-center">
                <div class="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-11 bg-green-500 text-white rounded-lg p-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>

                  <div>
                    <h3 class="font-sans">Housing & Rent</h3>
                    <p class="text-gray-600">1 transaction</p>
                  </div>
                </div>
                <div class="dropdown dropdown-bottom z-20">
                  <div tabindex="0" role="button" class="m-1">
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
                        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="pt-2 flex justify-between">
                <p>Spent: ₱2000</p>
                <p>Budget: ₱10000</p>
              </div>
              <div>
                <progress class="progress" value="10" max="100"></progress>
                <div class="pt-1 flex justify-between text-sm text-gray-500">
                  <p>10% of budget used</p>
                  <p>₱84.01 remaining</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <h2 class="text-2xl font-semibold mt-4">Income Categories</h2>
        </div>
      </div>
    </div>
  </div>
</template>
