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
  <section class="relative">
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
    <div class="absolute top-52 right-52">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="size-30"
      >
        <path
          d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z"
        />
      </svg>
    </div>
  </section>
</template>
