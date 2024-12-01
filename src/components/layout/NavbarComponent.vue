<script setup lang="ts">
import LockSimpleDuoIcon from "../icons/duo/LockSimpleDuoIcon.vue";
import ArrowUpRightIcon from "../icons/regular/ArrowUpRightIcon.vue";

// import Logo from '../ReComponents/Logo.vue';
</script>

<template>
    <div class="flex items-center justify-center py-8 w-full" >
  <div class="flex items-center justify-between py-5 px-4 max-width">
    <!-- <Logo class="w-10 bg-[red]" /> -->
    Logo

    <div class="flex gap-4 items-center justify-center">
      <p class="text-lg text-darkText font-medium">Dashboard</p>
      <p class="text-lg text-darkText font-medium">Home</p>
      <p class="text-lg text-darkText font-medium">Listing</p>
      <p class="text-lg text-darkText font-medium">Pages</p>
      <p class="text-lg text-darkText font-medium">Blog</p>
    </div>
    <div class="flex items-center justify-end gap-4">
      <button
        class="py-2 px-5 flex items-center gap-3 rounded-md border border-adminPrimary text-adminPrimary fill-adminPrimary justify-center"
      >
        <LockSimpleDuoIcon class="w-5 h-5 fill-darkText" />
        <p>Log In</p>
      </button>
      <button
        class="py-2 px-5 flex items-center gap-3 rounded-md border bg-adminPrimary text-white fill-white justify-center"
      >
      <ArrowUpRightIcon class="w-5 h-5"/>
        <p>Add Listing</p>
      </button>
    </div>
  </div>
  </div>
</template>
