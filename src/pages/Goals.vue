<script setup>
import DashboardNav from "@/components/DashboardNav.vue";
import DashboardSidebar from "@/components/DashboardSidebar.vue";
</script>
<template>
  <div class="min-h-screen px-12 transition-all duration-300 ease-in-out">
    <div>
      <DashboardNav />
      <h1 class="text-2xl font-bold">Goals</h1>
      <p>All categories</p>
      <div class="mt-3">
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
</template>
