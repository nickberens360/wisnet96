<template>

  <div>
    <page-layout v-if="post" :page="post" :title="post.title.rendered"/>
  </div>

</template>


<script>

import PageLayout from "@/layouts/PageLayout";

export default {
  components: {PageLayout},
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    post() {
      if (this.$route.path === '/') {
        return this.posts.find(el => el.slug === 'index');
      } else {
        return this.posts.find(el => el.slug === this.slug);
      }
    }
  },

  created() {
    this.$store.dispatch("getPosts");
  }
};
</script>

