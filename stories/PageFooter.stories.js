import PageFooter from '@/components/PageFooter.vue';


export default {
    title: 'Pages/Page/PageFooter',
    component: PageFooter,
};

const Template = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {PageFooter},
    template:
            `<page-footer  v-bind="$props">
               <img alt="wisnet 96 logo" src="/dots.gif" >
            </page-footer>`,
});

export const Default = Template.bind({});





