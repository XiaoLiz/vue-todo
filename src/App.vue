<template>
    <div>
        <Rate :value="score"></Rate>
    </div>
</template>

<script lang='ts' setup>
import { ref } from "vue";
import Rate from "./components/Rate.vue";

let score = ref(3);
</script>

<style lang="less">
</style>
