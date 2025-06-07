<script setup>
import Hero from "@/components/Hero.vue";
import Navbar from "@/components/Navbar.vue";
import Pricing from "@/components/Pricing.vue";
import Bar from "@/components/Bar.vue";
import Footer from "@/components/Footer.vue";
import Features from "@/components/Features.vue";
import SocialProof from "@/components/SocialProof.vue";
import { ref } from "vue";

const features = ref(null);
const pricing = ref(null);

const scrollToSection = (section) => {
  const sections = {
    features: features.value,
    pricing: pricing.value,
  };
  const target = sections[section];

  // Ensure the target is defined before scrolling
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
<template>
  <section>
    <div>
      <div>
        <div>
          <Navbar @scrollTo="scrollToSection" />
        </div>
        <div>
          <Hero />
        </div>
        <div ref="features" class="container mx-auto px-4">
          <Features />
        </div>
        <div>
          <Bar />
        </div>
        <div class="container mx-auto px-4">
          <SocialProof />
        </div>
        <div ref="pricing">
          <Pricing />
        </div>
      </div>
      <Footer />
    </div>
  </section>
</template>
