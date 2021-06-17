<template>
  <nav class="navbar navbar-main navbar-expand-lg navbar-dark justify-content-between navbar-footer">
    <ul class="navbar-nav navbar-nav-hover flex-row align-items-center">
      <li class="nav-item">
        <button class="btn btn-icon" @click="$router.go(-1)"><span class="btn-icon__icon">&#9664;</span><br>Back</button>
      </li>
      <li class="nav-item">
        <button class="btn btn-icon" @click="$router.go(+1)"><span class="btn-icon__icon">&#9654;</span><br>Forward</button>
      </li>
    </ul>
    <div class="d-flex align-items-center">

      <span class="font-small mr-2">Share:</span>
      <a
          :href="`https://www.facebook.com/sharer/sharer.php?u=https://www.wisnet96.com${path}`"
          class="mr-2"
          target="_blank"
      >
        <img src="/social/facebook.png" alt="">
      </a>
      <a
          :href="`https://twitter.com/share?text=Checkout our throwback!&url=https://www.wisnet96.com${path}`"
          target="_blank"
          class="mr-2"
      >
        <img src="/social/twitter.png" alt="">
      </a>

      <a
          :href="`https://www.linkedin.com/shareArticle?mini=true&url=https://www.wisnet96.com${path}`"
          class="mr-2"
          target="_blank"
      >
        <img src="/social/linkedin.png" alt="">
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'FileWindowNav',
  data() {
    return {
      path: '',
    };
  },
  computed: {
    twitterShare() {
      // console.log(encodeURIComponent(`https://www.wisnet96.com/${this.$route.params.slug}`));

      return this.$route.query
    }
  },
  mounted() {
    this.path = this.$route.path
  }
}
</script>

<style scoped>

</style>