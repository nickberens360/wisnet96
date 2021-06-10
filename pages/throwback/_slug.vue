<template>
  <InternetExplorer
      :id="$route.name"
      :title-id="$route.name"
      :style=" `background: ${bgImg};`   "
      class="text-center"
  >

    <!--    <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>-->


    <div
        class="site-content"
    >
      <img
          :src="post.ACF.logo.url"
          alt=""
          class="site-logo"
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
      bgImg: 'url(/bg90s.jpeg)',
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
  max-height: 200px;
  margin: auto auto 20px;
  display: block;

}

marquee {
  display: block;
  max-width: 300px;
  margin: auto;
}

h1 {
  font-size: 30px;
  margin-bottom: 20px;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
}

.site-content {
  max-width: 700px;
  background: #fff;
  margin: 40px auto auto;
  padding: 20px;
  text-align: left;
  font-size: 14px;

  /deep/ p {
    border: 4px solid #04ff46 !important;
    padding: 10px;
    border-radius: 10px;
  }
}


</style>


