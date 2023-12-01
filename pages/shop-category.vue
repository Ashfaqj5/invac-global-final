<template>
    <div class="lg:h-screen w-full flex flex-col">
        <A-Nav></A-Nav>
        <div class="h-full w-full lg:flex flex-col justify-center items-center hidden">
            <h2 class="text-2xl text-white tracking-[0.8rem] text-center">Our Products Range</h2>
            <div class="flex w-full gap-x-10 px-20 mt-20">
                <NuxtLink to="/product-category"
                    class="w-[50%] hover:w-[65%] transition-all duration-700 lg:h-80 xl:h-96 2xl:h-[30rem] rounded-md relative bg-[#f47921] cursor-pointer">

                    <div class="h-full w-full bg-black">
                        <img src="@/assets/static/home-thumbnail.png" class="h-full w-full rounded-md object-cover" alt="">
                        <div class="h-full w-full lg:p-7 xl:p-10 2xl:p-14 flex flex-col justify-between absolute top-0">
                            <h2 class="text-black lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">For Homes</h2>

                            <div class="w-full opacity-0">
                                <h2 class="text-white text-4xl font-bold">For Homes</h2>
                                <div class="flex justify-between items-center">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br> Dicta nulla blanditiis
                                        expedita repudiandae vel,</p>

                                    <img src="@/assets/icons/chevron-right.svg" class="w-20" alt="">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="h-full w-full absolute top-0 flex transition-all bg-[#f47921] opacity-0 hover:opacity-100 duration-1000 flex-col justify-end p-10 pr-16 rounded-md">
                        <h2 class="text-white lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">For Homes</h2>
                        <div class="w-full flex items-center text-xs mt-3">
                            <div class="w-[55%]">Discover a comprehensive list of the best vacuum cleaners for your home.
                            </div>
                            <div class="w-[45%]">
                                <img src="@/assets/icons/chevron-right.svg" class="ml-auto h-10" alt="">
                            </div>
                        </div>
                    </div>

                </NuxtLink>

                <div
                    class="w-[50%] hover:w-[65%] transition-all duration-700 lg:h-80 xl:h-96 2xl:h-[30rem] rounded-md relative bg-[#f47921] cursor-pointer">

                    <div class="h-full w-full bg-black">
                        <img src="@/assets/static/industrial-thumbnail.png" class="h-full w-full rounded-md object-cover"
                            alt="">
                        <div class="h-full w-full lg:p-7 xl:p-10 2xl:p-14 flex flex-col justify-between absolute top-0">
                            <h2 class="text-white lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">Our <br> Industrial Range
                            </h2>

                            <div class="w-full opacity-0">
                                <h2 class="text-white text-4xl font-bold">For Homes</h2>
                                <div class="flex justify-between items-center">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br> Dicta nulla blanditiis
                                        expedita repudiandae vel,</p>

                                    <img src="@/assets/icons/chevron-right.svg" class="w-20" alt="">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="h-full w-full absolute top-0 flex transition-all bg-neutral-600 opacity-0 hover:opacity-100 duration-1000 flex-col justify-end p-10 pr-16 rounded-md">
                        <h2 class="text-white lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">Coming Soon
                        </h2>
                        <!--   <div class="w-full flex items-center text-xs mt-3">
                            <div class="w-[55%]">Explore a comprehensive selection of high-performing vacuum cleaners
                                designed for industrial use in various settings.
                            </div>
                            <div class="w-[45%]">
                                <img src="@/assets/icons/chevron-right.svg" class="ml-auto h-10" alt="">
                            </div>
                        </div> -->
                    </div>

                </div>
            </div>
        </div>

        <div class="w-full h-max px-10 lg:hidden pb-14">
            <NuxtLink to="/product-category" class="flex flex-col gap-y-4">
                <div class="w-full h-52 sm:h-96 overflow-clip">
                    <img src="@/assets/static/home-thumbnail.png" class="h-full w-full object-cover rounded-md" alt="">
                </div>
                <div class="pr-6 w-full bg-[#f47921] p-2.5 sm:p-8 py-5 rounded-lg">
                    <h2 class="text-xl sm:text-3xl font-semibold">Homes</h2>

                    <div class="flex items-center justify-between">
                        <div class="w-[70%]">

                            <div class="text-[0.65rem] sm:text-lg mt-0.5">Discover a comprehensive list of the best vacuum
                                cleaners for
                                your home.</div>


                        </div>

                        <img class="h-10 sm:h-16" src="@/assets/icons/chevron-right.svg" alt="">

                    </div>


                </div>
            </NuxtLink>

            <div class="flex flex-col gap-y-4 mt-16 sm:mt-20">
                <div class="w-full h-52 sm:h-96 overflow-clip">
                    <img src="@/assets/static/industrial-thumbnail.png" class="h-full w-full rounded-md" alt="">
                </div>
                <div class="pr-6 w-full bg-neutral-600 p-2.5 sm:p-8 py-5 rounded-lg">
                    <h2 class="text-xl sm:text-3xl font-semibold">Industrial</h2>

                    <h3 class="sm:text-lg mt-2">Coming Soon</h3>


                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
useHead({
    title: `World's Leading Wet and Dry Auto flush Central Vacuum Cleaner | INVAC - Your Cleaning Partner`,
    meta: [
        {
            name: 'description',
            content: `Upgrade to a reliable home central vacuum system from INVAC. Discover our selection of affordable vacuum cleaners and experience the convenience of an automatic central vacuum system.`
        }
    ]
})

const forHomeState = ref(false)

definePageMeta({
    scrollToTop: true,
    pageTransition: false,
});

</script>
