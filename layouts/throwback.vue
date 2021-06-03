<template>
  <div>
    <WindowsDesktop>
      {{ slug }}
      <nuxt/>
    </WindowsDesktop>
  </div>
</template>


<script>
import WindowsDesktop from "@/components/Windows95/Desktop/DesktopWindow";
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
.file-window  {
  background: white;
}
</style>


