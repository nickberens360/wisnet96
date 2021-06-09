<template>
  <div class="desktop-95">

<!--    <transition name="modal">
      <modal-big/>
    </transition>-->

    <DesktopRegion position="top-left">
      <DesktopIcon
          id="throwback-folder"
          link="/throwback"
      >
        <template v-slot:icon>
          <img src="/open-folder.png" alt="">
        </template>
        <template v-slot:text>
          Throwbacks
        </template>
      </DesktopIcon>
      <DesktopIcon
          id="team-folder"
          link="/team"
      >
        <template v-slot:icon>
          <img src="/open-folder.png" alt="">
        </template>
        <template v-slot:text>
          Meet the Team
        </template>
      </DesktopIcon>
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
    </DesktopRegion>

    <DesktopRegion position="bottom-left">
      <DesktopIcon
          id="makeit"
          link="/make-a-page"
      >
        <template v-slot:icon>
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

    <DesktopRegion
        position="bottom-right"
        style="width: 420px; min-height: 178px;"
    >
      <FileWindow
          :show-controls="false"
          id="back-to-wisnet"
          title-id="back-to-wisnet-handle"
          title="Learn More"
          class="file-window--sm"
          style="background: var(--wisnet-color-orange);"
      >
        <template v-slot:content>
          <button-round
              v-if="button"
              :heading="button.heading"
              :text="button.text"
              :link="button.link"
              :img="button.image"
          />
        </template>

      </FileWindow>
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
import FileWindow from "@/components/Windows95/FileWindow/FileWindow";

export default {
  name: "DesktopWindow",
  components: {
    ButtonRound,
    PageFooter,
    DesktopNavbar,
    DesktopIcon,
    DesktopRegion,
    FileWindow
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


<style lang="scss" scoped>
body {
  overflow: hidden;
}

.desktop-95 {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(https://apiwisnet96.wpengine.com/wp-content/uploads/2021/06/wisnet96-logo-NEW2.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 500px;
  /deep/ .icon-button {
    color: white !important;
  }
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
