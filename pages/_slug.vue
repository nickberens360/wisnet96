<template>

  <div>
    <page-layout v-if="post" :page="post" :title="post.title.rendered"/>
  </div>

</template>


<script>

import PageLayout from "@/layouts/PageLayout";

export default {
  components: {PageLayout},
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
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  created() {
    this.$store.dispatch("getPosts");
  },
  head() {
    return {
      title: 'wisnet 96'
    }
  }
};
</script>

