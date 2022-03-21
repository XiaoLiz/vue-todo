<template>
    <a :href="'#' + props.to">
        <slot></slot>
    </a>
</template>

<script setup lang="ts">
let props = defineProps<{
    to: string;
}>();
</script>
