<template>
    <div class="show-container">
        v-if 与 v-show 触发机制
    </div>
</template>

<script lang='ts'>
export default {
    name:'',
    data () {
        return {}
    },

    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('created')
    },

    beforeMount() {
        console.log('beforeMount')
    },

    mounted() {
        console.log('mounted')
    },

    beforeUnmount() {
        console.log('beforeDestroy')
    },
    unmounted() {
        console.log('destroyed')
    },
}
</script>

<style lang='less' scoped>
.show-container {
    color:rgb(202, 121, 121);
}
</style>