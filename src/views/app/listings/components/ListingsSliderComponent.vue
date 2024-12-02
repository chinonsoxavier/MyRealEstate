<script setup lang="ts">
import { ref } from "vue";
import { listing1, listing2, listing3, listing4,  } from "../../../../assets/exports";
import CaretIcon from "../../../../components/icons/regular/CaretIcon.vue";
import IconComponent from "../../../../components/ReComponents/IconComponent.vue";

const currentActiveSlide = ref(0);

const slides = [listing1,listing2, listing3,listing4];

const setCurrentActiveSlide = (param) => {
    currentActiveSlide.value = param;
    console.log(currentActiveSlide.value);
};

const nextSlide = () => {
    currentActiveSlide.value >= slides.length-1 ? currentActiveSlide.value = 0 : currentActiveSlide.value += 1
};
const prevSlide = () => {
    currentActiveSlide.value > 0 ? currentActiveSlide.value -= 1 : currentActiveSlide.value = slides.length -1
}

</script>

<template>
  <div class="h-[80vh] base:h-auto flex-wrap gap-4 flex items-stretch justify-center">
    <div class="h-full base:h-[80vh]  flex items-start rounded-xl justify-center relative flex-1">
      <div class="flex items-center min-w-[570px] justify-between w-full px-10 absoute mt-8 z-10 top-2">
        <div class="flex items-center justify-start gap-3">
          <div v-on:click="prevSlide()" >

              <IconComponent 
              class="bg-white w-14 h-14 shadow hover:shadow-md hover:bg-black hover:fill-white duration-500"
              >
              <CaretIcon class="w-5 -5 rotate-90" /> </IconComponent
              >
            </div>
            <div v-on:click="nextSlide()" >
                <IconComponent
                class="bg-white w-14 h-14 shadow hover:shadow-md hover:bg-black hover:fill-white duration-500"
                >
                <CaretIcon class="w-5 -5 -rotate-90" />
            </IconComponent>
        </div>
        </div>
        <button class="bg-white px-10 py-3 rounded-lg" >
            See all 37 Photos 
        </button>
      </div>
      <!-- <div class="w-full h-full bg-[pink] rounded-xl" >hj -->
          <img v-for="(img,index) in slides" :key="img" :class="[index == currentActiveSlide ? 'opacity-100' : 'z-0 opacity-0']" alt='property listing' :src="img" class="duration-500 rounded-xl inset-0 absolute object-fill bg-[green] w-full h-full" />
        <!-- </div> -->
    </div>
    <div
      class="flex-1 listing base:justify-center base:flex-row min-w-[200px] max-w-[180px] gap-5 flex flex-col items-center justify-between bg-white rounded-md p-4"
    >
      <img v-on:click="setCurrentActiveSlide(0)"
        alt="listings slider component"
        :src="listing1"
        class="cursor-pointer h-full rounded-md"
      />
      <img v-on:click="setCurrentActiveSlide(1)"
        alt="listings slider component"
        :src="listing2"
        class="cursor-pointer h-full rounded-md"
      />
      <img v-on:click="setCurrentActiveSlide(2)"
        alt="listings slider component"
        :src="listing3"
        class="cursor-pointer h-full rounded-md"
      />
      <img v-on:click="setCurrentActiveSlide(3)"
        alt="listings slider component"
        :src="listing4"
        class="cursor-pointer h-full rounded-md"
      />
    </div>
  </div>
</template>

