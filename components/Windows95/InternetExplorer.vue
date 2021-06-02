<template>

    <div id="drag" class="card card-tertiary internet-explorer">
      <InternetExplorerHeader id="handle"/>
      <div class="card-body">
        <slot/>

      </div>
    </div>

</template>

<script>
import InternetExplorerHeader from "@/components/Windows95/InternetExplorerHeader";
import dragDrop from '@/components/mixins/drag-drop'

export default {
  name: "InternetExplorer",
  components: {
    InternetExplorerHeader
  },
  mixins: [dragDrop],
  mounted: function () {
    this.$nextTick(function () {
      this.dragDrop('drag', 'handle');
    })
  },



}
</script>

<!--<style>
.internet-explorer {
  background: white;
}
</style>-->

<style lang="scss" scoped>

.internet-explorer {
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