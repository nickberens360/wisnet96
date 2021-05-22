<template>
  <div :class="page.slug" class="page-layout">
    <page-header>
      <img
          v-if="page.slug === 'wisnet-developers'"
          alt="wisnet 96 logo"
          src="/dots.gif"
          class="dots"
      >
      <img
          v-if="page.featured_img_url"
          :src="page.featured_img_url"
          alt=""
      >
    </page-header>
    <call-out
        v-if="page.callout"
        :content="page.callout"
    />
    <h1 v-if="title">⭐ {{title}} ⭐</h1>
    <div class="page-content" v-html="page.content.rendered"></div>
    <div class="page-footer" slot="content">
      <img
          alt="wisnet 96 logo"
          src="/dots.gif"
      >
    </div>
  </div>
</template>


<script>
import CallOut from "@/components/CallOut";
import PageHeader from "@/components/PageHeader";

export default {
  name: 'PageLayout',
  components: {CallOut, PageHeader},
  props: {
    page: {
      type: Object,
      required: false
    },
    title: {
      type: String,
      required: false
    }
  },
  head() {
    return {
      title: `wisnet96 | ${this.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page description'
        }
      ]
    }
  }

};
</script>

<style lang="scss">

.page-layout {
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

</style>