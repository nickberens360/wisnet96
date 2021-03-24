<template>
  <div :class="post.slug">
    <div class="page-header">
      <img
          v-if="post.slug === 'wisnet-developers'"
          alt="wisnet 96 logo"
          src="/dots.gif"
          class="dots"
      >
      <img
          v-if="post.featured_img_url"
          :src="post.featured_img_url"
          alt=""
      >
    </div>
    <call-out
        v-if="post.callout"
        :content="post.callout"
    />
    <div class="page-content">
      <section v-html="post.content.rendered"></section>
    </div>
  </div>
</template>


<script>
import CallOut from "~/components/CallOut";

export default {
  name: 'PageLayout',
  components: {CallOut},
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    post() {
      if (this.$route.path === '/') {
        return this.posts.find(el => el.slug === 'homepage');
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
  }
};
</script>

<style lang="scss">

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

.homepage, .services {
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

</style>