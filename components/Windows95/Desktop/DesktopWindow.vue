<template>
  <div class="desktop-95">

    <div class="desktop-left">
      <DesktopIcon
          id="throwback-folder"
          link="/throwback"
      >
        <template v-slot:icon>
          <img src="/folder.gif" alt="">
        </template>
        <template v-slot:text>
          Throwbacks <font-awesome-icon :icon="['fas', 'adjust']"  />

        </template>
      </DesktopIcon>
      <DesktopIcon
          id="team-folder"
          link="/team"
      >
        <template v-slot:icon>
          <img src="/folder.gif" alt="">
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
          <img src="https://web.archive.org/web/20090829051611/http://www.geocities.com/santuariosfiliales/world_03.gif" alt="">
        </template>
        <template v-slot:text>
          wisnet 96
        </template>
      </DesktopIcon>
      <DesktopIcon
          id="makeit"
          link="/make-a-page"
      >
        <template v-slot:icon>
          <img src="https://web.archive.org/web/20090829015037/http://www.geocities.com/nukinight2001/smashingcomputer.gif" alt="">
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
    </div>

    <slot/>

    <div class="hidden-mobile" style="position: absolute; width: 420px; height: 178px; bottom: 70px; right: 15px; ">
      <FileWindow
          :show-controls="false"
          id="back-to-wisnet"
          title-id="back-to-wisnet-handle"
          title="Learn More"
          class="file-window--sm"
          style="background: var(--wisnet-color-orange); max-height: 200px; z-index: 2"
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
    </div>

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


<style lang="scss" >

.desktop-95 {
  height: calc(100vh - 54px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(https://apiwisnet96.wpengine.com/wp-content/uploads/2021/06/wisnet96-logo-NEW2.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 500px;
  overflow: hidden;

  /deep/ .icon-button {
    color: white !important;
  }
  @media only screen and ( max-width: 960px ){
    background-size: 250px;
    .hidden-mobile {
      display: none;
    }
  }
  @media only screen and ( max-width: 520px ){
    background-size: 200px;
    background-position: center 85%;
  }
}


.desktop-left {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-self: baseline;
  height: 100%;
  padding: 0 20px 20px;
  @media only screen and ( max-width: 960px ){
    display: flex;
    height: auto;
    flex-direction: row;
    justify-content: space-around;
    padding: 0;
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
</style>
