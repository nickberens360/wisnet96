<template>

  <div>
    <page-layout v-if="post" :page="post" :title="post.title.rendered"/>
  </div>

</template>


<script>

import PageLayout from "@/layouts/PageLayout";
import ButtonRound from "@/components/ButtonRound";

export default {
  components: {PageLayout, ButtonRound},
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
};
</script>

