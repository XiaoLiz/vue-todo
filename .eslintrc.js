module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "vue/setup-compiler-macros": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "parser": "vue-eslint-parser",
    "rules": {
    }
}
