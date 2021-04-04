<template>

  <nav
      id="nav"
      class="nav-main"
  >

      <div v-for="item in menuItems" :key="item.ID">
        <nuxt-link exact :to="removeApiBase(item.url)" :class="item.classes" class="nav-link">
          {{ item.title }}
        </nuxt-link>
      </div>

  </nav>

</template>

<script>

export default {
  props: {
    menuItems: {
      type: Array,
      required: false
    }
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
  /*created() {
    this.$store.dispatch("getMenuItems");
  }*/
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/_triangle.scss";
.nav-main {
  width: 195px;
  padding: 25px 0;
  font-family: Arial, sans-serif;
}

.nav-link {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 4px;
  font-weight: bold;
  text-align: right;
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

  &.orange:after {
    @include triangle(var(--wisnet-color-orange));
  }

  &.red:after {
    @include triangle(var(--wisnet-color-red));
  }

  &.pink:after {
    @include triangle(var(--wisnet-color-pink));
  }

  &.blue-100:after {
    @include triangle(var(--wisnet-color-blue-100));
  }

  &.yellow:after {
    @include triangle(var(--wisnet-color-yellow));
  }

}
</style>
