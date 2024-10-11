<script setup>
import Hero from "@/components/Hero.vue";
import Navbar from "@/components/Navbar.vue";
import { ref } from "vue";

const count = ref(0);
</script>
<template>
  <div class="bg-gradient-to-tr from-base-300 to-base-white">
    <div class="lg:px-10 pt-2">
      <Navbar />
      <Hero />
      <div class="pt-20">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div class="bg-white p-6 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-green-500 mr-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 9l3 3-3 3M13 15h6"
              />
            </svg>
            <div class="mt-2">
              <h2 class="text-lg font-semibold mb-2">Real-time Expense Tracking</h2>
              <p>Monitor your expenses as they happen with automatic updates.</p>
            </div>
          </div>
          <div class="bg-white h-52 p-6 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-blue-500 mr-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div class="mt-2">
              <h2 class="text-lg font-semibold mb-2">Customizable Categories</h2>
              <p>
                Organize your spending by creating custom categories tailored to your
                needs.
              </p>
            </div>
          </div>
          <div class="bg-white h-52 p-6 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-yellow-500 mr-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 17v2a2 2 0 002 2h2a2 2 0 002-2v-2M13 7V3h-2v4H7v2h10V7h-4z"
              />
            </svg>
            <div class="mt-2">
              <h2 class="text-lg font-semibold mb-2">Monthly Budgeting</h2>
              <p>
                Set budget limits for each category to help control your monthly spending.
              </p>
            </div>
          </div>
          
        </div>
      </div>
      <button class="mt-2 btn btn-primary" @click="count++">Click me {{count}}</button>
    </div>
  </div>
</template>
