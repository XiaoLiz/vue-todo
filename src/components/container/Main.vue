<template>
    <div class="vt-main" :style="{ height }">
        <slot></slot>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ElMain',
};
</script>
<script lang="ts" setup>
import { withDefaults } from 'vue';

interface Props {
    height?: string;
}

const props = withDefaults(defineProps<Props>(), {
    height: '60px',
});
</script>

<style lang="scss">
@import '../../styles/mixin';
@include b(main) {
    padding: $--header-padding;
    box-sizing: border-box;
    flex-shrink: 0;
}
</style>
