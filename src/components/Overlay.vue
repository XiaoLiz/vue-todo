<template>
    <div class="overlay" @touchmove="preventTouchMove">
        <h1>Test Overlay</h1>
    </div>
</template>

<script lang="ts" setup>
const stopPropagation = (event: Event) => event.stopPropagation();

const preventDefault = (event: Event, isStopPropagation?: boolean) => {
    /* istanbul ignore else */
    if (typeof event.cancelable !== 'boolean' || event.cancelable) {
        event.preventDefault();
    }

    if (isStopPropagation) {
        stopPropagation(event);
    }
};

function preventTouchMove(event: Event) {
    // return event.stopPropagation();
    preventDefault(event, true);
}
</script>

<style lang="scss">
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.7);
}
</style>
