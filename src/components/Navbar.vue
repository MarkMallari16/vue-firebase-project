<script setup></script>

<template>
  <div className="navbar bg-base-100 lg:px-20">
    <div class="flex-1">
      <a className="btn btn-ghost text-xl uppercase">My Own Website</a>
    </div>

    <div class="flex gap-4">
      <router-link to="/login" class="font-medium">Log in</router-link>
      <router-link to="/signup" class="font-medium">Sign up</router-link>
    </div>
  </div>
</template>
