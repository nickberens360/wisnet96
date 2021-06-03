<template>
  <InternetExplorer
      :id="$route.name"
      :title-id="$route.name"
      :style=" `background-image: url(${post.ACF.background_image.url})` "
      class="text-center"
  >

    <img :src="post.ACF.logo.url" alt="">
    <h1 v-if="post.title.rendered">{{ post.title.rendered }}</h1>
    <div v-html="post.content.rendered"/>
    <img src="https://www.thekidunderscore.com/uploads/1/3/6/4/136404316/image-1_orig.gif" alt="">

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


