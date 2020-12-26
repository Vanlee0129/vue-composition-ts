module.exports = {
    // 环境
    env: {
        browser: true,
        es2021: true,
        commonjs: true,
        node: true,
    },
    // 配置解析器
    parserOptions: {
        ecmaVersion: 12,
        parser: 'babel-eslint',
    },
    // 配置扩展
    extends: [
        // eslint推荐规则
        'eslint:recommended',
        // 标准js规则
        'standard',
        // vue eslint 基本规则
        'plugin:vue/base',
        // Vue eslint A级推荐规则预设
        'plugin:vue/essential',
        // Vue eslint B级推荐规则预设
        'plugin:vue/strongly-recommended',
        // Vue eslint C级推荐规则预设
        'plugin:vue/recommended',
    ],
    // 允许的全局变量预设
    globals: {
        // 如 lodash
        _: true,
    },
    // 这里可以设置规则：
    // "off" or 0 - 关闭规则
    // "warn" or 1 - 将规则作为警告打开（不影响退出代码）
    // "error" or 2 - 将规则作为错误打开（退出代码为1）
    rules: {
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 3,
                multiline: {
                    max: 1,
                    allowFirstLine: false,
                },
            },
        ],
    },
}
