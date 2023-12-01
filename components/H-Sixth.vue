<template>
    <div ref="container" class="w-full relative px-10 lg:px-20 py-10 lg:py-24">
        <h3 class="text-lg 2xl:text-3xl overflow-y-clip">

            <span ref="dontKnow" class="block translate-y-[100%]">Don't Know</span>
        </h3>
        <h4 class=" text-4xl 2xl:text-8xl mt-4 lg:mt-10 font-semibold">
            <div class="overflow-y-clip">
                <span ref="whatProduct" class="block translate-y-[100%]"> What product </span>
            </div>

            <div class="overflow-y-clip">
                <span ref="toChoose" class="block translate-y-[100%]">to choose?</span>
            </div>
        </h4>

        <h3 class="text-lg 2xl:text-3xl mt-14 overflow-y-clip">
            <span ref="letUsHelpYou" class="block translate-y-[100%]">Let Us Help You</span>
        </h3>
        <Q-Initial v-if="quizState == 1"></Q-Initial>
        <Q-Consent v-if="quizState == 2"></Q-Consent>
        <Q-Contact v-if="quizState == 3"></Q-Contact>
    </div>
</template>

<script setup>
import gsap from 'gsap';
const whatProduct = ref(null);
const toChoose = ref(null);
const dontKnow = ref(null);
const container = ref(null);

const quizState = useState("quizState")
const letUsHelpYou = ref(null);

onMounted(() => {

    gsap.to(dontKnow.value, {
        y: 0,
        scrollTrigger: {
            trigger: container.value,
            start: "top center",
            end: "top end"
        },
        duration: 1
    })
    gsap.to(whatProduct.value, {
        y: 0,
        scrollTrigger: {
            trigger: container.value,
            start: "top center",
            end: "top end"
        },
        delay: 0.2,
        duration: 1
    })
    gsap.to(toChoose.value, {
        y: 0,
        scrollTrigger: {
            trigger: container.value,
            start: "top center",
            end: "top end"
        },
        delay: 0.4,
        duration: 1
    })

    gsap.to(letUsHelpYou.value, {
        y: 0,
        scrollTrigger: {
            trigger: container.value,
            start: "top center",
            end: "top end"
        },
        delay: 0.4,
        duration: 1
    })


})
</script>

<style>
select {
    appearance: none;
}
</style>
