import ButtonRound from '@/components/ButtonRound.vue';

export default {
  title: 'Components/ButtonRound',
  component: ButtonRound,

};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonRound },
  template: '<button-round v-bind="$props" />',
});

export const Default = Template.bind({});


