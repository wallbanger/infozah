module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['off'],
        'vue/script-indent': ['warn', 4, { baseIndent: 1 }],
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
