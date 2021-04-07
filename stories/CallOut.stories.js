import CallOut from '@/components/CallOut.vue';

export default {
  title: 'Components/CallOut',
  component: CallOut,

};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CallOut },
  template: '<call-out v-bind="$props" />',
});

export const Primary = Template.bind({});


