<template>
    <div class="w-full flex items-center justify-between px-10 lg:px-20 py-10 lg:py-10 xl:py-12 2xl:py-14">
        <NuxtLink to="/"><img src="@/assets/images/logo.svg" class="h-5 lg:h-5 xl:h-5 2xl:h-6 transition-opacity duration-500 hover:opacity-75 active:opacity-90" alt=""></NuxtLink>
        <img @click="triggerMenu" src="@/assets/icons/burger.svg"
            class="h-5 lg:h-6 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9 transition-opacity cursor-pointer active:opacity-90 hover:opacity-60 duration-500"
            alt="">
    </div>
</template>

<script setup lang="ts">
const menuState = useState('menu')
const triggerMenu = () => {
    menuState.value = true;
}
</script>
