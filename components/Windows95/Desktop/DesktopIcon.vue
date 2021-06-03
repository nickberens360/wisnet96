<template>
  <div class="icon-button-container">

    <NuxtLink
        :id="id"
        class="icon-button"
        :to="link"
    >
      <span
          :id="id+'-handle'"
          class="icon-button__icon"
      >
        <slot name="icon"/>
      </span>
      <span class="icon-button__text">
        <slot name="text"/>
      </span>
    </NuxtLink>


  </div>
</template>

<script>
import dragDrop from '@/components/mixins/drag-drop'

export default {
  name: "IconButton",
  props: {
    link: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: true,
    },

  },
  mixins: [dragDrop],
  mounted: function () {
    this.$nextTick(function () {
      this.dragDrop(this.id, this.id+'-handle');
    })
  },
}
</script>

<style lang="scss" scoped>

.icon-button-container {
  position: relative;
  width: 70px;
  height: 80px;
  margin-bottom: 40px;
  text-align: center;
}

.icon-button {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  color: white;
  font-size: 12px;
  font-weight: bold;

  &:hover {
    border: none;
  }
}

.icon-button__icon,
.icon-button__text {
  /deep/ &:hover {
    border: none;
  }
}

.icon-button__icon {
  margin-bottom: 5px;

  /deep/ img {
    width: 70px;
  }

  font-size: 70px;
}

a.dragstart{pointer-events: none;}

</style>