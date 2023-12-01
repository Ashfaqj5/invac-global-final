<template>
    <div class="w-full my-20">
        <div class="lg:flex items-end gap-x-4 px-10 lg:px-20  lg:gap-x-10">
            <h3 class="text-4xl lg:text-7xl font-semibold">Blogs & Media</h3>
            <NuxtLink to="/blogs" class="text-[#d86d21] text-base block mt-5 lg:mt-0">Show all</NuxtLink>
        </div>

        <div class="w-full hidden lg:grid grid-cols-2 px-10 lg:px-20  gap-x-10 2xl:gap-x-14 mt-20">
            <NuxtLink to="/blogs/blog/VG4RQtmR74C8Nju5OliZ" class="w-full cursor-pointer">
                <div class="h-[calc(60vh+2.5rem)] w-full rounded-md bg-neutral-800">
                    <NuxtImg format="webp" class="h-full w-full rounded-md object-cover" src="/images/blog/Asthama.jpg">
                    </NuxtImg>
                </div>
                <div class="text-3xl mt-10">
                    5 Signs that Signal an Upgrade to a New Central Vacuum System
                </div>

                <div class="text-neutral-600 mt-10 font-semibold text-xl">View More</div>
            </NuxtLink>
            <div class="w-full">
                <div class="space-y-10">
                    <NuxtLink to="/blogs/blog/Lh7VbIj8NIXsbsaePmgl" class="grid grid-cols-2">
                        <div class="h-[30vh] w-full bg-neutral-800 rounded-md">
                            <NuxtImg format="webp" class="h-full w-full rounded-md object-cover"
                                src="/images/blog/Retain Air Freshness and Efficiency with an Industrial Central Vacuum System-01.png">
                            </NuxtImg>
                        </div>
                        <div class="h-[30vh] flex flex-col justify-evenly overflow-clip p-5">
                            <div class="w-full text-xl font-semibold">
                                Retain Air Freshness and Efficiency with an Industrial Central Vacuum System
                            </div>

                            <div class="text-neutral-600 font-semibold text-lg">View More</div>
                        </div>
                    </NuxtLink>

                    <NuxtLink to="/blogs/blog/4DDBdXgimurIP5IGWsV3" class="grid grid-cols-2">
                        <div class="h-[30vh] w-full bg-neutral-800 rounded-md">
                            <NuxtImg format="webp" class="h-full w-full rounded-md object-cover"
                                src="/images/blog/Tips to Make Home Cleaning Effortless.jpg">
                            </NuxtImg>
                        </div>
                        <div class="h-[30vh] flex flex-col justify-evenly overflow-clip p-5">
                            <div class="w-full text-xl font-semibold">
                                Tips to Make Home Cleaning Effortless with Central Vacuum Cleaners
                            </div>

                            <div class="text-neutral-600 font-semibold text-lg">View More</div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <div class="w-full overflow-x-clip">
            <div class="w-full flex overflow-x-auto gap-x-7 lg:hidden mt-10 pl-10">
                <NuxtLink to="/blogs/blog/VG4RQtmR74C8Nju5OliZ" class="w-[85%] min-w-[85%]">
                    <div class="w-full h-64 rounded-md bg-neutral-800">
                        <NuxtImg format="webp" class="h-full w-full rounded-md object-cover" src="/images/blog/Asthama.jpg">
                        </NuxtImg>
                    </div>
                    <h3 class="mt-7 text-xl"> 5 Signs that Signal an Upgrade to a New Central Vacuum System</h3>
                    <div class="text-neutral-600 font-semibold text-lg mt-5">View More</div>
                </NuxtLink>

                <NuxtLink to="/blogs/blog/Lh7VbIj8NIXsbsaePmgl" class="w-[85%] min-w-[85%]">
                    <div class="w-full h-64 rounded-md bg-neutral-800">
                        <NuxtImg format="webp" class="h-full w-full rounded-md object-cover"
                            src="/images/blog/Retain Air Freshness and Efficiency with an Industrial Central Vacuum System-01.png">
                        </NuxtImg>
                    </div>
                    <h3 class="mt-7 text-xl"> Retain Air Freshness and Efficiency with an Industrial Central Vacuum System
                    </h3>
                    <div class="text-neutral-600 font-semibold text-lg mt-5">View More</div>
                </NuxtLink>

            </div>
        </div>

    </div>
</template>

<script setup>

</script>
