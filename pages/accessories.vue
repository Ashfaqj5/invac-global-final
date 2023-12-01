<template>
    <div class="w-full">
        <NuxtPage></NuxtPage>
    </div>
</template>

<script setup>
useHead({
    title: `World's Leading Wet and Dry Auto flush Central Vacuum Cleaner | INVAC - Your Cleaning Partner`,
    meta: [
        {
            name: 'description',
            content: `Upgrade to a reliable home central vacuum system from INVAC. Discover our selection of affordable vacuum cleaners and experience the convenience of an automatic central vacuum system.`
        }
    ]
})

useSeoMeta({
    title: `World's Leading Wet and Dry Auto flush Central Vacuum Cleaner | INVAC - Your Cleaning Partner`,
})

const forHomeState = ref(false)

definePageMeta({
    scrollToTop: true,
    pageTransition: false,
});
</script>

<style lang="scss" scoped></style>