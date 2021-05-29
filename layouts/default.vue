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
            <nav-main :menu-items="menuItems"/>

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
<!--          <button-round
              v-if="button"
              :heading="button.heading"
              :text="button.text"
              :link="button.link"
              :img="button.image"
          />-->
        </div>

    </InternetExplorer>



    <footer>
      <nav id="navbar-footer" class="navbar navbar-main navbar-expand-lg navbar-dark justify-content-between navbar-footer">
        <ul class="navbar-nav navbar-nav-hover flex-row align-items-center">
          <li class="nav-item">
            <a href="index.html" class="nav-link" role="button">
              <span class="nav-link-inner-text">📺 Start</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="docs/introduction.html" class="nav-link" role="button">
              <span class="nav-link-inner-text">📕 Docs</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="login.html" class="nav-link" role="button">
              <span class="nav-link-inner-text">Login</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="register.html" class="nav-link" role="button">
              <span class="nav-link-inner-text">Register</span>
            </a>
          </li>
        </ul>
        <div class="time text-center">8:40 am</div>
      </nav>
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
import InternetExplorer from "~/components/Windows95/InternetExplorer";

export default {
  components: {
    ButtonRound,
    NavMain,
    ModalBig,
    PageFooter,
    BaseImg,
    InternetExplorer
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


