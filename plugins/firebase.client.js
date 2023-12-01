import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: "AIzaSyC1SCLlPWLbSB3XFJFqKtZuHDyybLBctKg",
    authDomain: "myinair.firebaseapp.com",
    projectId: "myinair",
    storageBucket: "myinair.appspot.com",
    messagingSenderId: "957401781234",
    appId: "1:957401781234:web:18e2835dbcae06d961916b",
    measurementId: "G-6R97T71B8D",
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const firestore = getFirestore(app);
  const storage = getStorage(app);
  const analytics = getAnalytics(app);

  nuxtApp.vueApp.provide("auth", auth);
  nuxtApp.provide("auth", auth);

  nuxtApp.vueApp.provide("firestore", firestore);
  nuxtApp.provide("firestore", firestore);

  nuxtApp.vueApp.provide("storage", storage);
  nuxtApp.provide("storage", storage);

  nuxtApp.vueApp.provide("analytics", analytics);
  nuxtApp.provide("analytics", analytics);
});
