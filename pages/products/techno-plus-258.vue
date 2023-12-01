<template>
    <div class="w-full select-none">
        <div class="hidden bg-white lg:flex">
            <div class="w-[55%] min-h-screen max-h-screen h-screen sticky top-0">
                <div class="h-full w-full relative">
                    <img src="@/assets/products/static/techno-plus-258.png" class="h-full w-full object-cover object-center"
                        alt="" />
                    <div class="h-full w-full absolute top-0 flex flex-col justify-between">
                        <div
                            class="w-full flex items-center justify-between px-10 2xl:px-20 py-10 lg:py-10 xl:py-12 2xl:py-14">
                            <NuxtLink to="/"><img src="@/assets/icons/logo-white.svg"
                                    class="h-5 lg:h-5 xl:h-5 2xl:h-6 transition-opacity duration-500 hover:opacity-75 active:opacity-90"
                                    alt="" /></NuxtLink>

                            <div class="flex items-center text-black">
                                <p class="lg:text-xs 2xl:text-base leading-3 2xl:leading-5">
                                    Any Questions?
                                    <span class="block font-semibold">Talk to our experts</span>
                                </p>

                                <img src="@/assets/icons/support.svg" class="lg:h-8 2xl:h-10 ml-2 2xl:ml-4" alt="" />
                            </div>
                        </div>

                        <div class="flex flex-col gap-y-10 mr-auto pl-10 2xl:pl-20">
                            <img src="@/assets/icons/wet-and-dry.svg" class="h-14 2xl:h-20" alt="" />
                            <img src="@/assets/icons/10x-powerful-cyclonic-suction.svg" class="h-16 2xl:h-24 invert"
                                alt="" />
                            <img src="@/assets/icons/twin-motor.svg" class="h-16 2xl:h-24" alt="" />

                            <img src="@/assets/icons/fully-auto-flies.svg" class="h-14 2xl:h-20" alt="" />
                        </div>

                        <div class="py-20"></div>
                    </div>
                </div>
            </div>
            <div class="w-[45%] min-h-screen flex text-black flex-col">
                <div class="w-full flex items-center justify-end px-10 2xl:px-20 py-10 lg:py-10 xl:py-12 2xl:py-14">
                    <img @click="triggerMenu" src="@/assets/icons/burger.svg"
                        class="h-5 lg:h-6 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9 transition-opacity cursor-pointer active:opacity-90 invert hover:opacity-60 duration-500"
                        alt="" />
                </div>

                <div class="flex items-center gap-x-10 mt-7 2xl:mt-10">
                    <img src="@/assets/icons/techno-plus.svg" class="h-10 2xl:h-14 px-10 2xl:px-20" alt="" />
                    <div>
                        <h5 class="text-[0.65rem] font-semibold 2xl:text-sm">
                            Pick a model
                        </h5>
                        <div class="flex gap-x-4 mt-3 pb-4">
                            <NuxtLink to="/products/techno-plus-158"
                                class="py-1.5 px-4 flex border-black border-2 rounded-md items-center gap-x-5">
                                <h2 class="font-semibold text-sm 2xl:text-lg">158</h2>
                                <img src="@/assets/icons/selected.svg" class="h-3 2xl:h-4 opacity-0" alt="" />
                            </NuxtLink>

                            <NuxtLink to="/products/techno-plus-230"
                                class="py-1.5 px-4 flex border-black border-2 rounded-md items-center gap-x-5">
                                <h2 class="font-semibold text-sm 2xl:text-lg">230</h2>
                                <img src="@/assets/icons/selected.svg" class="h-3 2xl:h-4 opacity-0" alt="" />
                            </NuxtLink>

                            <NuxtLink to="/products/techno-plus-258"
                                class="py-1.5 px-4 flex border-black border-2 rounded-md items-center gap-x-5">
                                <h2 class="font-semibold text-sm 2xl:text-lg">258</h2>
                                <img src="@/assets/icons/selected.svg" class="h-3 2xl:h-4 opacity-0" alt="" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="w-full px-10 2xl:px-20 mt-5 2xl:mt-20">
                    <div @click="descriptionState = !descriptionState"
                        class="flex items-center mt-20 cursor-pointer w-full justify-between px-1 border-b-2 border-black pb-1.5 2xl:pb-4">
                        <h3 class="lg:text-base 2xl:text-2xl">Product Info</h3>
                        <img v-if="descriptionState" src="@/assets/icons/chevron-up.svg"
                            class="invert lg:h-2 2xl:h-3 rotate-180" alt="" />
                        <img v-else src="@/assets/icons/chevron-up.svg" class="invert lg:h-2 2xl:h-3" alt="" />
                    </div>
                </div>

                <div v-if="descriptionState" class="mt-2 px-10 text-black 2xl:px-20 pb-10">
                    <p class="text-xs mt-2 2xl:text-sm">{{ description }}</p>

                    <div class="w-full border-2 border-black px-2 rounded-xl py-5 2xl:py-10 mt-20">
                        <div
                            class="grid grid-cols-4 items-center justify-evenly pr-2 w-full px-5 2xl:px-10 pb-4 border-b-2 border-black">
                            <div class="flex flex-col gap-y-2 items-center">
                                <h2 class="font-semibold lg:text-xs 2xl:text-base">Airwatts</h2>
                                <p class="text-sm 2xl:text-lg">2x534</p>
                            </div>

                            <div class="flex flex-col gap-y-2 items-center">
                                <h2 class="font-semibold lg:text-xs 2xl:text-base">mmh20</h2>
                                <p class="text-sm 2xl:text-lg">4591</p>
                            </div>

                            <div class="flex flex-col gap-y-2 items-center">
                                <h2 class="font-semibold lg:text-xs 2xl:text-base">mm3/h</h2>
                                <p class="text-sm 2xl:text-lg">358</p>
                            </div>

                            <div class="flex flex-col gap-y-2 items-center">
                                <h2 class="font-semibold lg:text-xs 2xl:text-base">Decibles</h2>
                                <p class="text-sm 2xl:text-lg">{{ "68" }}</p>
                            </div>
                        </div>

                        <div class="grid grid-cols-4 items-center justify-evenly pr-2 w-full px-5 2xl:px-10 pt-4">
                            <div class="flex flex-col gap-y-2 items-center">
                                <h2 class="font-semibold lg:text-xs 2xl:text-base">Motor</h2>
                                <p class="text-sm 2xl:text-lg">2</p>
                            </div>

                            <div class="flex flex-col gap-y-2 items-center">
                                <h2 class="font-semibold lg:text-xs 2xl:text-base">Amps</h2>
                                <p class="text-sm 2xl:text-lg">13.7 x 2</p>
                            </div>

                            <div class="flex flex-col gap-y-2 items-center">
                                <h2 class="font-semibold lg:text-xs 2xl:text-base">Capacity</h2>
                                <p class="text-sm 2xl:text-lg">80</p>
                            </div>

                            <div class="flex flex-col gap-y-2 items-center">
                                <h2 class="font-semibold lg:text-xs 2xl:text-base">Size(cm)</h2>
                                <p class="text-sm 2xl:text-lg">{{ "35 Dia x 120" }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else class="px-10 mt-2 2xl:px-20">
                    <div
                        class="border-2 border-black py-10 justify-center flex items-center px-5 2xl:px-10 2xl:py-12 mt-20 rounded-xl">
                        <div class="flex items-center gap-x-5">
                            <h3 class="text-base font-semibold 2xl:text-xl">Get A quote</h3>
                            <img src="@/assets/icons/orange-arrow-right.svg" class="h-5 2xl:h-7" alt="" />
                        </div>
                    </div>

                    <div class="2xl:text-sm font-medium mt-5 2xl:mt-8 text-xs">
                        *This pricing is only for the Product. Installation and piping are
                        charged Separately. Please Request a Quote for more information.
                    </div>
                </div>
            </div>
        </div>

        <div class="lg:hidden relative bg-white">

            <div class="h-[70vh] w-full">
                <img src="@/assets/products/static/techno-plus-258.png" class="h-full w-full object-cover" alt="">
            </div>
            <div class="w-full px-10 pb-10 text-black">
                <div class="w-full flex items-center justify-center py-14">
                    <img src="@/assets/icons/techno-plus.svg" class="h-12" alt="">
                </div>
                <h3 class="text-sm sm:text-base">Pick a model</h3>
                <div class="flex items-center mt-3 gap-x-4 sm:gap-x-10">
                    <NuxtLink to="/products/techno-plus-158"
                        class="py-1.5 px-4 sm:py-2.5 flex gap-x-6 sm:gap-x-7 items-center border-black border-2 rounded-lg">
                        <h2 class="text-lg sm:text-2xl"> 158 </h2>
                    </NuxtLink>

                    <NuxtLink to="/products/techno-plus-230"
                        class="py-1.5 px-4 sm:py-2.5 flex gap-x-5 sm:gap-x-7 items-center border-black border-2 rounded-lg">
                        <h2 class="text-lg sm:text-2xl">230</h2>
                    </NuxtLink>


                    <NuxtLink to="/products/techno-plus-258"
                        class="py-1.5 px-4 sm:py-2.5 flex gap-x-5 sm:gap-x-7 items-center border-black border-2 rounded-lg">
                        <h2 class="text-lg sm:text-2xl">258</h2>

                    </NuxtLink>
                </div>

                <div @click="descriptionState = !descriptionState" class="flex gap-x-4 items-center mt-10">
                    <h2 class="text-lg border-b-2 border-black">Product Info</h2>
                    <img v-if="descriptionState" src="@/assets/icons/chevron-up.svg" class="h-2.5 invert" alt="">
                    <img v-else src="@/assets/icons/chevron-up.svg" class="h-2.5 invert rotate-180" alt="">
                </div>


                <div v-if="descriptionState" class="w-full">
                    <p class="text-xs mt-10">
                        {{ description }}
                    </p>
                </div>
                <div v-else class="w-full">
                    <div class="w-full flex items-center sm:justify-start sm:gap-x-20 justify-between mt-10">
                        <img src="@/assets/icons/wet-and-dry.svg" class="w-20 " alt="">
                        <img src="@/assets/icons/10x-powerful-cyclonic-suction.svg" class="w-16 invert" alt="">
                        <img src="@/assets/icons/twin-motor.svg" class="w-[4.5rem] " alt="">
                    </div>

                    <NuxtLink to="/demo" class="w-full border-2 flex items-center justify-center border-black mt-10 py-10 rounded-lg px-3">

                        <button class="flex items-center gap-x-3">
                            <h3 class="text-[0.65rem]">Get A quote</h3>
                            <img src="@/assets/icons/orange-arrow-right.svg" class="h-5" alt="">
                        </button>
                    </NuxtLink>

                    <div class="mt-4 text-xs">
                        *This pricing is only for the Product. Installation and piping are
                        charged Separately. Please Request a Quote for more information.
                    </div>
                </div>

            </div>
            <P-Nav></P-Nav>
        </div>

        <A-Footer></A-Footer>
    </div>
</template>

<script setup>
const menuState = useState("menu");
const descriptionState = ref(false);
definePageMeta({
    scrollToTop: true
})
useHead({
    title: 'Invac - Techno Plus 258',
    meta: [
        {
            name: 'description',
            content: "Most powerful machine in the range. Automatically sucks liquids and drains directly to the sewage. Self-flushing system also provides infinite capacity and simple operation. Water injectors turn dust into sludge"
        }
    ]
})
const description = ref(
    "Most powerful machine in the range. Automatically sucks liquids and drains directly to the sewage. Self-flushing system also provides infinite capacity and simple operation. Water injectors turn dust into sludge"
);
const triggerMenu = () => {
    menuState.value = true;
};
</script>


<style scoped>
.router-link-active {
    border-color: #ff7900;
}

.router-link-active img {
    opacity: 1;

}
</style>