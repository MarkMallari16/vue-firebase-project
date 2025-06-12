<script setup>
import DashboardOverview from "@/components/DashboardOverview.vue";
import DashboardCharts from "@/components/DashboardCharts.vue";
import DashboardNav from "@/components/DashboardNav.vue";
import DashboardNavBarRightSlot from "@/components/DashboardNavBarRightSlot.vue";
import AddTransactionModal from "@/components/modals/AddTransactionModal.vue";
import AddButtonModal from "@/components/OpenAddModalButton.vue";
import { useRouter } from "vue-router";

const showModal = () => {
  const modal = document.getElementById("add_transaction");
  if (modal) {
    modal.showModal();
  } else {
    console.error("Modal element not found");
  }
};
const router = useRouter();
const goToTransactionLink = () => {
  router.push("/transactions");
};
</script>

<template>
  <!--Overview-->
  <div
    class="min-h-screen mx-4 my-2 px-12 transition-all duration-300 ease-in-out ring-1 ring-gray-200 shadow-inner rounded-2xl"
  >
    <DashboardNav>
      <!--Right-->
      <DashboardNavBarRightSlot>
        <div class="w-full relative -z-10 lg:z-10">
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
        <!--Add Transaction Button-->
        <AddButtonModal @click="showModal">Add Transaction</AddButtonModal>
        <AddTransactionModal />
      </DashboardNavBarRightSlot>
    </DashboardNav>

    <!--Overview---->
    <DashboardOverview />
    <!--Chart-->
    <DashboardCharts />
    <div class="mt-4 p-6 ring-1 ring-gray-300 bg-white rounded-md">
      <div class="flex justify-between items-center pb-6">
        <div>
          <h1 class="text-2xl font-bold">Recent Transactions</h1>
          <p class="text-gray-500">Your latest financial activities</p>
        </div>
        <div>
          <button class="btn rounded-xl" @click="goToTransactionLink">View All</button>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="transaction in transactions ? filteredTransactions : transactions"
              :key="transaction.id"
              v-if="transactions"
            >
              <td class="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-10 rounded-full badge rind-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>

                <p>
                  {{ transaction.description }}
                </p>
                <!-- </td>
                <td>{{ transaction.type }}</td>
                <td>{{ transaction.amount }}</td>
                <td>{{ transaction.date }}</td>
                <td>
                  <p class="badge badge-ghost rounded-full text-md font-medium">
                    {{ transaction.category }}
                  </p>
                </td>
                <td>{{ transaction.paymentMethod }}</td>
                <td>
                  {{
                    transaction.notes && transaction.notes.length > 0
                      ? transaction.notes
                      : "No notes"
                  }}
                </td>
                <td class="dropdown dropdown-left">
                  <div tabindex="0">
                    <div role="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>
                    </div>
                    <ul
                      tabindex="0"
                      class="dropdown-content dropdown-top menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                    >
                      <li>
                        <button class="font-medium">
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
                        <button
                          @click="deleteTransaction(transaction.id)"
                          class="text-red-500 font-medium"
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
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>

                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr> -->
                <tr>
                  <td
                    colspan="6"
                    class="text-center"
                    v-if="transactions.length === 0 || filteredTransactions.length === 0"
                  >
                    No transactions found.
                  </td>
                </tr>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
