<script setup>
import OpenAddModalButton from "@/components/OpenAddModalButton.vue";
import DashboardNav from "@/components/DashboardNav.vue";
import DashboardNavBarRightSlot from "@/components/DashboardNavBarRightSlot.vue";
import AddBudgetModal from "@/components/modals/AddBudgetModal.vue";
import { getAuth } from "firebase/auth";
import { collection, deleteDoc, doc, onSnapshot, query, where } from "firebase/firestore";
import { computed, ref, watchEffect } from "vue";
import { db } from "@/firebase/firebase";

const auth = getAuth();
const userId = auth.currentUser ? auth.currentUser.uid : null;
const transactions = ref([]);
const budgets = ref([]);

const transactionsqQuery = query(
  collection(db, "transactions"),
  where("userId", "==", userId)
);
const budgetsQuery = query(collection(db, "budgets"), where("userId", "==", userId));

if (userId) {
  onSnapshot(transactionsqQuery, (snapshot) => {
    transactions.value = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  });

  onSnapshot(budgetsQuery, (snapshot) => {
    budgets.value = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  });
}

const budgetSummaries = computed(() => {
  console.log(budgets.value)
  return budgets.value.map((budget) => {
    const relatedTransactions = transactions.value.filter((transaction) =>
      transaction.categoryId === budget.categoryId && transaction.type === "expense");

    const totalSpent = relatedTransactions.reduce((sum, t) => sum + t.amount, 0);
    const percentageUsed = ((totalSpent / budget.amount) * 100).toFixed(2);
    const amountLeft = budget.amount - totalSpent;


    let statusMessasge = "No budget set";

    if (totalSpent > budget.amount) {
      statusMessasge = "Over Budget";
    } else if (totalSpent === budget.amount) {
      statusMessasge = "At Limit"
    } else {
      statusMessasge = "On Track";
    }

    return {
      ...budget,
      totalSpent,
      percentageUsed,
      amountLeft,
      status: statusMessasge,
    };
  });
});

// Calculate total budget across all budgets
const totalBudget = computed(() => {
  return budgets.value.reduce((sum, budget) => sum + budget.amount, 0);
})
// Calculate total spent across all transactions
const totalSpent = computed(() => {
  return transactions.value.filter(t => t.type === "expense")
    .reduce((sum, transaction) => sum + transaction.amount, 0)
})
// Calculate remaining budget
const remainingBudget = computed(() => {
  return totalBudget.value - totalSpent.value;
})

const percentageUsed = computed(() => {
  if (totalBudget.value === 0) return 0;

  return ((totalSpent.value / totalBudget.value) * 100).toFixed(2);
})
const deleteBudget = async (budgetId) => {
  try {
    const budgetRef = doc(db, "budgets", budgetId);
    await deleteDoc(budgetRef);
  } catch (error) {
    console.error("Error deleting budget:", error);
  }
};
const showModal = () => {
  const modal = document.getElementById("add_budget");
  if (modal) {
    modal.showModal();
  }
};

const statusStyle = (status) => {
  if (status === "Over Budget") {
    return "bg-red-100 text-red-600";
  } else if (status === "On Track") {
    return "bg-green-100 text-green-600";
  } else if (status === "At Limit") {
    return "bg-yellow-100 text-yellow-600";
  } else {
    return "bg-gray-100 text-gray-600";
  }
}
</script>
<template>
  <AddBudgetModal />
  <section
    class="min-h-screen mx-4 my-2 px-12 transition-all duration-300 ease-in-out ring-1 ring-gray-200 shadow-inner rounded-2xl">
    <DashboardNav>
      <DashboardNavBarRightSlot>
        <OpenAddModalButton @click="showModal">Create Budget</OpenAddModalButton>
      </DashboardNavBarRightSlot>
    </DashboardNav>
    <div>
      <!-- Budget Overview -->
      <h1 class="text-3xl font-bold">Your Budget</h1>

      <div class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div class="rounded-md p-6 ring-1 ring-inset ring-base-300 bg-white">
          <h2 class="mt-2 text-md font-medium">Total Budget</h2>
          <h1 class="mt-1 text-3xl font-bold">₱{{ totalBudget }}</h1>
          <p class="text-gray-500">This Month</p>
        </div>
        <div class="rounded-md p-6 ring-1 ring-inset ring-base-300 bg-white">
          <h2 class="mt-2 text-md font-medium">Total Spent</h2>
          <h1 class="mt-1 text-3xl font-bold text-red-600">₱{{ totalSpent }}</h1>
          <p class="text-gray-500">{{ percentageUsed }}% of budget</p>
        </div>
        <div class="rounded-md p-6 ring-1 ring-inset ring-base-300 bg-white">
          <h2 class="mt-2 text-md font-medium">Remaining</h2>
          <h1 class="mt-1 text-3xl font-bold" :class="[remainingBudget < 0 ? 'text-red-600' : 'text-green-600']">
            ₱{{ remainingBudget }}</h1>
          <p class="text-gray-500">Available to spend</p>
        </div>
      </div>
      <div class="mt-6 ring-1 ring-inset ring-base-300 bg-white p-6 rounded-md">
        <h1 class="text-2xl font-bold">Budget Categories</h1>
        <p class="text-gray-500">Track your spending by category</p>

        <div v-for="summary in budgetSummaries" :key="summary.id" class="pt-6">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6 text-green-600">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <div>
                <h3 class="font-medium text-xl">{{ summary.category }}</h3>
                <p class="text-sm text-gray-600">₱{{ summary.totalSpent }} used of ₱{{ summary.amount }}</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <p class="badge rounded-full text-sm font-medium" :class="statusStyle(summary.status)">
                {{ summary.status }}
              </p>

              <!-- Dropdown for actions -->
              <div class="dropdown dropdown-top dropdown-left">
                <button class="btn-ghost p-0 hover:bg-transparent">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                </button>
                <div tabindex="0" role="button"></div>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                      </svg>

                      Edit
                    </div>
                  </li>
                  <li class="text-red-600">
                    <button @click="deleteBudget(summary.id)">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <progress class="progress w-full" :value="summary.percentageUsed" max="100"></progress>
          <div class="text-gray-600 flex justify-between">
            <p>{{ summary.percentageUsed }}% used</p>
            <p>₱{{ summary.amountLeft }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
