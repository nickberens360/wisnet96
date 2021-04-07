<template>

  <nav
      id="nav"
      class="nav-main"
  >
    <div
        v-for="item in menuItems"
        :key="item.ID"
    >
      <nav-link
          :url="item.url"
          :className="arrayToString(item.classes)"
          :title="item.title"
      />
    </div>
  </nav>

</template>

<script>
import NavLink from '@/components/NavLink.vue'

export default {
  name: 'NavMain',
  components: {
    NavLink
  },
  props: {
    menuItems: {
      type: Array,
      required: false
    }
  },
  /* TODO: change to computed prop */
  methods: {
    arrayToString(array) {
      return array.join(' ');
    }
  },
};
</script>

<style lang="scss" scoped>

.nav-main {
  width: 195px;
  padding: 25px 0;
  text-align: right;
  ::v-deep .nav-link {
    justify-content: flex-end;
  }
}
</style>
