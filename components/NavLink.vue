<template>
  <nuxt-link
      exact :to="removeApiBase(url)"
      :class="className"
      class="nav-main-link"
  >
    {{ title }}
  </nuxt-link>
</template>

<script>
export default {
name: "NavLink",
  props: {
    url: {
      type: String
    },
    title: {
      type: String
    },
    className: {
      type: String
    },

  },
  methods: {
    removeApiBase(str) {
      let pathArray = str.split('/');
      let protocol = pathArray[0];
      let host = pathArray[2];
      let url = protocol + '//' + host;
      return str.replace(url, '')
    }
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/mixins/_triangle.scss";
@import "@/assets/scss/variables/_colors.scss";
.nav-main-link {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  font-style: italic;

  &:after {
    content: '';
    display: block;
    margin-left: 8px;
    @include triangle();
  }
  @each $id, $color in $colors {
    &.nuxt-link-active.#{$id} {
      color: var(--wisnet-color-#{$id});
    }
    &.#{$id}::after {
        @include triangle(var(--wisnet-color-#{$id}));
    }
  }

}
</style>