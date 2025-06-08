<script setup>
import DashboardOverview from "@/components/DashboardOverview.vue";
import DashboardChart from "@/components/DashboardChart.vue";
import DashboardNav from "@/components/DashboardNav.vue";
import DashboardSidebar from "@/components/DashboardSidebar.vue";
import { inject, provide, ref } from "vue";

const isSidebarOpen = inject("isSidebarOpen");
</script>

<template>
  <!--Overview-->
  <div class="pt-2 px-10 transition-all duration-300 ease-in-out container mx-auto">
    <DashboardNav />
    <DashboardOverview />
    <!--Chart-->
    <DashboardChart />
    <DashboardChart />
    <DashboardChart />
  </div>
</template>
