<script setup>
import DashboardOverview from "@/components/DashboardOverview.vue";
import DashboardCharts from "@/components/DashboardCharts.vue";
import DashboardNav from "@/components/DashboardNav.vue";
</script>

<template>
  <!--Overview-->
  <div
    class="min-h-screen mx-4 my-2 px-12 transition-all duration-300 ease-in-out ring-1 ring-gray-200 shadow-inner rounded-2xl"
  >
    <DashboardNav />
    <DashboardOverview />
    <!--Chart-->
    <DashboardCharts />
    <DashboardCharts />
    <DashboardCharts />
  </div>
</template>
