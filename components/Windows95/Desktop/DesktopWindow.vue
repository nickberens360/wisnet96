<template>
  <div class="desktop-95">

    <transition name="modal">
      <modal-big/>
    </transition>

    <DesktopRegion>
      <DesktopIcon
          id="wisnet96"
          link="/page/about-wisconsin-networks"
      >
        <template v-slot:icon>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Rotating_globe.gif" alt="">
        </template>
        <template v-slot:text>
          wisnet 96
        </template>
      </DesktopIcon>
      <DesktopIcon
          v-for="item in throwbackLinks"
          :key="item.ID"
          :id="item.slug"
          :link="'/throwback/'+item.slug"
      >
        <template v-slot:icon>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Rotating_globe.gif" alt="">
        </template>
        <template v-slot:text>
          <div v-html="item.title.rendered "></div>
        </template>
      </DesktopIcon>
    </DesktopRegion>

    <DesktopRegion position="bottom-left">
      <DesktopIcon
          id="makeit"
          link="/make-a-page"
          class="mb-100"
      >
        <template v-slot:icon>
<!--          🚧-->
          <img src="/animated-gifs-under-construction-227.gif.pagespeed.ce.TM2vvZ_QxI.gif" alt="">
        </template>
        <template v-slot:text>
          Make a Page
        </template>
      </DesktopIcon>
      <DesktopIcon
          id="welcome"
          link="/"
      >
        <template v-slot:icon>
          🗒️
        </template>
        <template v-slot:text>
          Welcome
        </template>
      </DesktopIcon>
    </DesktopRegion>


    <DesktopRegion position="top-right">
      <DesktopIcon
          id="team-folder"
          link="/team"
          class="mb-100"
      >
        <template v-slot:icon>
          <!--          🚧-->
          <img src="/open-folder.png" alt="">
        </template>
        <template v-slot:text>
          Meet the Team
        </template>
      </DesktopIcon>
      <DesktopIcon
          id="back-to"
          link="www.wisnet.com"
          class="mb-100"
      >
        <template v-slot:icon>
          <img src="/flux.gif" alt="">

        </template>
        <template v-slot:text>
          Back to 2021
        </template>
      </DesktopIcon>
    </DesktopRegion>



    <slot/>



    <DesktopNavbar
        :nav-items="throwbackLinks"
    >
      <div class="time text-center"></div>
    </DesktopNavbar>


  </div>
</template>


<script>
import ModalBig from '@/components/ModalBig.vue'
import PageFooter from '@/components/PageFooter.vue'
import ButtonRound from "@/components/ButtonRound";
import DesktopNavbar from "@/components/Windows95/Desktop/DesktopNavbar";
import DesktopIcon from "@/components/Windows95/Desktop/DesktopIcon";
import DesktopRegion from "@/components/Windows95/Desktop/DesktopRegion";

export default {
  name: "DesktopWindow",
  components: {
    ButtonRound,
    ModalBig,
    PageFooter,
    DesktopNavbar,
    DesktopIcon,
    DesktopRegion
  },

  computed: {
    throwbackLinks() {
      return this.$store.state.throwbacks;
    },
    button() {
      return this.$store.state.options.button;
    },

  },
}
</script>


<style lang="scss">
body {
  overflow: hidden;
}
.desktop-95 {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('@/static/wisnet96-logo-NEW.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 500px;

}

.windows-desktop-icons {
  position: relative;
  align-self: baseline;
  padding: 0 30px;

  .icon-button {
    margin-bottom: 20px;
  }
}

/*.page-footer {
  padding-top: 30px;
}*/
</style>
