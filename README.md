## 项目介绍
    框架：vue3
    语言：Typescript
    包管理：pnpm
    路由：vue-router
    构建工具：vite
    css预处理：sass
    数据存储： pinia
    vue工具库: vueuse
    组件库：element3 elementplush naiveui antd-vue

## 代码规范: ESlint prettier(尽可能和的松散)
    1. pnpm add -D eslint @antfu/eslint-config
    2. eslintrc.js 配置 extends: ['@antfu'],其他配置删除
    3. package.json script添加 "lint": "eslint . 'src/**/*.{vue,ts}'",

## git规范分支管理， hook来做eslint或单元测试
    1. 管理eslint规范，如果报错，提交失败
    2. husky管理git提交钩子， [husky文档](https://typicode.github.io/)
    3. 安装 npm install husky --save-dev
    4. 初始化 npx husky install
    5. 启动钩子 package.json script添加 "prepare": "husky install"
    6. 创建钩子,创建前要npm run prepare
        · npx husky add .husky/pre-commit "npm run lint"  //提交代码校验钩子
        · git commit -m 'feat: xxxxx'
        · git husky add .husky/commit-msg "node script verifyCommit.js" //提交commit信息钩子

## Extends的规则
    1.EsLint 推荐的规则：eslint:recommended, 通过使用 "extends": "eslint:recommended"来启用推荐的规则。
    2.Vue文件校验的规则: plugin:vue/essential, 通过安装官方的 eslint-plugin-vue支持，它支持同时检查你.vue文件中的模板和脚本，增加对v-if，v-for等指令的校验等。
    3.prettier校验：plugin:prettier/recommended，根据配置的prettier规则进行校验。


## 开发效率：
    1.无需手动引入组件，安装 pnpm i  unplugin-vue-components -D
    2.vite无需手动导入vue依赖， npm i -D unplugin-auto-import （不推荐）















