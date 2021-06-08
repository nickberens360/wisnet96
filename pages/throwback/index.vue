<template>
  <FileWindow
      :id="$route.name"
      :title-id="$route.name+'-handle'"
      title="Throwbacks"
      class="file-window--md text-center bg-white"
  >

    <template v-slot:content>

      <div class="p-4 d-flex flex-wrap justify-content-around">
        <DesktopIcon
            id="wisnet96"
            link="/page/about-wisconsin-networks"
            link-color="blue"
        >
          <template v-slot:icon>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Rotating_globe.gif" alt="">
          </template>
          <template v-slot:text>
            wisnet 96
          </template>
        </DesktopIcon>
        <DesktopIcon
            v-for="item in posts"
            :key="item.ID"
            :id="item.slug"
            :link="'/throwback/'+item.slug"
            link-color="blue"
        >
          <template v-slot:icon>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Rotating_globe.gif" alt="">
          </template>
          <template v-slot:text>
            {{ item.title.rendered }}
          </template>
        </DesktopIcon>
      </div>

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
};
</script>

<style lang="scss">
/*.color-blue {
  .icon-button {
    color: blue !important;
  }
  .icon-button__text {
    color: blue !important;

  }
}*/
</style>



