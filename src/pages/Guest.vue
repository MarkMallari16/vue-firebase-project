<script setup>
import Hero from "@/components/Hero.vue";
import Navbar from "@/components/Navbar.vue";
import Pricing from "@/components/Pricing.vue";
import Features from "@/components/Features.vue";

</script>
<template>
  <div class="bg-gradient-to-tr from-base-300 to-base-white">
    <div class="lg:px-10 pt-2">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
    </div>
  </div>
</template>
