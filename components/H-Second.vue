<template>
    <div class="h-screen w-full hidden lg:flex items-center bg-[#1A1A1A] px-24" ref="largeContainer">
        <div class="w-[60%] flex flex-col justify-center pt-5">
            <div class="lg:text-2xl xl:text-3xl 2xl:text-5xl">
                <div class="overflow-y-clip pb-1">
                    <h2 class="font-semibold slide-up-second translate-y-[100%]">It's a great way</h2>
                </div>

                <div class="flex items-center overflow-y-clip lg:mt-0.5 xl:mt-2">
                    <h2 class="font-light slide-up-second translate-y-[100%]">to vacuum.</h2>
                    <div
                        class="lg:w-24 xl:w-28 2xl:w-48 slide-up-second translate-y-[1000%] ml-5 h-0.5 bg-white lg:mt-4 xl:mt-5 2xl:mt-10">
                    </div>
                    <NuxtLink to="/demo"
                        class=" lg:text-xs slide-up-second translate-y-[150%] whitespace-nowrap xl:text-xs 2xl:text-base lg:ml-6 xl:ml-10 border-2 lg:px-5 xl:px-12 py-3 tracking-[0.4rem] rounded-xl hover:bg-[#d86d21] active:opacity-70 transition-colors duration-500 border-[#d86d21]">
                        Book
                        A
                        Demo</NuxtLink>
                </div>
            </div>

            <div>
                <p class="font-light text-neutral-400 mt-24 xl:text-base 2xl:text-lg">Product <span
                        class="font-semibold ml-1">Features</span> </p>
                <div class="flex gap-x-20 lg:mt-12 xl:mt-14 2xl:mt-16 overflow-y-clip">
                    <div ref="secOne" class="flex flex-col items-center gap-y-14">
                        <img src="@/assets/icons/fully-auto.svg"
                            class="lg:h-8 xl:h-10 2xl:h-16 p-2 lg:my-6 xl:my-5 2xl:my-6" alt="">
                        <img src="@/assets/icons/super-quite-operations.svg" class="lg:h-[5.30rem] xl:h-20 2xl:h-28" alt="">
                    </div>

                    <div ref="secTwo" class="flex flex-col items-center gap-y-14">
                        <img src="@/assets/icons/energy-effcient-extended-use.svg" class="lg:h-[5.25rem] xl:h-20 2xl:h-28"
                            alt="">
                        <img src="@/assets/icons/10x-powerful-cyclonic-suction.svg" class="lg:h-[5.30rem] xl:h-20 2xl:h-28"
                            alt="">
                    </div>

                    <div ref="secThree" class="flex flex-col items-center gap-y-14">
                        <img src="@/assets/icons/wet-and-dry-waste.svg" class="lg:h-[5.30rem] xl:h-20 2xl:h-28" alt="">
                        <img src="@/assets/icons/pan-india-after-sales-support.svg" class="lg:h-[5.30rem] xl:h-20 2xl:h-28"
                            alt="">
                    </div>

                    <div ref="secFour" class="flex flex-col items-center gap-y-14">
                        <img src="@/assets/icons/zero-re-entry-of-dust.svg" class="lg:h-[5.30rem] xl:h-20 2xl:h-28" alt="">
                        <img src="@/assets/icons/accessories-for-all-surfaces.svg" class="lg:h-[5.30rem] xl:h-20 2xl:h-28"
                            alt="">
                    </div>
                </div>

            </div>
        </div>
        <div class="w-[40%] h-full grid place-content-center">
            <NuxtImg format="webp" src="/images/home-static/second-section.png" class="h-[75%] w-fit mt-[20%]"
                alt="" />
        </div>

    </div>

    <div class="h-[30rem] w-full flex lg:hidden">
        <div class="h-full w-[50%] min-w-[50%] flex flex-col items-center justify-center">
            <h3 class="text-xs text-neutral-400">Product <span class="font-semibold">Features</span> </h3>
            <div class="flex justify-evenly mt-8 h-fit gap-x-8">
                <div class="flex flex-col gap-y-7">
                    <div class="overflow-y-clip">
                        <img src="@/assets/icons/energy-effcient-extended-use.svg"
                            class="h-16 translate-y-[100%] second-section-responsive-slide-up" alt="">
                    </div>
                    <div class="overflow-y-clip">
                        <img src="@/assets/icons/wet-and-dry-waste.svg"
                            class="h-16 translate-y-[100%] second-section-responsive-slide-up" alt="">
                    </div>
                    <div class="overflow-y-clip">
                        <img src="@/assets/icons/10x-powerful-cyclonic-suction.svg"
                            class="h-16 translate-y-[100%] second-section-responsive-slide-up" alt="">
                    </div>
                </div>
                <div class="flex flex-col gap-y-7">
                    <div class="overflow-y-clip">
                        <img src="@/assets/icons/super-quite-operations.svg"
                            class="h-16 translate-y-[100%] second-section-responsive-slide-up" alt="">
                    </div>
                    <div class="overflow-y-clip">
                        <img src="@/assets/icons/pan-india-after-sales-support.svg"
                            class="h-16 translate-y-[100%] second-section-responsive-slide-up" alt="">
                    </div>
                    <div class="overflow-y-clip">
                        <img src="@/assets/icons/zero-re-entry-of-dust.svg"
                            class="h-16 translate-y-[100%] second-section-responsive-slide-up" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="h-full w-[50%] min-w-[50%] py-20 grid place-content-center">
            <NuxtImg format="webp" src="/images/home-static/second-section.png" class="w-full sm:h-96" alt="" />
        </div>
    </div>
</template>

<script setup>
import gsap from 'gsap';
const secOne = ref(null);
const secTwo = ref(null);
const secThree = ref(null);
const secFour = ref(null);
const largeContainer = ref(null);
onMounted(() => {
    gsap.to('.slide-up-second', {
        scrollTrigger: {
            trigger: '.slide-up-second',
        },
        y: 0,
        stagger: 0.5,
        duration: 1

    })

    gsap.to('.second-section-responsive-slide-up', {
        scrollTrigger: {
            trigger: '.second-section-responsive-slide-up',
        },
        y: 0,
        stagger: 0.3,
        duration: 0.8
    })

    gsap.from(secOne.value, {
        y: "50%",
        scrollTrigger: {
            scrub: 2,
            trigger: largeContainer.value,
            start: "top center",
            end: "top end"

        }
    })

    gsap.from(secTwo.value, {
        y: "100%",
        scrollTrigger: {
            scrub: 2,
            trigger: largeContainer.value,
            start: "top center",
            end: "top end"

        }
    })

    gsap.from(secThree.value, {
        y: "100%",
        scrollTrigger: {
            scrub: 2,
            trigger: largeContainer.value,
            start: "top center",
            end: "top end"

        }
    })

    gsap.from(secFour.value, {
        y: "50%",
        scrollTrigger: {
            scrub: 2,
            trigger: largeContainer.value,
            start: "top center",
            end: "top end"

        }
    })
})
</script>
