<template>
    <div>
        <!-- <h1 @click="add">{{ count }}</h1> -->

        <h3 v-if="inputVal" class="">input value: {{inputVal}}</h3>
        <h3 v-show="inputVal" class="">input value: {{inputVal}}</h3>

        <div class="flex">
            <input type="text" v-model="inputVal" >
            <button @click="add">添加</button>
        </div>

        <ul>
            <li v-for="(item, index) in todos"
                :key="index"
                class="flex"
            >
                <input type="checkbox" v-model="item.done" >
                <span :class="{done: item.done}">{{item.title}}</span>
                <span @click="removeTodo(index)">❌</span>
            </li>
        </ul>

        <div class="flex">
            全选: <input type="checkbox" v-model="allDone">
            {{activeSelect}}/{{allTodo}}
        </div>


        <div class="v-show-test">
            <VShowTest v-show="isShowTest" />

            <button @click="onShowTest">{{ isShowTest ? '隐藏': '显示' }}</button>
        </div>


    </div>
</template>

<script lang='ts' setup>
import { ref, Ref, computed } from 'vue';
import VShowTest from './components/VShowTest.vue'

//控制组件显示隐藏
let isShowTest = ref<boolean>(false);

function onShowTest() {
    isShowTest.value = !isShowTest.value;
}

// let inputVal = ref<string>('');
let inputVal:Ref = ref('');
// let todos = ref(['学习vue3','健身', '阅读忍者2']);

interface Todos {
    title: string,
    done: boolean
}

let todos = ref<Todos[]>([{
    title: '学习vue3',
    done: false,
},{
    title: '健身',
    done: false,
},{
    title: '阅读忍者2',
    done: false,
}]);

function add() {
    todos.value.push({
        title: inputVal.value,
        done: false,
    });
    inputVal.value = '';
}

let activeSelect = computed<number>(() => todos.value.filter(v => v.done).length);
let allTodo = computed<number>(()=> todos.value.length);
let allDone = computed<boolean>({
    get() {
        return activeSelect.value === allTodo.value;
    },
    set(value: boolean) {
        todos.value.forEach(todo => {
            todo.done = value
        })
    }
});

function removeTodo(index: number) {
    todos.value.splice(index, 1)
}

// export default {
//     setup() {
//         let count = ref(0);
//         function add() {
//             count.value++;
//         };
//         return { count, add };
//     }
// }
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
    text-decoration:line-through;
    color: #999;
}

.v-show-test {
    margin-top: 50px;
}
</style>
