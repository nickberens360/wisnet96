import PageFooter from '@/components/PageFooter.vue';

export default {
  title: 'Components/PageFooter',
  component: PageFooter,

};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PageFooter },
  template: '<page-footer v-bind="$props" />',
});

export const Primary = Template.bind({});


