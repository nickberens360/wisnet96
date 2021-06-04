<template>
  <nav class="navbar navbar-main navbar-expand-lg navbar-dark justify-content-between navbar-footer">
    <ul class="navbar-nav navbar-nav-hover flex-row align-items-center">
      <li class="nav-item">
        <button class="btn" @click="$router.go(-1)">&#9664</button>
      </li>
      <li class="nav-item">
        <button class="btn" @click="$router.go(+1)">&#9654;</button>
      </li>
    </ul>
    <div class="d-flex align-items-center">
      <span class="font-small mr-2">Share:</span>
      <a href="#" class="mr-2"><img src="/social/facebook.png" alt=""></a>
      <a href="#" class="mr-2"><img src="/social/twitter.png" alt=""></a>
      <a href="#" class="mr-2"><img src="/social/linkedin.png" alt=""></a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'FileWindowNav'
}
</script>

<style scoped>

</style>