<template>
    <div ref="menuContainer"
        class="h-screen w-full lg:w-[50vw] fixed z-50 right-0 top-0 bg-white flex flex-col py-20 px-10 lg:px-16 xl:px-20 justify-between text-black">
        <div class="w-full flex lg:h-28 2xl:h-10"></div>
        <div class="h-full w-full flex flex-col gap-y-10 lg:gap-y-14 xl:gap-y-16 2xl:gap-y-16">
            <div class="w-full flex justify-end overflow-y-clip lg:hidden">
                <img @click="triggerClose" src="@/assets/icons/x.svg" ref="closeMenuResponsive"
                    class="h-12 hover:opacity-40 translate-y-[100%] active:opacity-90 cursor-pointer transition-opacity duration-500"
                    alt="" />
            </div>
            <div class="flex items-center w-full justify-between">
                <div class="overflow-y-clip block">
                    <div class="translate-y-[100%]" ref="shop">
                        <NuxtLink to="/shop-category" @click="triggerClose"
                            class="text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl block w-fit font-normal border-[#f47921] transition-all duration-500 cursor-pointer active:opacity-70 hover:border-b-4 pb-3">
                            Shop</NuxtLink>
                    </div>
                </div>

                <div class="overflow-y-clip hidden lg:block">
                    <img @click="triggerClose" src="@/assets/icons/x.svg" ref="closeMenu"
                        class="lg:h-12 xl:h-16 hover:opacity-40 translate-y-[100%] active:opacity-90 cursor-pointer transition-opacity duration-500"
                        alt="" />
                </div>
            </div>

            <div class="overflow-y-clip block">
                <div class="translate-y-[100%]" ref="accessories">
                    <NuxtLink to="/accessories" @click="triggerClose"
                        class=" text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl block w-fit font-normal border-[#f47921] transition-all duration-500 cursor-pointer active:opacity-70 hover:border-b-4 pb-3">
                        Accessories</NuxtLink>
                </div>
            </div>

            <div class="overflow-y-clip block">
                <div class="translate-y-[100%]" ref="demo">
                    <NuxtLink to="/demo" @click="triggerClose"
                        class="text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl block w-fit font-normal border-[#f47921] transition-all duration-500 cursor-pointer active:opacity-70 hover:border-b-4 pb-3">
                        Book A Demo</NuxtLink>
                </div>
            </div>

            <div class="overflow-y-clip block">
                <div class="translate-y-[100%]" ref="contactUs">
                    <a href="tel:+919248009941" to="/contact-us" @click="triggerClose"
                        class="text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl block w-fit font-normal border-[#f47921] transition-all duration-500 cursor-pointer active:opacity-70 hover:border-b-4 pb-3">
                        Contact Us</a>
                </div>
            </div>
        </div>
        <div class="lg:flex items-center justify-between w-full">
            <div class="overflow-y-clip">
                <div ref="inTouch"
                    class="font-normal text-neutral-400 translate-y-[100%] text-xl lg:text-lg xl:text-xl 2xl:text-2xl">
                    Stay <span class="font-semibold text-neutral-500">in touch</span>
                </div>
            </div>

            <div class="flex mt-7 lg:mt-0 items-center gap-x-14 lg:gap-x-8 xl:gap-x-10 2xl:gap-x-14 overflow-y-clip">
                <a href="https://www.facebook.com/Invacindia">
                    <img src="@/assets/icons/facebook-gray.svg" ref="facebook"
                        class="h-8 w-8 lg:h-6 lg:w-6 xl:h-7 xl:w-7 2xl:h-10 translate-y-[100%] 2xl:w-10" alt="" />
                </a>

                <a href="https://instagram.com/invac_india">
                    <img src="@/assets/icons/instagram-gray.svg" ref="instagram"
                        class="h-8 w-8 lg:h-6 lg:w-6 xl:h-7 xl:w-7 2xl:h-10 translate-y-[100%] 2xl:w-10" alt="" />
                </a>

                <a href="https://twitter.com/IndiaInvac">
                    <img src="@/assets/icons/twitter-gray.svg" ref="twitter"
                        class="h-8 w-8 lg:h-6 lg:w-6 xl:h-7 xl:w-7 2xl:h-10 translate-y-[100%] 2xl:w-10" alt="" />
                </a>


                <a href="https://www.linkedin.com/company/invac-india/">
                    <img src="@/assets/icons/linkdin-gray.svg" ref="linkdin"
                        class="h-8 w-8 lg:h-6 lg:w-6 xl:h-7 xl:w-7 2xl:h-10 translate-y-[100%] 2xl:w-10" alt="" />
                </a>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
const menuContainer = ref<HTMLElement | null>(null);
const accessories = ref<HTMLElement | null>(null);
const demo = ref<HTMLElement | null>(null);
const contactUs = ref<HTMLElement | null>(null);
const shop = ref<HTMLElement | null>(null);
const closeMenu = ref<HTMLElement | null>(null);
const closeMenuResponsive = ref<HTMLElement | null>(null);
const inTouch = ref<HTMLElement | null>(null);
const facebook = ref<HTMLElement | null>(null);
const instagram = ref<HTMLElement | null>(null);
const twitter = ref<HTMLElement | null>(null);
const linkdin = ref<HTMLElement | null>(null);

const menuState = useState('menu')
const triggerClose = () => {
    document.querySelector("body")?.classList.remove("no-scroll");
    gsap.to(menuContainer.value, {
        x: "100vw",
        duration: 1.8,
        ease: "power4.out",
    });
    setTimeout(() => {
        menuState.value = false;
    }, 1800);
}

onMounted(() => {

    document.querySelector("body")?.classList.add("no-scroll");

    gsap.from(menuContainer.value, {
        x: "100vw",
        duration: 1.2,
        ease: "power4.out",
    });

    gsap.to(closeMenu.value, {
        y: "0%",
        duration: 1,
        delay: 0.8,
    });

    gsap.to(closeMenuResponsive.value, {
        y: "0%",
        duration: 1,
        delay: 0.8,
    });

    gsap.to(shop.value, {
        y: "0%",
        duration: 1,
        delay: 1.2,
    });

    gsap.to(accessories.value, {
        y: "0%",
        duration: 1,
        delay: 1.3,
    });

    gsap.to(demo.value, {
        y: "0%",
        duration: 1,
        delay: 1.4,
    });

    gsap.to(contactUs.value, {
        y: "0%",
        duration: 1,
        delay: 1.5,
    });

    gsap.to(inTouch.value, {
        y: "0%",
        duration: 1,
        delay: 1.6,
    });

    gsap.to(facebook.value, {
        y: "0%",
        duration: 1,
        delay: 1.7,
    });

    gsap.to(instagram.value, {
        y: "0%",
        duration: 1,
        delay: 1.8,
    });

    gsap.to(twitter.value, {
        y: "0%",
        duration: 1,
        delay: 1.9,
    });

    gsap.to(linkdin.value, {
        y: "0%",
        duration: 1,
        delay: 2,
    });
});

onBeforeUnmount(() => {
    try {
        document.querySelector("body")?.classList.remove("no-scroll");
    } catch (error) {
        //@ts-ignore
        console.log(error.message)
    }

})
</script>
Test
<style scoped></style>
