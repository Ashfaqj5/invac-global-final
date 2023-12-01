<template>
    <div class="w-full mt-20">
        <h2 class="text-lg lg:text-2xl 2xl:text-3xl font-light">Would you like us to send more details about the product
            <span class="font-semibold lg:block">via email & phone?*</span>
        </h2>

        <div class="flex items-center gap-x-7 mt-10">
            <button @click="quizState = 3"
                class="text-xl font-semibold hover:bg-[#F16012] transition-all duration-500 active:opacity-70 border-[#F16012] border-2 p-2.5 rounded-lg px-12">Yes</button>
            <button @click="triggerNo"
                class="text-xl font-semibold hover:bg-neutral-600 border-neutral-600 transition-all duration-500 active:opacity-70 border-2 p-2.5 rounded-lg px-12">No</button>
        </div>
    </div>
</template>

<script setup>
const quizState = useState("quizState")



const router = useRouter()

/* typeState: typeState.value, */
/*         sizeState: sizeState.value, */
/*         currentType: typeState.value, */
/*         maintenanceType: typeState.value */

const triggerNo = () => {
    const quizObj = JSON.parse(localStorage.getItem('quiz'))


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
    } else {
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
</script>

