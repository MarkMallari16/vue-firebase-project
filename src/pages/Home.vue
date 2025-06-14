<script setup>
import DashboardOverview from "@/components/DashboardOverview.vue";
import DashboardCharts from "@/components/DashboardCharts.vue";
import DashboardNav from "@/components/DashboardNav.vue";
import DashboardNavBarRightSlot from "@/components/DashboardNavBarRightSlot.vue";
import AddTransactionModal from "@/components/modals/AddTransactionModal.vue";
import AddButtonModal from "@/components/OpenAddModalButton.vue";
import { useNavigation } from "@/composables/useNavigation";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { db } from "@/firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
const transactions = ref([]);
let unsubscribe = null;

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user == null) {
      return;
    }
    const userId = user.uid;

    const transactionsQuery = query(
      collection(db, "transactions"),
      where("userId", "==", userId),
      orderBy("createdAt", "desc")
    )
    unsubscribe = onSnapshot(transactionsQuery, (snapshot) => {
      transactions.value = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    })
  })
})

onUnmounted(() => {
  unsubscribe();
})
const showModal = () => {
  const modal = document.getElementById("add_transaction");
  if (modal) {
    modal.showModal();
  } else {
    console.error("Modal element not found");
  }
};

const fiveRecentTransactions = computed(() => {
  return transactions.value.slice(0, 5);
})
// navigation composable
const { goTo } = useNavigation();

</script>

<template>
  <!--Overview-->
  <div
    class="lg:min-h-screen mx-4 my-2 px-4 lg:px-12 pb-20 transition-all duration-300 ease-in-out ring-1 ring-gray-200 shadow-inner rounded-2xl">
    <DashboardNav>
      <!--Right-->
      <DashboardNavBarRightSlot>
        <!-- <div class="w-full relative -z-10 lg:z-10">
          <input type="text" class="input input-bordered pl-12 w-full" placeholder="Search..." />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="size-5 absolute left-4 top-4 text-gray-500">
            <path fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clip-rule="evenodd" />
          </svg>
        </div> -->
        <!--Add Transaction Button-->
        <AddButtonModal @click="showModal">Add Transaction</AddButtonModal>
        <AddTransactionModal />
      </DashboardNavBarRightSlot>
    </DashboardNav>

    <!--Overview---->
    <DashboardOverview />
    <!--Chart-->
    <DashboardCharts />
    <div class="mt-4 p-6 ring-1 ring-inset ring-base-300 bg-white rounded-md">
      <div class="flex justify-between items-center pb-6">
        <div>
          <h1 class="text-2xl font-bold">Recent Transactions</h1>
          <p class="text-gray-500">Your latest financial activities</p>
        </div>
        <div>
          <button class="btn rounded-xl" @click="goTo('/transactions')">View All</button>
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
            <tr v-for="transaction in fiveRecentTransactions" v-if="transactions" :key="transaction.id">
              <td class="flex items-center gap-3">

                <span v-html="transaction.categoryIcon" class="size-10 rounded-full badge rind-1"></span>

                <p>
                  {{ transaction.description }}
                </p>
              </td>
              <td class="font-medium" :class="[transaction.type == 'expense' ? 'text-red-600' : 'text-green-600']">
                {{ transaction.type == 'expense' ? '-' : '+' }}{{ transaction.amount }}
              </td>
              <td>{{ transaction.date }}</td>
              <td>
                <p class="badge badge-ghost rounded-full text-md font-medium">
                  {{ transaction.category }}
                </p>
              </td>
            </tr>
            <tr>
              <td colspan="6" class="text-center" v-if="transactions.length === 0">
                No recent transactions.
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
