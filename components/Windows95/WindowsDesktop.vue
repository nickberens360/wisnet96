<template>
  <div class="desktop-95">

    <transition name="modal">
      <modal-big/>
    </transition>

    <div class="windows-desktop-icons">
      <DesktopIcon/>
      <DesktopIcon/>
      <DesktopIcon/>
    </div>




      <slot/>


<!--        <button-round
            v-if="button"
            :heading="button.heading"
            :text="button.text"
            :link="button.link"
            :img="button.image"
        />-->

    <footer>
      <WindowsNavbar
          :nav-items="throwbackLinks"
      >
        <div class="time text-center"></div>
      </WindowsNavbar>
    </footer>

  </div>
</template>


<script>
import ModalBig from '@/components/ModalBig.vue'
import PageFooter from '@/components/PageFooter.vue'
import ButtonRound from "~/components/ButtonRound";
import WindowsNavbar from "~/components/Windows95/WindowsNavbar";
import DesktopIcon from "@/components/Windows95/DesktopIcon";

export default {
  name: "WindowsDesktop",
  components: {
    ButtonRound,
    ModalBig,
    PageFooter,
    WindowsNavbar,
    DesktopIcon
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
.desktop-95 {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  overflow: hidden;

  footer {
    margin-top: auto;
    align-self: stretch;
    color: black;
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

</style>