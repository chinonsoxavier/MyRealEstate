<script setup lang="ts">
import { onBeforeMount, onMounted, onUnmounted, ref } from "vue";
import LockSimpleDuoIcon from "../icons/duo/LockSimpleDuoIcon.vue";
import ArrowUpRightIcon from "../icons/regular/ArrowUpRightIcon.vue";
//import { store } from "../../utilities/store";
// import { store } from "../../utilities/store";
import {useMainStore} from "../../utilities/store";

const store = useMainStore();

const menuOpen = ref(store.menuOpen);

const toggleMenu = () => {
  // store.toggleMenu();
  // menuOpen.value = !menuOpen.value
store.toggleMenu();
  console.log(menuOpen);
}

const scrollThreshold = 500;
var isFixed = ref(false);
const windowWidth = ref(window.innerWidth);

const FixedNavbarScroll = () => {
  isFixed.value = scrollThreshold <= window.scrollY ? true : false;
  windowWidth.value = window.innerWidth;
  // console.log(this.windowWidth);
  // console.log(window.scrollY + "scrollY");
  // console.log(this.scrollThreshold + "threshold");
};

  // onMounted(() => {
   
  // });

  onMounted(() => {
    window.addEventListener("scroll", FixedNavbarScroll);
    window.addEventListener("resize", FixedNavbarScroll);
  });

onBeforeMount(() => {
  window.addEventListener("scroll", FixedNavbarScroll);
    window.addEventListener("resize", FixedNavbarScroll);
 
});

onUnmounted(() => {
  window.removeEventListener("scroll", FixedNavbarScroll);
  window.removeEventListener("resize", FixedNavbarScroll);

});

// import Logo from '../ReComponents/Logo.vue';
</script>

<template>
    <div class="flex items-center justify-center z-50 relativ py-8 w-full duration-500 " :class="[isFixed ? 'fixed top-0 bg-white ' : 'relative']" >
  <div class="flex items-center justify-between py-5 px-4 max-width">
    <!-- <Logo class="w-10 bg-[red]" /> -->
    Logo

    <div class="flex gap-4 items-center justify-center base:hidden">
      <p class="text-lg text-darkText font-medium">Dashboard</p>
      <p class="text-lg text-darkText font-medium">Home</p>
      <p class="text-lg text-darkText font-medium">Listing</p>
      <p class="text-lg text-darkText font-medium">Pages</p>
      <p class="text-lg text-darkText font-medium">Blog</p>
    </div>
    <div class="flex items-center justify-end gap-4 tablet:hidden">
      <button
        class="py-3 px-5 flex items-center gap-3 rounded-md border border-adminPrimary text-adminPrimary fill-adminPrimary justify-center"
      >
        <LockSimpleDuoIcon class="w-5 h-5 fill-darkText" />
        <p>Log In</p>
      </button>
      <button
        class="py-3 px-5 flex items-center gap-3 rounded-md border bg-adminPrimary text-white fill-white justify-center"
      >
      <ArrowUpRightIcon class="w-5 h-5"/>
        <p>Add Listing</p>
      </button>
    </div>
    <div class="hidden tablet:flex" >
      <div
        @click="toggleMenu"
        class="hidden cursor-pointer tablet:flex items-center w-10 h-10 gap-3 justify-center relative flex-col"
      >
        <span
          class="bg-black w-full h-1 duration-700 asolute"
          v-bind:class="
            menuOpen ? 'rotate-45  w-[73%]  absolute' : 'rotate-0'
          "
        ></span>
        <span
          class="bg-black w-full h-1 duration-700 absolute"
          v-bind:class="menuOpen ? 'hidden' : 'block'"
        ></span>
        <span
          class="bg-black w-10 h-1 duration-700 abolute"
          v-bind:class="
            menuOpen ? '-rotate-45 w-[73%] absolute ' : 'rotate-0'
          "
        ></span>
      </div>
    </div>
  </div>
  </div>
</template>
