<template>
    <div class="vt-container" :class="{ 'is-vertical': isVertical }">
        <slot></slot>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ElContainer',
};
</script>
<script lang="ts" setup>
import { useSlots, computed } from 'vue';
import type { Component } from 'vue';

interface Props {
    direction?: string;
}

const props = defineProps<Props>();

const slots = useSlots();
const isVertical = computed(() => {
    if (slots && slots.default) {
        return slots.default().some((vnode) => {
            const tag = (vnode.type as Component).name;
            return tag == 'ElHeader' || tag == 'ElFooter';
        });
    } else {
        return props.direction === 'vertical';
    }
});
</script>

<style lang="scss">
@import '../../styles/mixin.scss';
@include b(container) {
    background: $bg-color;
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;

    @include when(is-vertical) {
        flex-direction: column;
    }
}
</style>
