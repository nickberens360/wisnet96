<template>

  <FileWindow
      :id="$route.name"
      :title-id="$route.name+'-handle'"
      class="file-window--md"
      title="Learn More"
  >

    <template v-slot:content>
      <button-round
          v-if="button"
          :heading="button.heading"
          :text="button.text"
          :link="button.link"
          :img="button.image"
      />
    </template>
  </FileWindow>


</template>

<script>

import FileWindow from "@/components/Windows95/FileWindow/FileWindow";
import ButtonRound from "@/components/ButtonRound";

export default {
  layout: 'default',
  components: {FileWindow, ButtonRound},
  computed: {
    button() {
      return this.$store.state.options.button;
    },

  },
};
</script>

<style scoped lang="scss">
.file-window {
  /deep/ .card-body {
    padding: 0;
  }

  /deep/ .button-round {
    display: block;
    text-align: center;
    height: 100%;
    .button-round__image {
      margin-bottom: 20px;
    }
  }
}

</style>


