import "../assets/scss/main.scss";
import Vue from 'vue'
import { configure } from '@storybook/vue'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

Vue.component('nuxt-link', {
    props:   ['to'],
    methods: {
        log() {
            action('link target')(this.to)
        },
    },
    template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>',
})

configure(require.context('../components', true, /\.stories\.js$/), module);