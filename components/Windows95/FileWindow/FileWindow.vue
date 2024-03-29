<template>

  <div
      :id="id"
      :class="{fullscreen: isFullScreen}"
      class="card card-tertiary file-window"
  >
    <div :id="titleId" class="card-header file-window-header d-flex justify-content-between align-items-center">
      <span><slot name="title">{{ title }}</slot></span>
      <div
          v-if="showControls"
          class="d-flex justify-content-end file-window__controls">
        <button
            @click="isFullScreen = !isFullScreen"
            class="file-window__controls btn btn-sm btn-close mr-2 p-2 position-relative font-weight-bold has-fa"
            aria-hidden="true">
          <font-awesome-icon  v-if="!isFullScreen" :icon="faWindowMaximize"/>
          <font-awesome-icon  v-if="isFullScreen" :icon="faWindowMinimize"/>

        </button>
        <nuxt-link to="/desktop" class="btn btn-sm btn-close p-2" aria-label="Close">
          <span class="position-relative font-weight-bold" aria-hidden="true">X</span>
        </nuxt-link>
      </div>
    </div>
    <slot name="header"/>
    <div class="card-body">
      <slot name="content"></slot>
    </div>
  </div>

</template>

<script>
import FileWindowHeader from "@/components/Windows95/FileWindow/FileWindowHeader";
import dragDrop from '@/components/mixins/drag-drop';
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons'
import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons'


export default {
  name: 'FileWindow',
  components: {
    FileWindowHeader,
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
    },
    showControls: {
      type: Boolean,
      required: false,
      default: true
    },

  },
  data: function () {
    return {
      isFullScreen: false,
      faIcon: ''
    }
  },
  computed: {
    faWindowMinimize () {
      return faWindowMinimize
    },
    faWindowMaximize () {
      return faWindowMaximize
    },

  },

  mixins: [dragDrop],
  methods: {
    goFullScreen: function () {
      this.isFullScreen = !this.isFullScreen;
    }
  },
  mounted: function () {
    this.faIcon = faWindowMinimize;
    this.$nextTick(function () {
      this.dragDrop(this.id, this.titleId);
    })
  },


}
</script>


<style lang="scss" scoped>

.file-window {
  position: absolute;
  resize: both;
  overflow: auto;
  max-width: 960px;
  width: 100%;
  max-height: 85vh;
  height: 100%;
  margin: auto;
  z-index: 999;
  @media only screen and (max-width: 600px) {
    //top: 20px;
    //max-height: 80vh;
    max-width: 95% !important;
  }

  &.file-window--sm {
    max-width: 500px;
    top: auto;
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
    font-family: 'Comic Neue', cursive;
    font-weight: bold;

    a {
      font-weight: bold;
      text-decoration: underline;
    }
  }

  .file-window__controls {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    line-height: 1;
    .btn {
      width: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .btn.has-fa {
      padding: 10px !important;
    }
    svg {
      height: 20px;
      width: 20px;
    }
  }

}
</style>
