<template>
    <div class="w-full">
        <div class="w-full bg-white text-black">
            <div class="w-full min-h-screen hidden lg:flex h-screen">
                <div class="lg:w-[55%] 2xl:w-[60%] h-full bg-neutral-100 relative">
                    <div class="h-full w-full flex items-center justify-center">

                        <img src="@/assets/products/Techno_Plus_158.png" class="h-[26rem] 2xl:h-[34rem]" alt="">
                    </div>
                    <div class="h-full w-full flex flex-col absolute top-0 justify-between">
                        <div
                            class="w-full flex items-center justify-between px-10 lg:p-10 2xl:px-20 py-10 lg:py-10 xl:py-12 2xl:py-14">

                            <NuxtLink to="/"><img src="@/assets/icons/logo-white.svg"
                                    class="h-5 lg:h-5 xl:h-5 2xl:h-6 transition-opacity duration-500 hover:opacity-75 active:opacity-90"
                                    alt=""></NuxtLink>


                            <div class="flex items-center">
                                <p class="lg:text-xs xl:text-sm 2xl:text-base leading-5">
                                    Any Questions?
                                    <span class="block font-semibold">Talk to our experts</span>
                                </p>

                                <img src="@/assets/icons/support.svg" class="lg:h-8 2xl:h-10 ml-4" alt="" />
                            </div>

                        </div>

                        <div class="flex flex-col lg:gap-y-10 2xl:gap-y-14 items-start lg:pl-10 2xl:pl-20">
                            <img src="@/assets/icons/10x-powerful-cyclonic-suction.svg" class="invert h-16 2xl:h-24" alt="">
                            <img src="@/assets/icons/10x-powerful-cyclonic-suction.svg" class="invert h-16 2xl:h-24" alt="">
                            <img src="@/assets/icons/10x-powerful-cyclonic-suction.svg" class="invert h-16 2xl:h-24" alt="">
                        </div>


                        <div class="h-20"></div>
                    </div>
                </div>
                <div class="lg:w-[45%] 2xl:w-[40%] h-full flex flex-col">
                    <div class="w-full flex items-center justify-end px-10  2xl:px-20 py-10 lg:py-10 xl:py-12 2xl:py-14">
                        <img @click="triggerMenu" src="@/assets/icons/burger.svg"
                            class="h-5 lg:h-6 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9 transition-opacity cursor-pointer active:opacity-90 invert hover:opacity-60 duration-500"
                            alt="">
                    </div>

                    <div class="2xl:px-20 px-10 items-center gap-x-10 2xl:gap-x-20 justify-between flex">
                        <img src="@/assets/icons/techno-plus.svg" class="lg:h-8 xl:h-10 2xl:h-14" alt="">
                        <div class="w-full pb-10">
                            <h3 class="lg:text-xs 2xl:text-sm">Pick a model</h3>
                            <div class="flex items-center gap-x-10 mt-3">
                                <button class="flex items-center border-2 p-2 px-5 gap-x-5 rounded-xl border-[#f47921]">
                                    <h2 class="lg:text-xs 2xl:text-xl font-semibold">D2</h2>
                                    <img src="@/assets/icons/selected.svg" class="lg:h-3.5 2xl:h-5" alt="">
                                </button>


                                <button class="flex items-center border-2 p-2 px-5 gap-x-5 rounded-xl border-neutral-600">
                                    <h2 class="lg:text-xs 2xl:text-xl font-semibold">D3</h2>
                                    <img src="@/assets/icons/selected.svg" class="lg:h-3.5 2xl:h-5 opacity-0" alt="">
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="w-full h-full flex flex-col justify-end pb-10 px-10 2xl:px-20">
                        <div class="border-b-2 border-black">
                            <div @click="infoState = !infoState"
                                class="w-full pb-2 2xl:pb-4 cursor-pointer flex items-center justify-between">
                                <h2 class="lg:text-base 2x:text-2xl">Product Info</h2>
                                <img v-if="infoState" src="@/assets/icons/chevron-up.svg" class="invert h-3.5 rotate-180"
                                    alt="">
                                <img v-else src="@/assets/icons/chevron-up.svg" class="invert lg:h-2.5 2xl:h-3.5 rotate-180" alt="">
                            </div>

                            <div v-if="infoState" class="lg:text-xs lg:mt-10 2xl:text-sm 2xl:h-20  w-full  overflow-y-auto z-20 scroll-p-0 max-h-[5rem]">

                                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus suscipit eius aliquid,
                                    aut
                                    unde quas expedita alias voluptatum minima. Sint voluptates perspiciatis perferendis
                                    consequuntur reiciendis placeat? Consectetur cum odit rerum. Lorem ipsum dolor, sit amet
                                    consectetur adipisicing elit. Rerum, maxime enim quasi quidem veniam ipsa qui veritatis
                                    voluptatem totam commodi officia accusamus quia non dolor maiores sint praesentium
                                    itaque
                                    aut!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias, dolores et
                                    mollitia
                                    nostrum provident quibusdam! Animi, voluptatibus. Beatae fuga distinctio in itaque sit,
                                    at
                                    ab
                                    quam error ex quia.
                                </p>

                            </div>
                        </div>



                        <div class="mt-10 2xl:mt-20">
                            <div
                                class="w-full border-2 flex items-center justify-between rounded-md border-neutral-400 lg:px-6 2xl:px-10 py-4 2xl:py-10">
                                <h2 class="lg:text-sm 2xl:text-lg font-semibold">₹248,505.00 – ₹298,999.00</h2>
                                <div class="flex items-center gap-x-4">
                                    <h2 class="lg:text-base 2xl:text-2xl font-semibold">Get A qoute</h2>
                                    <img src="@/assets/icons/orange-arrow-right.svg" class="h-5 2xl:h-7" alt="">
                                </div>
                            </div>
                            <p class="mt-10 text-xs 2xl:text-base">*This pricing is only for the Product. Installation and piping are
                                charged
                                Separately. Please Request a Quote for more information.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full"></div>
        </div>
    </div>
</template>

<script setup>
const menuState = useState('menu')
const infoState = ref(false)
const triggerMenu = () => {
    menuState.value = true;
}
</script>
