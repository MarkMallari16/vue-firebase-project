<script setup>
import AddButtonModal from "@/components/AddButtonModal.vue";
import DashboardNav from "@/components/DashboardNav.vue";
import DashboardNavBarRightSlot from "@/components/DashboardNavBarRightSlot.vue";
</script>
<template>
  <div
    class="min-h-screen mx-4 my-2 px-12 transition-all duration-300 ease-in-out ring-1 ring-gray-200 shadow-inner rounded-2xl"
  >
    <DashboardNav>
      <DashboardNavBarRightSlot>
        <AddButtonModal @click="">Create Budget</AddButtonModal>
      </DashboardNavBarRightSlot>
    </DashboardNav>
    <div>
      <h1 class="text-3xl font-bold">Your Budget</h1>
    </div>
  </div>
</template>
