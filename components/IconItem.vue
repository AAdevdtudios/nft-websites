<template>
    <div class="icon-item flex gap-2 items-center justify-center">
        <img :src="icon"/>
        <div class="">
            <h3 class="font-bold text-xl uppercase">{{iconTitle}}</h3>
            <p class="font-light text-sm">{{subtitle}}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
interface IconData {
    iconTitle: string,
    subtitle: string,
    show?:boolean,
    icon:string
}

const iconItems = defineProps<IconData>()
</script>