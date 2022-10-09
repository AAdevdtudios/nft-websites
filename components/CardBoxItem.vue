<template>
    <div class="box-items h-full w-full relative overflow-hidden text-white rounded-md">
        <img src="@/assets/images/shoe.jpg" alt="" class="img-style h-full w-full object-cover" />
        <div class="box-contents absolute top-3 translate-y-2/4 -my-8 text-left" :class="infoData.right?'right-4':'left-4'">
            <a href="/" class="title-card font-light text-lg">{{title}}</a>
            <h3 class="font-extrabold text-4xl">
                <a href="/" style="white-space: pre;" >{{subtitle}}</a>
            </h3>
            <h4 class="font-light text-xl mb-6">
                <a href="/" style="white-space: pre;" >{{pText}}</a>
            </h4>
            <a href="/"
                class="btn-shop py-2 px-10 rounded-full border border-slate-900 hover:border-none hover:bg-sky-900 hover:text-white text-black leading-8">Shop-now</a>
        </div>
    </div>
</template>

<script setup lang="ts">
    interface data {
        title:String,
        subtitle:String,
        right:boolean,
        pText?:string
    }
    const infoData = defineProps<data>()
</script>