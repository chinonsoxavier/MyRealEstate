<script setup lang="ts" >

defineProps({
    text: {
        type:String
    },
    label: {
   type:String
    }
})

</script>

<template>
    <div class="flex flex-col items-center justify-center gap-3" >
        <div>
            <slot />
        </div>
        <p class="text-lightText text-lg font-normal" >{{ label }}</p>
        <p class="text-xl text-center text-darkText font-normal" >{{ text }}</p>
    </div>
</template>