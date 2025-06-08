<script setup></script>

<template>
  <section class="pb-40 px-10 lg:px-0 bg-gray-100">
    <div class="text-center pt-20 pb-10">
      <h2 class="text-6xl font-extrabold">Choose your plan</h2>
      <p class="text-2xl text-gray-500 pt-6">
        Get the tools you need to manage your budget effectively.
      </p>
    </div>

    <div class="flex justify-center gap-8 flex-wrap pt-4">
      <div class="p-10 ring-1 ring-inset ring-gray-300 rounded-lg w-96">
        <div class="text-center">
          <h3 class="text-2xl font-bold">Free</h3>
          <h1 class="text-5xl font-medium mt-2 mb-4">
            ₱0 <span class="text-lg text-gray-500">/month</span>
          </h1>
          <p class="text-lg mb-8">Perfect for getting started with budgeting.</p>
        </div>
        <ul class="list-none pl-5 space-y-3">
          <li class="flex items-center gap-2">
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
            <p class="text-gray-500">Advanced budgeting tools</p>
          </li>
          <li class="flex items-center gap-2">
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
            <p class="text-gray-500">Track unlimited accounts</p>
          </li>
          <li class="flex items-center gap-2">
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
            <p class="text-gray-500">Priority email support</p>
          </li>
        </ul>
      </div>

      <div class="relative p-10 ring-2 ring-inset ring-primary rounded-lg w-96">
        <div class="flex justify-center">
          <div class="absolute -top-3">
            <span class="badge badge-neutral rounded-full">Most Popular</span>
          </div>
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
  </section>
</template>
