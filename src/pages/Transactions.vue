<script setup>
import { onMounted, ref } from "vue";
import DashboardNav from "@/components/DashboardNav.vue";
import DashboardSidebar from "@/components/DashboardSidebar.vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../collection/firebase";

const transactions = ref([]);

onMounted(async () => {
  const query = await getDocs(collection(db, "transactions"));
  console.log(query);
  transactions.value = query.docs.map((doc) => doc.data());

  console.log(transactions.value);
});
</script>
<template>
  <div class="min-h-screen">
    <div class="grid grid-cols-[1fr_4fr] gap-3">
      <!--sidebar-->
      <div>
        <DashboardSidebar />
      </div>
      <!--Overview-->
      <div class="mt-2 ms-5">
        <DashboardNav />
        <h1 class="text-2xl font-bold">Transactions</h1>
        <p>latest transaction</p>
        <div class="mt-3">
          <div
            class="overflow-x-auto rounded-md bg-white ring-1 ring-inset ring-base-300 p-5"
          >
            <table class="table">
              <!-- head -->
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="transaction in transactions" :key="transaction.id">
                  <td>{{ transaction.transaction_id }}</td>
                  <td>{{ transaction.categories }}</td>
                  <td>{{ transaction.amount }}</td>
                  <td>{{ transaction.transaction_date }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
