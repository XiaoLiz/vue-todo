<template>
    <component :is="comp"></component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { userRouter } from './min-vue-router';
//  component
//  1、响应数据格式变化，重新渲染组件
//  2、如何获取创建的路由信息，返回对应组件名
//  3、app.provid(), app.inject() 传递组件信息

let router = userRouter();
console.log(router, '--- router ---');

let comp = computed(() => {
    const route = router.routes.find((r) => r.path === router.current.value);

    console.log(route, '--- route ---');
    return route ? route.component : null;
});
</script>
