<script setup>
import Hero from "@/components/Hero.vue";
import Navbar from "@/components/Navbar.vue";
import Pricing from "@/components/Pricing.vue";
import Bar from "@/components/Bar.vue";
import Footer from "@/components/Footer.vue";
import Features from "@/components/Features.vue";
import SocialProof from "@/components/SocialProof.vue";
</script>
<template>
  <div class="">
    <div>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Hero />
        </div>
        <div>
          <Features />
        </div>
        <div>
          <Bar />
        </div>
        <div>
          <SocialProof />
        </div>
        <div>
          <Pricing />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
