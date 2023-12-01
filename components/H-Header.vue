<template>
    <div class="h-screen w-screen relative">
        <video playsinline autoplay loop muted src="@/assets/hero.mp4"
            class="h-full w-full object-cover hidden lg:block"></video>
        <video playsinline autoplay loop muted src="@/assets/hero-mobile.mp4"
            class="h-full w-full object-cover lg:hidden"></video>
        <div class="h-full w-full flex justify-between flex-col pb-10 lg:pb-20 absolute top-0">
            <A-Nav />
            <div
                class="flex flex-col px-10 text-3xl lg:flex-row lg:px-20 lg:justify-between lg:items-center lg:text-3xl xl:text-4xl 2xl:text-5xl">
                <div>
                    <div class="overflow-y-hidden">
                        <h3 ref="cleaningMadeEasy"
                            class="font-bold pb-1.5 2xl:pb-2 translate-y-[100%] lg:font-bold xl:font-bold 2xl:font-bold"><span
                                class="font-light">Cleaning</span>
                            Made Easy</h3>
                    </div>


                    <div class="overflow-y-clip">
                        <p ref="centralVacuum"
                            class="text-sm translate-y-[100%] lg:text-sm xl:text-base 2xl:text-lg tracking-wider font-light mt-4">
                            Central vacuum
                            systems clean dust, allergens, viruses, <br class="hidden lg:block"> and pollutants invisible to
                            the
                            naked eye.</p>
                    </div>

                </div>



                <NuxtLink to="/demo"
                    class="flex overflow-y-clip items-center mt-10 gap-x-4 hover:gap-x-6 pr-1 hover:pr-0 cursor-pointer transition-all duration-500">
                    <p ref="bookAdemoText"
                        class="text-base translate-y-[100%] tracking-[0.6rem] lg:tracking-[0.4rem] xl:tracking-[0.4rem] 2xl:tracking-[0.8rem] lg:text-lg xl:text-xl 2xl:text-2xl font-light">
                        Book A Demo</p>
                    <img ref="bookAdemoImg" src="@/assets/icons/orange-arrow-right.svg"
                        class="h-5 lg:h-6 translate-y-[100%] xl:h-6 2xl:h-8" alt="">
                </NuxtLink>



            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
const cleaningMadeEasy = ref(null);
const centralVacuum = ref(null);
const bookAdemoText = ref(null);
const bookAdemoImg = ref(null);
onMounted(() => {
    gsap.to(cleaningMadeEasy.value, {
        y: 0,
        duration: 1
    })

    gsap.to(centralVacuum.value, {
        y: 0,
        delay: 0.5,
        duration: 1
    })



    gsap.to(bookAdemoText.value, {
        y: 0,
        duration: 1
    })

    gsap.to(bookAdemoImg.value, {
        y: 0,
        delay: 0.5,
        duration: 1
    })
})
</script>
