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
          {{ item.title.rendered }}
        </template>
      </DesktopIcon>
    </DesktopRegion>




    <slot/>


    <!--        <button-round
                v-if="button"
                :heading="button.heading"
                :text="button.text"
                :link="button.link"
                :img="button.image"
            />-->


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
  padding: 20px;

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
