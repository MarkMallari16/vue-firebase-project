<script setup>
import { ref } from "vue";

const linkStyles = "text-gray-600 hover:text-primary transition-colors ease-out";

const isOpen = ref(true);

const handleOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div
    className="navbar pt-4 lg:pt-6 lg:px-20  lg:flex-row flex-col justify-between lg:items-center "
  >
    <div>
      <div class="flex items-center justify-between w-full">
        <router-link to="/" className="btn btn-ghost text-xl uppercase "
          >Budget Tracker</router-link
        >

        <button class="flex lg:hidden" @click="handleOpen">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-7"
            v-show="!isOpen"
          >
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-7"
            v-show="isOpen"
          >
            <path
              fill-rule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      :class="
        isOpen
          ? ' flex flex-col  lg:flex-row items-center gap-4'
          : 'hidden '
      "
    >
      <router-link to="/login" class="text-gray-600 hover:text-primary transition-colors"
        >Features</router-link
      >
      <router-link to="/login" :class="linkStyles">Pricing</router-link>
      <router-link to="/login" :class="linkStyles">About Us</router-link>
      <router-link to="/login" :class="linkStyles">Contact Us</router-link>
    </div>

    <div
      class="mt-10 lg:mt-0 flex flex-col lg:flex-row lg:block"
      :class="
        isOpen ? 'block lg:flex items-center gap-5' : 'hidden lg:flex items-center gap-5'
      "
    >
      <router-link to="/login" class="">Login</router-link>
      <router-link to="/signup" class="btn btn-primary">Get Started</router-link>
    </div>
  </div>
</template>
