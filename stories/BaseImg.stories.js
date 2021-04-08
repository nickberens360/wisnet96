import BaseImg from '@/components/BaseImg.vue';


export default {
  title: 'Components/Base/BaseImg',
  component: BaseImg,

};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseImg },
  template: '<base-img :img-src="imgSrc" :v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    imgSrc: '/wisnetLogo.gif'
};


