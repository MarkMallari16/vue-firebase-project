<script setup>
import DashboardOverview from "@/components/DashboardOverview.vue";
import DashboardCharts from "@/components/DashboardCharts.vue";
import DashboardNav from "@/components/DashboardNav.vue";
</script>

<template>
  <!--Overview-->
  <div class="min-h-screen px-12 transition-all duration-300 ease-in-out">
    <DashboardNav />
    <DashboardOverview />
    <!--Chart-->
    <DashboardCharts />
    <DashboardCharts />
    <DashboardCharts />
  </div>
</template>
