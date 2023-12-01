<template>
    <h2 class="pl-10 lg:px-20 text-neutral-400 text-base lg:text-3xl mt-20 lg:mt-32 2xl:mt-40">Frequently Asked Question
    </h2>
    <div class="w-full px-10 lg:px-20 flex flex-col gap-y-10 sm:gap-y-10 3xl:py-40 pb-10 mt-10 lg:mt-28 lg:pr-[25vw]">

        <!-- About InVac Section -->
        <div class="w-full border-b-2 border-white pb-4 border-opacity-20">
            <div @click="triggerAbout = !triggerAbout" class="flex cursor-pointer items-end justify-between">
                <h2 class="text-lg sm:text-2xl lg:text-2xl 2xl:text-3xl  font-semibold">How many inlet valves are needed
                    approximately for a single-family house?
                </h2>
                <img src="@/assets/icons/chevron-down.svg"
                    class="h-8 lg:h-8 2xl:h-9 3xl:h-10 mb-2 transition-all duration-1000"
                    :class="{ 'rotate-90': triggerAbout }" alt="">
            </div>
            <AB-DropDownItem :content="aboutContent" v-if="triggerAbout" />
        </div>

        <!-- Product Features Section -->
        <div class="w-full border-b-2 border-white pb-4 border-opacity-20">
            <div @click="triggerFeatures = !triggerFeatures" class="flex cursor-pointer items-end justify-between">
                <h2 class="text-lg sm:text-2xl lg:text-2xl 2xl:text-3xl  font-semibold">Is suction power consistent
                    throughout the whole building?</h2>
                <img src="@/assets/icons/chevron-down.svg"
                    class="h-8 lg:h-8 2xl:h-9 3xl:h-10 mb-2 transition-all duration-1000"
                    :class="{ 'rotate-90': triggerFeatures }" alt="">
            </div>
            <AB-DropDownItem :content="featuresContent" v-if="triggerFeatures" />
        </div>

        <!-- Maintenance and Care Section -->
        <div class="w-full border-b-2 border-white pb-4 border-opacity-20">
            <div @click="triggerMaintenance = !triggerMaintenance" class="flex cursor-pointer items-end justify-between">
                <h2 class="text-lg sm:text-2xl lg:text-2xl 2xl:text-3xl  font-semibold">Is there a risk of blockage?</h2>
                <img src="@/assets/icons/chevron-down.svg"
                    class="h-8 lg:h-8 2xl:h-9 3xl:h-10 mb-2 transition-all duration-1000"
                    :class="{ 'rotate-90': triggerMaintenance }" alt="">
            </div>
            <AB-DropDownItem :content="maintenanceContent" v-if="triggerMaintenance" />
        </div>

        <!-- Customer Support Section -->
        <div class="w-full border-b-2 border-white pb-4 border-opacity-20">
            <div @click="triggerSupport = !triggerSupport" class="flex cursor-pointer items-end justify-between">
                <h2 class="text-lg sm:text-2xl lg:text-2xl 2xl:text-3xl  font-semibold">Why you should not install a Invac
                    central vacuum cleaner in the attic.</h2>
                <img src="@/assets/icons/chevron-down.svg"
                    class="h-8 lg:h-8 2xl:h-9 3xl:h-10 mb-2 transition-all duration-1000"
                    :class="{ 'rotate-90': triggerSupport }" alt="">
            </div>
            <AB-DropDownItem :content="supportContent" v-if="triggerSupport" />
        </div>

        <!-- New Section: Cleaning Tips -->
        <div class="w-full border-b-2 border-white pb-4 border-opacity-20">
            <div @click="triggerTips = !triggerTips" class="flex cursor-pointer items-end justify-between">
                <h2 class="text-lg sm:text-2xl lg:text-2xl 2xl:text-3xl  font-semibold">Can a Invac system be installed in a
                    present home?
                </h2>
                <img src="@/assets/icons/chevron-down.svg"
                    class="h-8 lg:h-8 2xl:h-9 3xl:h-10 mb-2 transition-all duration-1000"
                    :class="{ 'rotate-90': triggerTips }" alt="">
            </div>
            <AB-DropDownItem :content="tipsContent" v-if="triggerTips" />
        </div>

    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const triggerAbout = ref(false);
const aboutContent = ref(`Our motto: As many as necessary and as few as possible. In order to reach all areas from basement to attic, the inlet valves should be placed appropriate to the architectual circumstances of the building. The suction hoses have, depending on the length, a radius of action of 6 to 12 meters.
A single-family home with a living space of about 150 square meters requires normally 5 to 7 inlet valves.
We recommend to install an inlet valve at the entrance of the garage in order to vacuum the car comfortably and thoroughly. With a pipe valve set it is possible to vacuum the room in which the central vacuum unit is located.`);

const triggerFeatures = ref(false);
const featuresContent = ref(`Distances up to 100 m are no problem. A properly installed Invac central vacuum system offers the same powerful cleaning performance at every inlet valve and won‘t lose suction over time. Invac offers units with various motor strenghts, so every building has a central vacuum cleaner with optimal performance.`);

const triggerMaintenance = ref(false);
const maintenanceContent = ref(`No, provided that the pipes are properly installed. A so called safety bend is located behind each inlet valve. This is a short 87° bend that prevents bigger edgy objects from entering into the piping system. If, despite of this, a blockage occurs (e.g. vacuumed cloth fabrics), there are a few easy actions to solve the problem.`);

const triggerSupport = ref(false);
const supportContent = ref(`Due to gravity, large and heavy particles can not be sucked up several meters. There is a risk that the particles remain inside the piping system and fall to the deepest inlet valve. For this reason we suggest to install the central vacuum cleaner at the deepest point in your home.`);

const triggerTips = ref(false);
const tipsContent = ref(`Yes! Virtually any home, from new to decades old, can enjoy the cleaning power of a Invac system. The easiest way is to install pipelines into an inoperative chimney, supply shaft or open stairwell.There are always different installation possibilities. Everything is do-able. Your Invac Agent will be pleased to help you with your installation options.`);
</script>
  