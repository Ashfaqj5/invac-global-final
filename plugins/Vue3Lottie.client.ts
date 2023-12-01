import Vue3Lottie from "vue3-lottie";

export default defineNuxtPlugin((nuxtApp) => {
  //@ts-ignore
  nuxtApp.vueApp.use(Vue3Lottie);
});
