<template>
    <div class="w-full flex flex-col justify-between min-h-screen">
        <A-Nav></A-Nav>

        <div class="flex flex-col px-10 pb-10 lg:hidden">
            <h2 class="text-2xl sm:text-4xl">For The <span class="font-semibold block">Homes</span> </h2>

            <NuxtLink to="/products/typhoon-d2" class="w-full h-80 sm:h-96 flex items-end py-10 relative rounded-md">
                <div class="h-40 sm:h-60 w-full shadow-2xl"></div>
                <div class="absolute flex h-80 w-full top-0 items-center px-2">
                    <div class="w-[50%] flex justify-center">
                        <img src="@/assets/icons/typhoon.svg" class="h-8 sm:h-12 mt-28 sm:mt-32" alt="">
                    </div>
                    <div class="w-[50%] flex justify-center">
                        <img src="@/assets/images/static/Typhoon_D2.png" class="h-52 sm:h-80" alt="">
                    </div>
                </div>


            </NuxtLink>

            <NuxtLink to="/products/techno-plus-158" class="w-full h-80 sm:h-96 flex items-end py-10 relative rounded-md">
                <div class="h-40 sm:h-60 w-full shadow-2xl"></div>
                <div class="absolute flex h-80 w-full top-0 items-center px-2">
                    <div class="w-[50%] flex justify-center">
                        <img src="@/assets/icons/techno-plus.svg" class="h-8 sm:h-14 mt-28 sm:mt-32" alt="">
                    </div>
                    <div class="w-[50%] flex justify-center sm:pr-12">
                        <img src="@/assets/images/static/Techno_Plus_230.png" class="h-52 sm:h-80" alt="">
                    </div>
                </div>


            </NuxtLink>
        </div>

        <div class="flex-grow lg:flex items-center hidden">

            <div class="flex w-full items-center justify-evenly">
                <NuxtLink to="/products/typhoon-d2" @mouseover="onTyphoonHover" @mouseleave="onTyphoonLeave"
                    class="h-96 w-[35%] px-10 flex items-center cursor-pointer justify-evenly relative ">
                    <div
                        class="absolute bottom-0 w-full h-52 shadow-2xl bg-[#1A1A1A] brightness-125 rounded-xl flex items-center">
                    </div>
                    <img src="@/assets/icons/typhoon.svg" class="h-14 mt-48 z-10" alt="">
                    <img ref="typhoonImg" src="@/assets/images/static/Typhoon_D2.png" class="h-96 z-10 pb-10" alt="">
                </NuxtLink>

                <NuxtLink to="/products/techno-plus-158" @mouseover="onTechnoHover" @mouseleave="onTechnoLeave"
                    class="h-96 w-[35%] px-10 flex items-center justify-evenly relative cursor-pointer">
                    <div
                        class="absolute bottom-0 w-full h-52 shadow-2xl bg-[#1A1A1A] brightness-125 rounded-xl flex items-center">
                    </div>
                    <img src="@/assets/icons/techno-plus.svg" class="h-14 mt-48 z-10" alt="">
                    <img ref="technoImg" src="@/assets/images/static/Techno_Plus_230.png" class="h-96 z-10 pb-5" alt="">
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import gsap from "gsap"

useHead({
    title: 'Invac - Product Category',
    meta: [
        {
            name: 'description',
            content: 'Central vacuum systems clean dust, allergens, viruses, and pollutants invisible to the naked eye.'
        }
    ]
})

const typhoonImg = ref(null);
const technoImg = ref(null);
const onTyphoonHover = () => {
    gsap.to(typhoonImg.value, {
        y: '-10%',
        duration: 0.5,
    })
}

const onTyphoonLeave = () => {
    gsap.to(typhoonImg.value, {
        y: '0%',
        duration: 0.5,
    })
}


const onTechnoHover = () => {
    gsap.to(technoImg.value, {
        y: '-10%',
        duration: 0.5,
    })
}

const onTechnoLeave = () => {
    gsap.to(technoImg.value, {
        y: '0%',
        duration: 0.5,
    })
}
</script>


