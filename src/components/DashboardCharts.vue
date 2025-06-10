<script setup>
import DashboardBarChart from "./DashboardBarChart.vue";
import DashboardLineChart from "./DashboardLineChart.vue";
import { inject } from "vue";
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
    <div class="mt-4 bg-white p-5 lg:p-10 rounded-md ring-1 ring-inset ring-base-300">
      <h2 class="text-xl font-bold">History</h2>
      <DashboardBarChart />
    </div>
    <div class="mt-4 bg-white p-5 lg:p-10 rounded-md ring-1 ring-inset ring-base-300">
      <h2 class="text-xl font-bold">Budget Spending History</h2>
      <DashboardLineChart />
    </div>
  </div>
</template>
