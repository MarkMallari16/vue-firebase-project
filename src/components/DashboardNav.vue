<script setup>
import { inject, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import SidebarCloseButton from "./SidebarCloseButton.vue";
import AddTransactionModal from "./AddTransactionModal.vue";
import DashboardNavBarSlot from "./DashboardNavBarRightSlot.vue";

const route = useRoute();

const toggleSidebar = inject("handleToggleSidebar");
</script>
<template>
  <!--Top-->
  <div
    class="flex flex-col lg:flex-row justify-between lg:items-center gap-10 py-4 mb-2 rounded-md"
  >
    <div class="flex items-center gap-2">
      <!--Sidebar-->
      <SidebarCloseButton @click="toggleSidebar" />
      <div class="text-gray-500 divider divider-vertical">|</div>
      <h1 class="font-medium text-2xl text-gray-700">{{ route.meta.title }}</h1>
    </div>
    <!--Right Side-->
    <slot></slot>
  </div>
</template>
