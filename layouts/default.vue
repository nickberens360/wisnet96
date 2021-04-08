<template>
  <div>
    <transition name="modal">
      <modal-big />
    </transition>
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
      <button-round
          v-if="button"
          :heading="button.heading"
          :text="button.text"
          :link="button.link"
          :img="button.image"
      />
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import NavMain from '@/components/NavMain.vue'
import ModalBig from '@/components/ModalBig.vue'
import PageFooter from '@/components/PageFooter.vue'
import ButtonRound from "~/components/ButtonRound";
import BaseImg from "~/components/BaseImg";

export default {
  components: {
    ButtonRound,
    NavMain,
    ModalBig,
    PageFooter,
    BaseImg
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
  created() {
    this.$store.dispatch("getMenuItems");
    this.$store.dispatch("getOptions");
  },
}
</script>


<style lang="scss">
.page-footer {
  padding-top: 30px;
}
</style>


