<script setup>
import DashboardOverview from "@/components/DashboardOverview.vue";
import DashboardChart from "@/components/DashboardChart.vue";
import DashboardNav from "@/components/DashboardNav.vue";
import DashboardSidebar from "@/components/DashboardSidebar.vue";
</script>

<template>
  <div class="min-h-screen">
    <div class="grid grid-cols-[1fr_4fr] h-screen">
      <div class="w-full">
        <!--sidebar-->
        <DashboardSidebar />
      </div>
      <!--Overview-->
      <div class="pt-2 px-10 bg-white rounded-full">
        <DashboardNav />
        <DashboardOverview />
        <!--Chart-->
        <DashboardChart />
        <DashboardChart />
        <DashboardChart />
      </div>
    </div>
  </div>
</template>
