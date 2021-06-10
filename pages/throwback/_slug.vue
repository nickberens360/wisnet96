<template>
  <InternetExplorer
      :id="$route.name"
      :title-id="$route.name"
      :style=" `background: ${bgImg};`   "
      class="text-center"
  >

    <!--    <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>-->

    <img
        :src="post.ACF.logo.url"
        alt=""
        class="site-logo"
    >
    <div
        class="site-content"
    >
      <marquee behavior="scroll" direction="">
        <h1
            v-if="post.title.rendered"
            v-html="post.title.rendered"
        />
      </marquee>
      <div
          v-if="post.content.rendered"
          v-html="post.content.rendered"
      />
    </div>

    <!--    <img src="https://www.thekidunderscore.com/uploads/1/3/6/4/136404316/image-1_orig.gif" alt="">-->

  </InternetExplorer>

</template>


<script>

import InternetExplorer from "@/components/Windows95/InternetExplorer/InternetExplorer";


export default {

  components: {InternetExplorer},
  data() {
    return {
      slug: this.$route.params.slug,
      bgImg: 'url(/clouds2.jpeg)',
      // metaTitle: ''
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
  mounted() {
    /*if (this.post.title.rendered) {
      this.metaTitle = this.post.title.rendered
    } else {
      this.metaTitle = 'Stuff'
    }*/
    if (this.post.ACF.background_image.url) {
      this.bgImg = `url(${this.post.ACF.background_image.url})`
    }
  },
  /*head: {
    title: 'wisnet96 | '+ this.metaTitle,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
  }*/
};
</script>

<style lang="scss" scoped>
.site-logo {
  max-width: 300px;
  margin-bottom: 20px;
  margin-top: 20px;

}
marquee {
  display: block;
  max-width: 300px;
  margin: auto;
}

h1 {
  font-size: 30px;
  margin-bottom: 20px;
}
.site-content {
  max-width: 500px;
  background: #fff;
  margin: auto;
  padding: 20px;
  text-align: left;
  font-size: 14px;
}

</style>


