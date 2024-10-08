<script setup>
import HeroImage from "../assets/hero-image.png";
</script>
<template>
  <div class="mx-8 min-h-screen flex justify-center items-center gap-10">
    <div class="text-center">
      <h1 class="text-5xl lg:text-7xl font-black">Track Your Budget Effortlessly!</h1>
      <p class="mt-3">
        Take Control of Your Finances" or "Track Your Budget Effortlessly
      </p>
      <div class="mt-4 flex justify-center gap-2 ">
        <router-link to="/signup" class="font-medium btn btn-primary"
          >Get Started for Free</router-link
        >
        <router-link to="/login" class="font-medium btn btn-ghost"
          >Learn More</router-link
        >
      </div>

      <div class="mt-8 w-full  hidden lg:flex justify-center">
        <img :src="HeroImage" alt="Budget Tracker Image" class="w-4/6 object-cover rounded-sm shadow-lg" />
      </div>
    </div>
  </div>
</template>
