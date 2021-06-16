<template>
  <div
      class="icon-button-container"
      v-bind:style="{ height: containerHeight + 'px', width: containerWidth + 'px' }"
  >

    <NuxtLink
        :id="id"
        class="icon-button"
        exact :to="link"
    >
      <span
          :id="id+'-handle'"
          class="icon-button__icon"
      >
        <slot name="icon"/>
      </span>
      <span
          class="icon-button__text"
          :style="{ color: linkColor }">
        <slot name="text"/>
      </span>
    </NuxtLink>


  </div>
</template>

<script>
import dragDrop from '@/components/mixins/drag-drop'

export default {
  name: "IconButton",
  data: function () {
    return {
      containerHeight: '',
      containerWidth: '',
    }
  },
  props: {
    link: {
      type: String,
      required: false
    },
    linkColor: {
      type: String,
      required: false,
      default: 'white'
    },

    id: {
      type: String,
      required: true,
    },
    isExternalLink: {
      type: Boolean,
    },


  },
  methods: {
    matchWidth() {
      console.log(document.getElementById(this.id).offsetWidth);
      this.containerWidth = document.getElementById(this.id).offsetWidth
    },
    matchHeight() {
      this.containerHeight = document.getElementById(this.id).offsetHeight
    }
  },
  mixins: [dragDrop],
  mounted: function () {
    this.$nextTick(function () {
      this.matchHeight();
      this.matchWidth();
      this.dragDrop(this.id, this.id + '-handle');
    })
  },
}
</script>

<style lang="scss" scoped>

.icon-button-container {
  position: relative;
  //margin: 0 auto;
  text-align: center;

}

.dragstart {
  background: blue;
}

.icon-button {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
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

  /deep/ img, iframe {
    width: 70px;
  }

  font-size: 70px;
}

a.dragstart {
  pointer-events: none;
}

</style>