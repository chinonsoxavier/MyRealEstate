<script setup lang="ts">
import { dealsImage2 } from "../../../../assets/exports";
import ArrowUpRightIcon from "../../../../components/icons/regular/ArrowUpRightIcon.vue";
import BookmarkIcon from "../../../../components/icons/regular/BookmarkIcon.vue";
import HeartIcon from "../../../../components/icons/regular/HeartIcon.vue";
import PlusCircleIcon from "../../../../components/icons/regular/PlusCircleIcon.vue";
import IconComponent from "../../../../components/ReComponents/IconComponent.vue";
import ImageComponent from "../../../../components/ReComponents/ImageComponent.vue";
</script>

<template>
  <div class="flex items-center justify-between gap-10">
    <div class="flex flex-col items-start justify-between gap-6 flex-1">
      <p class="text-6xl font-medium text-white">
        Exclusive Monthly Deal for you.
      </p>
      <p class="text-lg text-white font-medium">
        Don't miss out on this personalized monthly exclusive offer for you.
      </p>
      <button class="bg-adminPrimary rounded-full px-4 py-2 text-white">
        More Details
      </button>
    </div>

    <div class="bg-white rounded-xl shadow-md p-3 flex-1">
      <div class="flex items-stretch justify-between h-[80%]">
        <div
          class="flex flex-1 basis-[120px] max-w-[200px] flex-col p-5 border-r justify-between"
        >
          <div class="flex flex-col gap-5 items-start justify-start">
            <button class="bg-adminPrimary text-white rounded-full px-3 py-1">
              FOR SELL
            </button>
            <p class="text-2xl font-medium">Luxury fisa orkit villa.</p>
          </div>
          <div class="flex items-center gap-4 mb-3 justify-evenly">
            <IconComponent class="w-6-6">
              <HeartIcon class="w-7 h-7 fill-[#bfbfbf] duration-500 hover:fill-adminPrimary" />
            </IconComponent>
            <IconComponent class="w-h-6">
              <BookmarkIcon class="w-7 h-7 fill-[#bfbfbf] duration-500 hover:fill-adminPrimary" />
            </IconComponent>
            <IconComponent class="w-h-6">
              <PlusCircleIcon class="w-7 h-7 fill-[#bfbfbf] duration-500 hover:fill-adminPrimary" />
            </IconComponent>
          </div>
        </div>
        <div
          class="flex-1 flex flex-col items-center justify-between gap-5 p-5"
        >
          <div class="">
            <div class="text-left">
              <p class="text-xl text-lightText">
                Mirpur 10, National Stadium, 1210, Dhaka, BD
              </p>
            </div>
            <div class="relative flex items-center my-6 justify-center">
              <ImageComponent
                alt="home deals svg"
                :src="dealsImage2"
                class=""
              />
              <p class="absolute text-4xl font-semibold text-black">
                $28,100.00
              </p>
            </div>
          </div>
          <div class="flex items-center gap-5 justify-between">
            <div class="border-r text-left px-5">
              <p class="text-xl font-medium text-black">2137</p>
              <p class="text-sm font-normal text-lightText">sqft</p>
            </div>
            <div class="border-r text-center px-5">
              <p class="text-xl font-medium text-black">03</p>
              <p class="text-sm font-normal text-lightText">bed</p>
            </div>
            <div class="text-right px-5">
              <p class="text-xl font-medium text-black">02</p>
              <p class="text-sm font-normal text-lightText">bath</p>
            </div>
          </div>
        </div>
      </div>
      <div class="h-[20%] flex items-center justify-between p-3 border-t">
        <p class="text-[17px] hover:text-adminPrimary hover:underline duration-500 cursor-pointer">Check Full Details</p>
        <IconComponent
          class="bg-black fill-white w-12 h-12 duration-500 hover:bg-adminPrimary"
        >
          <ArrowUpRightIcon class="w-6 h-6" />
        </IconComponent>
      </div>
    </div>
  </div>
</template>
