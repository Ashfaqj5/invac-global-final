<template>
    <div class="w-full">
        <A-Nav></A-Nav>
        <div class="text-white pb-20 lg:px-4">

            <NuxtLink to="/" class="flex items-center px-10 lg:px-20 gap-x-5 mt-20">
                <img src="@/assets/icons/orange-arrow-right.svg" class="-rotate-180 h-4" alt="" />
                <p class="tracking-[0.6rem]">Home</p>
            </NuxtLink>

            <h2 class="pl-10 lg:pl-20 mt-10 text-4xl font-semibold">
                Shipping And <br />
                Cancellation Policy
            </h2>

            <div class="py-20 w-full text-black font-semibold bg-white mt-40 px-10 lg:px-20 text-base">
                <h2>Shipping Policy</h2>
                <p class="font-medium">
                    We usually ship the product within 7 working days after reciving the
                    order and try and de-liver them within 15 working days.
                </p>

                <h2 class="mt-10">Cancellation Policy</h2>
                <p class="font-medium">
                    As per our policy no cancellation of orders is allowed after placing
                    the orders. However re- turns are accepted as per our return policy.
                    Refunds, if applicable, shall be initiated within 10 working days from
                    the date of acceptance of the returns of goods as per standard policy.
                    The returns it will be processed through same mode within 10 working
                    days.
                </p>
            </div>
            <H-Footer></H-Footer>
        </div>
        <A-Footer></A-Footer>
    </div>
</template>
  
<script setup>

useHead({
    title: "Shipping & Cancellation",
    meta: [
        {
            name: 'description',
            content: 'The shipping policy states that products are typically shipped within 7 working days and delivered within 15 working days.The cancellation policy does not allow order cancellations, but returns are accepted and refunds are initiated within 10 working days of receiving the returned goods.'
        }
    ]
});

definePageMeta({
    scrollToTop: true,
    pageTransition: {
        name: "rotate",
    },
});
</script>