<script setup>
import HeroImage from "../assets/hero-image-2.png";
</script>
<template>
  <div>
    <div
      class="pt-10 px-8 lg:min-h-screen flex justify-center items-center gap-10 bg-no-repeat"
    >
      <div class="text-center">
        <div class="flex justify-center avatar-group mb-2 -space-x-6 rtl:space-x-reverse">
          <div class="avatar">
            <div class="w-8">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <div class="avatar">
            <div class="w-8">
              <img
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1728422122~exp=1728425722~hmac=9c6d4f14ee2d7ffa297232ec4a1c29c29424b91cc4ee28930db87b7fbab53efb&w=900"
              />
            </div>
          </div>
          <div class="avatar">
            <div class="w-8">
              <img
                src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?t=st=1728422436~exp=1728426036~hmac=25363ef05cab16437f1d873b0b8be4e2780dca68eaf49d6324e83b4dd817ae9e&w=900"
              />
            </div>
          </div>
          <div class="avatar placeholder">
            <div class="bg-neutral text-neutral-content w-8">
              <span>+99</span>
            </div>
          </div>
        </div>
        <h1 class="text-6xl lg:text-9xl break-words font-black">
          Track Your Budget Effortlessly!
        </h1>
        <p class="text-xl lg:text-2xl text-gray-500 pt-6">
          Stay on top of your finances. Enjoy managing them with ease.
        </p>
        <div class="pt-6 flex justify-center gap-2">
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
            class="object-cover rounded-md shadow-black"
          />
        </div>
      </div>
    </div>
  </div>
</template>
