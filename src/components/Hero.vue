<script setup></script>
<template>
  <div class="min-h-screen grid place-content-center">
    <h1 class="text-5xl lg:text-6xl text-center">Basic Hero Section</h1>
    <div class="mt-4 flex justify-center gap-2 ">
      <router-link to="/signup" class="font-medium btn btn-primary"
        >Get started</router-link
      >
      <router-link to="/login" class="font-medium btn btn-ghost">Log in</router-link>
    </div>
  </div>
</template>
