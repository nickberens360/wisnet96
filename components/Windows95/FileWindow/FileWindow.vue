<template>

    <div :id="id" class="card card-tertiary file-window">
      <div :id="titleId" class="card-header file-window-header d-flex justify-content-between align-items-center">
        <span><slot name="title">{{ title }}</slot></span>
        <nuxt-link to="/desktop" class="btn btn-sm btn-close p-2" aria-label="Close">
          <span class="position-relative font-weight-bold" aria-hidden="true">X</span>
        </nuxt-link>
      </div>
      <slot name="header"/>
      <div class="card-body">
        <slot name="content"></slot>
      </div>
    </div>

</template>

<script>
import FileWindowHeader from "@/components/Windows95/FileWindow/FileWindowHeader";
import dragDrop from '@/components/mixins/drag-drop'

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
      default: 'wisnet 96'
    },
    titleId: {
      type: String,
      required: true,
      default: 'title'
    }
  },
  mixins: [dragDrop],
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
  height: 750px;
  margin: auto;

  .card-body {
    height: 100%;
    resize: both;
    overflow: auto;
    padding: 0;
  }
}
</style>