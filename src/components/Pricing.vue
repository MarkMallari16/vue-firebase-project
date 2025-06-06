<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="my-20 px-10 lg:px-0">
    <div class="text-center py-20">
      <h2 class="text-4xl font-bold uppercase">Choose your plan</h2>
      <p class="text-lg text-gray-600">
        Get the tools you need to manage your budget effectively.
      </p>
    </div>

    <div class="flex justify-center gap-8 flex-wrap mt-6">
      <div class="p-10 ring-1 ring-inset ring-gray-300 rounded-lg w-96">
        <div class="text-center">
          <h3 class="text-2xl font-bold">Free</h3>
          <h1 class="text-5xl font-medium mt-2 mb-4">
            ₱0 <span class="text-lg text-gray-500">/month</span>
          </h1>
          <p class="text-lg mb-8">Perfect for getting started with budgeting.</p>
        </div>
        <ul class="list-disc pl-5 space-y-3">
          <li>Advanced budgeting tools</li>
          <li>Track unlimited accounts</li>
          <li>Priority email support</li>
        </ul>
      </div>

      <div class="relative p-10 ring-2 ring-inset ring-primary rounded-lg w-96">
        <div class="absolute -top-3 left-36">
          <span class="badge badge-neutral rounded-full">Most Popular</span>
        </div>
        <div class="text-center">
          <h3 class="text-2xl font-bold mb-2">Basic Plan</h3>
          <h1 class="text-5xl font-medium mt-2 mb-4">
            ₱9 <span class="text-lg text-gray-500">/month</span>
          </h1>
          <p class="text-lg mb-8">For individuals who want advanced insights.</p>
        </div>
        <ul class="list-disc pl-5 space-y-3">
          <li>Track income and expenses</li>
          <li>Set basic monthly budgets</li>
          <li>Manual expense tracking</li>
          <li>Email support</li>
        </ul>
      </div>

      <div class="p-10 ring-1 ring-inset ring-gray-300 rounded-lg w-96">
        <div class="text-center">
          <h3 class="text-2xl font-bold mb-2">Pro</h3>
          <h1 class="text-5xl font-medium mt-2 mb-4">
            ₱20 <span class="text-lg text-gray-500">/month</span>
          </h1>
          <p class="text-lg mb-8">Advanced budgeting features for power users.</p>
        </div>

        <ul class="list-disc pl-5 space-y-3">
          <li>Automatic bank sync</li>
          <li>Track multiple accounts</li>
          <li>Custom category creation</li>
          <li>Spending reports and insights</li>
          <li>Priority email support</li>
        </ul>
      </div>
    </div>
  </div>
</template>
