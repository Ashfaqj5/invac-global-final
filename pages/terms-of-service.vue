<template>
    <div class="w-full">
        <A-Nav></A-Nav>
        <div class="text-white pb-20 lg:px-4">

            <NuxtLink to="/" class="flex items-center px-10 lg:px-20 gap-x-5 mt-20">
                <img src="@/assets/icons/orange-arrow-right.svg" class="-rotate-180 h-4" alt="" />
                <p class="tracking-[0.6rem]">Home</p>
            </NuxtLink>

            <h2 class="pl-10 lg:pl-20 mt-10 text-4xl font-semibold">
                Terms Of Service
            </h2>

            <div class="w-full bg-white text-black mt-20 p-10 lg:p-20">
                <div class="w-full border-2 border-black px-7 pr-20 py-10 flex flex-col gap-y-5">
                    <div class="w-full grid grid-cols-3 items-center pb-5 border-b border-black">
                        <span class="block mx-4">1</span>
                        <span class="block w-64">Payment Terms</span>
                        <span class="block">100% Advance along with purchase order</span>
                    </div>

                    <div class="w-full grid grid-cols-3 items-center pb-5 border-b border-black">
                        <span class="block mx-4">2</span>
                        <span class="block w-64">Taxes</span>
                        <span class="block">Local applicable taxes if any. </span>
                    </div>

                    <div class="w-full grid grid-cols-3 items-center pb-5 border-b border-black">
                        <span class="block mx-4">3</span>
                        <span class="block w-64">Delivery</span>
                        <span class="block">Central Vacuum Machine, Pipes and Accessories would be dispatched
                            immediately within one week or site ready date which ever is
                            earlier. (All through holes in RCC to be provided by client’s
                            civil contractor).</span>
                    </div>

                    <div class="w-full grid grid-cols-3 items-center pb-5 border-b border-black">
                        <span class="block mx-4">4</span>
                        <span class="block">Extras</span>
                        <span class="block">In case of any changes on site as per execution extra
                            requirements will be discussed billed and will be dispatched
                            against receipt of payment.</span>
                    </div>

                    <div class="w-full grid grid-cols-3 items-center pb-5 border-b border-black">
                        <span class="block mx-4">5</span>
                        <span class="block w-64">Site Readiness</span>
                        <span class="block">Site clearance and coordination with other services is in client
                            scope. If work is delayed due to site not being ready extra
                            changes may be applied as wastager.</span>
                    </div>

                    <div class="w-full grid grid-cols-3 items-center pb-5 border-b border-black">
                        <span class="block mx-4">8</span>
                        <span class="block w-64">Piping</span>
                        <span class="block">All the piping will be concealed in the floor, false ceiling or
                            walls, as per site clearance.</span>
                    </div>

                    <div class="w-full grid grid-cols-3 items-center pb-5 border-b border-black">
                        <span class="block mx-4">7</span>
                        <span class="block w-64">Validity</span>
                        <span class="block">This proposal is valid for 4 weeks from the date of issue.</span>
                    </div>

                    <div class="w-full grid grid-cols-3 items-center pb-5 border-b border-black">
                        <span class="block mx-4">8</span>
                        <span class="block w-64">Warranty</span>
                        <span class="block">Invac warrants the power unit against electrical component
                            failure for a period of ONE(1) year. Warranty is against
                            manufacturing defects only. Any physical or other damages not
                            pertaining to manufacturer’s scope and consumables like Hose Pipe,
                            Filter(s) and other accessories are not covered under this
                            warranty.</span>
                    </div>
                </div>
            </div>
            <H-Footer></H-Footer>
        </div>
        <A-Footer></A-Footer>
    </div>
</template>
  
<script setup>
const menuState = useState("menuState");

useHead({
    title: "Terms of Service",
});

definePageMeta({
    scrollToTop: true,
    pageTransition: {
        name: "rotate",
    },
});
</script>