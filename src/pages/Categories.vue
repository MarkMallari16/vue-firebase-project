<script setup>
import { inject } from "vue";
import DashboardNav from "../components/DashboardNav.vue";
import DashboardNavBarRightSlot from "@/components/DashboardNavBarRightSlot.vue";
import AddButtonModal from "@/components/AddButtonModal.vue";
</script>

<template>
  <div
    class="min-h-screen mx-4 my-2 px-12 transition-all duration-300 ease-in-out ring-1 ring-gray-200 shadow-inner rounded-2xl"
  >
    <div>
      <!--Top-->
      <DashboardNav>
        <DashboardNavBarRightSlot>
          <AddButtonModal @click=""> Add Category </AddButtonModal>
        </DashboardNavBarRightSlot>
      </DashboardNav>
      <h1 class="text-3xl font-bold">Manage Categories</h1>
      <div class="mt-6 p-2 tabs tabs-boxed font-medium rounded-md h-full" role="tablist">
        <input
          type="radio"
          name="categories"
          class="tab h-10"
          aria-label="Expense Categories"
          checked
        />

        <input
          type="radio"
          name="categories"
          class="tab h-10"
          aria-label="Income Categories"
        />
      </div>
    </div>
  </div>
</template>
