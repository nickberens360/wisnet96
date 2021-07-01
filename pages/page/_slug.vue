<template>
  <main>
    <div
        :class="slug"
        class="page-layout"
    >
      <page-header>
        <img
            v-if="slug === 'wisnet-developers'"
            alt="wisnet 96 logo"
            src="/dots.gif"
            class="dots"
        >
        <img
            v-if="post.featured_img_url"
            :src="post.featured_img_url"
            alt=""
        >
      </page-header>
      <call-out
          v-if="post.callout"
          :content="post.callout"
      />
      <h1 v-if="post.title.rendered">⭐ {{ post.title.rendered }} ⭐</h1>
      <div class="page-content" v-html="post.content.rendered"></div>
      <div class="page-footer" slot="content">
        <img
            alt="wisnet 96 logo"
            src="/dots.gif"
        >
      </div>
    </div>
  </main>
</template>


<script>

import CallOut from "@/components/CallOut";
import PageHeader from "@/components/PageHeader";
import NavMain from '@/components/NavMain.vue';
import BaseImg from "~/components/BaseImg";

export default {
  layout: 'default',
  components: {CallOut, PageHeader, NavMain, BaseImg},
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  computed: {
    logo() {
      return this.$store.state.options.logo;
    },
    locationImage() {
      return this.$store.state.options.location_image;
    },
    posts() {
      return this.$store.state.posts;
    },
    post() {
      return this.posts.find(el => el.slug === this.slug);
    }
  },
  head() {
    return {
      title: '96 '+this.post.title.rendered,
    }
  }
};
</script>



