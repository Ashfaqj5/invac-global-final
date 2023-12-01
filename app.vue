<template>
  <div class=" w-screen bg-[#1A1A1A] text-white">
    <NuxtPage />
    <A-Menu v-if="menuState" />
    <A-Cities v-if="citiesState"> </A-Cities>
  </div>
  <!-- <div class="h-screen w-screen flex items-center justify-center">
    <h2>404</h2>
  </div> -->
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-55VHW8G" height="0" width="0"
      style="display:none;visibility:hidden"></iframe>
  </noscript>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from "@studio-freight/lenis";
import 'vue3-lottie/dist/style.css'
const menuState = useState('menu', () => false)
const citiesState = useState("citiesState", () => false);
const quizState = useState("quizState", () => 1);
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
const route = useRoute()




onMounted(async () => {
  const lenis = new Lenis()
  function raf(time: any) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  function getClientId(): string {
    const existingClientId = localStorage.getItem('clientId');
    if (existingClientId) {
      return existingClientId;
    } else {
      const newClientId = crypto.randomUUID();
      localStorage.setItem('clientId', newClientId);
      return newClientId;
    }
  }
  console.log(getClientId())

  requestAnimationFrame(raf)
  //data collection starts here

});



</script>

 
<style>
* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}

.no-scroll {
  overflow: hidden;
}

html,
body {
  width: 100%;
  overflow-x: clip;
  font-family: 'Biennale', 'Biennale Book';
}



html.lenis {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
</style>