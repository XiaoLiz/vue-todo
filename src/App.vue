<template>
    <!-- <div id="app"> -->
    <!-- 项目
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于</router-link> -->
    <!-- <router-view></router-view> -->
    <!-- </div> -->

    <div>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>

        <PopUp />
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.vt-container {
    height: 1000px;
}
.vt-header,
.vt-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.vt-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.vt-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body > .vt-container {
    margin-bottom: 40px;
}

.vt-container:nth-child(5) .vt-aside,
.vt-container:nth-child(6) .vt-aside {
    line-height: 260px;
}

.vt-container:nth-child(7) .vt-aside {
    line-height: 320px;
}
</style>
