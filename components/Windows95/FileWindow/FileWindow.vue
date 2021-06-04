<template>

    <div
        :id="id"
        :class="{fullscreen: isFullScreen}"
        class="card card-tertiary file-window"
    >
      <div :id="titleId" class="card-header file-window-header d-flex justify-content-between align-items-center">
        <span><slot name="title">{{ title }}</slot></span>

        <nuxt-link to="/desktop" class="btn btn-sm btn-close p-2" aria-label="Close">
          <span class="position-relative font-weight-bold" aria-hidden="true">X</span>
        </nuxt-link>
      </div>
      <slot name="header"/>
      <div class="card-body">
        <button @click="isFullScreen = !isFullScreen" class="position-relative font-weight-bold" aria-hidden="true">Full</button>
        <slot name="content"></slot>
      </div>
    </div>

</template>

<script>
import FileWindowHeader from "@/components/Windows95/FileWindow/FileWindowHeader";
import dragDrop from '@/components/mixins/drag-drop';

export default {
  name: 'FileWindow',
  components: {
    FileWindowHeader
  },
  props: {
    id: {
      type: String,
      required: true,
      default: 'window'
    },
    title: {
      type: String,
      default: 'wisnet Explorer 96'
    },
    titleId: {
      type: String,
      required: true,
      default: 'title'
    }
  },
  data: function () {
    return {
      isFullScreen: false
    }
  },
  mixins: [dragDrop],
  methods: {
    goFullScreen: function() {
      this.isFullScreen = !this.isFullScreen;
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.dragDrop(this.id, this.titleId);
    })
  },



}
</script>


<style lang="scss" scoped>

.file-window {
  position: absolute;
  top: 30px;
  resize: both;
  overflow: auto;
  max-width: 960px;
  width: 100%;
  max-height: 90vh;
  height: 800px;
  margin: auto;
  &.file-window--sm {
    max-width: 500px;
  }
  &.file-window--md {
    max-width: 755px;
  }

  &.fullscreen {
    top: 0 !important;
    left: 0 !important;
    bottom: 0 !important;
    right: 0 !important;
    height: 100% !important;
    max-width: 100% !important;
    width: 100% !important;
    max-height: unset !important;
  }
  .card-header {
    padding-left: 8px;
    span {
      font-weight: bold;
    }
  }

  .card-body {
    position: relative;
    height: 100%;
    resize: both;
    overflow: auto;
    padding: 0;
  }
}
</style>