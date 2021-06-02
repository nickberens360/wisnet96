<template>
  <div>
    <div :id="id" class="card-header internet-explorer-header d-flex justify-content-between align-items-center">
      <span>Wisnet Explorer 96</span>
      <nuxt-link to="/" class="btn btn-sm btn-close p-2" aria-label="Close">
        <span class="position-relative font-weight-bold" aria-hidden="true">X</span>
      </nuxt-link>
    </div>
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
    <nav class="navbar navbar-expand-lg navbar-dark justify-content-between">
      <div class="form-group d-flex  align-items-center justify-content-between">
        <label for="default" class="mr-3 ml-2 d-flex flex-row align-items-center"><span class="mr-2 position-relative bottom-1 font-medium">🌎</span> Address</label>
        <input
            id="default"
            type="text"
            class="form-control w-100"
            :value="'www.wisnet96.com'+this.$route.fullPath"
        >
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: "InternetExplorerHeader",
  props: {
    id: {
      type: String,
      required: false
    },
    address: {
      type: String,
      required: false
    }
  },
  data(){
    return {
      foobar: null
    }
  },
  computed: {
    currentRouteDisplay() {
      return this.$route.fullPath
    }
  },
  /*methods: {
    submit(e){
      console.log(e);
      if (e.keyCode === 13) {
        this.$router.push('/page/portfolio/');
      }
    }
  }*/
  /*methods: {
    validateEmailAddress: function(e, path) {
      if (e.keyCode === 13) {
        this.$router.push({
          path: path
        })
      }
    },
  }*/
}
</script>

<style lang="scss" scoped>
.internet-explorer-header {
  font-family: "Windows 95", sans-serif;
  font-weight: bold;
  .btn-close   {
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      color: red;
      font-weight: bold;
    }
  }
}


.navbar {
  margin-bottom: 0;
}

.form-group {
  margin-bottom: 0;
  flex: auto;
}
</style>