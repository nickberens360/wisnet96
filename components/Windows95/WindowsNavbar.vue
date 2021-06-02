<template>
  <nav class="navbar navbar-main navbar-expand-lg navbar-dark justify-content-between navbar-footer">
    <ul class="navbar-nav navbar-nav-hover flex-row align-items-center">
      <li
          class="nav-item"
      >
        <nuxt-link
            exact to="/"
            class="nav-link"
            role="button"
        >
          <span class="nav-link-inner-text">🏠 Start</span>
        </nuxt-link>
      </li>

      <li
          class="nav-item"
      >
        <nuxt-link
            exact to="/page/about-wisconsin-networks/"
            class="nav-link"
            role="button"
        >
          <span class="nav-link-inner-text">wisnet 96</span>
        </nuxt-link>
      </li>

      <li
          class="nav-item"
          v-for="item in navItems"
          :key="item.ID"
      >
        <nuxt-link
            exact :to="'/throwback/'+item.slug"
            class="nav-link"
            role="button"
        >
          <span class="nav-link-inner-text">{{ item.title.rendered }}</span>
        </nuxt-link>
      </li>
    </ul>
    <slot/>
  </nav>
</template>

<script>
import NavLink from "@/components/NavLink";
import WindowsButton from "@/components/Windows95/WindowsButton";

export default {
  name: "WindowsNavbar",
  components: {
    NavLink,
    WindowsButton
  },
  props: {
    navItems: {
      type: Array,
      required: false
    },
  },
  methods: {
    arrayToString(array) {
      return array.join(' ');
    }
  },
}
</script>

<style scoped lang="scss">
.navbar {
  .navbar-nav {
    .nav-link {
      font-size: 20px;
    }
  }
}
</style>