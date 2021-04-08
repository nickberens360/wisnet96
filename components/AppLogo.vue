<template>
  <img
      class="wisnet-logo"
      :alt="imgAlt"
      :src="imgSrc"
  >
</template>

<script>
export default {
  name: "AppLogo",
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    imgAlt: {
      type: String,
      required: false,
      default: '_self'
    },
  }

}
</script>

<style scoped>

</style>