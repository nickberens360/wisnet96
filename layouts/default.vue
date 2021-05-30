<template>
  <div class="desktop-95 bg-secondary">

    <transition name="modal">
      <modal-big />
    </transition>

    <InternetExplorer>
        <div class="layout">
          <aside>
            <base-img
                v-if="logo"
                img-class="wisnet-logo"
                :img-src="logo.url"
                :img-alt="logo.alt"
            />
            <nav-main :menu-items="menuItems" />

            <div class="aside-footer">
              <base-img
                  v-if="locationImage"
                  :img-src="locationImage.url"
                  :img-alt="locationImage.alt"
              />
            </div>
          </aside>
          <main>
            <nuxt/>
          </main>

        </div>

    </InternetExplorer>

    <button-round
        v-if="button"
        :heading="button.heading"
        :text="button.text"
        :link="button.link"
        :img="button.image"
    />


    <footer>
      <WindowsNavbar
          :nav-items="menuItems"
      >
        <div class="time text-center">8:40 am</div>
      </WindowsNavbar>
    </footer>

  </div>
</template>


<script>
// @ is an alias to /src
import NavMain from '@/components/NavMain.vue'
import ModalBig from '@/components/ModalBig.vue'
import PageFooter from '@/components/PageFooter.vue'
import ButtonRound from "~/components/ButtonRound";
import BaseImg from "~/components/BaseImg";
import WindowsNavbar from "~/components/Windows95/WindowsNavbar";
import InternetExplorer from "~/components/Windows95/InternetExplorer";

export default {
  components: {
    ButtonRound,
    NavMain,
    ModalBig,
    PageFooter,
    BaseImg,
    InternetExplorer,
    WindowsNavbar
  },
  computed: {
    menuItems() {
      return this.$store.state.menuItems;
    },
    button() {
      return this.$store.state.options.button;
    },
    logo() {
      return this.$store.state.options.logo;
    },
    locationImage() {
      return this.$store.state.options.location_image;
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
/*.page-footer {
  padding-top: 30px;
}*/
</style>


