<script setup>
import { ref } from "vue";
import DashboardNav from "@/components/DashboardNav.vue";
import DashboardSidebar from "@/components/DashboardSidebar.vue";

const transactions = ref([
  { id: 1, amount: 50.0, date: "2025-01-01" },
  { id: 2, amount: 3000.0, date: "2025-01-03" },
  { id: 3, amount: 15.0, date: "2025-01-05" },
  { id: 4, amount: 100.0, date: "2025-01-07" },
  { id: 5, amount: 200.0, date: "2025-01-09" },
  { id: 6, amount: 30.0, date: "2025-01-10" },
  { id: 7, amount: 500.0, date: "2025-01-11" },
  { id: 8, amount: 120.0, date: "2025-01-12" },
  { id: 9, amount: 75.0, date: "2025-01-15" },
  { id: 10, amount: 200.0, date: "2025-01-17" },
]);
</script>
<template>
  <div class="min-h-screen pt-2 bg-base-200 px-2">
    <DashboardNav />

    <div class="grid grid-cols-[1fr_4fr] gap-3">
      <!--sidebar-->
      <DashboardSidebar />
      <!--Overview-->
      <div class="mt-2 ms-5">
        <h1 class="text-2xl font-bold">Transactions</h1>
        <p>latest transaction</p>
        <div class="mt-5">
          <div class="overflow-x-auto bg-white">
            <table class="table">
              <!-- head -->
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="transaction in transactions" :key="transaction.id">
                  <td>{{ transaction.id }}</td>
                  <td>{{ transaction.amount }}</td>
                  <td>{{ transaction.date }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
