<script setup>
import { inject } from "vue";
import DashboardNav from "../components/DashboardNav.vue";
import DashboardSidebar from "../components/DashboardSidebar.vue";

const isSidebarOpen = inject("isSidebarOpen");

console.log("isSidebarOpen:", isSidebarOpen);
</script>

<template>
  <div class="min-h-screen">
    <div
      class="grid transition-all duration-500 ease-in-out"
      :class="[isSidebarOpen ? 'grid-cols-[1fr_4fr]' : 'grid-cols-[0fr_6fr]']"
    >
      <DashboardSidebar />

      <div class="mt-2 ms-5">
        <DashboardNav />
        <h1 class="text-3xl font-bold">Manage Categories</h1>
        <div class="mt-6">
          <div
            class="overflow-x-auto rounded-md bg-white ring-1 ring-inset ring-base-300 p-5"
          >
            <table class="table">
              <!-- head -->
              <thead>
                <tr>
                  <th>Category ID</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>23</td>
                  <td>23</td>
                  <td>23</td>
                  <td>23</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
