<template>
    <div class="w-full mt-10 overflow-y-clip">
        <div ref="dropDownItem" class=" text-sm sm:text-base lg:text-base 2xl:text-lg 3xl:text-xl font-light translate-y-[100%] w-[80%]">
            {{ props.content }}
        </div>
    </div>
</template>

<script setup>
import gsap from "gsap";
const props = defineProps(['content'])

const dropDownItem = ref(null);
onMounted(() => {
    gsap.to(dropDownItem.value, {
        duration: 1,
        y: 0,
    })
})

/* 
import { useEffect, useRef } from "react";
const GlobalTip = () => {
    <HTMLParagraphElement>(null);
  useEffect(() => {
    const ctx = gsap.to(sel.current, {
            duration: 0.5,
        y: 0,
    });
    return () => {
            ctx.revert();
    };
  });
        return (
        <p
            ref={sel}
            className="w-full whitespace-normal duration-300 text-xl mt-10 text-neutral-500 xl:text-2xl translate-y-[100%]"
        >
            Global team to keep pace with the technology, leveraging learning &
            insights across globe.
        </p>
        );
};

        export default GlobalTip; */

</script>