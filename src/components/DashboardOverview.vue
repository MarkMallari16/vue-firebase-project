<template>
  <div class="pt-8">
    <div class="flex justify-between pb-6">
      <h1 class="text-3xl font-medium">Overview</h1>
      <select class="select select-ghost">
        <option selected>Last 30 days</option>
        <option>Last 7 days</option>
        <option>Last 3 months</option>
        <option>Last year</option>
      </select>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-3">
      <div class="rounded-md p-6 ring-1 ring-inset ring-base-300 bg-white">
        <div class="flex justify-between items-center">
          <h2 class="mt-2 text-md font-medium">Total Balance</h2>
          <h2 class="text-gray-500 text-2xl">₱</h2>
        </div>
        <h1 class="text-4xl font-bold">20040</h1>

        <div class="flex items-center gap-2 pt-4 text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-4"
          >
            <path
              fill-rule="evenodd"
              d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
              clip-rule="evenodd"
            />
          </svg>

          <p>+2.5% <span class="text-gray-600 font-normal">last month</span></p>
        </div>
      </div>

      <div class="rounded-md p-6 ring-1 ring-inset ring-base-300 bg-white">
        <div class="flex justify-between items-center">
          <h2 class="mt-2 text-md font-medium">Total Income</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 text-green-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        </div>
        <h1 class="text-4xl font-bold text-green-500">20040</h1>

        <div class="flex items-center gap-2 pt-4 text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-4"
          >
            <path
              fill-rule="evenodd"
              d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
              clip-rule="evenodd"
            />
          </svg>

          <p>+2.5% <span class="text-gray-600 font-normal">last month</span></p>
        </div>
      </div>

      <div class="rounded-md p-6 ring-1 ring-inset ring-base-300 bg-white">
        <div class="flex justify-between items-center">
          <h2 class="mt-2 text-md font-medium">Total Expenses</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 text-red-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </div>

        <h1 class="text-4xl font-bold">20040</h1>

        <div class="flex items-center gap-2 pt-4 text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-4"
          >
            <path
              fill-rule="evenodd"
              d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
              clip-rule="evenodd"
            />
          </svg>

          <p>+2.5% <span class="text-gray-600 font-normal">last month</span></p>
        </div>
      </div>

      <div class="rounded-md p-6 ring-1 ring-inset ring-base-300 bg-white">
        <div class="flex justify-between items-center">
          <h2 class="mt-2 text-md font-medium">Savings Rate</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 text-green-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        </div>

        <h1 class="text-4xl font-bold">20040</h1>

        <div class="flex items-center gap-2 pt-4 text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-4"
          >
            <path
              fill-rule="evenodd"
              d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
              clip-rule="evenodd"
            />
          </svg>

          <p>+2.5% <span class="text-gray-600 font-normal">last month</span></p>
        </div>
      </div>
    </div>
  </div>
</template>
