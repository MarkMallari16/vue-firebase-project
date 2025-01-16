<script setup>
import DashboardBarChart from "./DashboardBarChart.vue";
import DashboardLineChart from "./DashboardLineChart.vue";
</script>

<template>
  <div class="flex flex-wrap lg:flex-nowrap gap-5">
    <div class="mt-4 bg-white p-10 w-full rounded-md ring-1 ring-inset ring-base-300">
      <h2 class="text-xl font-bold">History</h2>
      <DashboardBarChart />
    </div>
    <div class="mt-4 bg-white p-10 w-full rounded-md ring-1 ring-inset ring-base-300">
      <h2 class="text-xl font-bold">Budget Spending History</h2>
      <DashboardLineChart />
    </div>
  </div>
</template>
