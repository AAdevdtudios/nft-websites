<template>
    <div class="overflow-hidden relative dark:bg-slate-900 bg-[#e9e9e9]">
        <HeadersNavBar/>
        <slot/>
        <Footers/>
    </div>
</template>
<script setup lang="ts">
    useHead({
        title: "Home page",
        link:[
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        script:[
            {
                src: '/web3.js',
                body: true,
            },
        ]
    })
</script>

