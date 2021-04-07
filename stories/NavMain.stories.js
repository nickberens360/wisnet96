import NavMain from '@/components/NavMain.vue';
// import { action } from '@storybook/addon-actions'

export default {
    title: 'Components/Navigation/NavMain',
    component: NavMain
};


const Template = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {NavMain},
    template: '<nav-main v-bind="$props" />',
});


export const Primary = Template.bind({});
Primary.args = {
    menuItems: [
        {
            "title": "Item One",
            "url": "#",
            "classes": [
                "pink"
            ]
        },
        {
            "title": "Item Two",
            "url": "#",
            "classes": [
                "blue"
            ]
        },
        {
            "title": "Item Three",
            "url": "#",
            "classes": [
                "yellow"
            ]
        },

    ],
};





