<template>
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
</template>

<script>
import CallOut from "@/components/CallOut";
import PageHeader from "@/components/PageHeader";
import NavMain from "@/components/NavMain";
import BaseImg from "@/components/BaseImg";

export default {
name: "PageSidebar",
  components: {CallOut, PageHeader, NavMain, BaseImg},
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  computed: {
    menuItems() {
      return this.$store.state.menuItems;
    },
    logo() {
      return this.$store.state.options.logo;
    },
    locationImage() {
      return this.$store.state.options.location_image;
    }

  },
};
</script>
