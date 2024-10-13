<script setup>
import Hero from "@/components/Hero.vue";
import Navbar from "@/components/Navbar.vue";
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

      <div class="to-white py-20">
        <div class="text-center">
          <h2 class="text-4xl font-bold">Choose your plan</h2>
          <p class="text-lg text-gray-600">
            Get the tools you need to manage your budget effectively.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 rounded-xl mt-6">
          <div class="bg-white p-10 ring-1 ring-inset ring-gray-300 rounded-lg">
            <h3 class="text-2xl font-semibold mb-4">Free</h3>
            <p class="text-lg mb-6">Perfect for getting started with budgeting.</p>
            <ul class="list-disc pl-5 space-y-2">
              <li>Advanced budgeting tools</li>
              <li>Track unlimited accounts</li>
              <li>Priority email support</li>
            </ul>
          </div>
          <div class="bg-white p-10 ring-1 ring-inset ring-primary rounded-lg">
            <h3 class="text-2xl font-semibold mb-4">Tama lang</h3>
            <p class="text-lg mb-6">Perfect for getting started with budgeting.</p>
            <ul class="list-disc pl-5 space-y-2">
              <li>Track income and expenses</li>
              <li>Set basic monthly budgets</li>
              <li>Manual expense tracking</li>
              <li>Email support</li>
            </ul>
          </div>
          <div class="bg-white p-10 ring-1 ring-inset ring-gray-300 rounded-lg">
            <h3 class="text-2xl font-semibold mb-4">Pro</h3>
            <p class="text-lg mb-6">Advanced budgeting features for power users.</p>

            <ul class="list-disc pl-5 space-y-2">
              <li>Automatic bank sync</li>
              <li>Track multiple accounts</li>
              <li>Custom category creation</li>
              <li>Spending reports and insights</li>
              <li>Priority email support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
