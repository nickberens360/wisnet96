import PageHeader from '@/components/PageHeader.vue';


export default {
    title: 'Pages/Page/PageHeader',
    component: PageHeader,
};

const Template = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {PageHeader},
    template:
        `<page-header  v-bind="$props">
           <img alt="wisnet 96 logo" src="/about-header-img.gif" >
        </page-header>`,
});

export const Default = Template.bind({});





