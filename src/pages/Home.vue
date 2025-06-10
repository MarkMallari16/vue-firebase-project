<script setup>
import DashboardOverview from "@/components/DashboardOverview.vue";
import DashboardCharts from "@/components/DashboardCharts.vue";
import DashboardNav from "@/components/DashboardNav.vue";
import DashboardNavBarRightSlot from "@/components/DashboardNavBarRightSlot.vue";
import AddTransactionModal from "@/components/modals/AddTransactionModal.vue";
import AddButtonModal from "@/components/AddButtonModal.vue";

const showModal = () => {
  const modal = document.getElementById("add_transaction");
  if (modal) {
    modal.showModal();
  } else {
    console.error("Modal element not found");
  }
};
</script>

<template>
  <!--Overview-->
  <div
    class="min-h-screen mx-4 my-2 px-12 transition-all duration-300 ease-in-out ring-1 ring-gray-200 shadow-inner rounded-2xl"
  >
    <DashboardNav>
      <!--Right-->
      <DashboardNavBarRightSlot>
        <div class="w-full relative -z-10 lg:z-10">
          <input
            type="text"
            class="input input-bordered pl-12 w-full"
            placeholder="Search..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-5 absolute left-4 top-4 text-gray-500"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <!--Add Transaction Button-->
        <AddButtonModal @click="showModal">Add Transaction</AddButtonModal>
        <AddTransactionModal />
      </DashboardNavBarRightSlot>
    </DashboardNav>

    <!--Overview---->
    <DashboardOverview />
    <!--Chart-->
    <DashboardCharts />
    <DashboardCharts />
    <DashboardCharts />
  </div>
</template>
