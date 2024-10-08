<script setup>
import HeroImage from "../assets/hero-image-2.png";
</script>
<template>
  <div>
    <div class="mx-8 min-h-screen flex justify-center items-center gap-10 bg-no-repeat">
      <div class="text-center">
        <div className="flex justify-center avatar-group mb-2 -space-x-6 rtl:space-x-reverse">
          <div className="avatar">
            <div className="w-8">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <div className="avatar">
            <div className="w-8">
              <img
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1728422122~exp=1728425722~hmac=9c6d4f14ee2d7ffa297232ec4a1c29c29424b91cc4ee28930db87b7fbab53efb&w=900"
              />
            </div>
          </div>
          <div className="avatar">
            <div className="w-8">
              <img
                src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?t=st=1728422436~exp=1728426036~hmac=25363ef05cab16437f1d873b0b8be4e2780dca68eaf49d6324e83b4dd817ae9e&w=900"
              />
            </div>
          </div>
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content w-8">
              <span>+99</span>
            </div>
          </div>
        </div>
        <h1 class="text-6xl lg:text-9xl break-words font-black">Track Your Budget Effortlessly!</h1>
        <p class="mt-4 text-lg">Stay on top of your finances with ease.</p>
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
            class="w-1/2 object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  </div>
</template>
