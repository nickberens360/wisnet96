<template>
  <div>
  <transition name="modal">
    <modal-big />
  </transition>
  <div class="layout">
    <aside>
      <img
          class="wisnet-logo"
          alt="wisnet 96 logo"
          src="/wisnetlogo.gif"
      >
      <nav-main :menu-items="menuItems" />

      <div class="aside-footer">
        <img
            class="wisnet-logo"
            alt="wisnet 96 logo"
            src="/aside-footer.png"
        >
      </div>
    </aside>
    <main>
      <nuxt />
    </main>
    <button-round
        v-if="button"
        :button="button"
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

export default {
  components: {
    ButtonRound,
    NavMain,
    ModalBig,
    PageFooter
  },
  computed: {
    menuItems() {
      return this.$store.state.menuItems;
    },
    button() {
      return this.$store.state.options.button;
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


