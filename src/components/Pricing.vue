<script setup>
import { ref } from 'vue';

const count = ref(0);
const title = ref("Vue");
</script>

<template>

  <h1 class="text-2xl">{{ title }}</h1>

  <input type="text" class="input input-bordered" v-model="title">
  <div class="to-white py-20">
    <div class="text-center">
      <h2 class="text-4xl font-bold uppercase">Choose your plan</h2>
      <p class="text-lg text-gray-600">
        Get the tools you need to manage your budget effectively.
      </p>
    </div>
    <button class="btn btn-primary" @click="count++">{{ count }}</button>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 rounded-xl mt-6">
      <div class="bg-white p-10 ring-1 ring-inset ring-gray-300 rounded-lg">
        <div class="text-center">
          <h3 class="text-2xl font-bold mb-2 uppercase">Free</h3>
          <p class="text-lg mb-8">Perfect for getting started with budgeting.</p>
        </div>
        <ul class="list-disc pl-5 space-y-3">
          <li>Advanced budgeting tools</li>
          <li>Track unlimited accounts</li>
          <li>Priority email support</li>
        </ul>
      </div>

      <div class="bg-white p-10 ring-2 ring-inset ring-primary rounded-lg">
        <div class="text-center">
          <h3 class="text-2xl font-bold mb-2 uppercase">Basic Plan</h3>
          <p class="text-lg mb-8">Perfect for getting started with budgeting.</p>
        </div>
        <ul class="list-disc pl-5 space-y-3">
          <li>Track income and expenses</li>
          <li>Set basic monthly budgets</li>
          <li>Manual expense tracking</li>
          <li>Email support</li>
        </ul>
      </div>

      <div class="bg-white p-10 ring-1 ring-inset ring-gray-300 rounded-lg">
        <div class="text-center">
          <h3 class="text-2xl font-bold mb-2 uppercase">Pro</h3>
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
