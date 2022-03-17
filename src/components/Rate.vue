<template>
    <div>
        <div :style="{ color: color }">
            <div class="rate">
                <!-- <span @mouseover="mouseOver(num)" @mouseout="mouseOut" v-for="num in 5" :key="num">☆</span> -->
                <span v-for="num in 5" :key="num" @mouseover="mouseOver(num)">☆</span>

                <span class="hollow" :style="startWidth">
                    <span
                        v-for="num in 5"
                        :key="num"
                        @mouseover="mouseOver(num)"
                        @mouseout="mouseOut"
                        @click="onRate(num)"
                        >★</span
                    >
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const props = defineProps<{
    // value: number,
    modelValue: number;
    color?: string;
}>();

const emits = defineEmits(['update:modelValue']);

function onRate(num: number) {
    emits('update:modelValue', num);
}

const width = ref(props.modelValue);
function mouseOver(num: number) {
    width.value = num;
}

function mouseOut() {
    width.value = props.modelValue;
}

const startWidth = computed(() => `width:${width.value}em`);
</script>

<style lang="less" scoped>
.rate {
    position: relative;
    display: inline-block;
}

.rate > span.hollow {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
}
</style>
