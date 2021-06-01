<template>
  <div>
    <WindowsDesktop>
      {{ slug }}
      <nuxt/>
    </WindowsDesktop>
  </div>
</template>


<script>
import WindowsDesktop from "@/components/Windows95/WindowsDesktop";
import PageSidebar from "@/components/PageSidebar";

export default {
  components: {
    WindowsDesktop,
    PageSidebar
  },
  data() {
    return {
      slug: this.$route.params,
    };
  },
}
</script>

<style scoped>
.internet-explorer  {
  background: white;
}
</style>


