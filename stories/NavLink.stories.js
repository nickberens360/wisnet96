import NavLink from '@/components/NavLink.vue';
// import { action } from '@storybook/addon-actions'

export default {
    title: 'Components/Navigation/NavLink',
    component: NavLink
};


const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { NavLink },
    template: '<nav-link v-bind="$props" />',
});


export const Default = Template.bind({});
Default.args = {
    url: '#',
    title: 'Some Title',
    className: 'blue-100'
};

export const Active = Template.bind({});
Active.args = {
    url: '#',
    title: 'Some Title',
    className: 'blue-100 nuxt-link-active'
};








