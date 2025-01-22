<script setup>
import DashboardNav from "@/components/DashboardNav.vue";
import DashboardSidebar from "@/components/DashboardSidebar.vue";
</script>
<template>
  <div class="min-h-screen pt-2 bg-base-200 px-2">
    <DashboardNav />

    <div class="grid grid-cols-[1fr_4fr] gap-3">
      <!--sidebar-->
      <DashboardSidebar />
      <!--Overview-->
      <div class="ms-10">
        <h1 class="text-2xl">Transactions</h1>
        <p>latest transaction</p>
      </div>
    </div>
  </div>
</template>
