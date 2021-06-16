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
          <img
              src="/wisnet96-logo-NEW.png"
              alt=""
              style="width: 29px;"
          > Menu
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <div class="dropdown-96">
            <div class="dropdown-title">
              <span><strong>wisnet</strong>&nbsp;96</span>
            </div>
            <div class="dropdown-content">
              <NuxtLink
                  class="dropdown-item"
                  to="/desktop"
              >
                <span class="link-icon">🏠</span> Desktop
              </NuxtLink>
              <NuxtLink
                  class="dropdown-item"
                  to="/"
              >
                <span class="link-icon">👋</span> Welcome
              </NuxtLink>
              <NuxtLink
                  class="dropdown-item"
                  to="/page/about-wisconsin-networks/"
              >
                <span class="link-icon"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Rotating_globe.gif" alt=""></span> wisnet 96
              </NuxtLink>
              <NuxtLink
                  class="dropdown-item"
                  to="/throwback"
              >
                <span class="link-icon"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Rotating_globe.gif" alt=""></span> Throwbacks
              </NuxtLink>
            </div>
          </div>

        </div>

      </div>
      <nuxt-link
          exact to="/learn-more"
          class="nav-link btn p-2 mr-auto hidden-desktop"
          role="button"
      >
        <span class="nav-link-inner-text">Learn More</span>
      </nuxt-link>
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



.dropdown-96 {
  display: flex;
  //align-items: center;
  //justify-content: flex-start;
}

.dropdown-title {

  display: flex;
  justify-content: center;
  align-items: center;
  flex: 45px;
  max-width: 45px;
  background: #ff6600;
  //border-right: 2px inset #000 !important;
  span {
    display: block;
    transform: rotate(-90deg);
    flex: 100%;
    font-weight: bold;
    font-family: Arial, sans-serif;
    font-size: 20px;
    color: white;
  }

  //transform: rotate(-90deg);
  /*height: 100%;
  flex: 100%;*/
}

.desktop-navbar {
  position: fixed;
  top: auto;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;

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
    box-shadow: -1px -1px #000 !important;
    background: silver;
    color: #424242;
    outline: 0 !important;

    &:before {
      display: none;
    }

    //background: url(background.bmp);
  }

}

.hidden-desktop {
  display: none;
}

@media only screen and ( max-width: 960px ){
  .navbar-nav {
    display: none;
  }
  .hidden-desktop {
    display: block;
  }
}
</style>