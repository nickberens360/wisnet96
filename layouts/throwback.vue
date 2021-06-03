<template>
  <div>
    <DesktopWindow>
      {{ slug }}
      <nuxt/>
    </DesktopWindow>
  </div>
</template>


<script>
import DesktopWindow from "@/components/Windows95/Desktop/DesktopWindow";

export default {
  components: {
    DesktopWindow,
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


