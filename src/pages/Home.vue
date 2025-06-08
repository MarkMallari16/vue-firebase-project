<script setup>
import DashboardOverview from "@/components/DashboardOverview.vue";
import DashboardChart from "@/components/DashboardChart.vue";
import DashboardNav from "@/components/DashboardNav.vue";
import DashboardSidebar from "@/components/DashboardSidebar.vue";
import { provide, ref } from "vue";

const isSidebarOpen = ref(true);
const handleToggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;

  console.log("Sidebar toggled:", isSidebarOpen.value);
};

provide("isSidebarOpen", isSidebarOpen);
provide("handleToggleSidebar", handleToggleSidebar);
</script>

<template>
  <div>
    <div
      class="grid transition-all duration-300 ease-in-out"
      :class="[isSidebarOpen ? 'grid-cols-[1fr_4fr]' : 'grid-cols-1']"
    >
      <!--sidebar-->
      <DashboardSidebar v-if="isSidebarOpen" />
      <!--Overview-->
      <div class="pt-2 px-10" :class="[isSidebarOpen ? 'w-full' : ' container mx-auto']">
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
