import ModalBig from '@/components/ModalBig.vue';

export default {
  title: 'Components/Modals/ModalBig',
  component: ModalBig,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ModalBig },
  template:
    '<modal-big v-bind="$props" v-if="showModal" @close="showModal = false"  />',
});



export const Default = Template.bind({});
Default.args = {
    showModal: false
};

/*export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};*/

