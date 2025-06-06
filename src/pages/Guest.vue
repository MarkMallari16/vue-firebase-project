<script setup>
import Hero from "@/components/Hero.vue";
import Navbar from "@/components/Navbar.vue";
import Pricing from "@/components/Pricing.vue";
import Bar from "@/components/Bar.vue";
import Footer from "@/components/Footer.vue";
</script>
<template>
  <div class="">
    <div>
      <div class="lg:px-10 pt-2">
        <div>
          <Navbar />
        </div>
        <div>
          <Hero />
        </div>
        <div>
          <Bar />
        </div>
        <div>
          <Pricing />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
