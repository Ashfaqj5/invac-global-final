<template>
    <h2 class="text-lg lg:text-2xl 2xl:text-3xl mt-20 font-light">Fill your details
        <span class="font-semibold block">So we can help you personally</span>
    </h2>
    <form @submit.prevent="triggerSubmit" class="lg:flex items-center mt-10" ref="container">

        <div class="flex flex-col lg:w-[55%]">
            <input type="text" required placeholder="Name"
                class="pb-2 flex text-lg lg:text-2xl 2xl:text-3xl outline-none bg-transparent placeholder:text-neutral-500 justify-between border-b-2 border-neutral-500" />




            <div class="lg:flex mt-7 lg:mt-16 justify-between gap-x-16">
                <input required placeholder="Phone"
                    class="pb-2 w-full flex text-lg lg:text-2xl 2xl:text-3xl outline-none bg-transparent placeholder:text-neutral-500 justify-between border-b-2 border-neutral-500" />
                <input required placeholder="City"
                    class="pb-2 w-full flex text-lg mt-7 lg:mt-0 lg:text-2xl 2xl:text-3xl outline-none bg-transparent placeholder:text-neutral-500 justify-between border-b-2 border-neutral-500" />
            </div>

            <input required placeholder="Email" type="email"
                class="pb-2 flex text-lg mt-7 lg:mt-16 lg:text-2xl 2xl:text-3xl outline-none bg-transparent placeholder:text-neutral-500 justify-between border-b-2 border-neutral-500" />


        </div>

        <div class=" w-full lg:w-[45%] grid place-content-center h-full pt-14 lg:py-0">
            <button type="submit" class="overflow-y-clip">
                <img ref="arrowRight" src="@/assets/icons/orange-arrow-right.svg" class="h-12 lg:h-24 translate-y-[100%]"
                    alt="">
            </button>
        </div>
    </form>
</template>

<script setup>
import gsap from 'gsap';
const container = ref(null);
const arrowRight = ref(null);

const router = useRouter()

const triggerSubmit = () => {
    const quizObj = JSON.parse(localStorage.getItem('quiz'))
    console.log(quizObj.maintenanceType)

    if (quizObj.maintenanceType == 'manual') {
        if (quizObj.sizeState == '2000-sft' || quizObj.sizeState == '2000-3000-sft' || quizObj.sizeState == '3000-5000-sft') {
            if (quizObj.sizeState == '3000-5000-sft') {
                router.push('/products/typhoon-d3')
            } else {
                router.push('/products/typhoon-d2')
            }
        } else {
            if (quizObj.sizeState == '5000-10000-sft"') {
                router.push('/products/typhoon-prot')
            } else {
                //TODO add prot 230 logic here
                router.push('/products/typhoon-prot-230')
            }
        }
    } else if (quizObj.maintenanceType == 'fully-auto') {
        if (quizObj.sizeState == '2000-sft' || quizObj.sizeState == '2000-3000-sft' || quizObj.sizeState == '3000-5000-sft') {
            if (quizObj.sizeState == '3000-5000-sft') {
                router.push('/products/techno-plus-158')
            } else {
                router.push('/products/techno-plus-158')
            }
        } else {
            if (quizObj.sizeState == '5000-10000-sft"') {
                router.push('/products/techno-plus-230')
            } else {
                //TODO add prot 230 logic here
                router.push('/products/techno-plus-258')
            }
        }
    }
}


onMounted(() => {
    gsap.to(arrowRight.value, {
        y: 0,
        scrollTrigger: {
            trigger: container.value,
        },

        duration: 1
    })
})
</script>
