<template>
  <div>
    <div :id="id" class="card-header internet-explorer-header">
      <span>Wisnet Explorer 96</span>
    </div>
    <nav class="navbar navbar-main navbar-expand-lg navbar-dark justify-content-between navbar-footer">
      <ul class="navbar-nav navbar-nav-hover flex-row align-items-center">
        <li class="nav-item"><a href="index.html" role="button" class="nav-link"><span class="nav-link-inner-text">📺 Start</span></a></li>
        <li class="nav-item"><a href="docs/introduction.html" role="button" class="nav-link"><span class="nav-link-inner-text">📕 Docs</span></a></li>
        <li class="nav-item"><a href="login.html" role="button" class="nav-link"><span class="nav-link-inner-text">Login</span></a></li>
        <li class="nav-item"><a href="register.html" role="button" class="nav-link"><span class="nav-link-inner-text">Register</span></a></li>
      </ul>
      <div class="time text-center">11:41 am</div>
    </nav>
    <nav class="navbar navbar-expand-lg navbar-dark justify-content-between">
      <div class="form-group d-flex  align-items-center justify-content-between">
        <label for="default" class="mr-3">Address</label>
        <input id="default" type="text" class="form-control w-100" :value="currentRouteName">
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: "InternetExplorerHeader",
  props: {
    id:{
      type: String,
      required: false
    },
    address: {
      type: String,
      required: false
    }
  },
  computed: {
    currentRouteName() {


      return 'www.wisnet96.com' +this.$route.fullPath
      /*let path = this.$route.path;
      return window.location.origin + "/" + path*/
    }
  }
}
</script>

<style lang="scss" scoped>
.internet-explorer-header {
  font-family: "Windows 95", sans-serif;
  font-weight: bold;
}

.navbar {
  margin-bottom: 0;
}

.form-group {
  margin-bottom: 0;
  flex: auto;
}
</style>