<template>
    <div>
        <div class="flex">
            <input v-model="inputVal" type="text" />
            <button @click="add">添加</button>
            <button @click="clear">清除</button>
        </div>

        <ul>
            <li v-for="(item, index) in todos" :key="index" class="flex">
                <input v-model="item.done" type="checkbox" />
                <span :class="{ done: item.done }">{{ item.title }}</span>
                <span @click="removeTodo(index)">❌</span>
            </li>
        </ul>

        <div v-if="allTodo" class="flex">
            全选: <input v-model="allDone" type="checkbox" /> {{ activeSelect }}/{{ allTodo }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue';
import { computed, ref } from 'vue';

// let inputVal = ref<string>('');
const inputVal: Ref = ref('');
interface Todos {
    title: string;
    done: boolean;
}

const todos = ref<Todos[]>([
{
        title: '学习vue3',
        done: false,
},
    {
        title: '健身',
        done: false,
    },
    {
        title: '阅读忍者2',
        done: false,
    },
]);

function add() {
    todos.value.push({
        title: inputVal.value,
        done: false,
    });
    inputVal.value = '';
}

function clear() {
    todos.value = todos.value.filter((v) => !v.done);
}

const activeSelect = computed<number>(() => todos.value.filter((v) => v.done).length);
const allTodo = computed<number>(() => todos.value.length);
const allDone = computed<boolean>({
    get() {
        return activeSelect.value === allTodo.value;
    },
    set(value: boolean) {
        todos.value.forEach((todo) => {
            todo.done = value;
        });
    },
});

function removeTodo(index: number) {
    todos.value.splice(index, 1);
}
</script>

<style lang="less">
.flex {
    display: flex;
    flex-direction: row;
}

ul {
    list-style: none;
    padding: 0;
}

.done {
    text-decoration: line-through;
    color: #999;
}

.v-show-test {
    margin-top: 50px;
}
</style>
