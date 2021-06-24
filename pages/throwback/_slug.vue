<template>
  <InternetExplorer
      :id="$route.name"
      :title-id="$route.name"
      class="text-center"
  >

    <!--    <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>-->

    <div class="site-content-container">


      <div class="site-sidebar">
        <div class="site-sidebar__container">
          <img style="display: block; margin-top: auto;" src="/counter.gif" alt="">
          <img src="/link.gif" alt="">
          <div class="site-sidebar__group">
            <a v-if="post.ACF.website" :href="post.ACF.website" target="_blank">
            <div style="width:100%">
              <img src="https://web.archive.org/web/20090821185927/http://geocities.com/SiliconValley/Peaks/8552/reviews/images/computer.gif" alt="">
            </div>
            <span>Visit our Site</span>
            </a>
          </div>
          <br>
          <img src="/tr1.gif" alt="">

        </div>
      </div>
      <div
          class="site-content"
      >

        <div class="site-header">
          <div style="background: white; display: inline-block">
          <img
              v-if="post.ACF.logo.url"
              :src="post.ACF.logo.url"
              alt=""
              class="site-logo"
          >
          </div>
          <marquee behavior="scroll" direction="">
            <h1
                v-if="post.title.rendered"
                v-html="post.title.rendered"
            />
          </marquee>
          <img src="/welcome13d.gif" alt="">

        </div>

<!--        <img style="width: 100%" src="/firebar.gif" alt="">-->

        <div class="site-content-main" :style=" `background-image: ${bgImg};`   ">
          <div class="text-center">
            <img src="/hamster62.gif" alt="">
          </div>
        <div
            v-if="post.content.rendered"
            v-html="post.content.rendered"
        />
        </div>

        <div class="text-center mt-50">
          <img src="/spaceship.gif" alt="">
          <img src="/spaceship.gif" alt="">
          <img src="/spaceship.gif" alt="">
          <img src="/spaceship.gif" alt="">
          <img src="/spaceship.gif" alt="">
        </div>


      </div>
    </div>


  </InternetExplorer>

</template>


<script>

import InternetExplorer from "@/components/Windows95/InternetExplorer/InternetExplorer";


export default {

  components: {InternetExplorer},
  data() {
    return {
      slug: this.$route.params.slug,
      bgImg: 'none',
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
  max-width: 200px;
  max-height: 150px;
  margin: auto;
  display: block;

}



.site-content-container {
  display: flex;
  min-height: 100%;
  padding-right: 20px;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  background: black url("/background.gif");
}

.site-sidebar {
  flex: 200px;
  /*background: black url("https://web.archive.org/web/20091019204838/http://www.geocities.com/rotkwe/background.gif");*/
  max-width: 200px;
  margin-right: 20px;
  padding: 10px 15px;
}

.site-sidebar__container {
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 20px;
}

.site-sidebar__group {
  a {
    color: #fff;
    font-size: 14px;
  }
}

.site-header {
  display: flex;
  text-align: center;
  margin-bottom: 20px;
  border: 2px solid red;
  border-radius: 10px;
  padding: 10px;
  align-items: center;
}
marquee {
  display: block;
  max-width: 200px;
  margin: auto;
}

h1 {
  font-size: 30px;
  margin-bottom: 0;
  color: white;

}


.site-content {
  flex: 100%;
  flex-grow: 1;
  margin: 10px auto 20px;

  text-align: left;
  font-size: 14px;

  /deep/ p, /deep/ ul {
    //border: 4px solid #04ff46 !important;
    font-size: 18px;
    background: white;
    padding: 10px;
    border-radius: 10px;
  }
}

.site-content-main {
  background-size: 25%;
  border-radius: 10px;
  border: 2px solid red;
  padding: 40px 20px;
}


</style>


