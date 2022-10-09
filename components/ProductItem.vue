<template>
    <a href="/">
        <div
            class="arrival-items group flex w-80 h-35 rounded-md overflow-hidden flex-col justify-center items-center bg-white">
            <div class="product-img h-full w-430 p-3 relative">
                <img :src="data.images" width="300" height="300" alt="" class="imgs h-full w-full object-cover">
                <span class="wish-list absolute top-4 right-14 bg-sky-900 p-3 text-white rounded-full text-sm">New
                    Arrival</span>
            </div>
            <div
                class="flex justify-center flex-col group-hover:-translate-y-16 bg-white transition-all delay-100 ease-linear">
                <div class="px-3">
                    <div class="product-info">
                        <ul class="flex gap-1 my-2 w-full text-xs font-medium text-gray-300">
                            <li class=""><a href="/">Boot,</a></li>
                            <li><a href="/">Cars</a></li>
                        </ul>
                    </div>
                    <h4 class="product-title text-left capitalize">
                        The North Face Back-Berkeley Remtlz Mesh
                    </h4>
                    <h4 class="product-description text-left text-sm text-gray-400 h-10 text-ellipsis overflow-hidden">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ut ea consectetur distinctio
                        dolores sit cum libero commodi repellendus beatae.
                    </h4>
                    <p class="text-red-600 font-bold my-3 text-left">$50.00 <span class="text-gray-200 line-through">$84.00</span>
                    </p>
                    <div class="flex gap-2">
                        <ul class="flex gap-1">
                            <li>&#9733</li>
                            <li>&#9733</li>
                            <li>&#9733</li>
                            <li>&#9733</li>
                            <li>&#9733</li>
                        </ul>
                        <span class="text-gray-300 font-extrabold">(2 rating)</span>
                    </div>
                </div>
                <div class="product-btn border-t mt-3 w-full">
                    <div class="grid grid-cols-2 w-full divide-x">
                        <a href="/" class="p-3 w-full text-center">
                            Add to Cart
                        </a>
                        <a href="/" class="p-3 w-full text-center">Quick view</a>
                    </div>
                </div>
            </div>
        </div>
    </a>
</template>

<script setup lang="ts">
interface DataInfos {
    images: string
}
const data = defineProps<DataInfos>()
</script>