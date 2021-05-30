<template>
  <button
      class="btn mr-2 mb-2 btn-primary"
      :class="className"
      type="button"
  >
    <span class="btn-text">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: "WindowsButton",
  props: {
    className: {
      type: String,
      required: false,
      default: 'btn-primary'
    },
    icon: {
      type: String,
      required: false,
      default: ''
    },

  }
}
</script>

<style scoped>

</style>