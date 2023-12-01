<template>
    <div class="w-full select-none">
        <div class="hidden bg-white lg:flex">
            <div class="w-[55%] min-h-screen max-h-screen h-screen sticky top-0">
                <div class="h-full w-full relative">
                    <div class="h-full w-full grid place-content-center">
                        <img src="@/assets/products/static/accessories/floor-brush-without-wheels.png"
                            class="h-96 " alt="" />
                    </div>

                    <div class="h-full w-full absolute top-0 flex flex-col justify-between">
                        <div
                            class="w-full flex items-center justify-between px-10 2xl:px-20 py-10 lg:py-10 xl:py-12 2xl:py-14">
                            <NuxtLink to="/"><img src="@/assets/icons/logo-white.svg"
                                    class="h-5 lg:h-5 xl:h-5 2xl:h-6 transition-opacity duration-500 hover:opacity-75 active:opacity-90"
                                    alt="" /></NuxtLink>


                        </div>

                        <div class="flex flex-col gap-y-10 mr-auto pl-10 2xl:pl-20">

                        </div>

                        <div class="py-20"></div>
                    </div>
                </div>
            </div>
            <div class="w-[45%] min-h-screen flex text-black flex-col">
                <div class="w-full flex items-center justify-between px-10 2xl:px-20 py-10 lg:py-10 xl:py-12 2xl:py-14">

                    <div class="flex items-center text-black">
                        <p class="lg:text-xs 2xl:text-base leading-3 2xl:leading-5">
                            Any Questions?
                            <span class="block font-semibold">Talk to our experts</span>
                        </p>

                        <img src="@/assets/icons/support.svg" class="lg:h-8 2xl:h-10 ml-2 2xl:ml-4" alt="" />
                    </div>
                    <img @click="triggerMenu" src="@/assets/icons/burger.svg"
                        class="h-5 lg:h-6 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9 transition-opacity cursor-pointer active:opacity-90 invert hover:opacity-60 duration-500"
                        alt="" />
                </div>

                <div class="px-10 2xl:px-20 items-center  mt-7 2xl:mt-20">
                    <h3 class="text-4xl text-[#f47921] font-semibold">{{ productName }}</h3>
                    <h4 class="text-2xl mt-3">{{ productminiDescription }}</h4>
                </div>

                <div class="w-full px-10 2xl:px-20 mt-5 2xl:mt-20">
                    <div
                        class="flex items-center mt-20 cursor-pointer w-full justify-between px-1 border-b-2 border-black pb-1.5 2xl:pb-4">
                        <h3 class="lg:text-base 2xl:text-2xl">Product Info</h3>
                    </div>
                </div>


                <div class="px-10 mt-2 2xl:px-20">

                    <p class="text-xs mt-2 2xl:text-sm">{{ description }}</p>
                    <div
                        class="border-2 border-black py-10 justify-between flex items-center px-5 2xl:px-10 2xl:py-12 mt-20 rounded-xl">
                        <h3 class="text-sm 2xl:text-lg"></h3>
                        <div class="flex items-center gap-x-5">
                            <h3 class="text-base font-semibold 2xl:text-xl">Buy Now</h3>
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

            <div class="h-[60vh] pt-[10vh] w-full">
                <div class="h-[50vh] w-full flex items-center justify-center">
                    <img src="@/assets/products/static/accessories/floor-brush-without-wheels.png"
                        class="h-[60vw]" alt="">
                </div>

            </div>
            <div class="w-full px-10 pb-10 text-black">

                <h3 class="text-4xl font-semibold text-[#f47921] sm:text-5xl">{{ productName }}</h3>
                <h4 class="text-lg font-medium"> {{ productminiDescription }}</h4>
                <div class="flex items-center mt-3 gap-x-4 sm:gap-x-10">

                </div>

                <div class="flex gap-x-4 items-center mt-10">
                    <h2 class="text-lg border-b-2 border-black">Product Info</h2>
                </div>


                <div class="w-full">
                    <p class="text-xs mt-10">
                        {{ description }}
                    </p>

                    <div class="mt-10 text-xs font-semibold">
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

const productName = ref('Floor Brush')
const productminiDescription = ref('Without wheels')
const description = ref('`Introducing the Floor Brush Without Wheels - Horse Hair, a revolutionary cleaning tool that offers effective and gentle floor cleaning without the hassle of wheels. This horse hair brush attachment effortlessly removes dust and dirt, leaving your floors spotless and scratch-free. Upgrade your cleaning routine with this versatile and reliable floor brush attachment.`')
useHead({
    title: productName.value,
    meta: [
        {
            name: 'description',
            content: description.value
        }
    ]
})
const triggerMenu = () => {
    menuState.value = true;
};
onMounted(() => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, 500);

})
</script>


<style scoped>
.router-link-active {
    border-color: #ff7900;
}

.router-link-active img {
    opacity: 1;

}
</style>