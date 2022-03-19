<template>
    <div>
        <Rate v-model="score" color="blue" />
        <!-- <Rate v-model="score1" /> -->

        <VShowTest />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
// import Rate from './components/Rate.vue';
// import TodoList from './components/TodoList.vue';
// import VShowTest from './components/VShowTest.vue';

const score = ref(3);
// const score1 = ref(2);
</script>

<style lang="less"></style>
