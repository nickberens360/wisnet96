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
          <img class="hidden-mobile" src="/link.gif" alt="">
          <div class="site-sidebar__group">
            <a v-if="post.ACF.website" :href="post.ACF.website" target="_blank">
            <div style="width:100%">
              <img class="hidden-mobile" src="https://web.archive.org/web/20090821185927/http://geocities.com/SiliconValley/Peaks/8552/reviews/images/computer.gif" alt="">
            </div>
            <span>Visit our Site</span>
            </a>
          </div>

          <img class="hidden-mobile mt-50" src="/tr1.gif" alt="">

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
          <marquee behavior="scroll">
            <h1
                v-if="post.title.rendered"
                v-html="post.title.rendered"
            />
          </marquee>
          <img src="/welcome13d.gif" alt="">

        </div>

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
  font-family: 'Comic Neue', cursive;
  font-weight: 700;
  background: black url("/background.gif");
}

.site-sidebar {
  flex: 200px;
  max-width: 200px;
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
    font-weight: bold;
    font-size: 24px;
    color: blue;
    text-decoration: underline;
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
  font-weight: 700;
  margin-bottom: 0;
  color: white;

}


.site-content {
  flex: 100%;
  flex-grow: 1;
  padding: 20px;

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

@media only screen and ( max-width: 840px ){
  /*.hidden-mobile {
    display: none;
  }*/
  .site-content-container {
    display: block;
  }
  .site-sidebar {
    max-width: 100%;
    //display: none;
  }
  .site-sidebar__container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
    top: auto;
  }
}

@media only screen and ( max-width: 625px ){
  .site-header {
    display: flex;
    flex-direction: column;
  }
}


</style>


