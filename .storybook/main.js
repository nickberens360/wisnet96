const path = require('path');

module.exports = {
    webpackFinal: async (config, {configType}) => {

        config.module.rules.push({
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, '..'),
                    vue: 'vue/dist/vue.esm.js'
                }
            },
        });

        return config;
    },
    stories: [
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/preset-scss'
    ]
}