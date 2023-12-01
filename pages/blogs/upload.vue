<template>
    <div v-if="isLoggedIn" class="w-full">
        <A-Nav></A-Nav>
        <div class="w-full min-h-screen">
            <form @submit.prevent="submitForm" class="px-10 2xl:px-20 py-10 lg:py-10 xl:py-12 2xl:py-14  min-h-screen">
                <h1 class="text-5xl font-semibold">Upload</h1>

                <label class="block mb-2 font-bold text-2xl mt-20" for="image">Banner Image -</label>
                <input required @change="triggerImageChange" ref="imgFile"
                    class="bg-transparent rounded-lg my-10 mb-8 w-full h-12 appearance-none" type="file" id="image"
                    name="image" />

                <img ref="imgPreview" id="preview-image"
                    class="mb-8  w-full lg:w-[70%] block mx-auto rounded-md border-2 border-neutral-500 aspect-video object-cover" />

                <label class="block mb-2 font-bold text-2xl mt-20" for="blog-url">Blog URL -</label>
                <input required v-model="blogUrl"
                    class="bg-white bg-opacity-90 text-black p-5 rounded-lg my-10 mb-8 w-full h-12 appearance-none"
                    type="text" id="blog-url" name="blog-url" />

                <label class="block mb-2 font-bold text-2xl mt-20" for="meta-description">Meta Tag Description -</label>
                <textarea v-model="metaDescription" name="meta-description" id="meta-description" cols="30" rows="3"
                    class="w-full text-black p-5 outline-none bg-white bg-opacity-90 rounded-md"></textarea>


                <label class="block mb-2 font-bold text-2xl mt-20" for="blog-title">Blog Title -</label>
                <input required v-model="blogTitle"
                    class="bg-white bg-opacity-90 text-black p-5 rounded-lg my-10 mb-8 w-full h-12 appearance-none"
                    type="text" id="blog-title" name="blog-title" />

                <label class="block mb-2 font-bold text-2xl mt-20" for="blog-title">Blog Preview -</label>
                <div class="w-full py-20">
                    <div class="w-full flex flex-col mt-20 lg:mt-0 gap-y-4 lg:gap-y-10 text-sm lg:text-lg">
                        <p v-for="item in blogArray">
                            {{ item }}
                        </p>
                    </div>
                </div>



                <label class="block mb-2 font-bold text-2xl mt-20" for="blog-content">Blog Content -</label>
                <textarea v-model="blogText" name="blog-content" id="blog-content" cols="30" rows="10"
                    class="w-full text-black p-5 outline-none bg-white bg-opacity-90 rounded-md min-h-[22rem]"></textarea>
                <div class="flex gap-x-3">
                    <div @click="triggerAddParagraph"
                        class="p-3 bg-neutral-700 rounded-md cursor-pointer hover:opacity-70 active:opacity-90 transition-all duration-500 w-fit my-4">
                        Add Blog Paragraph
                    </div>
                    <div @click="triggerResetParagraphs"
                        class="p-3 bg-red-500 rounded-md cursor-pointer hover:opacity-70 active:opacity-90 transition-all duration-500 w-fit my-4">
                        Reset
                        Paragraphs
                    </div>
                </div>

                <button
                    class="bg-emerald-500 mt-20 rounded-md px-6 py-3 transition-all duration-700 text-sm text-white font-bold hover:bg-neutral-500 active:bg-neutral-800"
                    type="submit">Upload</button>
            </form>

        </div>
        <AFooter></AFooter>
    </div>

    <div v-else class="grid place-content-center min-h-screen">
        <h1 class="text-3xl font-semibold">You are not logged in</h1>
        <input type="text" placeholder="username" v-model="username"
            class="bg-white bg-opacity-90 text-black p-5 rounded-lg my-10 mb-8 w-full h-12 appearance-none" />
        <input type="password" placeholder="password" v-model="password"
            class="bg-white bg-opacity-90 text-black p-5 rounded-lg my-10 mb-8 w-full h-12 appearance-none" />
        <button @click="login"
            class="bg-emerald-500 mt-20 rounded-md px-6 py-3 transition-all duration-700 text-sm text-white font-bold hover:bg-neutral-500 active:bg-neutral-800">Login</button>
    </div>
</template>

<script setup>
import { addDoc, collection } from "firebase/firestore";
import { ref as storageRef, uploadBytes } from 'firebase/storage'
const { $firestore, $storage } = await useNuxtApp()



const isLoggedIn = ref(false)
const imgFile = ref(null)
const blogText = ref(null)
const blogArray = ref([])
const blogTitle = ref(null)
const imgPreview = ref(null);
const blogUrl = ref(null);
const metaDescription = ref(null);
const username = ref(null)
const password = ref(null)
const uname = 'admin'
const pword = 'aDd@123'

const login = async () => {
    try {
        if (username.value !== uname || password.value !== pword) {
            throw new Error('Invalid Credentials')
        }
        isLoggedIn.value = true
    } catch (error) {
        console.log(error.message)
    }
}

const triggerImageChange = async () => {
    console.log(imgFile.value.value)
    const file = imgFile.value.files[0]
    const fileUrl = URL.createObjectURL(file)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    imgPreview.value.src = fileUrl
    console.log(file)
}


const triggerAddParagraph = () => {
    blogArray.value.push(blogText.value)
    blogText.value = ''
}

const triggerResetParagraphs = () => {
    blogArray.value = [];
}

const submitForm = async () => {
    const date = new Date()
    const formData = {
        content: blogArray.value,
        title: blogTitle.value,
        imgFileName: imgFile.value.files[0].name,
        url: blogUrl.value, // Capture the blog URL
        metaDescription: metaDescription.value, // Capture the meta tag description
        currentDate: date
    };

    try {
        await postDemo(formData);
        const docRef = await addDoc(collection($firestore, "invac-blogs"), formData);
        const storageRefIMG = storageRef($storage, imgFile.value.files[0].name);
        await uploadBytes(storageRefIMG, imgFile.value.files[0])
        console.log('Uploaded a blob or file!');
        console.log(formData)
        console.log("Document written with ID: ", docRef.id);
        router.go()

    } catch (error) {
        console.log(error.message)
    }

};

</script>
