<template>
  <div @click.self="citiesState = false"
    class="fixed top-0 h-screen w-full grid place-content-center cursor-pointer bg-black bg-opacity-30">
    <div class="w-[95vw] h-fit cursor-default bg-white text-black rounded-xl p-5 lg:p-10">
      <div class="flex justify-between items-center">
        <div class="flex gap-x-4 lg:gap-x-3 items-center">
          <p class="text-base lg:text-4xl">Countries We Are In</p>
          <img src="../assets/icons/orange-arrow-right.svg" class="h-5 lg:h-8 lg:ml-10" alt="" />
        </div>

        <img src="@/assets/icons/logo-white.svg" class="h-5 lg:h-7" alt="" />
      </div>

      <div
        class="h-full mt-10 grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 justify-between gap-y-7 text-xs sm:text-sm pb-10 lg:mt-20 lg:text-base">
        <p>Usa</p>
        <p>Canada</p>
        <p>UK</p>
        <p>UAE</p>
        <p>Indonesia</p>
        <p>Australia</p>

      </div>
    </div>
  </div>
</template>

<script setup>
const citiesState = useState("citiesState");
</script>