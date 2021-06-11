<template>
  <div
      class="desktop-region"
      :class="position"
  >
  <slot />
  </div>
</template>

<script>
export default {
  name: "DesktopRegion",
  props: {
    position: {
      type: String,
      required: false,
      default: 'top-left'
    }
  }
}
</script>

<style scoped lang="scss">
  .desktop-region {
    position: absolute;
    padding: 40px;
    &.top-left {
      top: 0;
      left: 0;
    }
    &.bottom-left {
      bottom: 80px;
      left: 0;
    }
    &.top-right {
      top: 0;
      right: 0;
    }
    &.bottom-right {
      bottom: 100px;
      right: 60px;
    }

  }
  @media only screen and ( max-width: 895px ){
    .desktop-region {
      position: relative;
      padding: 40px;
      &.bottom-left {
        bottom: auto;
      }
      &.bottom-right {
        bottom: auto;
        right: auto;
      }

    }
  }
</style>