<template>
  <div class="nav">
    <ul>
      <li v-for="item in menuItems" :key="item.ID">
        <nuxt-link exact :to="removeApiBase(item.url)" :class="item.classes">
          {{ item.title }}
        </nuxt-link>
      </li>

    </ul>
  </div>
</template>

<script>

export default {
  computed: {
    menuItems() {
      return this.$store.state.menuItems;
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
  created() {
    console.log(this.menuItems);
    this.$store.dispatch("getMenuItems");
  }
};
</script>

<style lang="scss" scoped>
.nav {
  background: #000;
  color: #fff;
  padding: 1em 100px;

  a {
    color: #fff;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
}

div {
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
}

ul {
  padding-left: 0;

  li {
    display: inline-block;
    margin-right: 30px;
  }
}
</style>
