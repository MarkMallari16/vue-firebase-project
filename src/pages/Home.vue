<script setup>
import DashboardOverview from "@/components/DashboardOverview.vue";
import DashboardChart from "@/components/DashboardChart.vue";
import DashboardNav from "@/components/DashboardNav.vue";
import DashboardSidebar from "@/components/DashboardSidebar.vue";
</script>

<template>
  <div class="pt-2 bg-base-200 px-2">
    <!--Top-->
    <DashboardNav />

    <div class="grid grid-cols-[1fr_4fr] gap-3">
      <!--sidebar-->
      <DashboardSidebar />
      <!--Overview-->
      <div>
        <DashboardOverview />
        <!--Chart-->
        <DashboardChart />
      </div>
    </div>
  </div>
</template>
