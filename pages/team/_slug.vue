<template>

  <InternetExplorer
      :id="$route.name"
      :title-id="$route.name+'-handle'"
      class="file-window--md bg-white"
      title="Welcome"
  >
    <div class="text-center">
      <img
          style="max-width: 300px;"
          :src="post.featured_img_url"
          class="mb-3"
          alt=""
      >
      <h1 style="margin-bottom: 30px;">{{ post.title.rendered }}</h1>
    </div>
    <div style="font-size: 14px;" v-html="post.content.rendered"/>
  </InternetExplorer>


</template>

<script>

import InternetExplorer from "@/components/Windows95/InternetExplorer/InternetExplorer";

export default {

  components: {InternetExplorer},
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  computed: {
    posts() {
      return this.$store.state.team;
    },
    post() {
      return this.posts.find(el => el.slug === this.slug);
    }
  },
};
</script>

<style scoped lang="scss">
.file-window {
  /deep/ .card-body {
    padding: 20px;
  }

  /*.btn-tertiary {
    background-color: #000181;
    color: white !important;
  }*/

  p {
    font-size: 16px;
    line-height: 1.75;
  }

  .emoji {
    font-size: 30px;
  }
}

</style>


