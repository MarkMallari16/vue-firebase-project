<script setup>
import { provide, ref } from "vue";
import DashboardSidebar from "./components/DashboardSidebar.vue";
import { useRoute } from "vue-router";

const isSidebarOpen = ref(true);
const handleToggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;

  console.log("Sidebar toggled:", isSidebarOpen.value);
};

provide("isSidebarOpen", isSidebarOpen);
provide("handleToggleSidebar", handleToggleSidebar);

const isSidebar = useRoute();
</script>

<template>
  <div>
    <div
      v-if="isSidebar.meta.showSidebar"
      class="grid transition-all duration-300 delay-0 ease-in-out"
      :class="[isSidebarOpen ? 'grid-cols-[1fr_5fr]' : 'grid-cols-[0fr_5fr]']"
    >
      <!--sidebar-->
      <DashboardSidebar v-if="isSidebar.meta.showSidebar" />
      <router-view />
    </div>

    <div v-else>
      <router-view />
    </div>
  </div>
</template>
