<template>
  <img
      :class="imgClass"
      :alt="imgAlt"
      :src="imgSrc"
  >
</template>

<script>
export default {
  name: "BaseImg",
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    imgAlt: {
      type: String,
      required: false,
      default: ''
    },
    imgClass: {
      type: String,
      required: false
    },
  }

}
</script>

<style scoped>

</style>