<script setup>
import HeroImage from "../assets/hero-image-2.png";
</script>
<template>
  <div>
    <div
      class="mx-8 min-h-screen flex justify-center items-center gap-10 bg-no-repeat "
    >
      <div class="text-center">
        <h1 class="text-6xl lg:text-7xl font-black">Track Your Budget Effortlessly!</h1>
        <p class="mt-4 text-lg">
          Stay on top of your finances with ease.
        </p>
        <div class="mt-4 flex justify-center gap-2">
          <router-link to="/signup" class="font-medium btn btn-primary"
            >Get Started for Free</router-link
          >
          <router-link to="/login" class="font-medium btn btn-ghost"
            >Learn More</router-link
          >
        </div>

        <div class="mt-8 w-full hidden lg:flex justify-center">
          <img
            :src="HeroImage"
            alt="Budget Tracker Image"
            class="w-4/6 object-cover rounded-md "
          />
        </div>
      </div>
    </div>
  </div>
</template>
