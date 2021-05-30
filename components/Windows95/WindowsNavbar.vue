<template>
  <nav class="navbar navbar-main navbar-expand-lg navbar-dark justify-content-between navbar-footer">
    <ul class="navbar-nav navbar-nav-hover flex-row align-items-center">
      <li
          class="nav-item"
          v-for="item in navItems"
          :key="item.ID"
      >
        <a href="index.html" class="nav-link" role="button">
          <span class="nav-link-inner-text">Item</span>
        </a>
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

<style scoped>

</style>