<script setup>
import { computed, ref } from "vue";
import DashboardNav from "@/components/DashboardNav.vue";
import DashboardSidebar from "@/components/DashboardSidebar.vue";
import { collection, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "@/collection/firebase";

const transactions = ref([]);

const transactionFilterings = ref({
  search: "",
  type: "",
  category: "",
});

onSnapshot(collection(db, "transactions"), (snapshot) => {
  const auth = getAuth();
  const userId = auth.currentUser ? auth.currentUser.uid : null;

  if (userId) {
    transactions.value = snapshot.docs
      .filter((doc) => doc.data().userId == userId)
      .map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
  }
});

// This computed property filters transactions based on the search input
const filteredTransactions = computed(() => {
  const { search, type, category } = transactionFilterings.value;

  return transactions.value
    .filter((transaction) => {
      const matchesType = type ? transaction.type.toLowerCase() === type : true;
      const matchesCategory = category
        ? transaction.category.toLowerCase() === category
        : true;

      return matchesType && matchesCategory;
    })
    .filter((transaction) => {
      const query = search.toLowerCase();
      return (
        transaction.description.toLowerCase().includes(query) ||
        transaction.category.toLowerCase().includes(query) ||
        transaction.type.toLowerCase().includes(query) ||
        transaction.paymentMethod.toLowerCase().includes(query) ||
        transaction.date.toLowerCase().includes(query) ||
        transaction.amount.toString().includes(query)
      );
    });
});
</script>

<template>
  <div class="min-h-screen">
    <div class="mt-2 mx-5">
      <DashboardNav />
      <h1 class="text-3xl font-bold">All Transactions</h1>

      <div class="mt-6"></div>
      <div class="bg-white rounded-lg ring-1 ring-inset ring-base-300 p-5">
        <h2 class="text-xl font-medium">Filters</h2>
        <p class="text-gray-500">Search and filter your transactions</p>

        <div class="flex items-center justify-between gap-10 mt-3">
          <!--Search Field-->
          <div class="w-full relative">
            <input
              type="text"
              class="input input-bordered pl-12 w-full"
              placeholder="Search..."
              v-model="transactionFilterings.search"
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

          <div class="flex items-center gap-3">
            <!--Types-->
            <div>
              <select class="select select-bordered" v-model="transactionFilterings.type">
                <option value="">All</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>
            <!--Categories-->
            <div>
              <select
                class="select select-bordered"
                v-model="transactionFilterings.category"
              >
                <option value="">All Categories</option>
                <option value="food">Food</option>
                <option value="housing">Housing</option>
                <option value="transportation">Transportation</option>
                <option value="entertainment">Entertainment</option>
                <option value="income">Income</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-3 rounded-lg bg-white ring-1 ring-inset ring-base-300 p-5">
        <div class="mb-4">
          <h2 class="text-xl font-medium">Transaction History</h2>
          <p class="text-gray-500">Complete list of your financial transactions</p>
        </div>
        <div class="overflow-x-auto">
          <table class="table">
            <!-- head -->
            <thead>
              <tr>
                <th>Description</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Category</th>
                <th>Payment Method</th>
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
                </td>
                <td>{{ transaction.type }}</td>
                <td>{{ transaction.amount }}</td>
                <td>{{ transaction.date }}</td>
                <td>
                  <p class="badge badge-neutral rounded-full text-md">
                    {{ transaction.category }}
                  </p>
                </td>
                <td>{{ transaction.paymentMethod }}</td>
                <td class="dropdown dropdown-end">
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
                      <li><a>Item 1</a></li>
                      <li><a>Item 2</a></li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  colspan="6"
                  class="text-center"
                  v-if="transactions.length === 0 || filteredTransactions.length === 0"
                >
                  No transactions found.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
