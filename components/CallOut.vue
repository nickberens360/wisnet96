<template>
  <div class="call-out" v-html="content"></div>
</template>

<script>
export default {
  name: 'CallOut',
  props: {
    content: {
      type: String,
      required: false,
      default: ''
    },
  }
}
</script>

<style lang="scss" scoped>

  .call-out {
    position: relative;
    max-width: 360px;
    margin: auto auto 30px;
    padding: 20px 40px 40px;
    background: var(--wisnet-color-blue-400);
    border: 5px outset var(--wisnet-color-gray-350);
    color: #fff;
    font-weight: bold;
    text-align: center;
    &:after {
      content: '';
      position: absolute;
      top: 2px;
      right: 2px;
      bottom: 2px;
      left: 2px;
      border-top: 2px solid var(--wisnet-color-gray-600);
      border-right: 2px solid var(--wisnet-color-gray-350);
      border-bottom: 2px solid var(--wisnet-color-gray-350);
      border-left: 2px solid var(--wisnet-color-gray-600);
    }
  }

</style>
