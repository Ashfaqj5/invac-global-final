<template>
    <div v-if="isLoaded" class="w-full">
        <ANav></ANav>
        <div class="px-10 2xl:px-20 py-10 lg:py-10 xl:py-12 2xl:py-14">
            <NuxtLink to="/blogs" class="flex items-center gap-x-3">
                <img src="@/assets/icons/chevron-right.svg" class="h-5 lg:h-8 rotate-180" alt="" />
                <p class="text-creations text-lg font-semibold">Back</p>
            </NuxtLink>
            <div class="mt-10 text-xl lg:text-3xl">
                {{ blogTitle }}
            </div>

            <div class="aspect-video">
                <img :src="imageSrc" class="h-full w-full rounded-xl object-cover mt-20" alt="" />
            </div>

            <div class="lg:flex h-fit mt-14 lg:mt-40">
                <div class="lg:w-[40%] 2xl:w-[35%] 3xl:w-[30%] h-full">
                    <div class="text-5xl">Jun/23</div>
                    <div class="mt-7 tracking-[0.5rem] opacity-50 font-semibold text-xs lg:text-lg">
                        By Invac
                    </div>
                </div>
                <div class="w-full flex flex-col mt-20 lg:mt-0 gap-y-4 lg:gap-y-10 text-sm lg:text-lg">
                    <p v-for="item in blogArray">
                        {{ item }}
                    </p>
                </div>
            </div>
        </div>

        <AFooter></AFooter>
    </div>

    <div v-else class="w-full">
        <div class="min-h-screen w-full grid place-content-center">
            <img src="@/assets/images/logo.svg" class="h-7 animate-pulse duration-500" alt="" />
        </div>
    </div>
</template>

<script setup>
import { getDoc, doc } from "firebase/firestore";
import { ref as storageRef, getDownloadURL } from "firebase/storage";

const { $firestore, $storage } = await useNuxtApp();
/* const colRef = collection($firestore, "invac-blogs"); */
const route = useRoute();
const blogArray = ref([]);
const blogTitle = ref("");
const metaDescription = ref("")
const imageSrc = ref(null);
const isLoaded = ref(false);

useHead({
    title: blogTitle.value,
    meta: [
        {
            name: 'description',
            content: metaDescription.value
        }
    ]
})
onMounted(async () => {
    const docId = route.query.id;
    const docRef = doc($firestore, "invac-blogs", docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = await docSnap.data();
        console.log("Document data:", data);
        const imageURL = await getDownloadURL(
            storageRef($storage, data.imgFileName)
        );

        imageSrc.value = imageURL;
        blogTitle.value = data.title;
        blogArray.value = data.content;
        metaDescription.value = data.metaDescription
        isLoaded.value = true;
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
});
</script>
