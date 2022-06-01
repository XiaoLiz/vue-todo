<template>
    <div class="vt-aside" :style="{ width }"></div>
</template>

<script lang="ts">
export default {
    name: 'ElAside',
};
</script>
<script lang="ts" setup>
import { withDefaults } from 'vue';

interface Props {
    width?: string;
}

const props = withDefaults(defineProps<Props>(), {
    width: '300px',
});
</script>
<style lang="scss">
@import '../../styles/mixin';
@include b(aside) {
    padding: $--header-padding;
    box-sizing: border-box;
    flex-shrink: 0;
}
</style>
