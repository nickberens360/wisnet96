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
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100%;

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