module.exports = {
    root: true,
    env: {
        node: true
    },
    globals: {
        storeToRefs: true,
        useRoute: true,
        useRouter: true,
        $ref: true,
    },
    extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier', 'vue-global-api'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        "vue/no-v-model-argument": "off",//在vue3中使用v-model报错
        "array-bracket-spacing": "off",//是否允许非空数组里面有多余的空格
        "object-curly-spacing": "off",//大括号内是否允许不必要的空格
        'prettier/prettier': 'warn',
        'space-before-function-paren': "off",//函数定义时括号前面要不要有空格
        'no-console': 'off',//禁止使用console
        'no-debugger': 'off',//禁止使用debugger
        'no-empty-source': 'off',
        'no-unused-vars': 'off'//不能有声明后未被使用的变量或参数
    }
};
