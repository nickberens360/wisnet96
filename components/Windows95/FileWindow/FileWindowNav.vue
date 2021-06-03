<template>
  <nav class="navbar navbar-main navbar-expand-lg navbar-dark justify-content-between navbar-footer">
    <ul class="navbar-nav navbar-nav-hover flex-row align-items-center">
      <li class="nav-item">
        <button class="btn" @click="$router.go(-1)">Back</button>
      </li>
      <li class="nav-item">
        <button class="btn" @click="$router.go(+1)">Forward</button>
      </li>
    </ul>
    <!--      <div class="time text-center"></div>-->
  </nav>
</template>

<script>
export default {
name: 'FileWindowNav'
}
</script>

<style scoped>

</style>