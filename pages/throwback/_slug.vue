<template>
  <InternetExplorer
      :id="$route.name"
      :title-id="$route.name"
      :style=" `background: white url(${post.ACF.background_image.url } )` "
      class="text-center"
  >

<!--    <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>-->

    <img
        :src="post.ACF.logo.url"
        alt=""
    >
    <h1
        v-if="post.title.rendered"
        v-html="post.title.rendered"
    />
    <div
        v-if="post.content.rendered"
        v-html="post.content.rendered"
    />
<!--    <img src="https://www.thekidunderscore.com/uploads/1/3/6/4/136404316/image-1_orig.gif" alt="">-->

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
      return this.$store.state.throwbacks;
    },
    post() {
      return this.posts.find(el => el.slug === this.slug);
    }
  },
};
</script>


