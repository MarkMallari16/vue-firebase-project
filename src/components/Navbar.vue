<script setup></script>

<template>
  <div className="navbar pt-6 pb-10 lg:px-20 flex justify-between items-center">
    <div>
      <router-link to="/" className="btn btn-ghost text-xl uppercase"
        >Budget Tracker</router-link
      >
    </div>
    <div class="flex items-center gap-4">
      <router-link to="/login" class="">Features</router-link>
      <router-link to="/login" class="">About Us</router-link>
      <router-link to="/login" class="">Pricing</router-link>
      <router-link to="/login" class="">About Us</router-link>
      <router-link to="/login" class="">Contact Us</router-link>
    </div>
    <div class="flex items-center gap-4">
      <router-link to="/login" class="">Login</router-link>
      <router-link to="/signup" class="btn btn-primary">Get Started</router-link>
    </div>
  </div>
</template>
