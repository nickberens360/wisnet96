<template>
  <FileWindow
      :id="$route.name"
      :title-id="$route.name+'-handle'"
      title="Throwbacks"
      class="file-window--md text-center bg-white"
  >

    <template v-slot:content>
      <img
          src="https://web.archive.org/web/19970225052545/http://www2.geocities.com:80/SoHo/1085/wwwdani.gif"
          style="max-width: 300px;"
          alt=""
      >
      <br>
      <br>
      <h2 style="color: red; margin-bottom: 40px">Client Throwbacks</h2>
      <p>Click on a hyperlink below to checkout some of our client's Throwback websites!</p>

      <ul class="text-left">
        <li
            v-for="item in posts"
            :key="item.ID"
            :id="item.slug"
        >
          <NuxtLink :to="'/throwback/'+item.slug">
            <span v-html="item.title.rendered" />
          </NuxtLink>
        </li>
      </ul>

    </template>

  </FileWindow>

</template>


<script>

import FileWindow from "@/components/Windows95/FileWindow/FileWindow";
import DesktopIcon from "@/components/Windows95/Desktop/DesktopIcon";


export default {

  components: {FileWindow, DesktopIcon},
  /*data() {
    return {
      slug: this.$route.params.slug
    };
  },*/
  computed: {
    posts() {
      return this.$store.state.throwbacks;
    }
  },
  head() {
    return {
      title: 'Throwbacks',
    }
  }
};
</script>

<style lang="scss" scoped>
.file-window {
  /deep/ .card-body {
    padding: 20px !important;
    background: #fff url('@/static/floppy.png');
  }
}

/*.color-blue {
  .icon-button {
    color: blue !important;
  }
  .icon-button__text {
    color: blue !important;

  }
}*/
</style>



