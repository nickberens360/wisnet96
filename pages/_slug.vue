<template>
  <div class="layout">

<!--    <h1 style="color: white">{{ $route.path.endsWith('/'+slug+'/') }} asdfdsf</h1>-->

      <main v-if="$route.path.endsWith('/'+slug+'/')">
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

  </div>


</template>


<script>

import CallOut from "@/components/CallOut";
import PageHeader from "@/components/PageHeader";
import NavMain from '@/components/NavMain.vue';
import BaseImg from "~/components/BaseImg";
// import {FadeTransition} from 'vue2-transitions';
// import PageSidebar from "@/components/PageSidebar";

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
      if (this.$route.path === '/') {
        return this.posts.find(el => el.slug === 'index');
      } else {
        return this.posts.find(el => el.slug === this.slug);
      }
    },
    isMaybeLoaded() {
      return this.$route.params.slug === this.slug
    },
  },
};
</script>

<style>
.layout {
  padding-top: 20px;
  background: black;
}

</style>

<style lang="scss">
.page-layout {
  font-family: serif;
  color: var(--wisnet-color-gray-200);

  h1 {
    color: var(--wisnet-color-red);
    text-align: center;
  }
}

.index .page-content {
  color: var(--wisnet-color-gray-200);
}


.has-text-align-center {
  text-align: center;
}

.page-header {
  text-align: center;
  margin-bottom: 30px;

  img {
    display: block;
    max-width: 100%;
    margin: auto;
  }

  p {
    font-weight: bold;
  }
}

.dots {
  margin-bottom: 30px !important;
}

.page-content {
  font-weight: bold;
  font-size: 17px;

  p, ul {
    margin-bottom: 30px;
  }

  a {
    color: var(--wisnet-color-red);
  }
}

.highlight {
  font-weight: bold;
  color: var(--wisnet-color-red);
}

.list-highlight {
  font-weight: bold;
  font-size: 20px;
}


.page-footer {
  text-align: center;
  padding-bottom: 30px;
}


.index, .services {
  strong {
    color: var(--wisnet-color-red)
  }
}

.make-a-page {
  color: var(--wisnet-color-green-200);

  h4, span {
    color: var(--wisnet-color-yellow);
  }

  h2 a {
    color: var(--wisnet-color-yellow);
    text-decoration: underline;
  }
}

.wisnet-developers {
  text-align: center;
}

/*.page-layout {
  font-family: sans-serif;
  font-size: 14px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: serif;
  }
}*/

</style>

