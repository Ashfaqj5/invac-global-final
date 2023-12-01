<template>
    <div class="w-full">

        <div class="w-full py-10 lg:hidden overflow-x-clip px-10">
            <div class="w-96 sm:w-full translate-x-[30vw]">
                <ClientOnly>
                    <Vue3Lottie class="h-full w-full sm:scale-125 [transform:rotateY(-15deg)]" :speed="0.8"
                        :direction="`alternate`" :animationData="HomeJSON" />
                </ClientOnly>

            </div>

            <h2 class="text-3xl">
                <span class="block">Our</span>
                <span class="block font-bold">Brush</span>
                <span class="block font-bold">Attachment</span>
            </h2>

            <NuxtLink to="/accessories"
                class="flex items-center gap-x-4 text-sm tracking-[0.7rem] transition-all duration-700 hover:gap-x-6 mt-10">
                <span>Shop Now</span>
                <img src="@/assets/icons/orange-arrow-right.svg" class="lg:h-4 2xl:h-8" alt="">
            </NuxtLink>

        </div>


        <div class="h-screen w-full hidden lg:flex items-center overflow-x-hidden px-20">
            <div class="h-full flex w-[40%] flex-col justify-center">
                <h2 class="lg:text-4xl 2xl:text-6xl font-normal">
                    <span class="block">Our</span>
                    <span class="block mt-4 font-bold">Brush</span>
                    <span class="block mt-4 font-bold">Attachment</span>
                </h2>

                <NuxtLink to="/accessories"
                    class="flex items-center gap-x-4 lg:text-base 2xl:text-xl tracking-[0.7rem] transition-all duration-700 hover:gap-x-6 mt-20">
                    <span>Shop Now</span>
                    <img src="@/assets/icons/orange-arrow-right.svg" class="lg:h-4 2xl:h-8" alt="">
                </NuxtLink>
            </div>
            <div @scroll.prevent class="h-full w-[60%] flex items-center justify-end overflow-clip">
                <ClientOnly>
                    <Vue3Lottie class="w-[40rem] [transform:rotateY(-15deg)]" :speed="0.8" :direction="`alternate`"
                        :animationData="HomeJSON" />
                </ClientOnly>
            </div>
        </div>
    </div>
</template>

<script setup>
import HomeJSON from '@/assets/home-lottie.json'

</script>
