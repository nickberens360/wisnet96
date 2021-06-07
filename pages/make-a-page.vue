<template>

  <FileWindow
      :id="$route.name"
      :title-id="$route.name+'-handle'"
      class="file-window--sm"
      title="Make a Page"
  >

    <template v-slot:content>
      <form action="#" class="mt-4">

        <div class="text-center">
          <img src="/animated-gifs-under-construction-227.gif.pagespeed.ce.TM2vvZ_QxI.gif" alt="">
        </div>

        <iframe :src="`${apiBaseUrl}/gfembed/?f=2`" width="100%" height="500" frameBorder="0" class="gfiframe"></iframe>
        <script :src="`${apiBaseUrl}/wp-content/plugins/gravity-forms-iframe/assets/scripts/gfembed.min.js`" type="text/javascript"></script>

      </form>
    </template>
  </FileWindow>


</template>

<script>

import FileWindow from "@/components/Windows95/FileWindow/FileWindow";

export default {
  layout: 'default',
  components: {FileWindow},
  computed: {
    apiBaseUrl() {
      return process.env.BASE_URL;
    },
  },
};
</script>

<style scoped lang="scss">
.file-window {
  /deep/ .card-body {
    padding: 20px;
  }

}

</style>


