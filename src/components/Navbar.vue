<script setup>
import { ref } from "vue";

const linkStyles =
  "font-normal text-base-800 hover:text-gray-500 transition-colors ease-in-out duration-300";

const isOpen = ref(true);

const handleOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <nav>
    <div
      class="navbar lg:flex-row flex-col items-start justify-between lg:items-center lg:px-40 pt-6"
    >
      <div class="flex justify-between w-full lg:w-auto">
        <router-link to="/" class="btn btn-ghost text-2xl uppercase font-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-8"
          >
            <path
              d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z"
            />
          </svg>
          Budget Tracker
        </router-link>
        <button class="flex lg:hidden bg-base-300 rounded-md p-2" @click="handleOpen">
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
      <div
        :class="
          isOpen
            ? ' w-full lg:w-auto flex flex-col lg:flex-row items-center gap-5 pt-20 lg:pt-0 lg:gap-8'
            : 'hidden '
        "
      >
        <a
          href="/features"
          @click.prevent="$emit('scrollTo', 'features')"
          :class="linkStyles"
          >Features</a
        >
        <a
          href="/pricing"
          @click.prevent="$emit('scrollTo', 'pricing')"
          :class="linkStyles"
          >Pricing</a
        >
        <a href="#" :class="linkStyles">About</a>
        <a href="#" :class="linkStyles">Contact</a>
      </div>

      <div
        class="mt-10 lg:mt-0 flex flex-col lg:flex-row lg:block"
        :class="
          isOpen
            ? 'w-full lg:w-auto block lg:flex  gap-5'
            : 'hidden lg:flex items-center gap-5'
        "
      >
        <router-link to="/login">Login</router-link>
        <router-link to="/signup" class="btn btn-primary">Get Started</router-link>
      </div>
    </div>
  </nav>
</template>
