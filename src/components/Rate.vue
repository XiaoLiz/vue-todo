<template>
    <div>
        <h2>评分</h2>
        <h1>{{ scors }}</h1>
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
// ★ ☆
let props = defineProps<{
    value: number;
}>();

let scors = computed(() => {
    return "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value);
});
</script>

<style lang="less"></style>
