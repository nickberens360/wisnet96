<template>
  <a href="#" class="icon-button">
    <span class="icon-button__icon w95-folder-windows-apps">

    </span>
    <span class="icon-button__text">
      Back
    </span>
  </a>
</template>

<script>
export default {
  name: "IconButton"
}
</script>

<style lang="scss" scoped>
  .icon-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: white;
    font-size: 12px;
    &:hover {
      border: none;
    }
  }
  .icon-button__icon,
  .icon-button__text {
    &:hover {
      border: none;
    }
  }
  .icon-button__icon {
    font-size: 30px;
  }

</style>