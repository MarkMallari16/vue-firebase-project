<script setup>
//pricing data
const pricings = [
  {
    title: "Free",
    price: "₱0",
    description: "Perfect for getting started with budgeting.",
    features: [
      "Advanced budgeting tools",
      "Track unlimited accounts",
      "Priority email support",
    ],
  },
  {
    title: "Basic Plan",
    price: "₱9",
    description: "For individuals who want advanced insights.",
    features: [
      "Track income and expenses",
      "Set basic monthly budgets",
      "Manual expense tracking",
      "Email support",
    ],
  },
  {
    title: "Pro",
    price: "₱20",
    description: "Advanced budgeting features for power users.",
    features: [
      "Automatic bank sync",
      "Track multiple accounts",
      "Custom category creation",
      "Spending reports and insights",
      "Priority email support",
    ],
  },
];
</script>

<template>
  <section class="pb-40 px-10 lg:px-0 bg-gray-50">
    <div class="text-center pt-20 pb-10">
      <h2 class="text-6xl font-extrabold">Choose your plan</h2>
      <p class="text-2xl text-gray-500 pt-6">
        Get the tools you need to manage your budget effectively.
      </p>
    </div>
    <!-- Pricing Cards -->
    <div class="flex justify-center gap-8 flex-wrap pt-4">
      <div
        v-for="(pricing, index) in pricings"
        class="p-10 ring-1 ring-inset ring-gray-300 w-96 bg-white rounded-lg"
        :key="index"
      >
        <div class="text-center">
          <h3 class="text-2xl font-bold">{{ pricing.title }}</h3>
          <h1 class="text-5xl font-medium mt-2 mb-4">
            {{ pricing.price }} <span class="text-lg text-gray-500">/month</span>
          </h1>
          <p class="text-lg mb-8">{{ pricing.description }}</p>
        </div>
        <ul class="list-none pl-5 space-y-3">
          <li
            v-for="(feature, index) in pricing.features"
            class="flex items-center gap-2"
            :key="index"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5 text-green-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p class="text-gray-500">{{ feature }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
