<template>
  <footer>
    <nav class="desktop-navbar navbar navbar-main navbar-expand-lg navbar-dark justify-content-between navbar-footer">
      <ul class="navbar-nav navbar-nav-hover flex-row align-items-center">
        <li
            class="nav-item"
        >
          <nuxt-link
              exact to="/desktop"
              class="nav-link"
              role="button"
          >
            <span class="nav-link-inner-text">🏠 Desktop</span>
          </nuxt-link>
        </li>

        <li
            class="nav-item"
        >
          <nuxt-link
              exact to="/"
              class="nav-link"
              role="button"
          >
            <span class="nav-link-inner-text">👋  Welcome</span>
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
  </footer>
</template>

<script>
import NavLink from "@/components/NavLink";
import WindowsButton from "@/components/Windows95/WindowsButton";

export default {
  name: "DesktopNavbar",
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
.desktop-navbar {
  position: fixed;
  top: auto;
  right: 0;
  bottom: 0;
  left: 0;
  .navbar-nav {
    .nav-link {
      font-size: 20px;
    }
  }

  .nuxt-link-active {
    border: 2px inset #fff !important;
    background: silver;
    color: #424242;
    box-shadow: -1px -1px #000 !important;
    outline: 0 !important;
    &:before {
      display: none;
    }
    //background: url(background.bmp);
  }

}
</style>