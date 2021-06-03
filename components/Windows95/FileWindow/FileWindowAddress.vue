<template>
  <nav class="navbar navbar-expand-lg navbar-dark justify-content-between mb-0">
    <div class="form-group w-100 mb-0 d-flex align-items-center justify-content-between">
      <label for="default" class="mr-3 ml-2  d-flex flex-row align-items-center"><span class="mr-2 position-relative bottom-1 font-medium">🌎</span> Address</label>
      <input
          id="default"
          type="text"
          class="form-control w-100 not-allowed"
          disabled
          :value="'www.wisnet96.com'+this.$route.fullPath"
      >
    </div>
  </nav>
</template>

<script>
export default {
name: 'FileWindowAddress'
}
</script>

<style scoped lang="scss">
.not-allowed {cursor: not-allowed;}
</style>
