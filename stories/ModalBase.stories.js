import ModalBase from '@/components/ModalBase.vue';

export default {
  title: 'Components/Modals/ModalBase',
  component: ModalBase,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ModalBase },
  template:
    '<modal-base v-bind="$props" v-if="showModal" @close="showModal = false"  />',
});



export const Base = Template.bind({});
Base.args = {
    showModal: false
};

