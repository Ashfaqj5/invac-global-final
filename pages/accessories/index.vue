<template>
    <div class="w-full pb-20">
        <A-Nav></A-Nav>
        <div class="mt-20 px-10 lg:px-20 w-full">
            <h2 class="text-center text-3xl lg:text-5xl font-semibold">Our Accessories & Attachments</h2>
            <p class="text-center text-xs lg:text-base text-neutral-400 mt-5">Explore our Brush Attachments and Accessories
                below and in 3D. <br class="hidden lg:block">
                All designed and
                manufactured entirely in USA
                curated for you.</p>
        </div>

        <!--   <div class="flex w-full px-10 lg:px-20 py-10 mt-10 lg:mt-20">
            <div class="flex items-center gap-x-3">
                <h2 class="text-xl">Filter</h2>
                <img src="@/assets/icons/chevron-down.svg" class="h-8" alt="">
            </div>
        </div> -->

        <div class="w-full flex flex-wrap justify-between gap-y-10  gap-x-5 px-10 lg:px-20 mt-20">
            <NuxtLink to="/accessories/floor-brush-without-wheels-horse-hair" v-if="brushesState"
                class="w-72 rounded-2xl overflow-clip relative pb-7 bg-[#040707] text-white hover:text-neutral-600 cursor-pointer transition-all duration-700">
                <div class="w-full">
                    <NuxtImg sizes="sm:400px" src="/products/static/Brush/Brush-01.png" class="h-72" alt="" />
                </div>
                <h2 class="text-xl pl-10 font-semibold">
                    Floor Brush
                </h2>
                <p class="text-xs pl-10">Without wheels - Horse Hair</p>
            </NuxtLink>



            <div v-if="brushesState"
                class="w-[36rem] col-span-2 rounded-2xl overflow-clip bg-black relative hover:brightness-75 text-black hover:text-neutral-950 cursor-pointer transition-all duration-700">
                <div class="h-full w-full">
                    <NuxtImg sizes="sm:600px" src="/products/static/kit/Kit-01.png" class="h-full w-full" alt="" />
                </div>

                <h2 class="absolute top-10 font-semibold text-2xl right-10">Standard <span class="font-medium">Kit</span>
                </h2>
            </div>

            <NuxtLink to="/accessories/carpet-brush" v-if="brushesState"
                class="w-72 rounded-2xl overflow-clip relative pb-7 bg-[#040707] text-white hover:text-neutral-600 cursor-pointer transition-all duration-700">
                <div class="w-full">
                    <NuxtImg sizes="sm:400px" src="/products/static/Brush/Brush-02.png" class="h-72" alt="" />
                </div>
                <h2 class="text-xl pl-10 font-semibold">
                    Carpet
                </h2>
                <p class="text-xs pl-10">Brush</p>
            </NuxtLink>

            <NuxtLink to="/accessories/floor-brush-without-wheels" v-if="brushesState"
                class="w-72 rounded-2xl overflow-clip relative pb-7 bg-[#040707] text-white hover:text-neutral-600 cursor-pointer transition-all duration-700">
                <div class="w-full">
                    <NuxtImg sizes="sm:400px" src="/products/static/Brush/Brush-03.png" class="h-72" alt="" />
                </div>
                <h2 class="text-xl pl-10 font-semibold">
                    Floor Brush
                </h2>
                <p class="text-xs pl-10">Without Wheels</p>
            </NuxtLink>

            <NuxtLink to="/accessories/reversible-brush-without-wheels-horse-hair" v-if="brushesState"
                class="w-72 rounded-2xl overflow-clip relative pb-7 bg-[#040707] text-white hover:text-neutral-600 cursor-pointer transition-all duration-700">
                <div class="w-full">
                    <NuxtImg sizes="sm:400px" src="/products/static/Brush/Brush-05.png" class="h-72" alt="" />
                </div>
                <h2 class="text-xl pl-10 font-semibold">
                    Reversible Brush
                </h2>
                <p class="text-xs pl-10">Without Wheels -Horse Hair</p>
            </NuxtLink>

            <NuxtLink to="/accessories/dusting-tool" v-if="brushesState"
                class="w-72 rounded-2xl overflow-clip relative pb-7 bg-[#040707] text-white hover:text-neutral-600 cursor-pointer transition-all duration-700">
                <div class="w-full">
                    <NuxtImg sizes="sm:400px" src="/products/static/Brush/Brush-04.png" class="h-72" alt="" />
                </div>
                <h2 class="text-xl pl-10 font-semibold">
                    Dusting
                </h2>
                <p class="text-xs pl-10">Tool</p>
            </NuxtLink>


            <NuxtLink to="/accessories/squeegee-on-wheels" v-if="brushesState"
                class="w-72 rounded-2xl overflow-clip relative pb-7 bg-[#040707] text-white hover:text-neutral-600 cursor-pointer transition-all duration-700">
                <div class="w-full">
                    <NuxtImg sizes="sm:400px" src="/products/static/Brush/Brush-08.png" class="h-72" alt="" />
                </div>
                <h2 class="text-xl pl-10 font-semibold">
                    Squeegee
                </h2>
                <p class="text-xs pl-10">on wheels</p>
            </NuxtLink>


            <NuxtLink to="/accessories/mop" v-if="brushesState"
                class="w-72 rounded-2xl overflow-clip relative pb-7 bg-[#040707] text-white hover:text-neutral-600 cursor-pointer transition-all duration-700">
                <div class="w-full">
                    <NuxtImg sizes="sm:400px" src="/products/static/Brush/Brush-06.png" class="h-72" alt="" />
                </div>
                <h2 class="text-xl pl-10 font-semibold">
                    MOP
                </h2>
                <p class="text-xs pl-10">without wheels - Horse Hair</p>
            </NuxtLink>


            <NuxtLink to="/accessories/delicate-dust" v-if="brushesState"
                class="w-72 rounded-2xl overflow-clip relative pb-7 bg-[#040707] text-white hover:text-neutral-600 cursor-pointer transition-all duration-700">
                <div class="w-full">
                    <NuxtImg sizes="sm:400px" src="/products/static/Brush/Brush-09.png" class="h-72" alt="" />
                </div>
                <h2 class="text-xl pl-10 font-semibold">
                    Delicate Dust
                </h2>
                <p class="text-xs pl-10">Brush</p>
            </NuxtLink>

            <NuxtLink to="/accessories/crevice-tool" v-if="brushesState"
                class="w-72 rounded-2xl overflow-clip relative pb-7 bg-[#040707] text-white hover:text-neutral-600 cursor-pointer transition-all duration-700">
                <div class="w-full">
                    <NuxtImg sizes="sm:400px" src="/products/static/Brush/Brush-10.png" class="h-72" alt="" />
                </div>
                <h2 class="text-xl pl-10 font-semibold">
                    Crevice
                </h2>
                <p class="text-xs pl-10">Tool</p>
            </NuxtLink>


            <NuxtLink to="/accessories/upholstery-tool" v-if="brushesState"
                class="w-72 rounded-2xl overflow-clip relative pb-7 bg-[#040707] text-white hover:text-neutral-600 cursor-pointer transition-all duration-700">
                <div class="w-full">
                    <NuxtImg sizes="sm:400px" src="/products/static/Brush/Brush-11.png" class="h-72" alt="" />
                </div>
                <h2 class="text-xl pl-10 font-semibold">
                    Upholstry
                </h2>
                <p class="text-xs pl-10">Tool</p>
            </NuxtLink>

            <NuxtLink to="/accessories/stainless-steel" v-if="brushesState"
                class="w-72 rounded-2xl overflow-clip relative pb-7 bg-[#040707] text-white hover:text-neutral-600 cursor-pointer transition-all duration-700">
                <div class="w-full">
                    <NuxtImg sizes="sm:400px" src="/products/static/Brush/Brush-12.png" class="h-72" alt="" />
                </div>
                <h2 class="text-xl pl-10 font-semibold">
                    Stainless Steel
                </h2>
                <p class="text-xs pl-10">Carpet Tool</p>
            </NuxtLink>



            <div v-if="brushesState"
                class="w-[36rem] col-span-2 rounded-2xl overflow-clip bg-black relative hover:brightness-75 text-black hover:text-neutral-950 cursor-pointer transition-all duration-700">
                <div class="h-full w-full">
                    <NuxtImg sizes="sm:600px" src="/products/static/kit/Kit-02.png" class="h-full w-full" alt="" />
                </div>

                <h2 class="absolute top-10 font-semibold text-2xl right-10">Wet <span class="font-medium">Kit</span></h2>
            </div>


        </div>


        <div class="w-full px-10 lg:px-20 mt-28">
            <div class="flex items-center">
                <h2 class="text-3xl pr-10 lg:pr-20">Accessories</h2>
                <div class="w-full h-1 rounded-xl bg-neutral-400"></div>
            </div>
        </div>

        <div class="grid w-full lg:grid-cols-2 gap-x-20 gap-y-10 px-10 lg:px-20 mt-20">
            <NuxtLink to="/accessories/kick-vac"
                class="h-[27rem] rounded-xl overflow-clip relative hover:brightness-125 active:brightness-90 cursor-pointer transition-all duration-700 w-full">
                <NuxtImg sizes="sm:950px" src="/images/home-static/home-static/kick-vac.jpeg"
                    class="h-full w-full object-cover" alt="" />
                <h3 class="absolute bottom-10 text-2xl font-semibold right-10 text-white">KickVac</h3>
            </NuxtLink>
            <NuxtLink to="/accessories/speedy-vac"
                class="h-[27rem] rounded-xl overflow-clip relative hover:brightness-125 active:brightness-90 cursor-pointer transition-all duration-700 w-full">
                <NuxtImg sizes="sm:950px" src="/images/home-static/home-static/speedy-vac.jpeg"
                    class="h-full w-full object-cover" alt="" />
                <h3 class="absolute bottom-10 text-2xl font-semibold left-10 text-white">SpeedyVac</h3>
            </NuxtLink>

            <NuxtLink to="/accessories/drawer-vac"
                class="h-[27rem] rounded-xl overflow-clip relative hover:brightness-125 active:brightness-90 cursor-pointer transition-all duration-700 w-full">
                <NuxtImg sizes="sm:950px" src="/images/home-static/home-static/drawer-vac.jpeg"
                    class="h-full w-full object-cover" alt="" />
                <h3 class="absolute bottom-10 text-2xl font-semibold right-10 text-white">DrawerVac</h3>
            </NuxtLink>

            <NuxtLink to="/accessories/cabinet-vac"
                class="h-[27rem] rounded-xl overflow-clip relative hover:brightness-125 active:brightness-90 cursor-pointer transition-all duration-700 w-full">
                <NuxtImg sizes="sm:950px" src="/images/home-static/home-static/cabinet-vac.jpg"
                    class="h-full w-full object-cover" alt="" />
                <h3 class="absolute bottom-10 text-2xl font-semibold left-10 text-white">CabinetVac</h3>
            </NuxtLink>
        </div>

        <div class="px-10 lg:px-20 h-[40vh] lg:h-[80vh]">
            <NuxtLink to="/accessories/retra-vac"
                class="h-full w-full block bg-black mt-10 rounded-xl hover:brightness-125 active:brightness-90 cursor-pointer transition-all duration-700 relative">

                <NuxtImg sizes="sm:950px" src="/images/home-static/retra-vac.png"
                    class="h-full rounded-xl object-cover w-full" alt="" />
                <div class="h-full w-full absolute top-0 flex  px-20 items-center justify-end">
                    <h2 class="text-4xl font-semibold">RetraVac</h2>
                </div>
            </NuxtLink>
        </div>
        <A-Footer></A-Footer>
    </div>
</template>

<script setup>

const brushesState = ref(true)
onMounted(() => {
    window.scrollTo(0, 0);
})
</script>
