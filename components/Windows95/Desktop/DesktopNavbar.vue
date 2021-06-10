<template>
  <footer>
    <nav class="desktop-navbar navbar navbar-main navbar-expand-lg navbar-dark justify-content-between navbar-footer">


      <div class="dropdown dropup show nav-item mr-1">
        <a
            class="nav-link btn p-2"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
        >
          Dropdown link
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover flex-row align-items-center position-relative mr-auto">



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
        >
          <nuxt-link
              exact to="/throwback"
              class="nav-link"
              role="button"
          >
            <span class="nav-link-inner-text">Throwbacks</span>
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
  .btn {
    font-size: 20px;
    line-height: 1;
    padding: 4px 10px;
  }
  .navbar-nav {
    .nav-link, {
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