<template>
  <div  class="icon-button-container">
    <a id="icon-drag" href="#" class="icon-button">
    <span id="icon-handle" class="icon-button__icon">
<!--      🌎-->
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Rotating_globe.gif" alt="">
    </span>
      <span class="icon-button__text">
      Grande Cheese
    </span>
    </a>
  </div>
</template>

<script>
import dragDrop from '@/components/mixins/drag-drop'

export default {
  name: "IconButton",
  mixins: [dragDrop],
  mounted: function () {
    this.$nextTick(function () {
      this.dragDrop('icon-drag', 'icon-handle');
    })
  },
}
</script>

<style lang="scss" scoped>

.icon-button-container {
  position: relative;
  width: 50px;
  height: 70px;
  margin-bottom: 40px;
}

.icon-button {
  position: absolute;
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
  width: 50px;
  img {
    width: 100%;
  }
  font-size: 50px;
}

</style>